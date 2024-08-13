import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/Sidebar";
import AdminList from "../components/users/AdminList";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/admins");
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  const handleBanToggle = async (id, isBanned) => {
    try {
      await axios.put(`http://localhost:8000/api/admins/${id}`, {
        is_banned: !isBanned,
      });
      setAdmins(
        admins.map((admin) =>
          admin.id === id ? { ...admin, is_banned: !isBanned } : admin
        )
      );
    } catch (error) {
      console.error("Error toggling ban status:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
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
            <AdminList
              admins={admins}
              handleBanToggle={handleBanToggle}
              setAdmins={setAdmins}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admins;
