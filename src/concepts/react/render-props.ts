import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Render Props en React",
    en: "Render Props in React"
  },
  slug: "render-props",
  description: {
    es: "Render Props es un patrón avanzado en React que permite compartir lógica entre componentes pasando una función como prop. Este patrón es útil para reutilizar comportamientos sin necesidad de duplicar código y ofrece una alternativa a los HOC (Componentes de Orden Superior).",
    en: "Render Props is an advanced pattern in React that allows sharing logic between components by passing a function as a prop. This pattern is useful for reusing behaviors without duplicating code and provides an alternative to HOCs (Higher-Order Components)."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Render Props?",
        en: "🔹What is Render Props?"
      },
      code: "<Component render={(data) => <ChildComponent data={data} />} />",
      content: {
        es: "Render Props es una técnica en la que un componente recibe una función como prop (generalmente llamada `render`) y la usa para renderizar contenido. Esta función puede recibir datos o lógica del componente padre y pasarlos al componente hijo.",
        en: "Render Props is a technique where a component receives a function as a prop (usually called `render`) and uses it to render content. This function can receive data or logic from the parent component and pass it to the child component."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Render Props?",
        en: "🔹When to use Render Props?"
      },
      content: {
        es: [
          "Cuando necesitas compartir lógica entre componentes de manera flexible.",
          "Cuando prefieres una alternativa más explícita y legible a los HOC.",
          "Cuando quieres evitar la complejidad de los HOC y mantener el código más claro."
        ],
        en: [
          "When you need to share logic between components flexibly.",
          "When you prefer a more explicit and readable alternative to HOCs.",
          "When you want to avoid the complexity of HOCs and keep the code clearer."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Render Props y HOC",
        en: "🔹Comparison between Render Props and HOC"
      },
      headers: {
        es: ["Característica", "HOC", "Render Props"],
        en: ["Feature", "HOC", "Render Props"]
      },
      rows: [
        {
          es: ["Reutilización de lógica", "✅ Sí (mediante composición)", "✅ Sí (mediante una función)"],
          en: ["Logic reuse", "✅ Yes (via composition)", "✅ Yes (via a function)"]
        },
        {
          es: ["Legibilidad", "❌ Menos explícito (puede ser confuso)", "✅ Más explícito (fácil de seguir)"],
          en: ["Readability", "❌ Less explicit (can be confusing)", "✅ More explicit (easy to follow)"]
        },
        {
          es: ["Flexibilidad", "❌ Menos flexible (estructura fija)", "✅ Más flexible (dinámico)"],
          en: ["Flexibility", "❌ Less flexible (fixed structure)", "✅ More flexible (dynamic)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Render Props",
        en: "1️⃣ Practical example of Render Props"
      },
      caseTitle: {
        es: "Compartir datos entre componentes",
        en: "Share data between components"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Render Props para compartir datos entre un componente padre y un componente hijo.",
        en: "This example demonstrates how to use Render Props to share data between a parent component and a child component."
      },
      code: `import React from 'react';

// Componente con Render Props
const DataProvider = ({ render }) => {
  const data = "¡Hola desde el componente padre!";
  return render(data);
};

// Componente hijo
const ChildComponent = ({ data }) => {
  return <p>{data}</p>;
};

// Uso en la aplicación
const App = () => {
  return (
    <DataProvider render={(data) => <ChildComponent data={data} />} />
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Render Props permite compartir datos de manera explícita y flexible.",
        en: "🔥 Benefit: Render Props allows sharing data explicitly and flexibly."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Render Props",
        en: "2️⃣ Practical example of Render Props"
      },
      caseTitle: {
        es: "Manejo de lógica de fetching",
        en: "Fetching logic handling"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Render Props para manejar la lógica de fetching de datos y compartirla con otros componentes.",
        en: "This example demonstrates how to use Render Props to handle data fetching logic and share it with other components."
      },
      code: `import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente con Render Props para fetching
const FetchData = ({ render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return render({ data, loading, error });
};

// Componente hijo
const DataDisplay = ({ data, loading, error }) => {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

// Uso en la aplicación
const App = () => {
  return (
    <FetchData render={({ data, loading, error }) => (
      <DataDisplay data={data} loading={loading} error={error} />
    )} />
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Render Props permite reutilizar la lógica de fetching de manera clara y modular.",
        en: "🔥 Benefit: Render Props allows reusing fetching logic in a clear and modular way."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Render Props",
        en: "3️⃣ Practical example of Render Props"
      },
      caseTitle: {
        es: "Contador reutilizable",
        en: "Reusable counter"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Render Props para crear un contador reutilizable.",
        en: "This example demonstrates how to use Render Props to create a reusable counter."
      },
      code: `import React, { useState } from 'react';

// Componente con Render Props para un contador
const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return render({ count, increment, decrement });
};

// Componente hijo
const CounterDisplay = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

// Uso en la aplicación
const App = () => {
  return (
    <Counter render={({ count, increment, decrement }) => (
      <CounterDisplay count={count} increment={increment} decrement={decrement} />
    )} />
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Render Props permite reutilizar la lógica del contador en múltiples componentes.",
        en: "🔥 Benefit: Render Props allows reusing counter logic across multiple components."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Render Props?",
        en: "📌 When NOT to use Render Props?"
      },
      content: {
        es: [
          "❌ Si la lógica es específica de un solo componente y no necesita reutilización.",
          "❌ Si prefieres usar hooks personalizados para compartir lógica.",
          "❌ Si el uso de Render Props hace que el código sea menos legible o más difícil de mantener."
        ],
        en: [
          "❌ If the logic is specific to a single component and does not need reuse.",
          "❌ If you prefer using custom hooks to share logic.",
          "❌ If using Render Props makes the code less readable or harder to maintain."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Render Props es ideal para compartir lógica entre componentes de manera explícita y flexible.",
      "✅ Ofrece una alternativa más legible y dinámica a los HOC.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura del componente."
    ],
    en: [
      "✅ Render Props is ideal for sharing logic between components explicitly and flexibly.",
      "✅ It provides a more readable and dynamic alternative to HOCs.",
      "✅ It should not be overused, as it can complicate the component structure."
    ]
  }
};

export default concept;