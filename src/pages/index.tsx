import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Layout = dynamic(() => import("@/components/layouts/layout"), {
  ssr: false,
});

const Home = () => {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen">
      {selectedConcept ? (
        <h1 className="text-2xl font-semibold">{selectedConcept}</h1>
      ) : (
        <p className="text-lg text-gray-500">
          Selecciona un concepto para ver detalles.
        </p>
      )}
    </div>
  );
};

Home.Layout = Layout;

export default Home;
