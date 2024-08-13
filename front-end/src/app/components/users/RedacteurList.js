import React from 'react';
import Head from 'next/head';
import UserSearch from "../dashboard/UserSearch";



const RedacteurList = ({ redacteurs,handleBanToggle, setRedacteurs}) => {
  const handleSearchResults = (results) => {
    const formattedResults = results
      .filter(user => user.role === 'redacteur')
      .map(user => ({
        id: user.id,
        user: {
          firstName: user.user.firstName,
          lastName: user.user.lastName,
          email: user.user.email
        },
        is_banned: user.is_banned
      }));
      setRedacteurs(formattedResults);
  };
  return (
    <>
      <Head>
        <title>Liste des Rédacteurs - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 text-3xl font-medium mb-6">Liste des Rédacteurs</h3>
          <UserSearch onSearchResults={handleSearchResults} />
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                  <tr>
                    <th className="py-3 px-6 text-left">Nom</th>
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {redacteurs.map((redacteur) => (
                    <tr key={redacteur.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{redacteur.user.firstName} {redacteur.user.lastName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <span>{redacteur.user.email}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <button
                          className={`py-1 px-3 rounded-full text-xs font-semibold focus:outline-none transition duration-300 ease-in-out ${
                            redacteur.is_banned
                              ? 'bg-green-100 text-green-600 hover:bg-green-200'
                              : 'bg-red-100 text-red-600 hover:bg-red-200'
                          }`}
                          onClick={() => handleBanToggle(redacteur.id, redacteur.is_banned)}
                        >
                          {redacteur.is_banned ? 'Débloquer' : 'Bloquer'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RedacteurList;
