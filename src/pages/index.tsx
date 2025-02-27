import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        Aprende React, JavaScript y Node de forma estructurada
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Explora conceptos clave organizados en un panel lateral y accede a explicaciones claras, ejemplos prácticos y recursos útiles. Diseñado para que aprendas paso a paso, ya sea que estés comenzando o quieras profundizar tus conocimientos. 🚀
      </p>
    </div>
  );
};

Home.Layout = Layout;

export default Home;
