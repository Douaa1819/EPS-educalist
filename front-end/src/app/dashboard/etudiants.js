import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/Sidebar";
import EtudiantList from "../components/users/EtudiantList";

const Etudiants = () => {
  const [etudiants, setEtudiants] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchEtudiants();
  }, []);

  const fetchEtudiants = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/etudiants");
      setEtudiants(response.data);
    } catch (error) {
      console.error("Error fetching etudiants:", error);
    }
  };

  const handleBanToggle = async (id, isBanned) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/etudiants/${id}`,
        { is_banned: !isBanned }
      );
      if (response.status === 200) {
        setEtudiants(
          etudiants.map((etudiant) =>
            etudiant.id === id
              ? { ...etudiant, is_banned: !isBanned }
              : etudiant
          )
        );
      }
    } catch (error) {
      console.error(
        "Error toggling ban status:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>Liste des Etudiants - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <div
          className={`flex flex-col w-full transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0 md:ml-64"
          }`}
        >
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="container mx-auto px-4 py-8">
            <EtudiantList
              etudiants={etudiants}
              handleBanToggle={handleBanToggle}
              setEtudiants={setEtudiants}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Etudiants;
