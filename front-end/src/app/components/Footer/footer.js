"use client";
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    <div className="bg-black text-white p-6">
       {message && 
        <div id="alert-2" className={`flex items-center p-4 mb-4 text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 rounded-lg`} role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-medium">
            {message}
          </div>
          <button 
            type="button" 
            className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" 
            onClick={() => {
              const alertElement = document.getElementById('alert-2');
              if (alertElement) {
                alertElement.remove(); // Remove the alert from DOM
              }
            }}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      }
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-zinc-700 pb-6 mb-6">
          <h2 className="text-red-600 text-2xl mb-4 md:mb-0">S'ABONNER</h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Entrez votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full md:w-auto bg-zinc-800 text-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button type="submit" className="bg-red-600 text-white p-2 rounded-md">S'abonner</button>
          </form>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1">
            <img src="/assets/images/logofooter.png" alt="Logo" className="mb-4" />
            <p className="mb-4">Suivez-nous</p>
            <div className="flex space-x-2">
              <a href="#" className="text-white">
                <img src="/assets/images/logofooter.png" alt="LinkedIn" aria-hidden="true" />
              </a>
              <a href="#" className="text-white">
                <img src="/assets/images/logofooter.png" alt="Facebook" aria-hidden="true" />
              </a>
              <a href="#" className="text-white">
                <img src="/assets/images/logofooter.png" alt="Instagram" aria-hidden="true" />
              </a>
              <a href="#" className="text-white">
                <img src="/assets/images/logofooter.png" alt="Pinterest" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-red-600 mb-4">Produit</h3>
            <ul>
              <li className="mb-2">Page d'atterrissage</li>
              <li className="mb-2">Constructeur de popup</li>
              <li className="mb-2">Conception Web</li>
              <li className="mb-2">Contenu</li>
              <li className="mb-2">Intégrations</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-red-600 mb-4">Cas d'utilisation</h3>
            <ul>
              <li className="mb-2">Web-designers</li>
              <li className="mb-2">Marketeurs</li>
              <li className="mb-2">Petites entreprises</li>
              <li className="mb-2">Constructeur de sites Web</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-red-600 mb-4">Entreprise</h3>
            <ul>
              <li className="mb-2">À propos de nous</li>
              <li className="mb-2">Carrières</li>
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Équipes</li>
              <li className="mb-2">Contactez-nous</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-red-600 mb-4">Contactez-nous</h3>
            <ul>
              <li className="mb-2 flex items-center">
                <img src="https://placehold.co/24x24" alt="Location" aria-hidden="true" className="mr-2" /> AGADIR, MARRAKECH, CASABLANCA ET RABAT
              </li>
              <li className="mb-2 flex items-center">
                <img src="https://placehold.co/24x24" alt="Email" aria-hidden="true" className="mr-2" /> info@epseducation.ma
              </li>
              <li className="mb-2 flex items-center">
                <img src="https://placehold.co/24x24" alt="Phone" aria-hidden="true" className="mr-2" /> Lundi au Vendredi 9.00 - 13.00 / 14:00-18:00
              </li>
              <li className="mb-2 flex items-center">
                <img src="https://placehold.co/24x24" alt="Clock" aria-hidden="true" className="mr-2" /> Samedi 9.00 - 13.00
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t border-zinc-700 pt-6 mt-6">
          &copy; 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
