import Link from "next/link";
import React, { useContext } from "react";
import { CONCEPTS } from "@/utils/constants";
import { ThemeContext } from "@/context/ThemeContext";

const SideBar = () => {
  const { theme } = useContext(ThemeContext);

  // Clases condicionales según el tema
  const navBg = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const hoverBg = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-300";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-800";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";

  return (
    <nav className={`w-64 p-4 border-r ${navBg} ${borderColor}`}>
      {Object.entries(CONCEPTS).map(([category, items]) => (
        <div key={category}>
          <h2 className={`text-lg font-bold mb-2 capitalize ${textColor}`}>
            {category}
          </h2>
          <ul className="space-y-1">
            {items.map(({ title, slug }) => (
              <li key={slug}>
                <Link href={`/concepts/${category}/${slug}`}>
                  <span
                    className={`block w-full text-left p-2 ${hoverBg} rounded ${textColor}`}
                  >
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
