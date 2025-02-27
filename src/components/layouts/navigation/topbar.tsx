import { useEffect, useState } from "react";

export default function TopBar() {
  const [lang, setLang] = useState<"es" | "en">("es");

  // Al montar, leemos el idioma de localStorage (por defecto "es")
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "es") {
      setLang(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: "es" | "en" = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <header className="w-full bg-gray-900 text-white py-3 px-5 flex items-center justify-between">
      <h1 className="text-lg sm:text-xl font-bold">Zero Ed Code</h1>
      <div className="flex items-center space-x-4">
        <button className="sm:hidden bg-gray-700 px-3 py-1 rounded">
          ☰
        </button>
        <button
          onClick={toggleLanguage}
          className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600"
        >
          {lang === "en" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
