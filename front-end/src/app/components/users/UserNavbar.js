'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import api from '../../services/api';
import { logout } from '../../../utils/auth';
const UserNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await api.post('/logout');
      localStorage.removeItem('token');
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
      <div className="w-full bg-neutral-700  mt-14 border-b border-stone-500 border-opacity-30 p-3">
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
  );
};

export default UserNavbar;