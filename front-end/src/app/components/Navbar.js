
import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="w-full mb-4 bg-neutral-800 border-b border-stone-500 border-opacity-30 p-3 flex flex-col items-center">
      <div className="flex justify-between w-full max-w-6xl items-center">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/945fae78ad61d78b4d1f1e2e19b1bf567c7d215411ded27d4e5635137769f6a8?apiKey=93bb9bcd81d443648999334442ead41e&"
            className="shrink-0 max-w-full aspect-[1.72] w-[100px]"
            alt="Educaliste Logo"
          />
          <div className="mt-1 text-sm text-white tracking-[11.5px] text-center">
            Educaliste
          </div>
        </div>
        <Link  href="/login" className="bg-red-600 border border-red-600 text-white px-4 py-2 rounded-[31px] cursor-pointer">
          Se connecter
        </ Link> 


      </div>
    </div>
  );
};

export default Navbar;
