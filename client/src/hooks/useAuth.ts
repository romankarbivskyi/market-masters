import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { fetchUser } from "@/services/api";
import { User } from "@/types";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (typeof window === "undefined") {
          setIsLoading(false);
          return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
          setIsAuthenticated(false);
          setUser(null);
          setIsLoading(false);
          return;
        }

        try {
          const response = await fetchUser(token);

          if (response.status == 200) {
            const data = response.data;
            setUser(data.data);
            setIsAuthenticated(true);

            localStorage.setItem("user", JSON.stringify(data.data));
          } else {
            logout();
          }
        } catch (error) {
          const cachedUser = localStorage.getItem("user");
          if (cachedUser) {
            setUser(JSON.parse(cachedUser));
            setIsAuthenticated(true);
          } else {
            logout();
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    isLoading,
    user,
    logout,
  };
}
