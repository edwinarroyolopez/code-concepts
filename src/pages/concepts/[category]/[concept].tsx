import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { loadConcept } from "@/utils/loadConcept";
import { ConceptSection, Concept } from "@/types/concept";
import Table from "@/components/ui/table";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const ConceptPage = () => {
  const router = useRouter();
  const { category, concept } = router.query;
  const [conceptData, setConceptData] = useState<Concept | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

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
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        {conceptData.title}
      </h1>
      <p className="mt-4 text-justify">{conceptData.description}</p>

      {conceptData.sections?.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            {section.title}
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
              <p className="text-justify">{section.content}</p>
            </div>
          )}

          {section.type === "list" && (
            <ul className="list-disc list-inside pl-4">
              {section.content.map((point, idx) => (
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
              title={section.title}
              headers={section.headers}
              rows={section.rows}
            />
          )}

          {section.type === "example" && (
            <div className="relative bg-gray-100 dark:bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold">{section.caseTitle}</h3>
              <p className="mt-2 text-justify">{section.caseDescription}</p>
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
                {section.conclusion}
              </p>
            </div>
          )}
        </div>
      ))}

      {conceptData.code && (
        <div className="mt-4 relative">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Ejemplo de código
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
          <h2 className="text-xl sm:text-2xl font-semibold">Conclusión</h2>
          {Array.isArray(conceptData.conclusion) ? (
            <ul className="list-disc list-inside space-y-2">
              {conceptData.conclusion.map((item, index) => (
                <li key={index} className="text-justify">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-justify">{conceptData.conclusion}</p>
          )}
        </div>
      )}
    </div>
  );
};

ConceptPage.Layout = Layout;

export default ConceptPage;
