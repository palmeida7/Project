import React, { useState, useEffect, createContext } from "react";
import { auth } from "./Config";

export const AuthContext = createContext();

export default ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(true);
      setUserData(user);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
