import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Patrón State Reducer en React",
    en: "State Reducer Pattern in React"
  },
  slug: "state-reducer-pattern",
  description: {
    es: "El Patrón State Reducer es un patrón avanzado en React que permite externalizar la lógica de actualización del estado de un componente. Esto se logra mediante una función reductora (reducer) que controla cómo se actualiza el estado en respuesta a acciones específicas.",
    en: "The State Reducer Pattern is an advanced pattern in React that allows externalizing the state update logic of a component. This is achieved through a reducer function that controls how the state is updated in response to specific actions."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Patrón State Reducer?",
        en: "🔹What is the State Reducer Pattern?"
      },
      code: `function reducer(state, action) { /* ... */ }`,
      content: {
        es: "El Patrón State Reducer encapsula la lógica de actualización del estado en una función reductora externa. Esto permite que los consumidores del componente puedan personalizar cómo se maneja el estado sin modificar la implementación interna del componente.",
        en: "The State Reducer Pattern encapsulates the state update logic in an external reducer function. This allows consumers of the component to customize how the state is handled without modifying the internal implementation of the component."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Patrón State Reducer?",
        en: "🔹When to use the State Reducer Pattern?"
      },
      content: {
        es: [
          "Cuando necesitas permitir que los usuarios del componente personalicen la lógica de actualización del estado.",
          "Cuando quieres desacoplar la lógica de estado de la implementación del componente.",
          "Cuando deseas mejorar la reutilización y flexibilidad de un componente complejo."
        ],
        en: [
          "When you need to allow users of the component to customize the state update logic.",
          "When you want to decouple state logic from the component's implementation.",
          "When you want to improve the reusability and flexibility of a complex component."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Patrón State Reducer y useState",
        en: "🔹Comparison between State Reducer Pattern and useState"
      },
      headers: {
        es: ["Característica", "Patrón State Reducer", "`useState`"],
        en: ["Feature", "State Reducer Pattern", "`useState`"]
      },
      rows: [
        {
          es: ["Personalización", "✅ Alta (lógica externa)", "❌ Baja (lógica interna)"],
          en: ["Customization", "✅ High (external logic)", "❌ Low (internal logic)"]
        },
        {
          es: ["Reutilización", "✅ Alta (desacoplado)", "❌ Baja (acoplado)"],
          en: ["Reusability", "✅ High (decoupled)", "❌ Low (coupled)"]
        },
        {
          es: ["Complejidad", "✅ Más complejo (avanzado)", "❌ Más simple (básico)"],
          en: ["Complexity", "✅ More complex (advanced)", "❌ Simpler (basic)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico del Patrón State Reducer",
        en: "1️⃣ Practical example of the State Reducer Pattern"
      },
      caseTitle: {
        es: "Uso básico con `useReducer`",
        en: "Basic usage with `useReducer`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `useReducer` para implementar el Patrón State Reducer y externalizar la lógica de actualización del estado.",
        en: "This example demonstrates how to use `useReducer` to implement the State Reducer Pattern and externalize the state update logic."
      },
      code: `import React, { useReducer } from 'react';

// Función reductora
function toggleReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { on: !state.on };
    default:
      throw new Error('Acción desconocida');
  }
}

// Componente Toggle
function Toggle({ reducer = toggleReducer }) {
  const [state, dispatch] = useReducer(reducer, { on: false });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'toggle' })}>
        {state.on ? 'Encendido' : 'Apagado'}
      </button>
    </div>
  );
}

export default Toggle;`,
      conclusion: {
        es: "🔥 Beneficio: La lógica de actualización del estado está encapsulada en una función reductora, lo que facilita su personalización.",
        en: "🔥 Benefit: The state update logic is encapsulated in a reducer function, making it easier to customize."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico del Patrón State Reducer",
        en: "2️⃣ Practical example of the State Reducer Pattern"
      },
      caseTitle: {
        es: "Personalización del reductor",
        en: "Reducer customization"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo permitir que los consumidores del componente personalicen la lógica del reductor pasando su propia función reductora.",
        en: "This example demonstrates how to allow consumers of the component to customize the reducer logic by passing their own reducer function."
      },
      code: `import React, { useReducer } from 'react';

// Función reductora predeterminada
function defaultToggleReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { on: !state.on };
    default:
      throw new Error('Acción desconocida');
  }
}

// Componente Toggle
function Toggle({ reducer = defaultToggleReducer }) {
  const [state, dispatch] = useReducer(reducer, { on: false });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'toggle' })}>
        {state.on ? 'Encendido' : 'Apagado'}
      </button>
    </div>
  );
}

// Personalización del reductor
function customToggleReducer(state, action) {
  if (action.type === 'toggle') {
    return { on: true }; // Siempre encendido
  }
  return state;
}

// Uso en la aplicación
function App() {
  return (
    <div>
      <h1>Toggle Predeterminado</h1>
      <Toggle />
      <h1>Toggle Personalizado</h1>
      <Toggle reducer={customToggleReducer} />
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Los consumidores pueden personalizar completamente la lógica del reductor sin modificar el componente base.",
        en: "🔥 Benefit: Consumers can fully customize the reducer logic without modifying the base component."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico del Patrón State Reducer",
        en: "3️⃣ Practical example of the State Reducer Pattern"
      },
      caseTitle: {
        es: "Combinación con Context API",
        en: "Combination with Context API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo combinar el Patrón State Reducer con Context API para gestionar el estado global de manera flexible.",
        en: "This example demonstrates how to combine the State Reducer Pattern with Context API to manage global state in a flexible way."
      },
      code: `import React, { createContext, useContext, useReducer } from 'react';

// Crear un contexto
const ToggleContext = createContext();

// Función reductora predeterminada
function defaultToggleReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { on: !state.on };
    default:
      throw new Error('Acción desconocida');
  }
}

// Proveedor de contexto
function ToggleProvider({ reducer = defaultToggleReducer, children }) {
  const [state, dispatch] = useReducer(reducer, { on: false });
  const value = { state, dispatch };

  return (
    <ToggleContext.Provider value={value}>
      {children}
    </ToggleContext.Provider>
  );
}

// Hook personalizado
function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle debe usarse dentro de un ToggleProvider');
  }
  return context;
}

// Componente Toggle
function ToggleButton() {
  const { state, dispatch } = useToggle();
  return (
    <button onClick={() => dispatch({ type: 'toggle' })}>
      {state.on ? 'Encendido' : 'Apagado'}
    </button>
  );
}

// Uso en la aplicación
function App() {
  return (
    <ToggleProvider>
      <ToggleButton />
    </ToggleProvider>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: La combinación del Patrón State Reducer con Context API permite gestionar el estado global de manera flexible y personalizable.",
        en: "🔥 Benefit: Combining the State Reducer Pattern with Context API allows managing global state in a flexible and customizable way."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar el Patrón State Reducer?",
        en: "📌 When NOT to use the State Reducer Pattern?"
      },
      content: {
        es: [
          "❌ Si el componente tiene un estado simple y no requiere personalización.",
          "❌ Si prefieres mantener la lógica de estado interna para simplificar el código.",
          "❌ Si el uso del patrón introduce complejidad innecesaria en aplicaciones pequeñas."
        ],
        en: [
          "❌ If the component has a simple state and does not require customization.",
          "❌ If you prefer keeping the state logic internal to simplify the code.",
          "❌ If using the pattern introduces unnecessary complexity in small applications."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Patrón State Reducer es ideal para externalizar la lógica de actualización del estado y permitir su personalización.",
      "✅ Permite mejorar la reutilización y flexibilidad de componentes complejos.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura si no se gestiona adecuadamente."
    ],
    en: [
      "✅ The State Reducer Pattern is ideal for externalizing state update logic and allowing customization.",
      "✅ It improves the reusability and flexibility of complex components.",
      "✅ It should not be overused, as it can complicate the structure if not managed properly."
    ]
  }
};

export default concept;