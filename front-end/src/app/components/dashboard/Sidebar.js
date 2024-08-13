import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const canAddUser = permissions.includes("ajouter utilisateur");
  const canEditRole = permissions.includes("modifier le Role");
  const canAddArticles = permissions.includes("ajouter articles");
  const canAssignPermissionToUser = permissions.includes("effectuer une permission");
  const canAssignPermissionToRole = permissions.includes("effectuer une permission");
  const canBlockWriters = permissions.includes("bloquer les redacteurs");
  const canBlockStudents = permissions.includes("bloquer les etudiants");

  useEffect(() => {
    const fetchPermissionsAndRoles = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get("http://localhost:8000/api/user-permissions", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPermissions(response.data.permissions);
        setIsSuperAdmin(response.data.isSuperAdmin);
      } catch (error) {
        console.error("Error fetching permissions and roles:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissionsAndRoles();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsSelectVisible(false);
    if (event.target.value === 'students') {
      redirectToStudentsPage();
    } else if (event.target.value === 'writers') {
      redirectToWritersPage();
    }
  };


  const redirectToNewsManager = () => {
    router.push('/dashboard/news');
    setIsSelectVisible(false);
  };

  const redirectToHomePage = () => {
    router.push('/');
    setIsSelectVisible(false);
  };

  const redirectToStatisticPage = () => {
    router.push('/dashboard');
    setIsSelectVisible(false);
  };

  const redirectToStudentsPage = () => {
    setSelectedOption('students');
    setIsSelectVisible(false);
  };

  const redirectToWritersPage = () => {
    setSelectedOption('writers');
    setIsSelectVisible(false);
  };

  const redirectToSubsecribersPage = () => {
    router.push('/subsecribers/subsecriber');
    setIsSelectVisible(false);
  };

  const redirectToFilterPage = () => {
    router.push('/filters/filter');
    setIsSelectVisible(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isOpen);
  };

  const handleUsersClick = () => {
    setIsSelectVisible(!isSelectVisible);
  };

  const redirectToCommentsPage = () => {
    router.push("#");
    setIsSidebarOpen(false);
  };

  const redirectToArticlesPage = () => {
    router.push('/article/article');
    setIsSelectVisible(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen overflow-scroll flex flex-col pt-5 pb-10 mx-auto w-full text-base font-semibold leading-6 whitespace-nowrap bg-white rounded-none border border-red-600 border-solid md:max-w-[290px] text-zinc-800 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300`}
    >
      <button
        className={`p-2 ${isOpen ? "" : "md:disabled"} bg-white text-black rounded self-end aspect-square focus:outline-none`}
        onClick={() => setIsSidebarOpen(!isOpen)}
        disabled={!isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div className="flex flex-col items-start pr-3 pl-8 w-full text-sm text-center text-black tracking-[11.5px]">

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b117d7f7db74f14645b8537d4bb7e11045a45b7c9015b34852a69134ad1dced9?"
          className="ml-1 max-w-full aspect-[1.72] w-[90px]"
        />
        <div className="mt-6 mb-10 ml-1 border-0 border-black border-solid">
          Educaliste
        </div>
      </div>

      <div className="flex flex-col px-3 mt-5">
        <div className="flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer">
          <Link href="/dashboard">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba1ac9afdbf27a528e4f8c44b146d126daefdbb0b0eddf47f3a222263b7dc58?"
              className="shrink-0 w-5 aspect-[0.8]"
            />
            <div>Statistique</div>
          </Link>
        </div>

        <div
          className="flex gap-2 ml-3 mb-5 self-start px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-100"
          onClick={handleUsersClick}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d51102a909b189ec9f3597c70f4189078a2daea97a627859e011e52acef1fdc0?"
            className="shrink-0 self-start aspect-square w-[18px]"
          />
          <div>Users</div>
        </div>

        {isSelectVisible && (
          <div className="flex flex-col items-center mt-3">
            <select
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleOptionChange}
              value={selectedOption}
            >
              <option value="">Choisir une option</option>
              <option value="students">Étudiants</option>
              <option value="writers">Rédacteurs</option>
              {isSuperAdmin && <option value="admin">Admins</option>}
            </select>
            <div className="mt-3 w-full flex justify-center">
              {selectedOption === "students" && (canBlockStudents || isSuperAdmin) && (
                <Link
                  href="/etudiants"
                  className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Voir tous les Étudiants
                </Link>
              )}

              {selectedOption === "writers" && (canBlockWriters || isSuperAdmin) && (
                <Link
                  href="/redacteurs"
                  className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Voir tous les Rédacteurs
                </Link>
              )}
              
              {selectedOption === "admin" && (canAddUser || isSuperAdmin) && (
                <Link
                  href="/admins"
                  className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Voir tous les Admins
                </Link>
              )}
            </div>
          </div>
        )}


{(isSuperAdmin) && (
       <div className="flex gap-2 px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-100 self-start mt-3 ml-2">
       <Link href="/permissions">Gestion des permission</Link>
     </div>
        )}

        {(canAddUser || isSuperAdmin) && (
          <div className="flex gap-2 px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-100 self-start mt-3 ml-2">
            <Link href="/users">
              Ajouter un utilisateur
            </Link>
          </div>
        )}

        {(canEditRole || isSuperAdmin) && (
          <div className="flex gap-2 px-3 py-2 rounded-2xl cursor-pointer hover:bg-gray-100 self-start mt-3 ml-2">
            <Link href="/roles">
              Modifier le Rôle
            </Link>
          </div>
        )}

        {(canAddArticles || isSuperAdmin) && (
          <div
            className="flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer mb- mt-3 ml-2"
            onClick={redirectToArticlesPage}
          >
            <div>Articles</div>
          </div>
        )}

        {(canAssignPermissionToUser || isSuperAdmin) && (
          <div
            className="flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer mb- mt-3 ml-2"
            onClick={() => router.push("/assigner-permission")}
          >
            <div>Attribuer des permissions aux utilisateurs</div>
          </div>
        )}

        {(canAssignPermissionToRole || isSuperAdmin) && (
          <div
            className="flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer mb- mt-3 ml-2"
            onClick={() => router.push("/assigner-permission-role")}
          >
            <div>Attribuer des permissions aux rôles</div>
          </div>
        )}


<div className="sidebar-item flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer" onClick={redirectToNewsManager}>
      
      <div>News</div>
    </div>

        <div className="flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer">
          <Link href="/comments">
        
            <div> commentaires</div>
          </Link>
        </div>
        {( isSuperAdmin) && (
        <div className="flex gap-2 mb-8 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer">
          <Link href="/filters/filter">
            <div>Filtres</div>
          </Link>
        </div>

        
         )}

{( isSuperAdmin) && (
           <div className="flex gap-2 hover:bg-gray-100 self-start px-3 py-2 rounded-2xl cursor-pointer ml-2" onClick={redirectToSubsecribersPage}>
         
          <div>Subsecribers</div>
        </div>
           )}
      </div>


   
    </div>
  );
};

export default Sidebar;
