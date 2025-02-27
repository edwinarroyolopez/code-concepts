import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useEffect en React",
    en: "useEffect in React"
  },
  slug: "use-effect",
  description: {
    es: "useEffect es un hook de React que permite manejar efectos secundarios en componentes funcionales, como suscripciones, llamadas a API y manipulación del DOM.",
    en: "useEffect is a React hook that allows handling side effects in functional components, such as subscriptions, API calls, and DOM manipulation."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "useEffect(callback, [dependencies]);",
      content: {
        es: "useEffect ejecuta una función cuando el componente se monta, se actualiza o se desmonta, dependiendo de las dependencias proporcionadas.",
        en: "useEffect runs a function when the component mounts, updates, or unmounts, depending on the provided dependencies."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useEffect?",
        en: "🔹When to use useEffect?"
      },
      content: {
        es: [
          "Para realizar llamadas a API cuando un componente se monta.",
          "Para suscribirse a eventos o manejar intervalos y temporizadores.",
          "Para actualizar el estado cuando cambian ciertas dependencias."
        ],
        en: [
          "To make API calls when a component mounts.",
          "To subscribe to events or handle intervals and timers.",
          "To update state when certain dependencies change."
        ]
      }
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useEffect",
        en: "1️⃣ Practical example of useEffect"
      },
      caseTitle: {
        es: "Llamada a API al montar el componente",
        en: "API call on component mount"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo realizar una solicitud a una API cuando el componente se monta.",
        en: "This example demonstrates how to make an API request when the component mounts."
      },
      code: `import { useState, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default FetchDataComponent;`,
      conclusion: {
        es: "🔥 Beneficio: La API solo se llama una vez al montar el componente.",
        en: "🔥 Benefit: The API is called only once when the component mounts."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useEffect",
        en: "2️⃣ Practical example of useEffect"
      },
      caseTitle: {
        es: "Actualización basada en dependencias",
        en: "Update based on dependencies"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo ejecutar un efecto solo cuando cambia una variable específica.",
        en: "This example demonstrates how to run an effect only when a specific variable changes."
      },
      code: `import { useState, useEffect } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("El contador cambió:", count);
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default CounterComponent;`,
      conclusion: {
        es: "🔥 Beneficio: El efecto solo se ejecuta cuando cambia la variable `count`.",
        en: "🔥 Benefit: The effect runs only when the `count` variable changes."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useEffect",
        en: "3️⃣ Practical example of useEffect"
      },
      caseTitle: {
        es: "Limpieza de efectos secundarios",
        en: "Cleanup of side effects"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo limpiar un efecto al desmontar un componente.",
        en: "This example demonstrates how to clean up an effect when a component unmounts."
      },
      code: `import { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Tiempo: {seconds} segundos</p>;
};

export default TimerComponent;`,
      conclusion: {
        es: "🔥 Beneficio: El intervalo se limpia cuando el componente se desmonta, evitando fugas de memoria.",
        en: "🔥 Benefit: The interval is cleared when the component unmounts, preventing memory leaks."
      }
    },
    {
        type: "list",
        title: {
            es: "📌 ¿Cuándo tener cuidado con useEffect?",
            en: "📌 When to be careful with useEffect?"
        },
        content: {
            es: [
                "⚠️ Evitar dependencias innecesarias que provoquen renders infinitos.",
                "⚠️ Limpiar correctamente efectos que pueden causar fugas de memoria.",
                "⚠️ No usar useEffect para actualizar el estado si puede hacerse directamente en eventos."
            ],
            en: [
                "⚠️ Avoid unnecessary dependencies that cause infinite re-renders.",
                "⚠️ Properly clean up effects to prevent memory leaks.",
                "⚠️ Do not use useEffect to update state if it can be done directly in events."
            ]
        }
    }
  ],
  conclusion: {
    es: [
      "✅ useEffect permite manejar efectos secundarios en componentes funcionales.",
      "✅ Se ejecuta según sus dependencias y puede limpiar efectos cuando sea necesario.",
      "✅ Es útil para llamadas a API, eventos y gestión del estado."
    ],
    en: [
      "✅ useEffect allows handling side effects in functional components.",
      "✅ It runs based on its dependencies and can clean up effects when needed.",
      "✅ It is useful for API calls, events, and state management."
    ]
  }
};

export default concept;
