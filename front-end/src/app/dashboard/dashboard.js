import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/dashboard/navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { Pie } from 'react-chartjs-2';
import { Doughnut, Bar } from 'react-chartjs-2';
import '../../../chartConfig'; // Assurez-vous d'importer le fichier de configuration Chart.js

import withAuth from '../../utils/withAuth';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ users: 0, redacteurs: 0, admins: 0, etudiants: 0 });
  const [user, setUser] = useState({ first_name: '', last_name: '', role: '' });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/show', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/statistique', {
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStats();
  }, []);

  const totalUsers = stats.users;
  const etudiantPercentage = totalUsers ? (stats.etudiants / totalUsers) * 100 : 0;
  const redacteurPercentage = totalUsers ? (stats.redacteurs / totalUsers) * 100 : 0;
  const adminPercentage = totalUsers ? (stats.admins / totalUsers) * 100 : 0;

  const pieData = {
    labels: ['Étudiants', 'Rédacteurs', 'Admins'],
    datasets: [
      {
        label: '% des utilisateurs',
        data: [etudiantPercentage, redacteurPercentage, adminPercentage],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]

  };
  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 75, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
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
            <h3 className="text-2xl font-bold">{user.role}</h3>
            <p className="text-zinc-600">Salut {user.first_name} {user.last_name}, Bienvenue...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-white p-4 ml-4 rounded-lg shadow mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4YKCkof57jjsLdE4R9FTkIKSovhYpBx1bEUbJzAwiZFP_1Bi_L3IJw7vmsX8wVTHXc4&usqp=CAU" alt="icon" className="mr-4 w-12" />
                <div>
                  <h2 className="text-2xl font-bold">{stats.etudiants}</h2>
                  <p className="text-zinc-600">Total étudiants</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://www.noiise.com/wp-content/uploads/2022/11/metier-redacteur-web.jpg" alt="icon" className="mr-4 w-11" />
                <div>
                  <h2 className="text-2xl font-bold">{stats.redacteurs}</h2>
                  <p className="text-zinc-600">Total rédacteurs</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrYUIgVx7ED6ar19In4lliXQh1dKzaDAAzdgLJxewdFxUMIjXTW0gTO8qe1vcMtyAz98&usqp=CAU" alt="icon" className="mr-4 w-16" />
                <div>
                  <h2 className="text-2xl font-bold">{stats.admins}</h2>
                  <p className="text-zinc-600">Total admins</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mr-4 mb-4 mt-2">
              <div className="flex items-center">
                <img src="https://ecompile.io/assets/img/blogs/profile-pictures/profile-picture.jpg" alt="icon" className="mr-4 w-16" />
                <div>
                  <h2 className="text-2xl font-bold">{stats.users}</h2>
                  <p className="text-zinc-600">Total utilisateurs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow mb-4 ml-4">
              <h2 className="text-lg font-bold mb-2">Statistiques des utilisateurs</h2>
              <Pie data={pieData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
