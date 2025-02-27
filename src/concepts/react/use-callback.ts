import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useCallback en React",
    en: "useCallback in React"
  },
  slug: "use-callback",
  description: {
    es: "useCallback es un hook de React que memoriza funciones para evitar que se regeneren en cada renderización. Es útil cuando se pasa una función a un componente hijo que podría volver a renderizarse innecesariamente.",
    en: "useCallback is a React hook that memoizes functions to prevent them from regenerating on every render. It is useful when passing a function to a child component that might re-render unnecessarily."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const memoizedFunction = useCallback(callback, [dependencies]);",
      content: {
        es: "useCallback devuelve una versión memorizada de la función proporcionada, evitando su recreación en cada renderización si las dependencias no han cambiado.",
        en: "useCallback returns a memoized version of the provided function, preventing its recreation on each render if dependencies haven’t changed."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useCallback?",
        en: "🔹When to use useCallback?"
      },
      content: {
        es: [
          "Cuando se pasa una función a un componente hijo que se memoriza con React.memo.",
          "Cuando una función es utilizada en un efecto (useEffect) y evita renders innecesarios.",
          "Cuando se trabaja con listas o elementos dinámicos que dependen de eventos como onClick."
        ],
        en: [
          "When passing a function to a child component that is memoized with React.memo.",
          "When a function is used in an effect (useEffect) and prevents unnecessary renders.",
          "When working with lists or dynamic elements that depend on events like onClick."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre funciones normales y useCallback",
        en: "🔹Comparison between normal functions and useCallback"
      },
      headers: {
        es: ["Característica", "Función normal", "useCallback"],
        en: ["Feature", "Normal Function", "useCallback"]
      },
      rows: [
        {
          es: ["Recreación en cada render", "⚠️ Sí", "✅ No, si las dependencias no cambian"],
          en: ["Recreation on each render", "⚠️ Yes", "✅ No, if dependencies don't change"]
        },
        {
          es: ["Optimización de componentes hijos", "❌ No evita renders innecesarios", "✅ Reduce renders en componentes memorizados"],
          en: ["Optimization of child components", "❌ Does not prevent unnecessary renders", "✅ Reduces renders in memoized components"]
        },
        {
          es: ["Uso en dependencias de efectos", "⚠️ Puede causar bucles infinitos", "✅ Evita ejecuciones innecesarias"],
          en: ["Usage in effect dependencies", "⚠️ May cause infinite loops", "✅ Prevents unnecessary executions"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useCallback",
        en: "1️⃣ Practical example of useCallback"
      },
      caseTitle: {
        es: "Evitar recreación de funciones en eventos",
        en: "Avoid function recreation in events"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo evitar que una función se regenere en cada renderización.",
        en: "This example demonstrates how to prevent a function from regenerating on each render."
      },
      code: `import { useState, useCallback } from "react";

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

export default ParentComponent;`,
      conclusion: {
        es: "🔥 Beneficio: La función `handleClick` no se recrea en cada render, mejorando el rendimiento.",
        en: "🔥 Benefit: The `handleClick` function does not recreate on each render, improving performance."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useCallback",
        en: "2️⃣ Practical example of useCallback"
      },
      caseTitle: {
        es: "Optimización con React.memo y useCallback",
        en: "Optimization with React.memo and useCallback"
      },
      caseDescription: {
        es: "Usar useCallback junto con React.memo para evitar renders innecesarios.",
        en: "Using useCallback with React.memo to avoid unnecessary renders."
      },
      code: `import { useState, useCallback, memo } from "react";

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

export default ParentComponent;`,
      conclusion: {
        es: "🔥 Beneficio: `ChildComponent` no se vuelve a renderizar innecesariamente porque `handleAction` está memorizado.",
        en: "🔥 Benefit: `ChildComponent` does not re-render unnecessarily because `handleAction` is memoized."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useCallback",
        en: "3️⃣ Practical example of useCallback"
      },
      caseTitle: {
        es: "Evitar efectos secundarios innecesarios",
        en: "Avoid unnecessary side effects"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo evitar que useEffect se ejecute en cada render si la función no cambia.",
        en: "This example demonstrates how to prevent useEffect from executing on every render if the function remains unchanged."
      },
      code: `import { useState, useCallback, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())\n      .then(json => setData(json));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default FetchDataComponent;`,
      conclusion: {
        es: "🔥 Beneficio: `fetchData` no se regenera en cada render, evitando llamadas innecesarias a la API.",
        en: "🔥 Benefit: `fetchData` does not regenerate on each render, preventing unnecessary API calls."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar useCallback?",
        en: "📌 When NOT to use useCallback?"
      },
      content: {
        es: [
          "❌ Si la función no se pasa a un componente hijo, no hay necesidad de memorizarla.",
          "❌ Si la función se usa solo dentro del mismo render y no afecta el rendimiento.",
          "❌ Si la función cambia con frecuencia y su memorización no aporta beneficios."
        ],
        en: [
          "❌ If the function is not passed to a child component, there is no need to memoize it.",
          "❌ If the function is used only within the same render and does not affect performance.",
          "❌ If the function changes frequently and memoization doesn't provide benefits."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useCallback evita la recreación de funciones en cada render, optimizando el rendimiento.",
      "✅ Se usa principalmente cuando se pasan funciones a componentes memorizados (React.memo).",
      "✅ Ayuda a prevenir renders innecesarios y efectos secundarios redundantes."
    ],
    en: [
      "✅ useCallback prevents function recreation on each render, optimizing performance.",
      "✅ It is mainly used when passing functions to memoized components (React.memo).",
      "✅ It helps prevent unnecessary renders and redundant side effects."
    ]
  }
};

export default concept;
