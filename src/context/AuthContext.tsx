import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { createContext } from "react";

const { VITE_LOGIN_URL } = import.meta.env;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext(null);

export function AuthProvider({ children }: AuthProviderProps) {
  useEffect(() => {
    const login = async () => {
      console.log(VITE_LOGIN_URL);
      const data = (await axios.get(String(VITE_LOGIN_URL))).data;
      console.log(data);
    };
    login();
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
