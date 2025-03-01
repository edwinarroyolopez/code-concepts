import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { loadConcept } from "@/utils/loadConcept";
import { ConceptSection, Concept } from "@/types/concept";
import Table from "@/components/ui/table";

import { LanguageContext } from "@/context/LanguageContext";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const ConceptPage = () => {
  const router = useRouter();
  const { category, concept } = router.query;
  const [conceptData, setConceptData] = useState<Concept | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    if (typeof category === "string" && typeof concept === "string") {
      loadConcept(category, concept).then(setConceptData);
    }
  }, [category, concept]);

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!conceptData) return <p className="text-center p-4">Cargando...</p>;

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
        <Head>
        <title>{conceptData.title[lang]} - Conceptos de {category}</title>
        <meta name="description" content={conceptData.description[lang]} />
        <meta name="keywords" content={`conceptos, ${category}, ${conceptData.title[lang]}`} />

        {/* Open Graph (para compartir en redes sociales) */}
        <meta property="og:title" content={conceptData.title[lang]} />
        <meta property="og:description" content={conceptData.description[lang]} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://res.cloudinary.com/db3x4vzj0/image/upload/v1740839117/1692027941396_jz0rp3.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://code-concepts-zeroed.netlify.app//${category}/${concept}`} />
        <meta property="og:site_name" content="Zero Ed Code" />

        {/* Twitter Card (para compartir en Twitter/X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={conceptData.title[lang]} />
        <meta name="twitter:description" content={conceptData.description[lang]} />
        <meta name="twitter:image" content="https://res.cloudinary.com/db3x4vzj0/image/upload/v1740839117/1692027941396_jz0rp3.jpg" />
      </Head>

      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        {conceptData.title[lang]}
      </h1>
      <p className="mt-4 text-justify">{conceptData.description[lang]}</p>

      {conceptData.sections?.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            {section.title[lang]}
          </h2>

          {section.type === "text" && (
            <div className="relative">
              {section.code && (
                <SyntaxHighlighter
                  language="javascript"
                  style={dracula}
                  showLineNumbers
                  className="rounded-md overflow-x-auto"
                >
                  {section.code}
                </SyntaxHighlighter>
              )}
              <p className="text-justify">{section.content[lang]}</p>
            </div>
          )}

          {section.type === "list" && (
            <ul className="list-disc list-inside pl-4">
              {section.content[lang].map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {section.type === "code" && (
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm hover:bg-gray-600"
                onClick={() => handleCopy(section.content, index)}
              >
                {copied === index ? "Copiado ✅" : "📋 Copiar"}
              </button>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
                className="rounded-md overflow-x-auto"
              >
                {section.content}
              </SyntaxHighlighter>
            </div>
          )}

          {section.type === "table" && (
            <Table
              title={section.title[lang]}
              headers={section.headers[lang]}
              rows={section.rows.map((row) => row[lang])}
            />
          )}

          {section.type === "example" && (
            <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold">
                {section.caseTitle[lang]}
              </h3>
              <p className="mt-2 text-justify">
                {section.caseDescription[lang]}
              </p>
              <button
                className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm hover:bg-gray-600"
                onClick={() => handleCopy(section.code, index)}
              >
                {copied === index ? "Copiado ✅" : "📋 Copiar"}
              </button>
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
                className="rounded-md overflow-x-auto"
              >
                {section.code}
              </SyntaxHighlighter>
              <p className="mt-4 font-semibold text-justify">
                {section.conclusion[lang]}
              </p>
            </div>
          )}
        </div>
      ))}

      {conceptData.code && (
        <div className="mt-4 relative">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            {lang === "es" ? "Ejemplo de código" : "Code Example"}
          </h2>
          <button
            className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm hover:bg-gray-600"
            onClick={() =>
              handleCopy(conceptData.code ? conceptData.code : "", -1)
            }
          >
            {copied === -1 ? "Copiado ✅" : "📋 Copiar"}
          </button>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            className="rounded-md overflow-x-auto"
          >
            {conceptData.code}
          </SyntaxHighlighter>
        </div>
      )}

      {conceptData.conclusion && (
        <div className="mt-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {lang === "es" ? "Conclusión" : "Conclusion"}
          </h2>
          {Array.isArray(conceptData.conclusion[lang]) ? (
            <ul className="list-disc list-inside space-y-2">
              {conceptData.conclusion[lang].map((item, index) => (
                <li key={index} className="text-justify">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-justify">{conceptData.conclusion[lang]}</p>
          )}
        </div>
      )}
    </div>
  );
};

ConceptPage.Layout = Layout;

export default ConceptPage;
