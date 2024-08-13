
import React from 'react';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
export default function EtudeMaroc() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Etude Au Maroc</title>
            </Head>
            <Navbar />
            {
                <div className="relative rounded-lg overflow-hidden">
                    <div className="w-[80%] ml-[10%] relative">
                        <img
                            src="../assets/images/etudemaroc.png"
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
                                    Etudes Au Maroc
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 w-4/5 mx-auto mt-3">
                        <a href="/" className="hover:underline">Accueil</a>
                        <span>/</span>
                        <a href="#" className="hover:underline">Enseignement Superieur</a>
                        <span>/</span>
                        <a href="#" className="text-red-500 hover:underline">Etudes Supérieures à l'étranger</a>
                    </div> */}
    
                    {/* Filter buttons */}
                    <div className="flex justify-center w-4/5 mx-auto mt-6 space-x-4">
                        <button className="flex items-center justify-between border border-black rounded-full px-4 py-2">
                            Niveau
                            <span className="ml-2">&#9660;</span>
                        </button>
                        <button className="flex items-center justify-between border border-black rounded-full px-4 py-2">
                            ville
                            <span className="ml-2">&#9660;</span>
                        </button>
                        <button className="flex items-center justify-between border border-black rounded-full px-4 py-2">
                            Specialité
                            <span className="ml-2">&#9660;</span>
                        </button>
                        <button className="bg-[#F52C2C] text-white rounded-full px-4 py-2">
                            Filter
                        </button>
                    </div>
                    <div class="text-center mt-[10%]">
                        <h1 style={{fontSize: '3.5rem'}}>ETUDES SUPERIEUR AU MAROC</h1>
                    </div>
                    <div class="flex flex-col md:flex-row items-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md w-[90%] ml-[5%] mt-[5%]  mb-[10%]">
                        <div class="md:w-1/2 p-4">
                            <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                            Les Classes Préparatoires (CPGE) : Dossier Complet
                            </h2>
                            <p class="mt-2 text-zinc-700 dark:text-zinc-300">
                            <span class="font-bold">CPGE</span> : Les classes préparatoires (CPGE) au Maroc sont réparties
                            en 2 principales pôles à savoir : Un pôle scientifique et technologique. Le pôle économique et
                            commercial. Choisissez des nouvelles.
                            </p>
                            <button class="mt-4 bg-[#F52C2C] text-white py-2 px-4 rounded-lg">Voir Plus</button>
                        </div>
                        <div class="md:w-1/2 flex justify-center p-4 relative">
                            <img src="../assets/images/cpeg.png" alt="Illustration of a person working on a laptop" class="rounded-lg w-[70%]" crossorigin="anonymous"/>
                            <div class="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white rounded-full p-2 cursor-pointer">
                                <span>◀</span>
                            </div>
                            <div class="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black text-white rounded-full p-2 cursor-pointer">
                                <span>▶</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 w-[80%] ml-[10%] mt-[5%]  mb-[10%]">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div class="bg-zinc-100 text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-white text-red-500 p-2 rounded-full w-[15%] h-[25%]">
                                        <img src="../assets/images/icon1.png" alt="icon" />
                                    </div>
                                    <h3 class="ml-2 font-bold">Le Système LMD Au France</h3>
                                </div>
                                <p>Le système LMD (Licence-Master-Doctorat) est un système de formation universitaire...</p>
                            </div>
                            <div class="bg-zinc-100 text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-black text-white p-2 rounded-full  w-[15%] h-[25%]">
                                        <img src="../assets/images/icon2.png" alt="icon" />
                                    </div>
                                    <h3 class="ml-2 font-bold">Licence Au Maroc</h3>
                                </div>
                                <p>
                                    Retrouvez toutes les informations sur la licence au Maroc, les conditions d'admission...
                                </p>
                            </div>
                            <div class="bg-zinc-100 text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg">
                                <div class="flex items-center mb-2">
                                    <div class="bg-black text-white p-2 rounded-full w-[15%] h-[25%]">
                                        <img src="../assets/images/icon3.png" alt="icon" />
                                    </div>
                                    <h3 class="ml-2 font-bold">Bourse Étudiantes Au France</h3>
                                </div>
                                <p>Découvrez les différentes bourses disponibles pour les étudiants au France, comment...</p>
                            </div>
                        </div>
                        <div class="text-center mb-[15%]">
                            <button class="bg-[#F52C2C] text-white py-2 px-4 rounded-lg">Plus D'Information !</button>
                        </div>

                        <div class="space-y-4 w-[70%] ml-[15%] mt-[5%]  mb-[10%]">
                            <div class="bg-white text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg flex">
                                <img class="w-24 h-24 rounded-full mr-4" src="../assets/images/girl.png" alt="profile" />
                                <div>
                                    <h4 class="font-bold">Licence - Master - Doctorat: Ce que vous devez savoir</h4>
                                    <p>Découvrez le système LMD et les opportunités qu'il offre aux étudiants...</p>
                                </div>
                            </div>
                            <div class="bg-white text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg flex">
                                <img class="w-24 h-24 rounded-full mr-4" src="../assets/images/girl.png" alt="profile" />
                                <div>
                                    <h4 class="font-bold">Licence - Master - Doctorat: Ce que vous devez savoir</h4>
                                    <p>Découvrez le système LMD et les opportunités qu'il offre aux étudiants...</p>
                                </div>
                            </div>
                            <div class="bg-white text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg flex">
                                <img class="w-24 h-24 rounded-full mr-4" src="../assets/images/girl.png" alt="profile" />
                                <div>
                                    <h4 class="font-bold">Licence - Master - Doctorat: Ce que vous devez savoir</h4>
                                    <p>Découvrez le système LMD et les opportunités qu'il offre aux étudiants...</p>
                                </div>
                            </div>
                            <div class="bg-white text-black hover:bg-[#F52C2C] hover:text-white p-4 rounded-lg flex">
                                <img class="w-24 h-24 rounded-full mr-4" src="../assets/images/girl.png" alt="profile" />
                                <div>
                                    <h4 class="font-bold">Licence - Master - Doctorat: Ce que vous devez savoir</h4>
                                    <p>Découvrez le système LMD et les opportunités qu'il offre aux étudiants...</p>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-8">
                            <div class="inline-flex items-center space-x-2">
                                <button class="bg-[#F52C2C] text-white py-1 px-3 rounded-lg">&lt;</button>
                                <button class="bg-[#F52C2C] text-white py-1 px-3 rounded-lg">1</button>
                                <button class="bg-[#F52C2C] text-white py-1 px-3 rounded-lg">2</button>
                                <button class="bg-[#F52C2C] text-white py-1 px-3 rounded-lg">3</button>
                                <button class="bg-[#F52C2C] text-white py-1 px-3 rounded-lg">&gt;</button>
                            </div>
                        </div>

                        <div class="mt-8">
                            <img class="w-full rounded-lg" src="https://placehold.co/600x200" alt="bottom image" />
                        </div>
                    </div>


                    <Footer />
                </div>
            }
        </>
);
}