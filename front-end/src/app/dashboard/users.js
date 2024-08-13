import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/Sidebar";
import UserTable from "../components/users/UserTable";
import AddUserForm from "../components/users/AddUserForm";
import axios from "axios";

const Users = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSearchResults = (results) => {
    setUsers(results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/userss");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const addUser = async (newUser) => {
    try {
      await axios.post("http://localhost:8000/api/userss", newUser);
      fetchUsers();
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Users - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div
          className={`flex flex-col w-full transition-all duration-300 ${
            isSidebarOpen ? "ml-[290px]" : "ml-0 md:ml-[290px]"
          }`}
        >
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-5">Users</h1>
            <div className="mt-6 mb-4   ml-80 w-44 flex justifay-end">
                <button
                  onClick={togglePopup}
                  className="w-full  bg-green-400  border border-gray-300 rounded-md py-2 px-4 flex items-end justify-end text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  <span>Add a new user</span>
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              
              <UserTable users={users} />
             
              
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && <AddUserForm onClose={togglePopup} onSubmit={addUser} />}
    </>
  );
};

export default Users;
