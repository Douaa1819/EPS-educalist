import { useState } from 'react';
import api from '../../../services/api';
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await api.post('/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://cdn.tailwindcss.com"></script>
    </Head>
    
    <div className="min-h-screen flex flex-col items-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
    <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-center flex-grow w-full px-4">
      <div className="bg-zinc-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">Mot de passe oublié</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse email"
              className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-2 font-medium text-center text-white bg-red-600 rounded-[40px] disabled:bg-red-400"
          >
            {isLoading ? "Envoi en cours..." : "Réinitialiser le mot de passe"}
          </button>
          </form>
        {message && <p className="mt-4 text-center">{message}</p>}
        <div className="mt-4 text-center">
          <Link href="/login" className="text-red-500">Retour à la page de connexion
          </Link>
        </div>
      </div>
    </div>
    </div>
  </>
  );
};

export default ForgotPassword;