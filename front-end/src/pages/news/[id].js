import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';
import DOMPurify from 'dompurify';

export default function NewsDetails() {
  const router = useRouter();
  const { id } = router.query; // Get the id from the query parameters
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (id) {
      fetchArticle();
      fetchRelatedArticles();
      fetchPopularPosts();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/news/${id}`);
      setArticle(response.data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  const fetchRelatedArticles = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/related-news?current_news_id=${id}`);
      setRelatedArticles(response.data);
    } catch (error) {
      console.error('Error fetching related articles:', error);
    }
  };

  const fetchPopularPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/popular-posts');
      setPopularPosts(response.data.slice(0, 4));
    } catch (error) {
      console.error('Error fetching popular posts:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login attempt with:', email, password);
  };

  if (!article) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{article.title}</title>
      </Head>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative mb-12">
            <img
              src="../assets/images/dest.png"
              alt="Enseignement superieur"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              style={{ filter: 'brightness(0.7)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Actualités
              </h1>
            </div>
          </div>

          <nav className="bg-white shadow-md rounded-full py-3 px-6 mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-blue-600 hover:underline">Accueil</Link></li>
              <li><span className="text-gray-500">/</span></li>
              <li><Link href="#" className="text-blue-600 hover:underline">Enseignement Superieur</Link></li>
              <li><span className="text-gray-500">/</span></li>
              <li><Link href="#" className="text-blue-600 hover:underline">Etudes Supérieures à l'étranger</Link></li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`http://localhost:8000/storage/${article.primary_image}`}
                  alt={article.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h2>
                  <div className="flex items-center text-gray-600 mb-6">
                    <span>{new Date(article.created_at).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{article.author}</span>
                  </div>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(article.content)
                    }}
                  />
                </div>
              </article>

              <section className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles Connexes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <div key={relatedArticle.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                      <img
                        src={`http://localhost:8000/storage/${relatedArticle.primary_image}`}
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{relatedArticle.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{relatedArticle.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {new Date(relatedArticle.created_at).toLocaleDateString()}
                          </span>
                          <Link href={`/news/${relatedArticle.id}`} className="text-blue-600 hover:underline font-medium">
                            Lire la suite →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lg:w-1/3 space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connexion</h3>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                  >
                    Se connecter
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Articles Populaires</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex items-center space-x-4">
                      <img src={`http://127.0.0.1:8000/storage/${post.primary_image}`} alt={post.title} className="w-20 h-20 object-cover rounded-md" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.title}</h4>
                        <p className="text-sm text-gray-600">{post.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Réalisez Plus Ensemble Avec Nous</h3>
                <p className="mb-6">Découvrez comment notre plateforme peut vous aider à atteindre vos objectifs académiques et professionnels.</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                  Commencer
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
