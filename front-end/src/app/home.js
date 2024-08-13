// page.js
"use client";
import { useState, useEffect } from 'react';
import NavMenu from './components/Navbar/NavMenu';
import Head from 'next/head';
import withAuth from '../utils/withAuth';
import UserNavbar from "../app/components/users/UserNavbar";

 function Home() {
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
  
      <div className="bg-white mt-[-5%]">
        {/* Navbar */}
        <UserNavbar />
        
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
      {/* Actuality section */}
      <div className="w-[80vw] mx-auto  h-auto ">
        <div className=" mx-auto p-4 flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="flex-1 p-4 bg-white rounded-lg mb-4 md:mb-0 md:mr-4">
              {/* Header */}
              <div className="border border-[#FFB507] p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                  <span className="text-[#FFB507]">ACTUALITÉ</span> & INFORMATIONS
                </h1>
                <a href="/news" className="border border-[#FFB507] text-[#FFB507] px-4 py-2 rounded hover:bg-[#FFB507] hover:text-white">
                  Voir Toutes les Actualités
                </a>
              </div>

            {/* Content */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition duration-300">
                <img src="assets/images/comptabilite.png" alt="Card Image" className="w-full" />
                <div className="p-4">
                  <h2 className="text-center">Titre d'actualité</h2>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition duration-300">
                <img src="assets/images/comptabilite.png" alt="Card Image" className="w-full" />
                <div className="p-4">
                  <h2 className="text-center">Titre d'actualité</h2>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200 transition duration-300">
                <img src="assets/images/comptabilite.png" alt="Card Image" className="w-full" />
                <div className="p-4">
                  <h2 className="text-center">Titre d'actualité</h2>
                </div>
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

          {/* Right Section */}
          <div className="w-full md:w-1/4 bg-[#F52C2C] mt-4 p-4 text-white rounded-lg shadow-md hidden md:block">
            <h2 className="text-lg font-bold">Des Videos Pour Vous</h2>
            <p className="mt-2">Description</p>
            <img src="https://placehold.co/500x500" alt="YouTube Ad" className="mt-4" />
            <img src="https://placehold.co/500x500" alt="YouTube Ad" className="mt-4" />
          </div>
        </div>
      </div>

      {/* Orientation section */}
      <div className="w-[80vw] mx-auto -mt-3">
        <div className="mx-auto p-4 flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 p-4 bg-white rounded-lg mb-4 md:mb-0 md:mr-4">
            {/* Header */}
            <div className="border border-green-500 p-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">
                <span className="text-green-500">ORIENTATION</span>
              </h1>
              <a href='/orientation/metiers'>
                <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white">
                  Voir Tout Orientation
                </button>
              </a>
            </div>

            {/* Content */}
            <div className="flex mb-4 mt-8">
              <img src="https://placehold.co/150x100" alt="Graduation" className="w-1/3 h-auto mr-4 rounded-lg " />
              <div>
                <h2 className="text-xl font-bold">Titre</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            {/* Mini Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-200 p-4 rounded hover:bg-gray-500 transition duration-300">Mini Card 1</div>
              <div className="bg-zinc-200 p-4 rounded hover:bg-gray-500 transition duration-300">Mini Card 2</div>
              <div className="bg-zinc-200 p-4 rounded hover:bg-gray-500 transition duration-300">Mini Card 3</div>
              <div className="bg-zinc-200 p-4 rounded hover:bg-gray-500 transition duration-300">Mini Card 4</div>
              <div className="bg-zinc-200 p-4 rounded hover:bg-gray-500 transition duration-300">Mini Card 5</div>
              <div className="bg-zinc-200 p-4 rounded hover:bg-gray-500 transition duration-300">Mini Card 6</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/4 mt-4 p-4 text-white rounded-lg hidden md:block">
           
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto p-6">
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-8 border border-zinc-300 dark:border-zinc-700">
          <h2 className="text-2xl font-bold text-center mb-4">Étudier à l'étranger</h2>
          <div className="h-1 w-16 bg-[#F52C2C] mx-auto mb-6"></div>
          <p className="text-zinc-700 dark:text-zinc-300 text-center">
            EPS Éducation est une agence de conseil en éducation offrant des conseils professionnels et de l’aide aux étudiants désireux d’étudier à l’étranger.
          </p>
        </div>
        <div className="mt-8">
          <img className="w-full h-auto rounded-lg shadow-md" src="https://placehold.co/1200x300" alt="Study Abroad Image" />
        </div>
      </div>
    </div>
    
    </>
  );
}
export default Home;