import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { createUser } from "../../../services/api";
import Cookies from "js-cookie";
const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    role: "etudiant",
  });

  
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const toggleShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.location ||
      !formData.role
    ) {
      setError("Tous les champs sont obligatoires");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await createUser(formData);
      // console.log("User created:", response);
      console.log("User created:");
      Cookies.set("token", response.token); 
      localStorage.setItem("token", response.token); 
      switch (formData.role) {
        case "admin":
        case "redacteur":
        case "super admin":
          router.push("/dashboard");
          break;
        default:
          router.push("/home");
          break;
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setError(
        error.message || "Une erreur est survenue lors de l'inscription"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Inscription - Educaliste</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="min-h-screen flex flex-col items-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <Navbar />

        <div className="flex flex-col md:flex-row items-center justify-center flex-grow w-full px-4">
          <div className="flex flex-col items-center md:w-1/2 p-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44d79f105db0ed07135f2a263143c063f3beeb2ee39d538c233a4549a6c1ea4f?apiKey=93bb9bcd81d443648999334442ead41e&"
              className="w-full mb-4 max-w-[164px]"
              alt="Welcome Image"
            />
            <h1 className="text-red-500 text-4xl font-bold mb-4 text-center max-w-[522px] font-Shopie">
              Bienvenue à Educaliste
            </h1>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fbc058dad2e49969bd60636f5b15a495e34b77b74ced5b1c1955ebd4334373a?apiKey=93bb9bcd81d443648999334442ead41e&"
              className="w-full max-w-[394px]"
              alt="Illustration"
            />
          </div>

          <div className="bg-zinc-800 text-white p-8 rounded-lg shadow-lg md:w-1/2 w-full">
            <h2 className="text-2xl font-bold mb-6">S'inscrire</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Prénom"
                  className="p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 mb-4 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">J'habite à :</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Safi">Safi</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Agadir">Agadir</option>
                  <option value="Fès">Fès</option>
                  <option value="Tanger">Tanger</option>
                  <option value="Meknès">Meknès</option>
                  <option value="Oujda">Oujda</option>
                  <option value="Tetouan">Tétouan</option>
                  <option value="Kenitra">Kénitra</option>
                  <option value="El Jadida">El Jadida</option>
                  <option value="Khouribga">Khouribga</option>
                  <option value="Beni Mellal">Beni Mellal</option>
                  <option value="Nador">Nador</option>
                  <option value="Settat">Settat</option>
                  <option value="Khemisset">Khemisset</option>
                  <option value="Ksar El Kebir">Ksar El Kebir</option>
                  <option value="Guelmim">Guelmim</option>
                  <option value="Mohammedia">Mohammedia</option>
                  <option value="Essaouira">Essaouira</option>
                  <option value="Berkane">Berkane</option>
                  <option value="Sidi Kacem">Sidi Kacem</option>
                  <option value="Inezgane">Inezgane</option>
                  <option value="Beni Ansar">Beni Ansar</option>
                  <option value="Sefrou">Sefrou</option>
                  <option value="Sidi Slimane">Sidi Slimane</option>
                  <option value="Bouskoura">Bouskoura</option>
                  <option value="Benslimane">Benslimane</option>
                  <option value="Fnideq">Fnideq</option>
                  <option value="Youssoufia">Youssoufia</option>
                  <option value="Tan-Tan">Tan-Tan</option>
                </select>
              </div>
              <div className="relative mb-4">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <span
          className="absolute right-2 top-2 cursor-pointer text-zinc-400"
          onClick={toggleShowPassword}
        >
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </div>

      <div className="relative mb-4">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmer votre mot de passe"
          className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <span
          className="absolute right-2 top-2 cursor-pointer text-zinc-400"
          onClick={toggleShowConfirmPassword}
        >
          {showConfirmPassword ? 'Hide' : 'Show'}
        </span>
      </div>
              <p className="text-sm mb-4">
                Utilisez 8 caractères ou plus avec un mélange de lettres, de
                chiffres et de symboles
              </p>
              <div className="flex items-start mb-4">
                <input type="checkbox" className="mr-2 mt-1" />
                <p className="text-sm">
                  En créant un compte, j'accepte{" "}
                  <a href="/terms/terms" className="text-red-500">
                    nos conditions
                  </a>{" "}
                  d'utilisation et notre politique de confidentialité
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 font-medium text-center text-white whitespace-nowrap bg-red-600 rounded-[40px] disabled:bg-red-400"
                >
                  {isLoading ? "Chargement..." : "s'inscrire"}
                </button>

                <div className="mt-6 flex flex-col items-center">
                  <button
                    onClick={() => signIn("google")}
                    className="flex items-center justify-center w-53 px-6 py-2 mb-2 font-medium text-center text-white whitespace-nowrap bg-blue-600 rounded-[40px] hover:bg-blue-700"
                  >
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    S'inscrire avec Google
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    className="flex items-center justify-center w-53 px-6 py-2 font-medium text-center text-white whitespace-nowrap bg-blue-800 rounded-[40px] hover:bg-blue-900 disabled:bg-blue-400"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                    S'inscrire avec Facebook
                  </button>
                </div>
              </div>
            </form>
            <p className="text-sm mt-4">
              Vous avez déjà un compte?{" "}
              <Link href="/login" className="text-red-500">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );

};

export default Register;
