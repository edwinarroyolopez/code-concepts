import { useContext } from "react";
import dynamic from "next/dynamic";

import { LanguageContext } from "@/context/LanguageContext";
import Head from "next/head";

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
           <Head>
        <title>Zero Ed Code - {titleText}</title>
        <meta name="description" content={descriptionText} />
        

        {/* Open Graph (para compartir en redes sociales) */}
        <meta property="og:title" content={titleText} />
        <meta property="og:description" content={descriptionText} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://res.cloudinary.com/db3x4vzj0/image/upload/v1740839117/1692027941396_jz0rp3.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://code-concepts-zeroed.netlify.app`} />
        <meta property="og:site_name" content="Zero Ed Code" />

        {/* Twitter Card (para compartir en Twitter/X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={titleText} />
        <meta name="twitter:description" content={descriptionText} />
        <meta name="twitter:image" content="https://res.cloudinary.com/db3x4vzj0/image/upload/v1740839117/1692027941396_jz0rp3.jpg" />
      </Head>
      <h1 className="text-3xl font-bold text-gray-800">{titleText}</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">{descriptionText}</p>
    </div>
  );
};

Home.Layout = Layout;

export default Home;
