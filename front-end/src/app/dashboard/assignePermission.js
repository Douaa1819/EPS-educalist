import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from '../components/dashboard/navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AssignPermissionsToUsers() {
  const [users, setUsers] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [userPermissions, setUserPermissions] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const fetchData = async () => {
    try {
      const [usersResponse, permissionsResponse] = await Promise.all([
        axios.get("http://localhost:8000/api/users", {
          params: {
            search,
            page
          }
        }),
        axios.get("http://localhost:8000/api/permissions"),
      ]);

      setUsers(usersResponse.data.data || []);
      setTotalPages(usersResponse.data.last_page || 1);

      const userPermissionsData = {};
      usersResponse.data.data.forEach(user => {
        userPermissionsData[user.id] = user.permissions.reduce((acc, perm) => {
          acc[perm] = true;
          return acc;
        }, {});
      });
      setUserPermissions(userPermissionsData);

      setPermissions(permissionsResponse.data || []);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
      toast.error("Erreur lors du chargement des données");
    }
  };

  const updateUserPermissions = async (userId, permissionName, isChecked) => {
    const updatedPermissions = { ...userPermissions[userId], [permissionName]: isChecked };
    setUserPermissions(prev => ({
      ...prev,
      [userId]: updatedPermissions,
    }));

    const permissionsToAssign = Object.keys(updatedPermissions).filter(key => updatedPermissions[key]);
    try {
      await axios.post("http://localhost:8000/api/assign-user-permissions", {
        user_id: userId,
        permissions: permissionsToAssign,
      });
      toast.success(`Permissions mises à jour pour l'utilisateur ${userId}`);
    } catch (error) {
      console.error("Erreur lors de la mise à jour des permissions de l'utilisateur:", error.response?.data);
      toast.error("Erreur lors de la mise à jour des permissions de l'utilisateur");
    }
  };

  const handleUserPermissionChange = (userId, permissionName) => {
    const isChecked = !userPermissions[userId]?.[permissionName];
    updateUserPermissions(userId, permissionName, isChecked);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1); // Reset to the first page on new search
  };

  const handlePageChange = (direction) => {
    if (direction === 'next' && page < totalPages) {
      setPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>Gestion des Permissions Utilisateurs - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? 'ml-[290px]' : 'ml-0 md:ml-[290px]'}`}>
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <h1 className="text-gray-700 text-3xl font-semibold">Gestion des Permissions Utilisateurs</h1>

              <div className="mt-8">
                <input
                  type="text"
                  placeholder="Rechercher par nom ou email"
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-4">Utilisateurs</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-50 shadow-md rounded-lg overflow-hidden">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Nom</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Email</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Permissions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user.id} className="border-b border-gray-200">
                          <td className="px-4 py-2 text-gray-700">{user.firstName}</td>
                          <td className="px-4 py-2 text-gray-700">{user.email}</td>
                          <td className="px-4 py-2">
                            <div className="flex flex-wrap gap-2">
                              {permissions.map(permission => (
                                <div key={permission.id} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`user-${user.id}-${permission.id}`}
                                    className="mr-1"
                                    checked={userPermissions[user.id]?.[permission.name] || false}
                                    onChange={() => handleUserPermissionChange(user.id, permission.name)}
                                  />
                                  <label
                                    htmlFor={`user-${user.id}-${permission.id}`}
                                    className="text-sm"
                                  >
                                    {permission.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handlePageChange("prev")}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
                  >
                    Précédent
                  </button>
                  <span className="text-gray-700">
                    Page {page} sur {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange("next")}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
