import React, { useState } from "react";
import { logout } from '../../../utils/auth';
import Link from 'next/link';
const Navbar = ({ isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
  };

  return (
    <>
      <div className="flex justify-end mx-4">
        <div className="flex items-center justify-end bg-zinc-100 p-4 dark:bg-zinc-800">
          {!isSidebarOpen && (
            <div className="relative mr-4">
              <div className="flex overflow-hidden relative flex-col items-start px-5 pb-5 aspect-square max-w-[32px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e85b125deb0f4562b6d591af88b49a43c775baba326b65ac22f222b8f89619?"
                  className="object-cover mt-2 absolute inset-0 size-full w-6 h-6"
                  alt="notification bell"
                />
                <span className="top-0 mt-2 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </div>
            </div>
          )}
          <div className="relative flex justify-between">
            
            <img
              src="https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"
              alt="Admin avatar"
              className="w-9 h-8 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg py-1 z-50">
              <Link href="/profile">
              <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Edite profile
                </button>
                </Link>
                <button
                   onClick={logout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border border-solid mb-4 bg-zinc-300 border-zinc-300 max-h-[1px]"></div>
    </>
  );
};

export default Navbar;
