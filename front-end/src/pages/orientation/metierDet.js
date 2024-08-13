// pages/index.js
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
import SignupForm from '@/app/components/SignupForm';

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Educalist</title>
            </Head>
            <Navbar />
            <div className="w-[80vw] mx-auto flex flex-col md:flex-row-reverse mt-[4%] mb-[4%]">
                <div className="w-full md:w-1/4  p-4 hidden md:block">
                    <div>
                        <SignupForm />
                    </div>

                    <div className=" shadow-md rounded-lg rounded mt-8">
                        <h3 className="p-2 rounded font-bold">Orientation au secondaire</h3>
                        <ul className="space-y-2 mt-2">
                            <li className="bg-white text-[#F52C2C] p-2 border border-zinc-300 rounded">Session de rattrapage Bac</li>
                            <li className="bg-white text-[#F52C2C] p-2 border border-zinc-300 rounded">Demande de redoublement en première année Bac</li>
                            <li className="bg-white text-[#F52C2C] p-2 border border-zinc-300 rounded">Candidature aux examens du Bac</li>
                            <li className="bg-white text-[#F52C2C] p-2 border border-zinc-300 rounded">Examens du Bac</li>
                            <li className="bg-white text-[#F52C2C] p-2 border border-zinc-300 rounded">De la première année commune à la deuxième année Bac</li>
                        </ul>
                    </div>
            
                </div>

                <div className="w-full md:w-3/4 p-4 bg-white dark:bg-zinc-800 shadow-md rounded-lg">
                    <div className="flex justify-end space-x-2 mb-4">
                        <button className="bg-red-500 text-white px-2 py-1 rounded">Imprimer</button>
                        <button className="bg-blue-600 text-white px-2 py-1 rounded">Like</button>
                        <button className="bg-red-400 text-white px-2 py-1 rounded">Share</button>
                    </div>
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Agent de sécurité</h1>
                    <hr className="border-t-2 border-yellow-500 mb-4" />
                    <h2 className="text-xl font-semibold text-red-600 dark:text-blue-400 mb-2">Présentation du métier</h2>
                    <p className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded mb-4 text-zinc-800 dark:text-zinc-200">
                        Les agents de police veillent à maintenir la sécurité et la stabilité dans le pays, à garantir la sécurité des citoyens
                        et de leurs biens, et à appliquer la loi. Pour ce faire, ils mènent des enquêtes criminelles et échangent des informations
                        avec les citoyens.
                    </p>
                    <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Qualifications et formation</h2>
                    <div className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded mb-4 text-zinc-800 dark:text-zinc-200">
                        <ul className="list-disc list-inside">
                            <li>Niveau Bac</li>
                            <li>Avec 10 mois de formation à l'institut.</li>
                        </ul>
                    </div>
                    <div className="flex justify-end space-x-2 mb-4">
                        <button className="bg-blue-600 text-white px-2 py-1 rounded">Like</button>
                        <button className="bg-red-400 text-white px-2 py-1 rounded">Share</button>
                    </div>
                    <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Autres métiers du commerce</h2>
                    <ul className="border-t border-zinc-300 dark:border-zinc-600">
                        <li className="py-2 border-b border-zinc-300 dark:border-zinc-600">Officier de sécurité/police</li>
                        <li className="py-2 border-b border-zinc-300 dark:border-zinc-600">
                            OFFICIER DE POLICE : ضابط الأمن/الشرطة
                        </li>
                        <li className="py-2 border-b border-zinc-300 dark:border-zinc-600">Agent de sécurité</li>
                        <li className="py-2">INSPECTEUR DE POLICE : مفتش الشرطة</li>
                    </ul>
                </div>
            </div>
                <Footer/>
        </>
    );
}
