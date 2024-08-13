// components/Navbar/NavMenu.js
"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
const navItems = [
  { label: 'Actualité', icon: '🕒', link: '/news' },
  { label: 'E. Maroc', icon: '🛠', link: '/etudemaroc/etudemaroc' },
  { label: 'E. à l\'Étranger', icon: '✈️', link: '/destinations' },
  { label: 'Vie Étudiante', icon: '🏫', link: '/vietudiente' },
  { label: 'Métiers', icon: '📂', link: '/orientation/metiers' },
];

export default function NavMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to check if viewport is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    // Add any logic here to handle item click (e.g., navigate to a new page)
  };

  return (
    <div className="relative w-full flex justify-center items-center my-8">
      <div ref={containerRef} className={`flex flex-wrap w-full max-w-3xl space-x-4 px-4 justify-center items-center`}>
        {navItems.map((item, index) => (
          
          
          <div
            key={index}
            className={`flex items-center p-4 rounded-lg text-base shadow-md transition-transform duration-500 cursor-pointer ${
              index === activeIndex ? 'bg-[#F52C2C] text-white scale-105' : 'bg-white text-[#F52C2C] opacity-70'
            } ${isMobile ? 'w-full mb-2' : 'w-auto'}`}
            style={{ maxWidth: isMobile ? '100%' : 'none' }}
            onClick={() => handleItemClick(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(activeIndex)}
          >
            <Link href={item.link || '/'} key={index}>
            <span className="text-2xl">{item.icon}</span>
            <span className={`ml-3 ${isMobile ? 'hidden' : 'block'}`}>{item.label}</span>
            <span className={`ml-3 ${isMobile ? 'block' : 'hidden'}`}>{item.label}</span>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
