import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../../app/components/dashboard/navbar'; 
import Sidebar from '../../app/components/dashboard/Sidebar';
import ArticleList from '../../app/components/dashboard/articleList'; 
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const articles = [
    { id: 1, title: 'Article 1', description: 'Description of Article 1', link: "/readmore" },
    { id: 2, title: 'Article 2', description: 'Description of Article 2' },
    // Add more articles as needed
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModify = (id) => {
    const article = articles.find(article => article.id === id);
    setSelectedArticle(article);
    setTitle(article.title);
    setContent(article.description);

    console.log('Modify article with id:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete article with id:', id);
    // Implement your delete logic here
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement your update logic here

    console.log('Updated article:', { id: selectedArticle.id, title, content });
    // Clear the form
    setSelectedArticle(null);
    setTitle('');
    setContent('');
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? 'ml-[290px]' : 'ml-0 md:ml-[290px]'}`}>
          <div className="p-4">
            <button 
              className="md:hidden p-2 bg-white text-black rounded focus:outline-none" 
              onClick={toggleSidebar}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <Navbar isSidebarOpen={isSidebarOpen} />
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-zinc-600">Vous pouvez lire, modifier, supprimer toutes les articles...</p>
          </div>

          <div className="lg:grid-cols-3 gap-6 mb-20">
            <ArticleList articles={articles} onModify={handleModify} onDelete={handleDelete} />
          </div>

          {selectedArticle && (
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">Modifier l'Article</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Titre
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Contenu
                  </label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                  >
                    Modifier
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
