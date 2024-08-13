import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../../../services/api";
import { fetchUsers }  from "../../../services/api";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';
import { logout } from '../../utils/auth';

const Profile = () => {
  const [user, setUser] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });
  const [passwordData, setPasswordData] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
        try {
            const data = await fetchUsers();
            setUserData(data);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
        }
    };

    getUsers();
}, []);

  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.put("/user", formData);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Vérification des champs
    if (
      !passwordData.current_password ||
      !passwordData.password ||
      !passwordData.password_confirmation
    ) {
      toast.error("All password fields are required");
      setIsLoading(false);
      return;
    }

    try {
      await api.put("/user/password", {
        current_password: passwordData.current_password,
        password: passwordData.password,
        password_confirmation: passwordData.password_confirmation,
      });
      toast.success("Password updated successfully");
      setPasswordData({
        current_password: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      console.error("Error updating password:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        Object.values(error.response.data.errors).forEach((errorMessages) => {
          errorMessages.forEach((message) => toast.error(message));
        });
      } else {
        toast.error("Failed to update password");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      setIsLoading(true);
      try {
        await api.delete("/user");
        toast.success("Account deleted successfully");
        router.push("/login");
      } catch (error) {
        console.error("Error deleting account:", error);
        toast.error("Failed to delete account");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-900">
      <div className="w-full bg-neutral-700  border-b border-stone-500 border-opacity-30 p-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/">
            <div className="flex flex-col items-center cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/945fae78ad61d78b4d1f1e2e19b1bf567c7d215411ded27d4e5635137769f6a8?apiKey=93bb9bcd81d443648999334442ead41e&"
                className="shrink-0 max-w-full aspect-[1.72] w-[100px]"
                alt="Educaliste Logo"
              />
              <div className="mt-1 text-sm text-white tracking-[11.5px] text-center">
                Educaliste
              </div>
            </div>
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white focus:outline-none"
            >
              <img
                src="https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"
                alt="Profile"
                className="w-11 h-10 rounded-full mr-2"
              />
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link href="/profile">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Éditer le profil
                  </div>
                </Link>

                <Link href="/profile">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  liste de favoris
                  </div>
                </Link>
                <div
                  onClick={logout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Déconnexion
                </div>
                </div>
            )}
          </div>
        </div>
      </div>
        <div className="container mx-auto p-4 max-w-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-red-600 dark:text-red-500">
            Edit Profile
          </h1>
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 disabled:bg-red-400"
              >
                {isLoading ? "Updating..." : "Update Profile"}
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-red-500">
              Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="current_password"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current_password"
                  name="current_password"
                  value={passwordData.current_password}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={passwordData.password}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={passwordData.password_confirmation}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-red-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 disabled:bg-red-400"
              >
                {isLoading ? "Changing..." : "Change Password"}
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-red-500">
              Delete Account
            </h2>
            <button
              onClick={handleDeleteAccount}
              disabled={isLoading}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 disabled:bg-red-400"
            >
              {isLoading ? "Deleting..." : "Delete Account"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Profile;