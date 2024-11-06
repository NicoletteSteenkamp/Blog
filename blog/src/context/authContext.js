import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("/auth/login", inputs);
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally: Set up state to display an error message to the user
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally: Display an error message to the user if needed
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
