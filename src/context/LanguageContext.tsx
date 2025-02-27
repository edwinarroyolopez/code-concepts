// context/LanguageContext.tsx
import { createContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "es";

interface LanguageContextProps {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: "es",
  toggleLanguage: () => {},
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Language;
    if (storedLang === "en" || storedLang === "es") {
      setLang(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage: setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
