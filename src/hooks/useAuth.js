import { useState, useEffect } from "react";
import authService from "../services/authService";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.isAuthenticated()
  );

  useEffect(() => {
    const token = authService.isAuthenticated();
    setIsAuthenticated(token);
  }, []);

  return { isAuthenticated };
};

export default useAuth;
