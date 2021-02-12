import React, { useState, createContext, useContext, useMemo } from "react";

import { languageOptions, dictionaryList } from "../languages";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "de",
  dictionary: dictionaryList.de.dictionary,
  antdLocale: dictionaryList.de.antdLocale,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState("de");

  const provider = {
    userLanguage,
    dictionary: useMemo(() => dictionaryList[userLanguage]?.dictionary, [
      userLanguage,
    ]),
    antdLocale: useMemo(() => dictionaryList[userLanguage]?.antdLocale, [
      userLanguage,
    ]),
    userLanguageChange: (selected, isReload) => {
      const newLanguage = languageOptions[selected] ? selected : "de";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
      if (isReload) {
        window.location.reload();
      }
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom Hook
export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
