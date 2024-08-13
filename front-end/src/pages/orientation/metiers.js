import React from 'react';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
export default function metiers() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Métiers</title>
            </Head>
            <Navbar />
            {
            <div class="relative rounded-lg overflow-hidden">
                
                <div className="w-[80%] ml-[10%] relative">
                    <img
                        src="../assets/images/metiers1.png"
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
                                Métiers
                            </div>
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
                
                <div class="text-center mt-[5%]">
                  <h1 style={{fontSize: '3.5rem'}}>Tous les métiers</h1>
                </div>
                <div class="p-4 bg-[#F52C2C] rounded-2xl w-[70%] ml-[15%] mt-[5%]  mb-[10%]">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/education.png"
                            alt="Education Et Enseignement"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Education Et Enseignement</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                            <a href='/orientation/infometier'>
                                <img
                                    src="../assets/images/medcine.png"
                                    alt="Médecine Et Soins Infirmiers"
                                    class="w-full h-full object-cover"
                                    crossorigin="anonymous"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span class="text-white font-bold text-center">Médecine Et Soins Infirmiers</span>
                                </div>
                            </a>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/travaux.png"
                            alt="Travaux Publics"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Travaux Publics</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/press.png"
                            alt="La Presse"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">La Presse</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/juridique.png"
                            alt="Médecine Et Soins Infirmiers"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Médecine Et Soins Infirmiers</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/securite.png"
                            alt="Sécurité Nationale"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Sécurité Nationale</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/tourisme.png"
                            alt="Tourisme Et Hôtellerie"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Tourisme Et Hôtellerie</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/agriculture.png"
                            alt="Agriculture Et Vétérinaire"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Agriculture Et Vétérinaire</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/informatique.png"
                            alt="Informatique Et Communications"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Informatique Et Communications</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/tissu.png"
                            alt="Tissu Et Vetements"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Tissu Et Vetements</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/commerce.png"
                            alt="Commerce"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Commerce</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/restaurant.png"
                            alt="Restaurant"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Restaurant</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/industrie.png"
                            alt="Industrie Chimique Et Pharmaceutique"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Industrie Chimique Et Pharmaceutique</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/comptabilite.png"
                            alt="Comptabilité Et Gestion"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Comptabilité Et Gestion</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/electricite.png"
                            alt="Électricité Et Électronique"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Électricité Et Électronique</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/rasage.png"
                            alt="Rasage Et Beauté"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Rasage Et Beauté</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/assurance.png"
                            alt="Assurances"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Assurances</span>
                        </div>
                        </div>
                        <div class="relative overflow-hidden">
                        <img
                            src="../assets/images/mecanique.png"
                            alt="Mécanique"
                            class="w-full h-full object-cover"
                            crossorigin="anonymous"
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span class="text-white font-bold text-center">Mécanique</span>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
            }
        </>
    );
}