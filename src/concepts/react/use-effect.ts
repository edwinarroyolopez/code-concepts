import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useEffect en React",
    en: "useEffect in React"
  },
  slug: "use-effect",
  description: {
    es: "useEffect es un hook de React que permite ejecutar efectos secundarios en componentes funcionales. Estos efectos pueden incluir llamadas a APIs, suscripciones a eventos, manipulación del DOM, o cualquier operación que necesite ejecutarse después de que el componente se renderice o actualice.",
    en: "useEffect is a React hook that allows you to perform side effects in functional components. These effects can include API calls, event subscriptions, DOM manipulation, or any operation that needs to run after the component renders or updates."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es useEffect?",
        en: "🔹What is useEffect?"
      },
      code: "useEffect(() => { /* efecto */ }, [dependencies]);",
      content: {
        es: "useEffect es un hook que toma una función de efecto y un array de dependencias. La función se ejecuta después de que el componente se renderiza o cuando las dependencias cambian. Si el array de dependencias está vacío, el efecto solo se ejecuta una vez, después del primer renderizado.",
        en: "useEffect is a hook that takes an effect function and an array of dependencies. The function runs after the component renders or when the dependencies change. If the dependency array is empty, the effect runs only once, after the initial render."
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
          "Cuando necesitas realizar una llamada a una API después de que el componente se renderiza.",
          "Cuando necesitas suscribirte a eventos o actualizaciones externas.",
          "Cuando necesitas limpiar recursos (como suscripciones o temporizadores) antes de que el componente se desmonte."
        ],
        en: [
          "When you need to make an API call after the component renders.",
          "When you need to subscribe to events or external updates.",
          "When you need to clean up resources (like subscriptions or timers) before the component unmounts."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre useEffect y lifecycle methods",
        en: "🔹Comparison between useEffect and lifecycle methods"
      },
      headers: {
        es: ["Característica", "Lifecycle Methods", "useEffect"],
        en: ["Feature", "Lifecycle Methods", "useEffect"]
      },
      rows: [
        {
          es: ["Uso en componentes funcionales", "❌ No disponible", "✅ Disponible"],
          en: ["Usage in functional components", "❌ Not available", "✅ Available"]
        },
        {
          es: ["Manejo de efectos secundarios", "✅ Disponible (componentDidMount, componentDidUpdate, etc.)", "✅ Más simple y unificado"],
          en: ["Handling side effects", "✅ Available (componentDidMount, componentDidUpdate, etc.)", "✅ Simpler and more unified"]
        },
        {
          es: ["Limpieza de recursos", "✅ Disponible (componentWillUnmount)", "✅ Disponible con función de retorno"],
          en: ["Resource cleanup", "✅ Available (componentWillUnmount)", "✅ Available with return function"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useEffect",
        en: "1️⃣ Practical example of useEffect"
      },
      caseTitle: {
        es: "Llamada a una API",
        en: "API call"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useEffect para hacer una llamada a una API después de que el componente se renderiza.",
        en: "This example demonstrates how to use useEffect to make an API call after the component renders."
      },
      code: `import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // Array de dependencias vacío para ejecutar solo una vez

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;`,
      conclusion: {
        es: "🔥 Beneficio: La llamada a la API se realiza solo una vez después del renderizado inicial.",
        en: "🔥 Benefit: The API call is made only once after the initial render."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useEffect",
        en: "2️⃣ Practical example of useEffect"
      },
      caseTitle: {
        es: "Suscripción a eventos",
        en: "Event subscription"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useEffect para suscribirse a un evento y limpiar la suscripción cuando el componente se desmonta.",
        en: "This example demonstrates how to use useEffect to subscribe to an event and clean up the subscription when the component unmounts."
      },
      code: `import React, { useState, useEffect } from "react";

const WindowSizeTracker = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del efecto
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Array de dependencias vacío para ejecutar solo una vez

  return (
    <div>
      <p>Ancho: {windowSize.width}px</p>
      <p>Alto: {windowSize.height}px</p>
    </div>
  );
};

export default WindowSizeTracker;`,
      conclusion: {
        es: "🔥 Beneficio: El evento se suscribe y desuscribe automáticamente, evitando fugas de memoria.",
        en: "🔥 Benefit: The event is subscribed and unsubscribed automatically, preventing memory leaks."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useEffect",
        en: "3️⃣ Practical example of useEffect"
      },
      caseTitle: {
        es: "Actualización basada en dependencias",
        en: "Dependency-based update"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useEffect para ejecutar un efecto solo cuando ciertas dependencias cambian.",
        en: "This example demonstrates how to use useEffect to run an effect only when certain dependencies change."
      },
      code: `import React, { useState, useEffect } from "react";

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(\`El contador es: \${count}\`);
  }, [count]); // Se ejecuta solo cuando 'count' cambia

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default CounterWithEffect;`,
      conclusion: {
        es: "🔥 Beneficio: El efecto se ejecuta solo cuando la dependencia `count` cambia, optimizando el rendimiento.",
        en: "🔥 Benefit: The effect runs only when the `count` dependency changes, optimizing performance."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar useEffect?",
        en: "📌 When NOT to use useEffect?"
      },
      content: {
        es: [
          "❌ Si el efecto no está relacionado con el renderizado o la actualización del componente.",
          "❌ Si puedes manejar la lógica directamente en el renderizado o en un evento.",
          "❌ Si el uso excesivo de useEffect hace que el código sea difícil de mantener."
        ],
        en: [
          "❌ If the effect is not related to the component's rendering or updating.",
          "❌ If you can handle the logic directly in the render or an event.",
          "❌ If overusing useEffect makes the code hard to maintain."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useEffect es esencial para manejar efectos secundarios en componentes funcionales.",
      "✅ Simplifica la ejecución de código después del renderizado o cuando cambian las dependencias.",
      "✅ No debe usarse en exceso, ya que puede complicar la lógica del componente."
    ],
    en: [
      "✅ useEffect is essential for handling side effects in functional components.",
      "✅ It simplifies running code after rendering or when dependencies change.",
      "✅ It should not be overused, as it can complicate the component's logic."
    ]
  }
};

export default concept;