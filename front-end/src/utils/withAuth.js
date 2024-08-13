import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return function AuthComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");
      console.log("Token retrieved:", token);

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        const userRole = decoded.role;

        if (!allowedRoles.includes(userRole)) {
          console.log("Role not allowed, redirecting...");
          router.replace(userRole === "etudiant" ? "/home" : "/dashboard");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.replace("/");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
