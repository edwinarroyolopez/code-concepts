import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useDeferredValue en React",
    en: "useDeferredValue in React"
  },
  slug: "use-deferred-value",
  description: {
    es: "useDeferredValue es un hook de React que retrasa la actualización de un valor para evitar bloqueos en la interfaz de usuario durante operaciones costosas.",
    en: "useDeferredValue is a React hook that delays updating a value to prevent UI blocking during expensive operations."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const deferredValue = useDeferredValue(value);",
      content: {
        es: "useDeferredValue devuelve una versión diferida del valor de entrada, actualizándose cuando la UI tiene capacidad disponible, lo que mejora la fluidez durante actualizaciones costosas.",
        en: "useDeferredValue returns a deferred version of the input value, updating when the UI has available capacity, which improves smoothness during expensive updates."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useDeferredValue?",
        en: "🔹When to use useDeferredValue?"
      },
      content: {
        es: [
          "Cuando se realizan actualizaciones de estado costosas que pueden bloquear la UI.",
          "Para diferir actualizaciones en búsquedas en tiempo real o listas grandes y mantener la interactividad.",
          "Cuando se desea mostrar un indicador de carga mientras se procesan actualizaciones en segundo plano."
        ],
        en: [
          "When performing expensive state updates that might block the UI.",
          "To defer updates in real-time searches or large lists to maintain interactivity.",
          "When you want to show a loading indicator while background updates are processed."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre valores normales y useDeferredValue",
        en: "🔹Comparison between normal values and useDeferredValue"
      },
      headers: {
        es: ["Característica", "Valor normal", "useDeferredValue"],
        en: ["Feature", "Normal Value", "useDeferredValue"]
      },
      rows: [
        {
          es: ["Actualización inmediata", "⚠️ Sí", "✅ No, se difiere la actualización"],
          en: ["Immediate update", "⚠️ Yes", "✅ No, update is deferred"]
        },
        {
          es: ["Fluidez de UI", "❌ Puede bloquear la UI", "✅ Mantiene la UI responsiva"],
          en: ["UI smoothness", "❌ May block the UI", "✅ Keeps the UI responsive"]
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
        es: "1️⃣ Ejemplo práctico de useDeferredValue",
        en: "1️⃣ Practical example of useDeferredValue"
      },
      caseTitle: {
        es: "Actualización diferida en una lista grande",
        en: "Deferred update in a large list"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo actualizar una lista grande sin bloquear la UI usando useDeferredValue.",
        en: "This example demonstrates how to update a large list without blocking the UI using useDeferredValue."
      },
      code: `import { useState, useDeferredValue, useEffect } from "react";

const LargeList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const deferredInput = useDeferredValue(input);

  useEffect(() => {
    const newList = Array.from({ length: 10000 }, (_, i) => deferredInput + i);
    setList(newList);
  }, [deferredInput]);

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Escribe algo..." />
      <ul>{list.slice(0, 10).map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
};

export default LargeList;`,
      conclusion: {
        es: "🔥 Beneficio: Permite actualizar una lista grande sin bloquear la UI, manteniéndola fluida.",
        en: "🔥 Benefit: It allows updating a large list without blocking the UI, keeping it smooth."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useDeferredValue",
        en: "2️⃣ Practical example of useDeferredValue"
      },
      caseTitle: {
        es: "Indicador de carga durante actualizaciones diferidas",
        en: "Loading indicator during deferred updates"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo mostrar un indicador de carga mientras se difiere la actualización de datos.",
        en: "This example demonstrates how to display a loading indicator while data updates are deferred."
      },
      code: `import { useState, useDeferredValue, useEffect } from "react";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    const filtered = ["apple", "banana", "cherry", "date"].filter(item => item.includes(deferredQuery));
    setResults(filtered);
  }, [deferredQuery]);

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar..." />
      {results.length === 0 ? <p>Cargando resultados...</p> : <ul>{results.map((item, i) => <li key={i}>{item}</li>)}</ul>}\n    </div>\n  );
};

export default SearchComponent;`,
      conclusion: {
        es: "🔥 Beneficio: La UI se mantiene responsiva mientras se procesan actualizaciones en segundo plano.",
        en: "🔥 Benefit: The UI remains responsive while background updates are processed."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useDeferredValue",
        en: "3️⃣ Practical example of useDeferredValue"
      },
      caseTitle: {
        es: "Transición en operaciones complejas",
        en: "Transition in complex operations"
      },
      caseDescription: {
        es: "Este ejemplo demuestra cómo diferir una operación compleja para mejorar la experiencia del usuario.",
        en: "This example demonstrates how to defer a complex operation to improve user experience."
      },
      code: `import { useState, useDeferredValue, useEffect } from "react";

const ComplexUpdate = () => {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);

  useEffect(() => {
    // Simulación de operación compleja\n    setValue(v => v + 1);
  }, [deferredValue]);

  return (
    <div>
      <p>Valor: {value}</p>
      <button onClick={() => setValue(value + 1)}>Actualizar</button>
    </div>
  );
};

export default ComplexUpdate;`,
      conclusion: {
        es: "🔥 Beneficio: Permite diferir operaciones complejas, manteniendo la UI fluida durante la actualización.",
        en: "🔥 Benefit: It defers complex operations, keeping the UI smooth during updates."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo no usar useDeferredValue?",
        en: "📌 When NOT to use useDeferredValue?"
      },
      content: {
        es: [
          "❌ Si se necesita una actualización inmediata del valor, ya que useDeferredValue retrasa la actualización.",
          "❌ Para valores críticos que deben reflejarse al instante en la UI.",
          "❌ Cuando el retraso en la actualización pueda afectar negativamente la experiencia del usuario."
        ],
        en: [
          "❌ If an immediate update is needed, since useDeferredValue delays the update.",
          "❌ For critical values that must be updated instantly in the UI.",
          "❌ When the delay in updating could negatively impact the user experience."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useDeferredValue ayuda a mantener la UI responsiva durante actualizaciones costosas.",
      "✅ Es útil en búsquedas en tiempo real y actualizaciones de listas grandes.",
      "✅ Debe usarse con precaución para evitar retrasos en valores críticos."
    ],
    en: [
      "✅ useDeferredValue helps keep the UI responsive during expensive updates.",
      "✅ It is useful for real-time searches and updating large lists.",
      "✅ It should be used cautiously to avoid delays in critical values."
    ]
  }
};

export default concept;
