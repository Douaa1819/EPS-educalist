import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Navbar from '../components/dashboard/navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AssignPermissionsToRoles() {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [rolePermissions, setRolePermissions] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [rolesResponse, permissionsResponse] = await Promise.all([
        axios.get("http://localhost:8000/api/roles"),
        axios.get("http://localhost:8000/api/permissions"),
      ]);

      // Ensure data is defined and correctly formatted
      const rolesData = rolesResponse.data || [];
      const permissionsData = permissionsResponse.data || [];

      // Filter out the 'super admin' role
      const filteredRoles = rolesData.filter(role => role.name !== 'super admin');
      setRoles(filteredRoles);

      const rolePermissionsData = {};
      filteredRoles.forEach(role => {
        rolePermissionsData[role.id] = role.permissions ? role.permissions.reduce((acc, perm) => {
          acc[perm] = true;
          return acc;
        }, {}) : {};
      });
      setRolePermissions(rolePermissionsData);

      setPermissions(permissionsData);
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
      toast.error("Erreur lors du chargement des données");
    }
  };

  const updateRolePermissions = async (roleId, permissionName, isChecked) => {
    const updatedPermissions = { ...rolePermissions[roleId], [permissionName]: isChecked };
    setRolePermissions(prev => ({
      ...prev,
      [roleId]: updatedPermissions,
    }));

    const permissionsToAssign = Object.keys(updatedPermissions).filter(key => updatedPermissions[key]);
    try {
      await axios.post("http://localhost:8000/api/assign-role-permissions", {
        role_id: roleId,
        permissions: permissionsToAssign,
      });
      toast.success(`Permissions mises à jour pour le rôle ${roleId}`);
    } catch (error) {
      console.error("Erreur lors de la mise à jour des permissions du rôle:", error.response?.data || error);
      toast.error("Erreur lors de la mise à jour des permissions du rôle");
    }
  };

  const handleRolePermissionChange = (roleId, permissionName) => {
    const isChecked = !rolePermissions[roleId]?.[permissionName];
    updateRolePermissions(roleId, permissionName, isChecked);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>Gestion des Permissions Rôles - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? 'ml-[290px]' : 'ml-0 md:ml-[290px]'}`}>
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              <h1 className="text-gray-700 text-3xl font-semibold">Gestion des Permissions Rôles</h1>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Rôles</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-50 shadow-md rounded-lg overflow-hidden">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Rôle</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Permissions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.length > 0 ? (
                        roles.map(role => (
                          <tr key={role.id} className="border-b border-gray-200">
                            <td className="px-4 py-2 text-gray-700">{role.name}</td>
                            <td className="px-4 py-2">
                              <div className="flex flex-wrap gap-2">
                                {permissions.length > 0 ? (
                                  permissions.map(permission => (
                                    <div key={permission.id} className="flex items-center">
                                      <input
                                        type="checkbox"
                                        id={`role-${role.id}-${permission.id}`}
                                        className="mr-1"
                                        checked={rolePermissions[role.id]?.[permission.name] || false}
                                        onChange={() => handleRolePermissionChange(role.id, permission.name)}
                                      />
                                      <label
                                        htmlFor={`role-${role.id}-${permission.id}`}
                                        className="text-sm"
                                      >
                                        {permission.name}
                                      </label>
                                    </div>
                                  ))
                                ) : (
                                  <tr><td colSpan="2" className="text-center py-2">Aucune permission disponible</td></tr>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="text-center py-2">Aucun rôle trouvé</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
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
