// components/SignupForm.js
import React from 'react';

const SignupForm = () => {
    return (
        <div className=" shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-out">
            <h2 className="text-lg font-semibold mb-2 text-black text-center">Inscrivez-vous sur <span className='underline decoration-[#F52C2C]'> Educalist.Com</span> <br></br>C'EST GRATUIT !</h2>
            <form>
                <input
                    type="text"
                    placeholder="Nom"
                    className="border border-black py-2 px-4 rounded w-full mb-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-black py-2 px-4 rounded w-full mb-2"
                />
                <input
                    type="password"
                    placeholder="Mot de Passe"
                    className="border border-black py-2 px-4 rounded w-full mb-2"
                />
                <button type="submit" className="bg-[#F52C2C] text-white py-2 px-4 rounded w-full hover:bg-red-500 transition-all duration-300 ease-out">
                    INSCRIPTION
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
