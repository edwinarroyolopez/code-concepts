// components/topbar.tsx
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function TopBar() {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="w-full bg-gray-900 text-white py-3 px-5 flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="text-lg sm:text-xl font-bold">Zero Ed Code</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <button className="sm:hidden bg-gray-700 px-3 py-1 rounded">☰</button>
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
