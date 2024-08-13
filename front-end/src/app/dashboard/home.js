import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/dashboard/navbar'; 
import Sidebar from '../components/dashboard/Sidebar'; 

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
            <Navbar isSidebarOpen={isSidebarOpen} /> {/* Passer isSidebarOpen en tant que prop */}
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-zinc-600">Salut AdminName, Bienvenue...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-white p-4 ml-4 rounded-lg shadow mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="icon" className="mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">75</h2>
                  <p className="text-zinc-600">Total étudiants</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="icon" className="mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">10</h2>
                  <p className="text-zinc-600">Total rédacteurs</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="icon" className="mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">65</h2>
                  <p className="text-zinc-600">Total destinations</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mr-4 mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="icon" className="mr-4" />
                <div>
                  <h2 className="text-2xl font-bold ">$128</h2>
                  <p className="text-zinc-600">Total Revenue</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow mb-4 ml-4">
              <h2 className="text-lg font-bold mb-2">Pie Chart</h2>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Chart</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Show Value</label>
                </div>
                <img src="https://placehold.co/20x20" alt="menu" />
              </div>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white">81%</div>
                  <p className="mt-2">Total étudiants</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">22%</div>
                  <p className="mt-2">Customer rédacteurs</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">62%</div>
                  <p className="mt-2">Total</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mr-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Nombre de visiteurs</h2>
              <p className="text-zinc-600 mb-4">Lorem ipsum dolor sit amet, consectetur adip</p>
              <img src="https://placehold.co/300x150" alt="visitors graph" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
            <div className="bg-white p-4 rounded-lg shadow col-span-2 ml-4">
              <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
              <img src="https://placehold.co/600x300" alt="revenue graph" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow mr-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Customer Map</h2>
                <div className="relative">
                  <button className="bg-zinc-200 p-1 rounded">Weekly</button>
                  <img src="https://placehold.co/20x20" alt="menu" className="absolute right-0 top-0" />
                </div>
              </div>
              <img src="https://placehold.co/300x300" alt="customer map" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow mb-4 ml-4">
              <h2 className="text-lg font-bold mb-2">Pie Chart</h2>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Chart</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label>Show Value</label>
                </div>
                <img src="https://placehold.co/20x20" alt="menu" />
              </div>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white">81%</div>
                  <p className="mt-2">Total étudiants</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">22%</div>
                  <p className="mt-2">Customer rédacteurs</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">62%</div>
                  <p className="mt-2">Total</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mr-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Nombre de visiteurs</h2>
              <p className="text-zinc-600 mb-4">Lorem ipsum dolor sit amet, consectetur adip</p>
              <img src="https://placehold.co/300x150" alt="visitors graph" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20">
            <div className="bg-white p-4 rounded-lg shadow col-span-2 ml-4">
              <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
              <img src="https://placehold.co/600x300" alt="revenue graph" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow mr-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Customer Map</h2>
                <div className="relative">
                  <button className="bg-zinc-200 p-1 rounded">Weekly</button>
                  <img src="https://placehold.co/20x20" alt="menu" className="absolute right-0 top-0" />
                </div>
              </div>
              <img src="https://placehold.co/300x300" alt="customer map" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
