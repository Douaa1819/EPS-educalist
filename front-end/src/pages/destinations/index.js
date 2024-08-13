import React, { useState } from 'react';
import '@/app/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
import OptionsComponent from '@/app/components/OptionsComponent';

export default function Index() {
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilter = () => {
    setIsFiltered(true);
  };

  const handleReset = () => {
    setIsFiltered(false);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Destinations</title>
      </Head>
      <Navbar />
      <div className="relative rounded-lg overflow-hidden">
        <div className="w-[80%] ml-[10%] relative">
          <img
            src="assets/images/dest.png"
            alt="Enseignement superieur"
            className="w-full h-auto object-cover shadow-b border-solid rounded-b-[50px] overflow-hidden"
            style={{ filter: 'drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.2)) brightness(0.5)' }}
          />
          <div className="absolute inset-0 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '50%' }}>
            <div className="w-full h-20 outline-solid outline-5 outline-[#d21e2b] outline-offset-[-5px] rounded-b-[50px] bg-[#d9d9d900] flex items-center justify-center">
              <div
                className="text-center text-white text-2xl sm:text-4xl font-semibold"
                style={{
                  fontFamily: 'Krona One, system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', \'Liberation Sans\', sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Etudes à l'etranger
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 w-[80%] ml-[10%] mt-[3%] ">
          <a href="/" className="hover:underline">Accueil</a>
          <span>/</span>
          <a href="#" className="hover:underline">Enseignement Superieur</a>
          <span>/</span>
          <a href="#" className="text-red-500 hover:underline">Etudes Supérieures à l'étranger</a>
        </div>

        {/* Options Component */}
        <OptionsComponent onFilter={handleFilter} onReset={handleReset} />

        {!isFiltered && (
          <>
            <div className="text-center mt-[5%] ">
              <h1 style={{ fontSize: '3.5rem' }}>Cursus international</h1>
            </div>
            <div className="bg-[#F52C2C] p-6 rounded-2xl w-full md:w-[70%] mx-auto mt-10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="relative col-span-2 md:col-span-3 row-span-1">
                  <img
                    src="assets/images/Australia.png"
                    alt="Australie"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg transition hover:bg-opacity-75">
                    <span className="text-2xl md:text-3xl font-bold">Australie</span>
                  </div>
                </div>
                <div className="relative col-span-1 row-span-1">
                  <img
                    src="assets/images/india.png"
                    alt="India"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg transition hover:bg-opacity-75">
                    <span className="text-2xl md:text-3xl font-bold">India</span>
                  </div>
                </div>
                <div className="relative col-span-1 row-span-1">
                  <img
                    src="assets/images/china.png"
                    alt="Chine"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg transition hover:bg-opacity-75">
                    <span className="text-2xl md:text-3xl font-bold">Chine</span>
                  </div>
                </div>
                <div className="relative col-span-2 md:col-span-1 row-span-1">
                  <img
                    src="assets/images/china.png"
                    alt="UK"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg transition hover:bg-opacity-75">
                    <span className="text-2xl md:text-3xl font-bold">France</span>
                  </div>
                </div>
                <div className="relative col-span-2 md:col-span-3 row-span-1">
                  <img
                    src="assets/images/royaume.png"
                    alt="Royaume Uni"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4 rounded-lg transition hover:bg-opacity-75">
                    <span className="text-2xl md:text-3xl font-bold">Royaume Uni</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5 mb-5">
              <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-800">
                <a href='/destinations/tousdistinations'>VOIR TOUS LES DESTINATIONS</a>
              </button>
            </div>

          </>
        )}
        <Footer />
      </div>
    </>
  );
}
