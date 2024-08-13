// services/api.js

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    
  },
  withCredentials: true,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Request Headers:', config.headers); 
  return config;
}, error => {
  return Promise.reject(error);
});


export async function fetchUser() {
  const response = await fetch('/api/user');
  if (!response.ok) throw new Error('Failed to fetch user data');
  return response.json();
}

export async function updateUser(data) {
  const response = await fetch('/api/user', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update user');
  return response.json();
}

export async function updatePassword(data) {
  const response = await fetch('/api/user/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update password');
  return response.json();
}

export async function deleteUser() {
  const response = await fetch('/api/user', { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete user');
  return response.json();
}


export const createUser = async (data) => {
  try {
    const response = await api.post('/register', data); 
    console.log('Response from createUser:', response);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};





export const loginUser = async (loginData) => {
  try {
    const response = await api.post('login', loginData);
    return response.data;
  } catch (error) {
    console.error('Full error:', error);
    throw error.response ? error.response.data : new Error('Une erreur est survenue');
  }
};



api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

axios.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
})

export const getPermissions = async () => {
  const response = await api.get('/permissions');
  return response.data;
};

export const createPermission = async (permissionData) => {
  const response = await api.post('/permissions', permissionData);
  return response.data;
};

export const updatePermission = async (id, permissionData) => {
  const response = await api.put(`/permissions/${id}`, permissionData);
  return response.data;
};

export const deletePermission = async (id) => {
  const response = await api.delete(`/permissions/${id}`);
  return response.data;
};



export default api;