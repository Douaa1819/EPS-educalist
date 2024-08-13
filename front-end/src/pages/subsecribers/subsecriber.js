import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../../app/components/dashboard/navbar';
import Sidebar from '../../app/components/dashboard/Sidebar';
import SubscribersList from '../../app/components/dashboard/subsecribersList';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false });

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/subscribers');
      setSubscribers(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModify = (id) => {
    const subscriber = subscribers.find(subscriber => subscriber.id === id);
    setSelectedSubscriber(subscriber);
    setEmail(subscriber.email);
    setIsAdding(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/subscribers/${id}`);
      setSubscribers(prevSubscribers => prevSubscribers.filter(subscriber => subscriber.id !== id));
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      let response;
      if (isAdding) {
        console.log('Adding new subscriber with email:', email);
        response = await axios.post('http://127.0.0.1:8000/api/subscribers/store', { email });
        console.log('API response:', response.data);
        setSubscribers(prevSubscribers => [...prevSubscribers, response.data.subscriber]);
      } else {
        console.log('Updating subscriber with ID:', selectedSubscriber.id, 'and email:', email);
        response = await axios.put(`http://127.0.0.1:8000/api/subscribers/${selectedSubscriber.id}`, { email });
        console.log('API response:', response.data);
        setSubscribers(prevSubscribers =>
          prevSubscribers.map(subscriber =>
            subscriber.id === selectedSubscriber.id ? response.data.subscriber : subscriber
          )
        );
      }
    } catch (error) {
      console.error('Error saving subscriber:', error);
    } finally {
      setSelectedSubscriber(null);
      setEmail('');
      setIsAdding(false);
    }
  };
  

  const handleAddClick = () => {
    setSelectedSubscriber(null);
    setEmail('');
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
              <p className="text-zinc-600">Vous pouvez lire, modifier, supprimer toutes les abonnés...</p>
            </div>
            <button
              className="px-4 py-2 mb-5 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors ml-[85%]"
              onClick={handleAddClick}
            >
              Ajouter Subscriber
            </button>
          </div>

          <div className="lg:grid-cols-3 gap-6 mb-20">
            <SubscribersList subscribers={subscribers} onModify={handleModify} onDelete={handleDelete} />
          </div>

          {(selectedSubscriber || isAdding) && (
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{isAdding ? 'Ajouter Nouvel Abonné' : 'Modifier l\'Abonné'}</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
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
