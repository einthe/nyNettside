"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "no";

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
} | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [language, setLanguage] = useState<Language>("en");
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") as Language | null;
    if (savedLanguage === "en" || savedLanguage === "no") {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
        const newLang = prev === "en" ? "no" : "en";
        localStorage.setItem("preferredLanguage", newLang);
        return newLang;
    });
    // (prev === "en" ? "no" : "en"));
  };

  if (language === null) return null;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};