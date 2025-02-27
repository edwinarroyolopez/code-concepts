import Link from "next/link";
import React from "react";

const concepts = {
  react: [
    { title: "Manejo de Estado", slug: "manejo-de-estado"},
    { title: "Server State y Asincronismo", slug: "server-state" },
  ],
  javascript: [
    { title: "Funciones Avanzadas", slug: "funciones-avanzadas" },
    { title: "Promises y Async/Await", slug: "promises-y-async-await"},
  ],
};

const SideBar = () => {
  return (
    <nav className="w-64 p-4 border-r bg-gray-100 dark:bg-gray-900">
      {Object.entries(concepts).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-lg font-bold mb-2 capitalize">{category}</h2>
          <ul className="space-y-1">
            {items.map(({ title, slug }) => (
              <li key={slug}>
                <Link href={`/concepts/${category}/${slug}`}>
                  <span className="block w-full text-left p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
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
