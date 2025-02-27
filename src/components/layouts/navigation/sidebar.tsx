import Link from "next/link";
import React from "react";
import { CONCEPTS } from "@/utils/constants";

const SideBar = () => {
  return (
    <nav className="w-64 p-4 border-r bg-gray-100 dark:bg-gray-900">
      {Object.entries(CONCEPTS).map(([category, items]) => (
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
