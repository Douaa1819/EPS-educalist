import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
import SignupForm from '@/app/components/SignupForm';

export default function Index() {
    const [news, setNews] = useState([]);
    const [activeType, setActiveType] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchNews('all');
    }, []);

    const fetchNews = async (type) => {
        setActiveType(type);
        setIsLoading(true);
        setError(null);
        
        try {
            const endpoint = type === 'all'
                ? 'http://localhost:8000/api/news'
                : `http://localhost:8000/api/filter?type=${type}`;
            
            const response = await axios.get(endpoint);
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
            setError('Failed to load news articles. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const searchNews = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:8000/api/search?q=${searchQuery}`);
            setNews(response.data);
            setActiveType('');
        } catch (error) {
            console.error('Error searching news:', error);
            setError('Failed to search news articles. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        await searchNews();
    };

    const renderNewsCards = () => {
        if (isLoading) {
            return <div className="text-center">Loading...</div>;
        }

        if (error) {
            return <div className="text-center text-red-500">{error}</div>;
        }

        if (news.length === 0) {
            return <div className="text-center">No news articles found.</div>;
        }

        return news.map((article) => (
            <Link key={article.id + activeType} href={`/news/${article.id}`}>
                <div className="border border-black rounded p-4 hover:shadow-lg transition-shadow duration-300 ease-out">
                    {article.primary_image && (
                        <img
                            src={`http://127.0.0.1:8000/storage/${article.primary_image}`}
                            alt={article.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                    )}
                    <h2 className="text-lg font-semibold mb-2 text-black">
                        {article.title}
                    </h2>
                    <p className="text-black mb-4">
                        {article.description}
                    </p>
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-red-500 transition-all duration-300 ease-out">
                        Lire la suite
                    </button>
                </div>
            </Link>
        ));
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Actualités</title>
            </Head>
            <Navbar />
            <div className="relative rounded-lg overflow-hidden">
                <div className="w-[80%] ml-[10%] relative">
                    <img
                        src="assets/images/actualite.png"
                        alt="Enseignement superieur"
                        className="w-full h-auto object-cover shadow-b border-solid rounded-b-[50px] overflow-hidden"
                        style={{ filter: 'drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.2)) brightness(0.5)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-20 outline-solid outline-5 outline-[#d21e2b] outline-offset-[-5px] rounded-b-[50px] bg-[#d9d9d900] flex items-center justify-center">
                            <div
                                className="text-center text-white text-2xl sm:text-4xl font-semibold"
                                style={{
                                    fontFamily: 'Krona One, system-ui, -apple-system, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', \'Liberation Sans\', sans-serif',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }}
                            >
                                Actualités
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
                <div className="md:w-[70vw] mx-auto px-4 py-6">
                    <header className="text-center mb-6">
                        <h1 className="text-2xl font-semibold text-black">Actualité de l'éducation et de l'orientation au Maroc</h1>
                        <nav className="text-sm text-black">
                            <a href="#" className="hover:underline">Accueil</a> / <span>Actualité</span>
                        </nav>
                    </header>
                    <div className="flex flex-wrap justify-between mb-4">
                        {['all', 'bource', 'event', 'concoure'].map((type) => (
                            <button 
                                key={type}
                                onClick={() => fetchNews(type)}
                                className={`py-2 px-4 rounded mb-2 md:mb-0 transition-all duration-300 ease-out ${activeType === type ? 'bg-red-500 text-white' : 'bg-black text-white hover:bg-red-500'}`}
                            >
                                {type === 'all' ? "TOUTE L'ACTUALITÉ" :
                                 type === 'bource' ? "BOURSE D'ÉTUDE" :
                                 type === 'event' ? "ÉVÉNEMENTS" : "CONCOURS"}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center justify-center m-[5%]">
                        <form onSubmit={handleSearchSubmit} className="flex flex-wrap justify-center mb-6 space-y-2 md:space-y-0 md:space-x-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Rechercher un article"
                                className="border border-black py-2 px-4 rounded-l w-full md:w-auto"
                            />
                            <button
                                type="submit"
                                className="bg-black text-white py-2 px-4 rounded-r w-full md:w-auto hover:bg-red-500 transition-all duration-300 ease-out"
                            >
                                Rechercher
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-2/3 px-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {renderNewsCards()}
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/3 px-2">
                            <div className="border border-black rounded p-4 mb-4 hover:shadow-lg transition-shadow duration-300 ease-out">
                                <h2 className="text-lg font-semibold mb-2 text-black">Publicité</h2>
                                <img
                                    src="https://placehold.co/600x400"
                                    alt="Publicité"
                                    className="w-full h-40 object-cover mb-4"
                                />
                                <p className="text-black mb-4">
                                    Contenu de la publicité. Informations sur le produit ou service promu.
                                </p>
                            </div>
                            <div>
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
