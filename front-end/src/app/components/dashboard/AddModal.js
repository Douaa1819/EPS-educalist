import React, { useState } from 'react';
import axios from 'axios';

const AddModal = ({ selectedOption, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleAdd = async () => {
    try {
      const response = await axios.post(`/api/${selectedOption}`, { name });
      onAdd(response.data);
      setName(''); // Clear the input field
    } catch (error) {
      setError('Error adding data');
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New {selectedOption.slice(0, -1)}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-colors mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
