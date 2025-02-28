import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Patrón Observador en React",
    en: "Observer Pattern in React"
  },
  slug: "observer-pattern",
  description: {
    es: "El Patrón Observador es un patrón de diseño que permite que un objeto (el observador) sea notificado automáticamente cuando cambia el estado de otro objeto (el sujeto). En React, este patrón se implementa comúnmente mediante el uso de estados y props, o mediante Context API y hooks como `useEffect`.",
    en: "The Observer Pattern is a design pattern that allows an object (the observer) to be automatically notified when the state of another object (the subject) changes. In React, this pattern is commonly implemented using states and props, or through the Context API and hooks like `useEffect`."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Patrón Observador?",
        en: "🔹What is the Observer Pattern?"
      },
      code: `const [state, setState] = useState(initialState);`,
      content: {
        es: "El Patrón Observador define una relación uno-a-muchos entre objetos, donde un cambio en el estado del sujeto notifica automáticamente a todos los observadores registrados. En React, los componentes pueden actuar como observadores que reaccionan a cambios en el estado o contexto.",
        en: "The Observer Pattern defines a one-to-many relationship between objects, where a change in the subject's state automatically notifies all registered observers. In React, components can act as observers that react to changes in state or context."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Patrón Observador?",
        en: "🔹When to use the Observer Pattern?"
      },
      content: {
        es: [
          "Cuando necesitas que múltiples componentes reaccionen a cambios en un estado compartido.",
          "Cuando quieres centralizar la gestión de estado y notificar a los componentes afectados.",
          "Cuando deseas desacoplar la lógica de actualización de la presentación."
        ],
        en: [
          "When you need multiple components to react to changes in a shared state.",
          "When you want to centralize state management and notify affected components.",
          "When you want to decouple update logic from presentation."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Patrón Observador y Props Drilling",
        en: "🔹Comparison between Observer Pattern and Props Drilling"
      },
      headers: {
        es: ["Característica", "Patrón Observador", "Props Drilling"],
        en: ["Feature", "Observer Pattern", "Props Drilling"]
      },
      rows: [
        {
          es: ["Reutilización de lógica", "✅ Sí (mediante suscripción)", "❌ No (requiere pasar props manualmente)"],
          en: ["Logic reuse", "✅ Yes (via subscription)", "❌ No (requires manually passing props)"]
        },
        {
          es: ["Legibilidad", "✅ Más limpio (desacoplado)", "❌ Menos limpio (dependiente de jerarquía)"],
          en: ["Readability", "✅ Cleaner (decoupled)", "❌ Less clean (hierarchy-dependent)"]
        },
        {
          es: ["Escalabilidad", "✅ Escalable (gestión centralizada)", "❌ Menos escalable (prop drilling profundo)"],
          en: ["Scalability", "✅ Scalable (centralized management)", "❌ Less scalable (deep prop drilling)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico del Patrón Observador",
        en: "1️⃣ Practical example of the Observer Pattern"
      },
      caseTitle: {
        es: "Uso básico con `useState`",
        en: "Basic usage with `useState`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo un componente padre actúa como sujeto y notifica a sus hijos (observadores) sobre cambios en el estado.",
        en: "This example demonstrates how a parent component acts as the subject and notifies its children (observers) about state changes."
      },
      code: `import React, { useState } from 'react';

// Componente padre (sujeto)
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <ChildComponent count={count} />
    </div>
  );
};

// Componente hijo (observador)
const ChildComponent = ({ count }) => {
  return <p>El contador ha cambiado: {count}</p>;
};

export default ParentComponent;`,
      conclusion: {
        es: "🔥 Beneficio: El componente hijo reacciona automáticamente a los cambios en el estado del padre.",
        en: "🔥 Benefit: The child component automatically reacts to changes in the parent's state."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico del Patrón Observador",
        en: "2️⃣ Practical example of the Observer Pattern"
      },
      caseTitle: {
        es: "Uso avanzado con Context API",
        en: "Advanced usage with Context API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Context API para implementar el Patrón Observador y notificar a múltiples componentes sobre cambios en el estado global.",
        en: "This example demonstrates how to use the Context API to implement the Observer Pattern and notify multiple components about changes in global state."
      },
      code: `import React, { createContext, useContext, useState } from 'react';

// Crear un contexto
const CountContext = createContext();

// Proveedor de contexto (sujeto)
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Componente consumidor (observador)
const CounterDisplay = () => {
  const { count } = useContext(CountContext);
  return <p>Contador: {count}</p>;
};

// Componente controlador
const CounterButton = () => {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount((c) => c + 1)}>Incrementar</button>;
};

// Uso en la aplicación
const App = () => {
  return (
    <CountProvider>
      <CounterDisplay />
      <CounterButton />
    </CountProvider>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: La Context API permite implementar el Patrón Observador de manera centralizada y escalable.",
        en: "🔥 Benefit: The Context API allows implementing the Observer Pattern in a centralized and scalable way."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico del Patrón Observador",
        en: "3️⃣ Practical example of the Observer Pattern"
      },
      caseTitle: {
        es: "Notificación con `useEffect`",
        en: "Notification with `useEffect`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `useEffect` para observar cambios en un estado y realizar acciones adicionales.",
        en: "This example demonstrates how to use `useEffect` to observe changes in a state and perform additional actions."
      },
      code: `import React, { useState, useEffect } from 'react';

const NotificationComponent = () => {
  const [count, setCount] = useState(0);

  // Observador: Reacciona a cambios en el estado
  useEffect(() => {
    console.log(\`El contador ha cambiado: \${count}\`);
  }, [count]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default NotificationComponent;`,
      conclusion: {
        es: "🔥 Beneficio: `useEffect` permite observar cambios en el estado y ejecutar lógica adicional sin modificar el flujo principal.",
        en: "🔥 Benefit: `useEffect` allows observing state changes and executing additional logic without modifying the main flow."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar el Patrón Observador?",
        en: "📌 When NOT to use the Observer Pattern?"
      },
      content: {
        es: [
          "❌ Si el estado no necesita ser compartido ni observado por múltiples componentes.",
          "❌ Si prefieres mantener la lógica de estado local dentro de un solo componente.",
          "❌ Si el uso del patrón introduce complejidad innecesaria en aplicaciones pequeñas."
        ],
        en: [
          "❌ If the state does not need to be shared or observed by multiple components.",
          "❌ If you prefer keeping state logic local within a single component.",
          "❌ If using the pattern introduces unnecessary complexity in small applications."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Patrón Observador es ideal para gestionar estados compartidos y notificar a múltiples componentes sobre cambios.",
      "✅ Permite desacoplar la lógica de actualización de la presentación, mejorando la organización del código.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura si no se gestiona adecuadamente."
    ],
    en: [
      "✅ The Observer Pattern is ideal for managing shared states and notifying multiple components about changes.",
      "✅ It allows decoupling update logic from presentation, improving code organization.",
      "✅ It should not be overused, as it can complicate the structure if not managed properly."
    ]
  }
};

export default concept;