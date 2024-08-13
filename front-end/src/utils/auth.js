// utils/auth.js

import axios from 'axios';
import Cookies from "js-cookie";

export const getAuthToken = () => {
    return Cookies.get("token");
  };
export const logout = async () => {
  try {
    await axios.post('http://localhost:8000/api/logout');
    localStorage.removeItem('user');
    window.location.href = '/login';
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};


