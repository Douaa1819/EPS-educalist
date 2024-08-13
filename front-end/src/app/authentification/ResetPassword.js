import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import api from '../../../services/api';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { token, email } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await api.post('/reset-password', {
        token,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      setMessage(response.data.message);
      setTimeout(() => router.push('/login'), 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Une erreur est survenue');
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
          <div className="bg-zinc-800 text-white p-8 rounded-lg shadow-lg md:w-1/2 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Réinitialiser le mot de passe</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-1">Nouveau mot de passe</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre nouveau mot de passe"
                  className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="passwordConfirmation" className="block mb-1">Confirmer le mot de passe</label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Confirmez votre nouveau mot de passe"
                  className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 font-medium text-center text-white whitespace-nowrap bg-red-600 rounded-[40px] disabled:bg-red-400"
                >
                  {isLoading ? "Réinitialisation en cours..." : "Réinitialiser le mot de passe"}
                </button>
              </div>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;