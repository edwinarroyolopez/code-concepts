import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useDeferredValue en React",
  slug: "use-deferred-value",
  description:
    "useDeferredValue es un hook de React que permite diferir la actualización de un valor para evitar bloqueos en la UI en situaciones donde hay cambios rápidos de estado.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const deferredValue = useDeferredValue(value);`,
      content:
        "useDeferredValue retrasa la actualización de un valor hasta que la UI tenga recursos disponibles, evitando bloqueos innecesarios en la renderización.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useDeferredValue?",
      content: [
        "Cuando un estado cambia rápidamente y la UI se vuelve lenta.",
        "Cuando se necesita evitar bloqueos en renders pesados mientras el usuario interactúa.",
        "Cuando se optimiza el rendimiento en búsquedas o filtrados en listas grandes.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre useDeferredValue y useTransition",
      headers: ["Característica", "useDeferredValue", "useTransition"],
      rows: [
        ["Propósito", "Retrasa un valor", "Retrasa una actualización de estado"],
        ["Afecta múltiples estados", "❌ No", "✅ Sí"],
        ["Ideal para", "Valores derivados pesados", "Actualizaciones de UI completas"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useDeferredValue",
      caseTitle: "Búsqueda con respuesta rápida",
      caseDescription:
        "Este ejemplo usa `useDeferredValue` para optimizar la búsqueda en una lista grande.",
      code: `
        import { useState, useDeferredValue } from "react";

        const LargeList = ({ query }) => {
          const deferredQuery = useDeferredValue(query);
          const filteredItems = items.filter(item =>
            item.toLowerCase().includes(deferredQuery.toLowerCase())
          );

          return (
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          );
        };

        const SearchComponent = () => {
          const [query, setQuery] = useState("");

          return (
            <div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
              />
              <LargeList query={query} />
            </div>
          );
        };

        export default SearchComponent;
      `,
      conclusion:
        "🔥 Beneficio: Mejora la experiencia del usuario al mantener la UI fluida en listas grandes.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useDeferredValue",
      caseTitle: "Renderizado de gráficos pesados",
      caseDescription:
        "Diferir la actualización de valores de un gráfico para evitar bloqueos en la UI.",
      code: `
        import { useState, useDeferredValue } from "react";
        import { Chart } from "./ChartComponent"; 

        const ChartExample = () => {
          const [data, setData] = useState(generateHeavyData());
          const deferredData = useDeferredValue(data);

          return (
            <div>
              <button onClick={() => setData(generateHeavyData())}>
                Actualizar datos
              </button>
              <Chart data={deferredData} />
            </div>
          );
        };

        export default ChartExample;
      `,
      conclusion:
        "🔥 Beneficio: Evita bloqueos en la UI mientras se actualizan gráficos complejos.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useDeferredValue",
      caseTitle: "Formulario con validaciones pesadas",
      caseDescription:
        "Diferir validaciones pesadas para evitar congelar la UI en cada cambio.",
      code: `
        import { useState, useDeferredValue } from "react";

        const validateInput = (input) => {
          // Simulación de una validación pesada
          return input.length > 5 ? "Válido" : "Demasiado corto";
        };

        const FormExample = () => {
          const [input, setInput] = useState("");
          const deferredInput = useDeferredValue(input);
          const validationMessage = validateInput(deferredInput);

          return (
            <div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe algo..."
              />
              <p>{validationMessage}</p>
            </div>
          );
        };

        export default FormExample;
      `,
      conclusion:
        "🔥 Beneficio: Permite una experiencia más fluida en formularios con validaciones pesadas.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useDeferredValue?",
      content: [
        "❌ Si el valor no es costoso de calcular, no hay necesidad de diferirlo.",
        "❌ Si se requiere una actualización inmediata, es mejor `useState` sin diferir.",
        "❌ Si se necesita optimizar una transición completa, es mejor `useTransition`.",
      ],
    },
  ],
  conclusion: [
    "✅ `useDeferredValue` mejora el rendimiento diferiendo valores derivados costosos.",
    "✅ Se usa en listas grandes, gráficos y validaciones pesadas.",
    "✅ Mantiene la UI fluida sin retrasar la interacción del usuario.",
  ],
};

export default concept;
