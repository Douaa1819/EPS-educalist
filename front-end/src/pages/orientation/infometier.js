import React from 'react';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
import Link from 'next/link';
export default function metiers() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Informations</title>
      </Head>
      <Navbar />
      {
        <div class="relative rounded-lg overflow-hidden">
          <div className="w-[80%] ml-[10%] relative">
            <img
              src="../assets/images/medcine2.png"
              alt="Enseignement superieur"
              className="w-full h-auto object-cover shadow-b border-solid rounded-b-[50px] overflow-hidden"
              style={{ filter: 'drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.2)) brightness(0.5)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{
                color: '#FFFFFF',
                fontSize: '3.5rem',
                whiteSpace: 'nowrap',
                fontFamily: 'Krona One, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
                className="font-semibold">
                Médecine Et Soins Infirmiers
              </div>
            </div>
          </div>

          <div class="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 w-[80%] ml-[10%] mt-[3%] ">
            <a href="/" class="hover:underline">Accueil</a>
            <span>/</span>
            <a href="#" class="hover:underline">orientation</a>
            <span>/</span>
            <a href="#" class="text-red-500 hover:underline">Métiers</a>
          </div>
          <div class="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-lg w-[70%] ml-[15%] mt-[5%] mb-[5%] ">
            <h2 class="text-xl font-bold mb-4">Médecine Et Soins Infirmiers</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">

              <a href="./metierDet" className="bg-white dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-red-500 text-white p-4">
                  <h3 className="text-center font-semibold">Médecine Et Soins Infirmiers</h3>
                  <div className="flex justify-center mt-4">
                    <div className="bg-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                      I
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">Médecine Et Soins Infirmiers</div>
              </a>


              <div class="bg-white dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden">
                <div class="bg-red-500 text-white p-4">
                  <h3 class="text-center font-semibold">Médecine Et Soins Infirmiers</h3>
                  <div class="flex justify-center mt-4">
                    <div
                      class="bg-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      I
                    </div>
                  </div>
                </div>
                <div class="p-4 text-center">Médecine Et Soins Infirmiers</div>
              </div>

              <div class="bg-white dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden">
                <div class="bg-red-500 text-white p-4">
                  <h3 class="text-center font-semibold">Médecine Et Soins Infirmiers</h3>
                  <div class="flex justify-center mt-4">
                    <div
                      class="bg-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      I
                    </div>
                  </div>
                </div>
                <div class="p-4 text-center">Médecine Et Soins Infirmiers</div>
              </div>

              <div class="bg-white dark:bg-zinc-700 rounded-lg shadow-lg overflow-hidden">
                <div class="bg-red-500 text-white p-4">
                  <h3 class="text-center font-semibold">Médecine Et Soins Infirmiers</h3>
                  <div class="flex justify-center mt-4">
                    <div
                      class="bg-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      I
                    </div>
                  </div>
                </div>
                <div class="p-4 text-center">Médecine Et Soins Infirmiers</div>
              </div>

            </div>
          </div>

          <Footer />
        </div>

      }
    </>
  );
}