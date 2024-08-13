"use client";
import { useState, useEffect } from 'react';
import NavMenu from './components/Navbar/NavMenu';
import SignupForm from '@/app/components/SignupForm';
import Popup from '../app/components/popup/Popup'; // Ensure correct path
import Link from 'next/link'; // Add this line

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);

  const handleScroll = () => {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    if (scrolled >= 0.4) {
      setShowPopup(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/popular-posts')
      .then(response => response.json())
      .then(data => setNewsArticles(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="bg-white mt-[-5%]">
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* Hero section */}
      <div className="w-[80vw] mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between ml-[4%] mb-[-2%]">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <p className="text-[#F52C2C] font-bold mb-4">LES MEILLEURES DESTINATIONS POUR VOTRE RÊVE</p>
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4">
              Où les <span className="text-[#F52C2C]">Rêves</span> Deviennent <span className="text-[#F52C2C]">Réalité</span> :<br />
              Explorez Votre Avenir Étudiant!
            </h1>
            <p className="text-zinc-700 mb-6">
              Découvrez une richesse d'Opportunités Académiques:<br />
              Votre Plateforme Enrichissante pour l'Éducation et l'Épanouissement Étudiant!
            </p>
            <button className="bg-[#F52C2C] text-white py-3 px-6 rounded-full">Plus</button>
          </div>
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full ">
              <img
                src="/assets/images/image.png"
                alt="Student with books and landmarks"
                className="rounded-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      <NavMenu />
      <div className="max-w-7xl mx-auto my-8 p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            {/* Header */}
            <div className="flex justify-between items-center border-b-2 border-[#FFB507] pb-4 mb-6">
              <h1 className="text-3xl font-bold">
                <span className="text-[#FFB507]">ACTUALITÉ</span> & INFORMATIONS
              </h1>
              <a href="/news" className="bg-[#FFB507] text-white px-4 py-2 rounded-full hover:bg-[#E5A300] transition duration-300">
                Voir Toutes les Actualités
              </a>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-out cursor-pointer">
                    {article.primary_image && (
                      <img
                        src={`http://127.0.0.1:8000/storage/${article.primary_image}`}
                        alt={article.title}
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                      />
                    )}
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h2>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-red-500 transition-all duration-300 ease-out">
                      Lire la suite
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section (hidden on mobile) */}
          <div className="w-full md:w-1/4 bg-[#F52C2C] p-6 text-white rounded-lg shadow-md hidden md:block">
            <h2 className="text-xl font-bold mb-4">Des Videos Pour Vous</h2>
            <p className="mb-6">Découvrez nos dernières vidéos informatives</p>
            <div className="space-y-6">
              <img src="https://placehold.co/600x400" alt="YouTube Ad" className="w-full rounded-lg shadow-sm" />
              <img src="https://placehold.co/600x400" alt="YouTube Ad" className="w-full rounded-lg shadow-sm" />
            </div>
          </div>
        </div>
      </div>


      {/* Higher education section */}
      <div className="w-[80vw] mx-auto -mt-3">
        <div className="mx-auto p-4 flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 p-4 bg-white rounded-lg md:mb-0 md:mr-4">
            {/* Header */}
            <div className="border border-[#F52C2C] p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">
                <span className="text-[#F52C2C]">ENSEIGNEMENT</span> SUPERIEUR
              </h1>
              <a href='/etudemaroc/etudemaroc'>
                <button className="border border-[#F52C2C] text-[#F52C2C] px-4 py-2 rounded hover:bg-[#F52C2C] hover:text-white">
                  Voir Toute les Enseignements
                </button>
              </a>
            </div>

            {/* Content */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Bourses étudiantes au Maroc" className="w-full h-auto mb-2" />
                <p className="text-center">Bourses étudiantes au Maroc</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Universités au Maroc" className="w-full h-auto mb-2" />
                <p className="text-center">Universités au Maroc</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Les classes préparatoires (CPGE) : dossier complet" className="w-full h-auto mb-2" />
                <p className="text-center">Les classes préparatoires (CPGE) : dossier complet</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Dans les locaux de l'université" className="w-full h-auto mb-2" />
                <p className="text-center">Dans les locaux de l'université</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Guide de l'élève lycéen vers l'université marocaine" className="w-full h-auto mb-2" />
                <p className="text-center">Guide de l'élève lycéen vers l'université marocaine</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Formation initiale vs formation continue" className="w-full h-auto mb-2" />
                <p className="text-center">Formation initiale vs formation continue</p>
              </div>
            </div>
          </div>

          {/* Right Section (hidden on mobile) */}
          <div className="w-full md:w-1/4 bg-[#F52C2C] mt-4 p-4 text-white rounded-lg shadow-md hidden md:block">
            <h2 className="text-lg font-bold">Des Videos Pour Vous</h2>
            <p className="mt-2">Description</p>
            <img src="https://placehold.co/600x400" alt="YouTube Ad" className="mt-4" />
            <img src="https://placehold.co/600x400" alt="YouTube Ad" className="mt-4" />
          </div>
        </div>
      </div>

      {/* Student Life section */}
      <div className="w-[80vw] mx-auto mt-3">
        <div className="mx-auto p-4 flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 p-4 bg-white rounded-lg md:mb-0 md:mr-4">
            {/* Header */}
            <div className="border border-[#2C6BF5] p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">
                <span className="text-[#2C6BF5]">VIE</span> ÉTUDIANTE
              </h1>
              <a href='/studentlife'>
                <button className="border border-[#2C6BF5] text-[#2C6BF5] px-4 py-2 rounded hover:bg-[#2C6BF5] hover:text-white">
                  Voir Tous les articles
                </button>
              </a>
            </div>

            {/* Content */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Association Étudiante à rejoindre" className="w-full h-auto mb-2" />
                <p className="text-center">Association Étudiante à rejoindre</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Participer à la vie associative" className="w-full h-auto mb-2" />
                <p className="text-center">Participer à la vie associative</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Les associations les plus actives" className="w-full h-auto mb-2" />
                <p className="text-center">Les associations les plus actives</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Où trouver des activités extra-scolaires" className="w-full h-auto mb-2" />
                <p className="text-center">Où trouver des activités extra-scolaires</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Club d'activités pour étudiants" className="w-full h-auto mb-2" />
                <p className="text-center">Club d'activités pour étudiants</p>
              </div>
              <div className="border border-zinc-300 p-2 rounded-lg hover:bg-gray-200 transition duration-300">
                <img src="https://placehold.co/150x100" alt="Activités sportives et récréatives" className="w-full h-auto mb-2" />
                <p className="text-center">Activités sportives et récréatives</p>
              </div>
            </div>
          </div>

          {/* Right Section (hidden on mobile) */}
          <div className="w-full md:w-1/4 bg-[#2C6BF5] mt-4 p-4 text-white rounded-lg shadow-md hidden md:block">
            <h2 className="text-lg font-bold">Des Videos Pour Vous</h2>
            <p className="mt-2">Description</p>
            <img src="https://placehold.co/600x400" alt="YouTube Ad" className="mt-4" />
            <img src="https://placehold.co/600x400" alt="YouTube Ad" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
