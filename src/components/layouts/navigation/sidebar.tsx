import React, { useMemo, useState } from "react";

const SideBar = ({ layout }: { layout?: string }) => {
  const concepts = {
    React: [
      "Uso de todos los hooks",
      "Manejo de estado",
      "Server State y Asincronismo",
      "Patrones de codificación",
      "Optimización de rendimiento",
      "Optimización de assets",
      "Portales para renderizado",
      "Testing",
      "CSS-in-JS",
      "Node.js y Vite",
      "DevOps y monitoreo",
      "Microfrontends y SEO",
    ],
    JavaScript: [
      "Funciones avanzadas",
      "Promises y Async/Await",
      "Métodos de arrays",
      "CommonJS vs ESM",
      "Clases en JavaScript",
      "Manipulación del DOM",
      "APIs del navegador",
      "Técnicas de optimización",
    ],
  };

  return (
    <nav className="w-64 p-4 border-r bg-gray-100 dark:bg-gray-900">
      {Object.entries(concepts).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-lg font-bold mb-2">{category}</h2>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item}>
                <button
                  className="w-full text-left p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded"
                  // onClick={() => setSelectedConcept(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
