import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../../app/components/dashboard/navbar';
import Sidebar from '../../app/components/dashboard/Sidebar';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import EditModal from '../../app/components/dashboard/EditModal'; 
import AddModal from '../../app/components/dashboard/AddModal'; 

const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false });

axios.defaults.baseURL = 'http://127.0.0.1:8000'; 

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/${option}`);
      setData(response.data);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/${selectedOption}/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
      setError('Error deleting data');
    }
  };

  const handleModalClose = () => {
    setEditItem(null);
  };

  const handleModalSave = (updatedItem) => {
    setData(data.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setEditItem(null);
  };

  const handleAddModalOpen = () => {
    setAddModalVisible(true);
  };

  const handleAddModalClose = () => {
    setAddModalVisible(false);
  };

  const handleAdd = (newItem) => {
    setData([...data, newItem]);
    setAddModalVisible(false);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-[290px]' : 'ml-0 md:ml-[290px]'}`}>
          <div className="p-4 bg-white shadow-md">
            <button
              className="md:hidden p-2 bg-blue-600 text-white rounded-lg focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <Navbar isSidebarOpen={isSidebarOpen} />
            <div className='ml-2'>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">Vous pouvez voir les composants du filtre</p>
            </div>
          </div>

          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <button onClick={() => handleOptionClick('domains')} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                Domains
              </button>
              <button onClick={() => handleOptionClick('specialites')} className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
                Specialites
              </button>
              <button onClick={() => handleOptionClick('metiers')} className="w-full px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors">
                Metiers
              </button>
            </div>

            <div className="space-y-4">
              {loading && <p className="text-gray-500">Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}
              {selectedOption && !loading && !error && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</h2>
                  <div className="mb-4">
                    <button
                      onClick={handleAddModalOpen}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
                    >
                      Ajouter
                    </button>
                  </div>
                  {data.length > 0 ? (
                    <ul className="list-disc ml-6 space-y-2">
                      {data.map((item) => (
                        <li key={item.id} className="flex justify-between items-center p-2 bg-white shadow-md rounded-lg">
                          <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
                          <div className="flex space-x-2">
                            <button onClick={() => handleEdit(item)} className="px-2 py-1 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition-colors">
                              Modifier
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="px-2 py-1 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors">
                              Supprimer
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No data available</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {editItem && <EditModal item={editItem} onClose={handleModalClose} onSave={handleModalSave} />}
      {addModalVisible && <AddModal selectedOption={selectedOption} onClose={handleAddModalClose} onAdd={handleAdd} />}
    </>
  );
};

export default Dashboard;
