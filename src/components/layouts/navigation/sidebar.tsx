import Link from "next/link";
import React, { useContext, useState } from "react";
import { CONCEPTS } from "@/utils/constants";
import { ThemeContext } from "@/context/ThemeContext";

const SideBar = () => {
  const { theme } = useContext(ThemeContext);
  const [openCategory, setOpenCategory] = useState<string | null>(null); // Estado para manejar qué categoría está abierta

  // Clases condicionales según el tema
  const navBg = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const hoverBg = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-300";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";

  // Función para alternar la visibilidad de una categoría
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <nav className={`w-64 p-4 border-r ${navBg} ${borderColor}`}>
      {Object.entries(CONCEPTS).map(([category, items]) => (
        <div key={category} className="mb-4">
          {/* Botón de la categoría */}
          <button
            onClick={() => toggleCategory(category)}
            className={`w-full text-left flex justify-between items-center p-2 font-bold capitalize ${hoverBg} rounded ${textColor}`}
          >
            {category}
            <span>{openCategory === category ? "🔼" : "🔽"}</span>
          </button>

          {/* Lista de elementos (solo se muestra si la categoría está expandida) */}
          {openCategory === category && (
            <ul className="mt-2 space-y-1 transition-all duration-300">
              {items.map(({ title, slug }) => (
                <li key={slug}>
                  <Link href={`/concepts/${category}/${slug}`}>
                    <span className={`block w-full text-left p-2 pl-6 ${hoverBg} rounded ${textColor}`}>
                      {title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
