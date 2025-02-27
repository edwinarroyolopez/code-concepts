import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useCallback en React",
  slug: "use-callback",
  description:
    "useCallback es un hook de React que memoriza funciones para evitar que se regeneren en cada renderización. Es útil cuando se pasa una función a un componente hijo que podría volver a renderizarse innecesariamente.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const memoizedFunction = useCallback(callback, [dependencies]);`,
      content:
        "useCallback devuelve una versión memorizada de la función proporcionada, evitando su recreación en cada renderización si las dependencias no han cambiado.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useCallback?",
      content: [
        "Cuando se pasa una función a un componente hijo que se memoriza con React.memo.",
        "Cuando una función es utilizada en un efecto (`useEffect`) y evita renders innecesarios.",
        "Cuando se trabaja con listas o elementos dinámicos que dependen de eventos como `onClick`.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre funciones normales y useCallback",
      headers: ["Característica", "Función normal", "useCallback"],
      rows: [
        ["Recreación en cada render", "⚠️ Sí", "✅ No, si las dependencias no cambian"],
        ["Optimización de componentes hijos", "❌ No evita renders innecesarios", "✅ Reduce renders en componentes memorizados"],
        ["Uso en dependencias de efectos", "⚠️ Puede causar bucles infinitos", "✅ Evita ejecuciones innecesarias"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useCallback",
      caseTitle: "Evitar recreación de funciones en eventos",
      caseDescription:
        "Este ejemplo muestra cómo evitar que una función se regenere en cada renderización.",
      code: `
        import { useState, useCallback } from "react";

        const ButtonComponent = ({ onClick }) => {
          return <button onClick={onClick}>Click aquí</button>;
        };

        const ParentComponent = () => {
          const [count, setCount] = useState(0);

          const handleClick = useCallback(() => {
            setCount(prev => prev + 1);
          }, []);

          return (
            <div>
              <p>Contador: {count}</p>
              <ButtonComponent onClick={handleClick} />
            </div>
          );
        };

        export default ParentComponent;
      `,
      conclusion:
        "🔥 Beneficio: La función `handleClick` no se recrea en cada render, mejorando el rendimiento.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useCallback",
      caseTitle: "Optimización con React.memo y useCallback",
      caseDescription:
        "Usar `useCallback` junto con `React.memo` para evitar renders innecesarios.",
      code: `
        import { useState, useCallback, memo } from "react";

        const ChildComponent = memo(({ onAction }) => {
          console.log("ChildComponent renderizado");
          return <button onClick={onAction}>Ejecutar acción</button>;
        });

        const ParentComponent = () => {
          const [count, setCount] = useState(0);

          const handleAction = useCallback(() => {
            console.log("Acción ejecutada");
          }, []);

          return (
            <div>
              <p>Contador: {count}</p>
              <button onClick={() => setCount(count + 1)}>Incrementar</button>
              <ChildComponent onAction={handleAction} />
            </div>
          );
        };

        export default ParentComponent;
      `,
      conclusion:
        "🔥 Beneficio: `ChildComponent` no se vuelve a renderizar innecesariamente porque `handleAction` está memorizado.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useCallback",
      caseTitle: "Evitar efectos secundarios innecesarios",
      caseDescription:
        "Este ejemplo muestra cómo evitar que `useEffect` se ejecute en cada render si la función no cambia.",
      code: `
        import { useState, useCallback, useEffect } from "react";

        const FetchDataComponent = () => {
          const [data, setData] = useState(null);

          const fetchData = useCallback(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
              .then(response => response.json())
              .then(json => setData(json));
          }, []);

          useEffect(() => {
            fetchData();
          }, [fetchData]);

          return <pre>{JSON.stringify(data, null, 2)}</pre>;
        };

        export default FetchDataComponent;
      `,
      conclusion:
        "🔥 Beneficio: `fetchData` no se regenera en cada render, evitando llamadas innecesarias a la API.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useCallback?",
      content: [
        "❌ Si la función no se pasa a un componente hijo, no hay necesidad de memorizarla.",
        "❌ Si la función se usa solo dentro del mismo render y no afecta el rendimiento.",
        "❌ Si la función cambia con frecuencia y su memorización no aporta beneficios.",
      ],
    },
  ],
  conclusion: [
    "✅ useCallback evita la recreación de funciones en cada render, optimizando el rendimiento.",
    "✅ Se usa principalmente cuando se pasan funciones a componentes memorizados (`React.memo`).",
    "✅ Ayuda a prevenir renders innecesarios y efectos secundarios redundantes.",
  ],
};

export default concept;
