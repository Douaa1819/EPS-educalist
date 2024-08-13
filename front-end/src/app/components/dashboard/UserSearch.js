import { useState } from 'react';
import axios from 'axios';

const UserSearch = ({ onSearchResults, role = 'all' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/users/search?term=${searchTerm}&role=${role}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email or role"
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default UserSearch;