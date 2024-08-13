import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import api from "../../../services/api";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      console.log("Sending login request");
      const response = await api.post("/login", {
        email,
        password,
        remember_me: rememberMe,
      });
      console.log("Login successful:");
 
      localStorage.setItem("token", response.data.token);
      Cookies.set("token", response.data.token);
      const redirectTo = response.data.redirectTo;
      router.push(redirectTo);
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 403) {
        console.log("User is banned. Redirecting to Access Denied page.");
        router.push("/access-denied");
      } else {
        setError(
          error.response ? error.response.data.message : "An error occurred"
        );
      }
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

          <div className="bg-zinc-800 text-white p-8 rounded-lg shadow-lg md:w-1/2 w-full overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">Se connecter</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
             {error && <p className="text-red-500 mt-1">{"Email ou password Invalid " + error}</p>}
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block mb-1">
                  Mot de passe
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <span
                  className="absolute right-2 top-8 cursor-pointer text-zinc-400"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              <p className="text-base mb-4">
                Utilisez 8 caractères ou plus avec un mélange de lettres, de
                chiffres et de symboles
              </p>

              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 mt-1"
                />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 font-medium text-center text-white whitespace-nowrap bg-red-600 rounded-[40px] disabled:bg-red-400"
                >
                  {isLoading ? "Chargement..." : "Se connecter"}
                </button>
              </div>
            </form>
            <p className="text-base mt-4">
              Vous n'avez pas de compte?{" "}
              <Link href="/register" className="text-red-500">
                S'inscrire
              </Link>
            </p>
            <div className="flex items-start mb-4 mt-4">
              <Link
                href="/forgot-password"
                className="text-sm text-red-500 hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
