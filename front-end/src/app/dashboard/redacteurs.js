import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/Sidebar";
import RedacteurList from "../components/users/RedacteurList";

const Redacteurs = () => {
  const [redacteurs, setRedacteurs] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchRedacteurs();
  }, []);

  const fetchRedacteurs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/redacteurs");
      setRedacteurs(response.data);
    } catch (error) {
      console.error("Error fetching redacteurs:", error);
    }
  };

  const handleBanToggle = async (id, isBanned) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/redacteurs/${id}`,
        { is_banned: !isBanned }
      );
      if (response.status === 200) {
        setRedacteurs(
          redacteurs.map((redacteur) =>
            redacteur.id === id
              ? { ...redacteur, is_banned: !isBanned }
              : redacteur
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
        <title>Liste des Rédacteurs - Dashboard</title>
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
            <RedacteurList
              redacteurs={redacteurs}
              handleBanToggle={handleBanToggle}
              setRedacteurs={setRedacteurs}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Redacteurs;
