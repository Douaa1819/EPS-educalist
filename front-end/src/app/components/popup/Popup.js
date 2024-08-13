// popup.js
import { useState } from 'react';

const Popup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message || 'Subscription failed');
      }
    } catch (error) {
      setMessage('Subscription failed');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white bg-opacity-70" onClick={onClose}></div>
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-[70vw] max-w-sm z-10">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">Abonnez-vous à notre Newsletter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <button className="bg-[#F52C2C] text-white py-2 px-4 rounded-lg w-full">S'ABONNER</button>
        </form>
        {message && <p className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 mt-4 text-center ">{message}</p>}
      </div>
    </div>
  );
};

export default Popup;
