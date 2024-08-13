import { useState, useEffect } from 'react';
import axios from 'axios';

const SubscribersList = ({ onModify, onDelete }) => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/subscribers');
        setSubscribers(response.data);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">All Subscribers</h2>
      <ul className="space-y-4">
        {subscribers.map((subscriber) => (
          <li key={subscriber.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
            <div>
              <p className="text-gray-600">{subscriber.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onModify(subscriber.id)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors"
              >
                Modifier
              </button>
              <button
                onClick={() => onDelete(subscriber.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscribersList;
