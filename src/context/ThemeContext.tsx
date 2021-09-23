import React from "react";
import { useEffect } from "react";
import { ReactNode, useState } from "react";
import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeValue {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeValue>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "light") {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    if (!dark) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.removeItem("theme");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
