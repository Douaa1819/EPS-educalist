import React from 'react';
import '@/app/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';

export default function Metiers() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vie Etudient</title>
            </Head>
            <Navbar />
            <div className="bg-gray-100">
                <div className="bg-zinc-100 dark:bg-zinc-900">
                    
                <div className="w-[80%] ml-[10%] mb-[10%] relative">
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
                                Vie Etudiante
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="container mx-auto p-4 w-[80%] ml-[10%] mb-[10%]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <h2 className="text-xl font-bold mb-2">Les Classes Préparatoires (CPGE) : Dossier Complet</h2>
                                <p className="mb-4">Découvrez les CPGE et leur rôle dans la préparation des étudiants...</p>
                                <button className="bg-[#F52C2C] text-white px-4 py-2 rounded">Voir Plus</button>
                            </div>
                            <div className="md:col-span-1">
                                <img className="w-full h-48 object-cover rounded" src="https://placehold.co/400x300" alt="Article Image" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow">
                                <img className="w-full h-32 object-cover rounded mb-2" src="https://placehold.co/400x300" alt="Card Image" />
                                <p>Classement 2024-2025 des Meilleures Villes Étudiantes...</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow">
                                <img className="w-full h-32 object-cover rounded mb-2" src="https://placehold.co/400x300" alt="Card Image" />
                                <p>“C’était Dingue” : À Bord Du Belen, Ces Étudiants Ont Apporté La Flamme Olympique...</p>
                            </div>
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded shadow">
                                <img className="w-full h-32 object-cover rounded mb-2" src="https://placehold.co/400x300" alt="Card Image" />
                                <p>Sarah, Doyenne des Finalistes : “J’aime Ce Que Je Fais”</p>
                            </div>
                        </div>

                        <div class="bg-red-500 p-6 rounded-lg text-center">
                            <h2 class="text-2xl font-bold text-white mb-2">Profiter de nos vedios !</h2>
                            <p class="text-white mb-4">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                                been...
                            </p>
                            <div class="relative bg-red-700 rounded-lg overflow-hidden max-w-md mx-auto">
                                <img
                                src="../assets/images/video.png"
                                alt="Video Thumbnail"
                                class="w-full h-auto object-cover"
                                />
                                <div class="absolute inset-0 flex items-center justify-between p-4">
                                    <button class="bg-white text-red-700 rounded-full p-2">
                                        <svg aria-hidden="true" alt="play" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6 4l10 6-10 6V4z" />
                                        </svg>
                                    </button>
                                    <button class="bg-white text-red-700 rounded-full p-2">
                                        <svg
                                        aria-hidden="true"
                                        alt="arrow-right"
                                        class="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        >
                                        <path d="M10 3l7 7-7 7-1.5-1.5L13 10H3V8h10L8.5 4.5 10 3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded mt-8">
                            <h2 className="text-xl font-bold mb-4">La Vie Etudiante dans l'Enseignement Supérieur : Un Équilibre entre Études et Vie Sociale</h2>
                            <p className="mb-4">La vie étudiante dans l'enseignement supérieur est une période unique et marquante...</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Bibliothèques universitaires : Une mine d'informations pour les recherches.</li>
                                <li>Groupes d'études : Collaborer avec d'autres étudiants pour approfondir les connaissances.</li>
                                <li>Tuteurs et professeurs : Ne pas hésiter à demander de l'aide ou des éclaircissements.</li>
                            </ul>
                            <p>Avantages des activités extra-scolaires :</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Développement de compétences sociales : Apprendre à travailler en équipe, à communiquer efficacement et à gérer les conflits.</li>
                                <li>Équilibre vie étudiante : Offrent une pause bienvenue dans les études et réduisent le stress.</li>
                                <li>Formation de réseaux : Rencontrer des personnes partageant les mêmes intérêts et élargir son cercle social.</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-4 rounded mt-8">
                            <h2 className="text-xl font-bold mb-4">Contenus supplémentaires</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-16 bg-[#F52C2C] mr-2"></div>
                                    <p>La réussite académique reste au cœur de la vie étudiante...</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-16 bg-[#F52C2C] mr-2"></div>
                                    <p>La réussite académique reste au cœur de la vie étudiante...</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-16 bg-[#F52C2C] mr-2"></div>
                                    <p>La réussite académique reste au cœur de la vie étudiante...</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-16 bg-[#F52C2C] mr-2"></div>
                                    <p>La réussite académique reste au cœur de la vie étudiante...</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-8">
                            <button className="px-2 py-1 mx-1 bg-[#F52C2C] text-white rounded">1</button>
                            <button className="px-2 py-1 mx-1 bg-zinc-300 text-zinc-700 rounded">2</button>
                            <button className="px-2 py-1 mx-1 bg-zinc-300 text-zinc-700 rounded">...</button>
                            <button className="px-2 py-1 mx-1 bg-zinc-300 text-zinc-700 rounded">&gt;</button>
                        </div>

                        <div className="mt-8">
                            <img className="w-full h-48 object-cover rounded" src="https://placehold.co/1920x256" alt="Footer Image" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
