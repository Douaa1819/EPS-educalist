import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
export default function tousdistinations() {
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
                        src="../assets/images/japon3.png"
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
                        Japon
                        </div>
                    </div>
                </div>

                <div class="bg-black text-white py-2 px-4 rounded-full flex items-center space-x-2 w-[80%] ml-[10%] mt-[3%] ">
                    <a href="/" class="hover:underline">Accueil</a>
                    <span>/</span>
                    <a href="#" class="hover:underline">Enseignement Superieur</a>
                    <span>/</span>
                    <a href="#" class="hover:underline">Etudes Supérieures à l'étranger</a>
                    <span>/</span>
                    {/* <a href="#" class="text-red-500 hover:underline">Toutes les distinations</a> */}
                </div>

                <div class="container mx-auto p-4 w-[80%] ml-[10%] mt-[5%]">
                    <div class="flex flex-col lg:flex-row gap-4">
                        <div class="flex-1 space-y-4">
                        <div class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4">
                            <div class="flex items-center">
                                <div class="w-1 h-12 bg-red-600 mr-2"></div>
                                <div>
                                    <h1 class="text-2xl font-bold">ÉTUDIER AU JAPON</h1>
                                    <div class="w-full h-1 bg-red-300 mt-1"></div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-start gap-4 mb-4">
                                <img
                                src="../assets/images/japon4.png"
                                alt="Japan city lights"
                                class="w-full md:w-1/4 rounded-lg"
                                />
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                FAIRE UNE FORMATION AU JAPON PRÉSENTE PLUSIEURS AVANTAGES DISTINCTS, QUI PEUVENT VARIER EN
                                FONCTION DU DOMAINE D’ÉTUDE, DES OBJECTIFS PROFESSIONNELS ET DES INTÉRÊTS PERSONNELS. VOICI
                                QUELQUES RAISONS POUR LESQUELLES SUIVRE UNE FORMATION AU JAPON PEUT ÊTRE BÉNÉFIQUE :
                                </p>
                            </div>
                            <div class="space-y-4">
                                <div>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    LE JAPON EST RÉPUTÉ POUR SON SYSTÈME ÉDUCATIF DE HAUTE QUALITÉ ET SES AVANCÉES
                                    TECHNOLOGIQUES. LES UNIVERSITÉS JAPONAISES, TELLES QUE L'UNIVERSITÉ DE TOKYO, KYOTO
                                    UNIVERSITY ET OSAKA UNIVERSITY, FIGURENT PARMI LES MEILLEURES AU MONDE. LES ÉTUDIANTS
                                    PEUVENT BÉNÉFICIER DE PROGRAMMES ACADÉMIQUES RIGOUREUX ET D'INSTALLATIONS DE RECHERCHE DE
                                    POINTE, EN PARTICULIER DANS DES DOMAINES COMME L'INGÉNIERIE, LA ROBOTIQUE, LES TECHNOLOGIES
                                    DE L'INFORMATION ET LES SCIENCES.
                                </p>
                                </div>
                                <div>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    ÉTUDIER AU JAPON PEUT OFFRIR DES OPPORTUNITÉS PROFESSIONNELLES INTÉRESSANTES. LE PAYS ABRITE
                                    DE NOMBREUSES ENTREPRISES INTERNATIONALES ET DE GRANDES MULTINATIONALES, PARTICULIÈREMENT
                                    DANS LES SECTEURS DE L'ÉLECTRONIQUE, DE L'AUTOMOBILE, DES BIOTECHNOLOGIES ET DES SERVICES
                                    FINANCIERS. UNE FORMATION AU JAPON PEUT AINSI AMÉLIORER VOTRE EMPLOYABILITÉ ET VOUS OUVRIR
                                    DES PORTES SUR LE MARCHÉ DU TRAVAIL JAPONAIS ET INTERNATIONAL.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4">
                        <div class="flex items-center">
                            <div class="w-1 h-12 bg-red-600 mr-2"></div>
                            <div>
                                <h1 class="text-2xl font-bold">QUEL EST L'INTÉRÊT DE FAIRE UNE FORMATION AU JAPON ?</h1>
                                <div class="w-full h-1 bg-red-300 mt-1"></div>
                            </div>
                        </div>

                            <div class="flex flex-col md:flex-row items-start gap-4 mb-4">
                                <img
                                src="../assets/images/japon5.png"
                                alt="Japan city lights"
                                class="w-full md:w-1/4 rounded-lg"
                                />
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                FAIRE UNE FORMATION AU JAPON PRÉSENTE PLUSIEURS AVANTAGES DISTINCTS, QUI PEUVENT VARIER EN
                                FONCTION DU DOMAINE D’ÉTUDE, DES OBJECTIFS PROFESSIONNELS ET DES INTÉRÊTS PERSONNELS. VOICI
                                QUELQUES RAISONS POUR LESQUELLES SUIVRE UNE FORMATION AU JAPON PEUT ÊTRE BÉNÉFIQUE :
                                </p>
                            </div>
                            <div class="space-y-4">
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">
                                    1. EXCELLENCE ACADÉMIQUE ET TECHNOLOGIQUE
                                </h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    LE JAPON EST RÉPUTÉ POUR SON SYSTÈME ÉDUCATIF DE HAUTE QUALITÉ ET SES AVANCÉES
                                    TECHNOLOGIQUES. LES UNIVERSITÉS JAPONAISES, TELLES QUE L'UNIVERSITÉ DE TOKYO, KYOTO
                                    UNIVERSITY ET OSAKA UNIVERSITY, FIGURENT PARMI LES MEILLEURES AU MONDE. LES ÉTUDIANTS
                                    PEUVENT BÉNÉFICIER DE PROGRAMMES ACADÉMIQUES RIGOUREUX ET D'INSTALLATIONS DE RECHERCHE DE
                                    POINTE, EN PARTICULIER DANS DES DOMAINES COMME L'INGÉNIERIE, LA ROBOTIQUE, LES TECHNOLOGIES
                                    DE L'INFORMATION ET LES SCIENCES.
                                </p>
                                </div>
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">2. OPPORTUNITÉS DE CARRIÈRE</h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    ÉTUDIER AU JAPON PEUT OFFRIR DES OPPORTUNITÉS PROFESSIONNELLES INTÉRESSANTES. LE PAYS ABRITE
                                    DE NOMBREUSES ENTREPRISES INTERNATIONALES ET DE GRANDES MULTINATIONALES, PARTICULIÈREMENT
                                    DANS LES SECTEURS DE L'ÉLECTRONIQUE, DE L'AUTOMOBILE, DES BIOTECHNOLOGIES ET DES SERVICES
                                    FINANCIERS. UNE FORMATION AU JAPON PEUT AINSI AMÉLIORER VOTRE EMPLOYABILITÉ ET VOUS OUVRIR
                                    DES PORTES SUR LE MARCHÉ DU TRAVAIL JAPONAIS ET INTERNATIONAL.
                                </p>
                                </div>
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">3. DÉVELOPPEMENT PERSONNEL</h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    VIVRE À L'ÉTRANGER ET S'ADAPTER À UNE NOUVELLE CULTURE EST UNE EXPÉRIENCE ENRICHISSANTE QUI
                                    FAVORISE LE DÉVELOPPEMENT PERSONNEL. CELA PERMET DE DÉVELOPPER DES COMPÉTENCES TELLES QUE
                                    L'ADAPTABILITÉ, LA RÉSILIENCE ET L'OUVERTURE D'ESPRIT. LE JAPON, AVEC SA COMBINAISON UNIQUE
                                    DE TRADITION ET DE MODERNITÉ, OFFRE UN ENVIRONNEMENT STIMULANT POUR LE DÉVELOPPEMENT
                                    PERSONNEL.
                                </p>
                                </div>
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">
                                    4. BOURSES ET SOUTIEN FINANCIER
                                </h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    LE GOUVERNEMENT JAPONAIS ET DIVERSES INSTITUTIONS OFFRENT UN LARGE ÉVENTAIL DE BOURSES POUR
                                    LES ÉTUDIANTS INTERNATIONAUX, RENDANT LES ÉTUDES AU JAPON PLUS ACCESSIBLES FINANCIÈREMENT.
                                    DES PROGRAMMES COMME LES BOURSES MEXT (MINISTRY OF EDUCATION, CULTURE, SPORTS, SCIENCE, AND
                                    TECHNOLOGY) SONT TRÈS COMPÉTITIFS ET PEUVENT COUVRIR UNE GRANDE PARTIE DES FRAIS DE
                                    SCOLARITÉ ET DE VIE.
                                </p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4">
                            <div class="flex items-center">
                                <div class="w-1 h-12 bg-red-600 mr-2"></div>
                                <div>
                                    <h1 class="text-2xl font-bold">COMMENT FAIRE POUR ALLER ÉTUDIER AU JAPON ?</h1>
                                    <div class="w-full h-1 bg-red-300 mt-1"></div>
                                </div>
                            </div>

                            <div class="flex flex-col md:flex-row items-start gap-4 mb-4">
                                <img
                                src="../assets/images/think.png"
                                alt="Japan city lights"
                                class="w-full md:w-1/4 rounded-lg"
                                />
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                FAIRE UNE FORMATION AU JAPON PRÉSENTE PLUSIEURS AVANTAGES DISTINCTS, QUI PEUVENT VARIER EN
                                FONCTION DU DOMAINE D’ÉTUDE, DES OBJECTIFS PROFESSIONNELS ET DES INTÉRÊTS PERSONNELS. VOICI
                                QUELQUES RAISONS POUR LESQUELLES SUIVRE UNE FORMATION AU JAPON PEUT ÊTRE BÉNÉFIQUE :
                                </p>
                            </div>
                            <div class="space-y-4">
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">
                                    1. EXCELLENCE ACADÉMIQUE ET TECHNOLOGIQUE
                                </h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    LE JAPON EST RÉPUTÉ POUR SON SYSTÈME ÉDUCATIF DE HAUTE QUALITÉ ET SES AVANCÉES
                                    TECHNOLOGIQUES. LES UNIVERSITÉS JAPONAISES, TELLES QUE L'UNIVERSITÉ DE TOKYO, KYOTO
                                    UNIVERSITY ET OSAKA UNIVERSITY, FIGURENT PARMI LES MEILLEURES AU MONDE. LES ÉTUDIANTS
                                    PEUVENT BÉNÉFICIER DE PROGRAMMES ACADÉMIQUES RIGOUREUX ET D'INSTALLATIONS DE RECHERCHE DE
                                    POINTE, EN PARTICULIER DANS DES DOMAINES COMME L'INGÉNIERIE, LA ROBOTIQUE, LES TECHNOLOGIES
                                    DE L'INFORMATION ET LES SCIENCES.
                                </p>
                                </div>
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">2. OPPORTUNITÉS DE CARRIÈRE</h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    ÉTUDIER AU JAPON PEUT OFFRIR DES OPPORTUNITÉS PROFESSIONNELLES INTÉRESSANTES. LE PAYS ABRITE
                                    DE NOMBREUSES ENTREPRISES INTERNATIONALES ET DE GRANDES MULTINATIONALES, PARTICULIÈREMENT
                                    DANS LES SECTEURS DE L'ÉLECTRONIQUE, DE L'AUTOMOBILE, DES BIOTECHNOLOGIES ET DES SERVICES
                                    FINANCIERS. UNE FORMATION AU JAPON PEUT AINSI AMÉLIORER VOTRE EMPLOYABILITÉ ET VOUS OUVRIR
                                    DES PORTES SUR LE MARCHÉ DU TRAVAIL JAPONAIS ET INTERNATIONAL.
                                </p>
                                </div>
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">3. DÉVELOPPEMENT PERSONNEL</h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    VIVRE À L'ÉTRANGER ET S'ADAPTER À UNE NOUVELLE CULTURE EST UNE EXPÉRIENCE ENRICHISSANTE QUI
                                    FAVORISE LE DÉVELOPPEMENT PERSONNEL. CELA PERMET DE DÉVELOPPER DES COMPÉTENCES TELLES QUE
                                    L'ADAPTABILITÉ, LA RÉSILIENCE ET L'OUVERTURE D'ESPRIT. LE JAPON, AVEC SA COMBINAISON UNIQUE
                                    DE TRADITION ET DE MODERNITÉ, OFFRE UN ENVIRONNEMENT STIMULANT POUR LE DÉVELOPPEMENT
                                    PERSONNEL.
                                </p>
                                </div>
                                <div>
                                <h2 class="text-lg font-bold text-zinc-900 dark:text-white">
                                    4. BOURSES ET SOUTIEN FINANCIER
                                </h2>
                                <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    LE GOUVERNEMENT JAPONAIS ET DIVERSES INSTITUTIONS OFFRENT UN LARGE ÉVENTAIL DE BOURSES POUR
                                    LES ÉTUDIANTS INTERNATIONAUX, RENDANT LES ÉTUDES AU JAPON PLUS ACCESSIBLES FINANCIÈREMENT.
                                    DES PROGRAMMES COMME LES BOURSES MEXT (MINISTRY OF EDUCATION, CULTURE, SPORTS, SCIENCE, AND
                                    TECHNOLOGY) SONT TRÈS COMPÉTITIFS ET PEUVENT COUVRIR UNE GRANDE PARTIE DES FRAIS DE
                                    SCOLARITÉ ET DE VIE.
                                </p>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div class="w-full lg:w-1/3 space-y-4">
                        <div class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4">
                            <h2 class="text-xl font-bold text-red-600">BOURCES DANS CE PAYS</h2>
                            <ul class="mt-4 space-y-2">
                            <li class="flex items-center">
                                <img
                                src="https://placehold.co/50x50"
                                alt="Success 1"
                                class="w-12 h-12 rounded-lg mr-4"
                                />
                                <span class="text-zinc-700 dark:text-zinc-300">titre 1</span>
                            </li>
                            <li class="flex items-center">
                                <img
                                src="https://placehold.co/50x50"
                                alt="Success 2"
                                class="w-12 h-12 rounded-lg mr-4"
                                />
                                <span class="text-zinc-700 dark:text-zinc-300">titre 2</span>
                            </li>
                            <li class="flex items-center">
                                <img
                                src="https://placehold.co/50x50"
                                alt="Success 3"
                                class="w-12 h-12 rounded-lg mr-4"
                                />
                                <span class="text-zinc-700 dark:text-zinc-300">titre 3</span>
                            </li>
                            <li class="flex items-center">
                                <img
                                src="https://placehold.co/50x50"
                                alt="Success 4"
                                class="w-12 h-12 rounded-lg mr-4"
                                />
                                <span class="text-zinc-700 dark:text-zinc-300">titre 4</span>
                            </li>
                            </ul>
                        </div>

                        <div class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4">
                            <img src="https://placehold.co/600x400" alt="Google Search" class="w-full rounded-lg" />
                        </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center mb-[5%]">
                        <button onClick={() => window.open("https://www.epseducation.ma/", "_blank")} className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
                            JE VEUX ÉTUDIER AU JAPON
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
}
</>
);
}