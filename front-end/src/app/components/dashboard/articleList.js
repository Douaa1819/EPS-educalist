import React from 'react';

const ArticleList = ({ pays, articles, onModify, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow col-span-2 ml-4 mr-4">
      <h2 className="text-lg font-bold mb-2">Toutes Les Articles</h2>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors"
          >
            <div>
              <h3 className="text-md font-semibold">
                <a href='./modify'>{article.title}</a>
              </h3>
              <div
                className="text-sm text-gray-600 mb-2"
                
              />
              <p className='text-sm'>Description: {article.description}</p>
              <p className='text-sm text-decoration-line: underline'>Contenu:</p>
              <div
                className="text-sm text-gray-600 mb-2"
                dangerouslySetInnerHTML={{ __html: article.contenu }}
              />
            </div>
            
              <p className="text-sm text-gray-600">{pays.name}</p>
            
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
                onClick={() => onModify(article.id)}
              >
                Modifier
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors"
                onClick={() => onDelete(article.id)}
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

export default ArticleList;
