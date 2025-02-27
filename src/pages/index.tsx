import { useContext } from "react";
import dynamic from "next/dynamic";

import { LanguageContext } from "@/context/LanguageContext";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const Home = () => {
  const { lang } = useContext(LanguageContext);

  const titleText =
    lang === "es"
      ? "Aprende React, JavaScript y Node de forma estructurada"
      : "Learn React, JavaScript, and Node in a structured way";

  const descriptionText =
    lang === "es"
      ? "Explora conceptos clave organizados en un panel lateral y accede a explicaciones claras, ejemplos prácticos y recursos útiles. Diseñado para que aprendas paso a paso, ya sea que estés comenzando o quieras profundizar tus conocimientos. 🚀"
      : "Explore key concepts organized in a sidebar and access clear explanations, practical examples, and useful resources. Designed to help you learn step by step, whether you're just starting or looking to deepen your knowledge. 🚀";

  return (
    <div className="flex flex-col items-center min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">{titleText}</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">{descriptionText}</p>
    </div>
  );
};

Home.Layout = Layout;

export default Home;
