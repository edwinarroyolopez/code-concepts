import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useRef en React",
    en: "useRef in React"
  },
  slug: "use-ref",
  description: {
    es: "useRef es un hook de React que permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente. Es útil para acceder a elementos del DOM o almacenar valores que no necesitan desencadenar una nueva renderización cuando cambian.",
    en: "useRef is a React hook that allows you to create a mutable reference that persists throughout the component's lifecycle. It is useful for accessing DOM elements or storing values that do not need to trigger a re-render when they change."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const refContainer = useRef(initialValue);",
      content: {
        es: "useRef devuelve un objeto con una propiedad `current` que se puede usar para almacenar un valor mutable. Este valor persiste entre renders y no causa una nueva renderización cuando cambia.",
        en: "useRef returns an object with a `current` property that can be used to store a mutable value. This value persists between renders and does not cause a re-render when it changes."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useRef?",
        en: "🔹When to use useRef?"
      },
      content: {
        es: [
          "Cuando necesitas acceder directamente a un elemento del DOM.",
          "Cuando necesitas almacenar un valor que no debe causar una nueva renderización cuando cambia.",
          "Cuando necesitas mantener un valor mutable entre renders sin desencadenar efectos secundarios."
        ],
        en: [
          "When you need to directly access a DOM element.",
          "When you need to store a value that should not cause a re-render when it changes.",
          "When you need to maintain a mutable value between renders without triggering side effects."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre useRef y useState",
        en: "🔹Comparison between useRef and useState"
      },
      headers: {
        es: ["Característica", "useState", "useRef"],
        en: ["Feature", "useState", "useRef"]
      },
      rows: [
        {
          es: ["Desencadena renderización", "✅ Sí", "❌ No"],
          en: ["Triggers re-render", "✅ Yes", "❌ No"]
        },
        {
          es: ["Almacenamiento de valores", "✅ Sí", "✅ Sí"],
          en: ["Stores values", "✅ Yes", "✅ Yes"]
        },
        {
          es: ["Acceso a elementos del DOM", "❌ No", "✅ Sí"],
          en: ["Access to DOM elements", "❌ No", "✅ Yes"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useRef",
        en: "1️⃣ Practical example of useRef"
      },
      caseTitle: {
        es: "Acceso a un elemento del DOM",
        en: "Accessing a DOM element"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useRef para acceder a un elemento del DOM y enfocarlo.",
        en: "This example demonstrates how to use useRef to access a DOM element and focus it."
      },
      code: `import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Enfocar input</button>
    </div>
  );
};

export default FocusInput;`,
      conclusion: {
        es: "🔥 Beneficio: `inputRef` permite acceder directamente al elemento del DOM sin causar una nueva renderización.",
        en: "🔥 Benefit: `inputRef` allows direct access to the DOM element without causing a re-render."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useRef",
        en: "2️⃣ Practical example of useRef"
      },
      caseTitle: {
        es: "Almacenar un valor mutable",
        en: "Storing a mutable value"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useRef para almacenar un valor que no debe causar una nueva renderización cuando cambia.",
        en: "This example demonstrates how to use useRef to store a value that should not cause a re-render when it changes."
      },
      code: `import { useRef, useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  const handleClick = () => {
    prevCountRef.current = count;
    setCount(count + 1);
  };

  return (
    <div>
      <p>Actual: {count}</p>
      <p>Anterior: {prevCountRef.current}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default CounterComponent;`,
      conclusion: {
        es: "🔥 Beneficio: `prevCountRef` almacena el valor anterior sin causar una nueva renderización.",
        en: "🔥 Benefit: `prevCountRef` stores the previous value without causing a re-render."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useRef",
        en: "3️⃣ Practical example of useRef"
      },
      caseTitle: {
        es: "Mantener un valor entre renders",
        en: "Maintaining a value between renders"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useRef para mantener un valor mutable entre renders sin desencadenar efectos secundarios.",
        en: "This example demonstrates how to use useRef to maintain a mutable value between renders without triggering side effects."
      },
      code: `import { useRef, useEffect } from "react";

const TimerComponent = () => {
  const timerRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timerRef.current += 1;
      console.log("Tiempo transcurrido:", timerRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Timer en consola</div>;
};

export default TimerComponent;`,
      conclusion: {
        es: "🔥 Beneficio: `timerRef` mantiene el valor del temporizador entre renders sin causar una nueva renderización.",
        en: "🔥 Benefit: `timerRef` maintains the timer value between renders without causing a re-render."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar useRef?",
        en: "📌 When NOT to use useRef?"
      },
      content: {
        es: [
          "❌ Si necesitas que un cambio en el valor desencadene una renderización, usa `useState` en su lugar.",
          "❌ Si no necesitas acceder a un elemento del DOM o almacenar un valor mutable.",
          "❌ Si el valor no necesita persistir entre renders."
        ],
        en: [
          "❌ If you need a change in value to trigger a re-render, use `useState` instead.",
          "❌ If you don't need to access a DOM element or store a mutable value.",
          "❌ If the value does not need to persist between renders."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useRef es útil para acceder a elementos del DOM y almacenar valores mutables sin causar una nueva renderización.",
      "✅ Es ideal para mantener valores entre renders sin desencadenar efectos secundarios.",
      "✅ No debe usarse si el cambio en el valor debe desencadenar una renderización."
    ],
    en: [
      "✅ useRef is useful for accessing DOM elements and storing mutable values without causing a re-render.",
      "✅ It is ideal for maintaining values between renders without triggering side effects.",
      "✅ It should not be used if a change in value should trigger a re-render."
    ]
  }
};

export default concept;