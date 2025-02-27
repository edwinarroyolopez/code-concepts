import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useTransition en React",
    en: "useTransition in React"
  },
  slug: "use-transition",
  description: {
    es: "useTransition es un hook de React que permite diferir actualizaciones de estado costosas, manteniendo la interfaz responsiva mientras se procesan actualizaciones en segundo plano.",
    en: "useTransition is a React hook that allows deferring expensive state updates, keeping the UI responsive while updates are processed in the background."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const [isPending, startTransition] = useTransition();",
      content: {
        es: "useTransition devuelve un valor booleano isPending y una función startTransition. Las actualizaciones envueltas en startTransition se difieren, permitiendo que la interfaz permanezca fluida mientras se realizan cambios costosos.",
        en: "useTransition returns a boolean isPending and a startTransition function. Updates wrapped in startTransition are deferred, keeping the UI fluid while expensive changes occur."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useTransition?",
        en: "🔹When to use useTransition?"
      },
      content: {
        es: [
          "Cuando se realizan actualizaciones de estado costosas que pueden bloquear la UI.",
          "Para mostrar un indicador de carga mientras se procesan actualizaciones en segundo plano.",
          "En operaciones de búsqueda o filtrado en listas grandes para mantener la interactividad."
        ],
        en: [
          "When performing expensive state updates that might block the UI.",
          "To display a loading indicator while background updates are processed.",
          "For search or filtering operations in large lists to maintain interactivity."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre actualizaciones normales y useTransition",
        en: "🔹Comparison between normal updates and useTransition"
      },
      headers: {
        es: ["Característica", "Actualización normal", "useTransition"],
        en: ["Feature", "Normal update", "useTransition"]
      },
      rows: [
        {
          es: ["Bloqueo de UI", "Sí", "No, si se usa correctamente"],
          en: ["UI Blocking", "Yes", "No, if used correctly"]
        },
        {
          es: ["Interactividad", "Puede ser lenta", "Más fluida"],
          en: ["Interactivity", "May be slow", "Smoother"]
        },
        {
          es: ["Prioridad de actualización", "Inmediata", "Diferida"],
          en: ["Update priority", "Immediate", "Deferred"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useTransition",
        en: "1️⃣ Practical example of useTransition"
      },
      caseTitle: {
        es: "Actualización diferida en una lista grande",
        en: "Deferred update in a large list"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo actualizar una lista grande sin bloquear la UI usando useTransition.",
        en: "This example demonstrates how to update a large list without blocking the UI using useTransition."
      },
      code: `import { useState, useTransition } from "react";

const LargeList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      // Simulación de una actualización costosa\n      const newList = Array.from({ length: 10000 }, (_, i) => e.target.value + i);
      setList(newList);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} placeholder="Escribe algo..." />\n      {isPending ? <p>Cargando...</p> : <ul>{list.slice(0, 10).map((item, i) => <li key={i}>{item}</li>)}</ul>}\n    </div>\n  );
};

export default LargeList;`,
      conclusion: {
        es: "🔥 Beneficio: Permite actualizar una lista grande sin bloquear la interfaz, manteniéndola responsiva.",
        en: "🔥 Benefit: Allows updating a large list without blocking the UI, keeping it responsive."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useTransition",
        en: "2️⃣ Practical example of useTransition"
      },
      caseTitle: {
        es: "Indicador de carga con actualizaciones diferidas",
        en: "Loading indicator with deferred updates"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo mostrar un indicador de carga mientras se realizan actualizaciones diferidas.",
        en: "This example demonstrates how to display a loading indicator while deferred updates occur."
      },
      code: `import { useState, useTransition } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      // Simulación de búsqueda costosa\n      const filtered = ["apple", "banana", "cherry", "date"].filter(item => item.includes(e.target.value));\n      setResults(filtered);\n    });
  };

  return (
    <div>
      <input value={query} onChange={handleSearch} placeholder="Buscar..." />\n      {isPending ? <p>Cargando resultados...</p> : <ul>{results.map((item, i) => <li key={i}>{item}</li>)}</ul>}\n    </div>\n  );
};

export default SearchComponent;`,
      conclusion: {
        es: "🔥 Beneficio: La UI permanece responsiva mientras se filtran los resultados de la búsqueda.",
        en: "🔥 Benefit: The UI remains responsive while filtering search results."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useTransition",
        en: "3️⃣ Practical example of useTransition"
      },
      caseTitle: {
        es: "Transición en una operación de actualización compleja",
        en: "Transition in a complex update operation"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useTransition para diferir una operación compleja y mejorar la experiencia de usuario.",
        en: "This example demonstrates how to use useTransition to defer a complex update operation and improve user experience."
      },
      code: `import { useState, useTransition } from "react";

const ComplexUpdate = () => {
  const [value, setValue] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    startTransition(() => {
      // Simulación de operación compleja\n      setValue(v => v + 1);\n    });
  };

  return (
    <div>
      <p>Valor: {value}</p>\n      {isPending && <p>Actualizando...</p>}\n      <button onClick={handleUpdate}>Actualizar</button>\n    </div>\n  );
};

export default ComplexUpdate;`,
      conclusion: {
        es: "🔥 Beneficio: Permite diferir operaciones complejas y mantener la UI responsiva.",
        en: "🔥 Benefit: It defers complex operations while keeping the UI responsive."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo no usar useTransition?",
        en: "📌 When NOT to use useTransition?"
      },
      content: {
        es: [
          "❌ Si la actualización es muy rápida y no afecta la experiencia del usuario.",
          "❌ Para operaciones simples que no requieren diferir la actualización.",
          "❌ Cuando la prioridad de la actualización es alta y debe ejecutarse de inmediato."
        ],
        en: [
          "❌ If the update is very fast and does not affect user experience.",
          "❌ For simple operations that don't need deferred updates.",
          "❌ When the update priority is high and must run immediately."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useTransition permite diferir actualizaciones costosas y mantener la interfaz responsiva.",
      "✅ Es útil en operaciones de búsqueda, filtrado y actualizaciones complejas.",
      "✅ Debe usarse cuando la experiencia de usuario se beneficia de actualizaciones diferidas."
    ],
    en: [
      "✅ useTransition allows deferring expensive updates and keeps the UI responsive.",
      "✅ It is useful for search, filtering, and complex updates.",
      "✅ It should be used when user experience benefits from deferred updates."
    ]
  }
};

export default concept;
