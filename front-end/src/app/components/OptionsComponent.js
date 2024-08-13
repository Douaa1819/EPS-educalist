import { useState, useEffect } from 'react';
import axios from 'axios';

const OptionsComponent = ({ onFilter, onReset }) => {
  const [options, setOptions] = useState({
    metier: [],
    domaine: [],
    specialite: []
  });
  const [dropdownStates, setDropdownStates] = useState({
    metier: false,
    domaine: false,
    specialite: false
  });
  const [selectedOptions, setSelectedOptions] = useState({
    metier: '',
    domaine: '',
    specialite: ''
  });
  const [filteredResults, setFilteredResults] = useState([]);
  const [showNoResultsAlert, setShowNoResultsAlert] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchAllOptions();
  }, []);

  const fetchAllOptions = async () => {
    const types = ['metier', 'domaine', 'specialite'];
    for (const type of types) {
      await fetchOptions(type);
    }
  };

  const fetchOptions = async (type) => {
    const url = `http://localhost:8000/api/${type}s`;
    try {
      const response = await axios.get(url);
      setOptions(prev => ({ ...prev, [type]: response.data }));
    } catch (error) {
      console.error(`Error fetching ${type} options:`, error);
    }
  };

  const handleOptionClick = (type, option) => {
    setSelectedOptions(prev => ({ ...prev, [type]: option.id }));
    setDropdownStates(prev => ({ ...prev, [type]: false }));
  };

  const renderOptions = (type) => {
    if (dropdownStates[type]) {
      return (
        <div className="options-dropdown absolute mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
          <ul className="py-1">
            {options[type].map((option, index) => (
              <li 
                key={index} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(type, option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  const toggleDropdown = (type) => {
    setDropdownStates(prev => ({
      metier: false,
      domaine: false,
      specialite: false,
      [type]: !prev[type]
    }));
  };

  const handleFilterClick = async () => {
    const url = 'http://localhost:8000/api/filter-etudes';
    const params = {};

    if (selectedOptions.metier) params.metier_id = selectedOptions.metier;
    if (selectedOptions.domaine) params.domaine_id = selectedOptions.domaine;
    if (selectedOptions.specialite) params.specialite_id = selectedOptions.specialite;

    console.log('Filter params:', params); // Log the params to the console

    try {
      const response = await axios.get(url, { params });
      if (response.data.length > 0) {
        setFilteredResults(response.data);
        setShowNoResultsAlert(false); // Hide the alert if results are found
      } else {
        setFilteredResults([]); // Clear any existing results
        setShowNoResultsAlert(true); // Show the alert if no results are found
      }
      onFilter(); // Notify parent component that filtering has occurred
    } catch (error) {
      console.error('Error fetching filtered results:', error);
      setShowNoResultsAlert(true); // Show the alert on error
    }
  };

  const handleResetClick = () => {
    setSelectedOptions({
      metier: '',
      domaine: '',
      specialite: ''
    });
    setFilteredResults([]);
    setShowNoResultsAlert(false);
    onReset(); // Call the onReset function to reset the parent component state
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col justify-center w-4/5 mx-auto space-y-4 mt-[5%] relative">
      <div className="flex justify-center">
        <div className="flex space-x-4">
          {['metier', 'domaine', 'specialite'].map((type) => (
            <div key={type} className="relative">
              <button 
                className="flex items-center justify-between border border-black rounded-full px-4 py-2" 
                onClick={() => toggleDropdown(type)}
              >
                {options[type].find(option => option.id === selectedOptions[type])?.name || (type.charAt(0).toUpperCase() + type.slice(1))} <span className="ml-2">&#9660;</span>
              </button>
              {renderOptions(type)}
            </div>
          ))}
          <button 
            className="bg-[#F52C2C] text-white rounded-full px-4 py-2"
            onClick={handleFilterClick}
          >
            Filter
          </button>
          <button 
            className="bg-gray-500 text-white rounded-full px-4 py-2"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
      {showNoResultsAlert && (
        <div className="p-5 mb-4 text-lg text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 mt-4 text-center ">
          No results found.
        </div>
      )}
      <div className="filtered-results mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredResults.length > 0 ? (
          filteredResults.map(result => (
            <div 
              key={result.id} 
              className="card bg-[#F52C2C] border border-gray-300 rounded-lg shadow-md p-8 flex flex-col items-center mb-4 w-full h-[400px] cursor-pointer"
              onClick={() => handleCardClick(result)}
            >
              <img src='assets/images/india.png' alt={result.title} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-center">{result.title}</h3>
              <p className="text-lg text-center">{result.pays ? result.pays.name : 'Unknown Country'}</p>
            </div>
          ))
        ) : null}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md mx-auto relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img src='assets/images/india.png' alt={selectedItem.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-3xl font-bold mb-4">{selectedItem.title}</h2>
            <p className="text-lg mb-2">{selectedItem.description}</p>
            <p className="text-lg text-red-600">{selectedItem.pays ? selectedItem.pays.name : 'Unknown Country'}</p>
            <p className="text-sm">Created at: {selectedItem.created_at ? formatDateTime(selectedItem.created_at) : 'Unknown date'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionsComponent;
