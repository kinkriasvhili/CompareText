/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvder = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = (lang) => {
    setLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
