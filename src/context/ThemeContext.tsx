'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const colors = {
    primary: darkMode ? "bg-[#0F172A]" : "bg-[#F8FAFC]",
    secondary: darkMode ? "bg-[#1E293B]" : "bg-[#F1F5F9]",
    text: darkMode ? "text-gray-300" : "text-gray-700",
    accent: darkMode ? "text-[#7DD3FC]" : "text-[#0369A1]",
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};