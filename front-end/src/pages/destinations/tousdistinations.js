import React from 'react';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';

export default function TousDestinations() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tous distinations</title>
            </Head>
            <Navbar />
            <div className="relative rounded-lg overflow-hidden">
                
            <div className="w-[80%] ml-[10%] relative">
                    <img
                        src="../assets/images/dest.png"
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
                                Etudes à l'Etranger
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 w-[90%] md:w-[80%] mx-auto mt-4 md:mt-6">
                    <a href="/" className="hover:underline">Accueil</a>
                    <span>/</span>
                    <a href="#" className="hover:underline">Enseignement Superieur</a>
                    <span>/</span>
                    <a href="#" className="hover:underline">Etudes Supérieures à l'étranger</a>
                    <span>/</span>
                    <a href="#" className="text-red-500 hover:underline">Toutes les destinations</a>
                </div>

                <div className="text-center mt-6">
                    <h1 className="text-3xl md:text-4xl">Toutes les destinations</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] md:w-[80%] mx-auto mt-6 mb-6">
                    {[
                        { src: "../assets/images/allemagne.png", alt: "Allemagne", label: "Allemagne" },
                        { src: "../assets/images/canada2.png", alt: "Canada", label: "Canada" },
                        { src: "../assets/images/france2.png", alt: "France", label: "France" },
                        { src: "../assets/images/japon.png", alt: "Japon", label: "Japon", link: "/destinations/optionspays" },
                        { src: "../assets/images/italie.png", alt: "Italie", label: "Italie" },
                        { src: "../assets/images/portugal.png", alt: "Portugal", label: "Portugal" },
                        { src: "../assets/images/russie.png", alt: "Russie", label: "Russie" },
                        { src: "../assets/images/malaysia.png", alt: "Malaysie", label: "Malaysie" },
                        { src: "../assets/images/taiwan.png", alt: "Taiwan", label: "Taiwan" },
                        { src: "../assets/images/suède.png", alt: "Suède", label: "Suède" },
                        { src: "../assets/images/vietnam.png", alt: "Vietnam", label: "Vietnam" },
                        { src: "../assets/images/singapour.png", alt: "Singapour", label: "Singapour" },
                        { src: "../assets/images/gréce.png", alt: "Grèce", label: "Grèce" },
                        { src: "../assets/images/pologne.png", alt: "Pologne", label: "Pologne" },
                        { src: "../assets/images/norvége.png", alt: "Norvège", label: "Norvège" },
                        { src: "../assets/images/malte.png", alt: "Malte", label: "Malte" },
                        { src: "../assets/images/danemark.png", alt: "Danemark", label: "Danemark" },
                        { src: "../assets/images/brésil.png", alt: "Brésil", label: "Brésil" },
                    ].map((destination, index) => (
                        <div key={index} className="relative">
                            <a href={destination.link || '#'}>
                                <img
                                    src={destination.src}
                                    alt={destination.alt}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                    <span className="text-white text-lg font-bold">{destination.label}</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <Footer />
            </div>
        </>
    );
}
