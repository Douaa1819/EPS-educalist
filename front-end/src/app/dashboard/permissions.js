import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Navbar from '../components/dashboard/navbar';
import Sidebar from '../components/dashboard/Sidebar';

const PermissionManager = () => {
  const [permissions, setPermissions] = useState([]);
  const [newPermission, setNewPermission] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchPermissions();
  }, []);

  const fetchPermissions = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/permissionss', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setPermissions(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching permissions:', error);
      setError('Failed to load permissions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addPermission = async (e) => {
    e.preventDefault();
    if (!newPermission.trim()) return;
    try {
        const response = await axios.post('http://localhost:8000/api/permissions', 
            { 
                name: newPermission,
                guard_name: 'web' 
            },
            { 
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } 
            }
        );
        setPermissions([...permissions, response.data]);
        setNewPermission('');
    } catch (error) {
        setError('Failed to add permission. Please try again.');
    }
};


  const updatePermission = async (id, newName) => {
    if (!newName.trim()) return;
    try {
      const response = await axios.put(`http://localhost:8000/api/permissions/${id}`, 
        { name: newName },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setPermissions(permissions.map(p => p.id === id ? response.data : p));
    } catch (error) {
      setError('Failed to update permission. Please try again.');
    }
  };

  const deletePermission = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/permissions/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setPermissions(permissions.filter(p => p.id !== id));
    } catch (error) {
      setError('Failed to delete permission. Please try again.');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>Permission Management - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <Navbar toggleSidebar={toggleSidebar} />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-gray-700 text-3xl  flex justify-center align-center font-medium mb-6">Permission Management</h3>
              
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}

              <div className="max-w-2xl mx-auto">
                <form onSubmit={addPermission} className="flex items-center mb-6 mx-32">
                  <input
                    type="text"
                    value={newPermission}
                    onChange={(e) => setNewPermission(e.target.value)}
                    placeholder="New permission"
                    className="flex-grow shadow appearance-none border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                    Add
                  </button>
                </form>

                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </div>
                ) : (
                  <div className="bg-white shadow-md rounded-lg overflow-hidden mx-32">
                    <table className="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Permission Name
                          </th>
                          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {permissions.map((permission) => (
                          <tr key={permission.id} className="hover:bg-gray-50">
                            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">{permission.name}</p>
                            </td>
                            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                              <button
                                onClick={() => {
                                  const newName = prompt('New name:', permission.name);
                                  if (newName) updatePermission(permission.id, newName);
                                }}
                                className="text-blue-600 hover:text-blue-900 mr-3 transition duration-300 ease-in-out"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm('Are you sure you want to delete this permission?')) {
                                    deletePermission(permission.id);
                                  }
                                }}
                                className="text-red-600 hover:text-red-900 transition duration-300 ease-in-out"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PermissionManager;