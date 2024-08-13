import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../../app/components/dashboard/navbar';
import Sidebar from '../../app/components/dashboard/Sidebar';
import ArticleList from '../../app/components/dashboard/articleList';
import { useRouter } from 'next/router';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false });

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [articles, setArticles] = useState([]);
  const [pays, setPays] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [imageFile, setImageFile] = useState(null); // State for image file
  const router = useRouter();

  useEffect(() => {
    fetchArticles();
    fetchPays();
  }, []);

  const fetchPays = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/pays');
      setPays(response.data);
    } catch (error) {
      console.error('Error fetching pays:', error);
    }
  }

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModify = (id) => {
    const article = articles.find(article => article.id === id);
    setSelectedArticle(article);
    setTitle(article.title);
    setDescription(article.description);
    setContent(article.contenu);
    console.log('Modify article with id:', id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/articles/${id}`);
      setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
      console.log('Delete article with id:', id);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('contenu', content);
    if (imageFile) {
      formData.append('image', imageFile); 
  } 
    if (selectedArticle) {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/articles/${selectedArticle.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setArticles(prevArticles =>
                prevArticles.map(article =>
                    article.id === selectedArticle.id ? response.data.article : article
                )
            );
            console.log('Updated article:', response.data.article);
        } catch (error) {
            console.error('Error updating article:', error);
        }
    } else {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setArticles([...articles, response.data.article]);
            console.log('Created article:', response.data.article); 
        } catch (error) {
            console.error('Error creating article:', error);
        }
    }

    setSelectedArticle(null);
    setTitle('');
    setDescription('');
    setContent('');
    setImageFile(null); // Clear image file state
    setIsAdding(false);
};


  const handleAddClick = () => {
    setSelectedArticle(null);
    setTitle('');
    setDescription('');
    setContent('');
    setIsAdding(true);
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <Navbar isSidebarOpen={isSidebarOpen} />
            <div className='ml-2'>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-zinc-600">Vous pouvez lire, modifier, supprimer toutes les articles...</p>
            </div>
              <button 
                className="px-4 py-2 mb-5 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors ml-[85%]"
                onClick={handleAddClick}
              >
                Ajouter Article
              </button>
          </div>

          <div className="lg:grid-cols-3 gap-6 mb-20">
            <ArticleList articles={articles} onModify={handleModify} onDelete={handleDelete} pays={pays} />
          </div>

          {(selectedArticle || isAdding) && (
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{isAdding ? 'Ajouter Nouvel Article' : 'Modifier l\'Article'}</h2>
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
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Contenu
                  </label>
                  <QuillNoSSRWrapper
  value={content}
  onChange={setContent}
  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
  modules={{
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image'],
    ],
  }}
/>

                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                  >
                    {isAdding ? 'Ajouter' : 'Modifier'}
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
