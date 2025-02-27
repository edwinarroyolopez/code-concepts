import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { loadConcept } from "@/utils/loadConcept";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const ConceptPage = () => {
  const router = useRouter();
  const { category, concept } = router.query;
  const [conceptData, setConceptData] = useState<any>(null);

  useEffect(() => {
    if (typeof category === "string" && typeof concept === "string") {
      console.log("Cargando concepto:", { category, concept });
      loadConcept(category, concept).then(setConceptData);
    }
  }, [category, concept]);

  if (!conceptData) return <p>Cargando...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{conceptData.title}</h1>
      <p className="mt-4">{conceptData.description}</p>

      {conceptData.code && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Ejemplo de código</h2>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {conceptData.code}
          </SyntaxHighlighter>
        </div>
      )}

      {conceptData.conclusion && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Conclusión</h2>
          <p>{conceptData.conclusion}</p>
        </div>
      )}
    </div>
  );
};

ConceptPage.Layout = Layout;

export default ConceptPage;
