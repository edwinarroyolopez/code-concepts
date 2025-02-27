import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useReducer en React",
    en: "useReducer in React"
  },
  slug: "use-reducer",
  description: {
    es: "useReducer es un hook de React que permite manejar estados complejos mediante una función reductora. Centraliza la lógica de actualización del estado, lo que lo hace ideal para componentes con múltiples subvalores o lógica condicional compleja.",
    en: "useReducer is a React hook that allows you to manage complex state using a reducer function. It centralizes state update logic, making it ideal for components with multiple sub-values or complex conditional logic."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const [state, dispatch] = useReducer(reducer, initialState);",
      content: {
        es: "useReducer recibe un reducer y un estado inicial, y retorna el estado actual junto con una función dispatch para actualizarlo. Toda la lógica de actualización se centraliza en el reducer.",
        en: "useReducer takes a reducer and an initial state, returning the current state along with a dispatch function to update it. All update logic is centralized in the reducer."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useReducer?",
        en: "🔹When to use useReducer?"
      },
      content: {
        es: [
          "Cuando el estado es complejo y tiene múltiples subvalores.",
          "Cuando se requiere centralizar la lógica de actualización en un solo lugar.",
          "Cuando la actualización del estado depende de manera compleja del estado previo."
        ],
        en: [
          "When the state is complex and involves multiple sub-values.",
          "When you need to centralize update logic in one place.",
          "When state updates depend on the previous state in a complex manner."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre useState y useReducer",
        en: "🔹Comparison between useState and useReducer"
      },
      headers: {
        es: ["Característica", "useState", "useReducer"],
        en: ["Feature", "useState", "useReducer"]
      },
      rows: [
        {
          es: ["Lógica de actualización", "Distribuida en varios estados", "Centralizada en un reducer"],
          en: ["Update logic", "Spread across multiple useState calls", "Centralized in a reducer"]
        },
        {
          es: ["Complejidad", "Adecuado para casos simples", "Ideal para casos complejos"],
          en: ["Complexity", "Suitable for simple cases", "Ideal for complex cases"]
        },
        {
          es: ["Predecibilidad", "Menos predecible", "Más predecible con un reducer"],
          en: ["Predictability", "Less predictable", "More predictable with a reducer"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useReducer",
        en: "1️⃣ Practical example of useReducer"
      },
      caseTitle: {
        es: "Contador simple con useReducer",
        en: "Simple counter with useReducer"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo implementar un contador utilizando useReducer.",
        en: "This example demonstrates how to implement a counter using useReducer."
      },
      code: `import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
    </div>
  );
};

export default Counter;`,
      conclusion: {
        es: "🔥 Beneficio: useReducer centraliza la lógica de actualización, haciendo el estado más predecible y fácil de gestionar en casos complejos.",
        en: "🔥 Benefit: useReducer centralizes update logic, making state more predictable and easier to manage in complex cases."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useReducer",
        en: "2️⃣ Practical example of useReducer"
      },
      caseTitle: {
        es: "Manejo de formularios con useReducer",
        en: "Form handling with useReducer"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useReducer para gestionar los datos de un formulario de manera centralizada.",
        en: "This example demonstrates how to use useReducer to centrally manage form data."
      },
      code: `import { useReducer } from "react";

const initialState = { name: "", email: "" };

function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const FormComponent = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };
  
  return (
    <form>
      <input\n        type=\"text\"\n        name=\"name\"\n        value={state.name}\n        onChange={handleChange}\n        placeholder=\"Nombre\"\n      />\n      <input\n        type=\"email\"\n        name=\"email\"\n        value={state.email}\n        onChange={handleChange}\n        placeholder=\"Correo\"\n      />\n      <button type=\"button\" onClick={() => dispatch({ type: \"RESET\" })}>\n        Resetear\n      </button>\n    </form>\n  );\n};

export default FormComponent;`,
      conclusion: {
        es: "🔥 Beneficio: useReducer simplifica la gestión de formularios complejos al centralizar la lógica de actualización.",
        en: "🔥 Benefit: useReducer simplifies complex form management by centralizing update logic."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useReducer",
        en: "3️⃣ Practical example of useReducer"
      },
      caseTitle: {
        es: "Toggle de un booleano con useReducer",
        en: "Boolean toggle with useReducer"
      },
      caseDescription: {
        es: "Este ejemplo demuestra cómo alternar un valor booleano utilizando useReducer para gestionar el estado.",
        en: "This example demonstrates how to toggle a boolean value using useReducer for state management."
      },
      code: `import { useReducer } from "react";

function toggleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return !state;
    default:
      return state;
  }
}

const ToggleComponent = () => {
  const [isOn, dispatch] = useReducer(toggleReducer, false);
  return (
    <div>
      <p>{isOn ? "Encendido" : "Apagado"}</p>
      <button onClick={() => dispatch({ type: "toggle" })}>Alternar</button>
    </div>
  );
};

export default ToggleComponent;`,
      conclusion: {
        es: "🔥 Beneficio: useReducer permite manejar toggles y estados booleanos de forma clara y centralizada.",
        en: "🔥 Benefit: useReducer enables clear and centralized management of boolean toggles."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo no usar useReducer?",
        en: "📌 When NOT to use useReducer?"
      },
      content: {
        es: [
          "❌ Si el estado es muy simple, useState es suficiente.",
          "❌ Si la lógica de actualización no es compleja.",
          "❌ Si no se necesita centralizar múltiples actualizaciones en un solo lugar."
        ],
        en: [
          "❌ If the state is very simple, useState is sufficient.",
          "❌ If the update logic is not complex.",
          "❌ If there is no need to centralize multiple updates in one place."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useReducer centraliza la lógica de actualización, facilitando la gestión de estados complejos.",
      "✅ Es ideal para manejar múltiples subvalores y actualizaciones condicionales.",
      "✅ Permite un flujo de datos más predecible en el componente."
    ],
    en: [
      "✅ useReducer centralizes update logic, making complex state management easier.",
      "✅ It is ideal for handling multiple sub-values and conditional updates.",
      "✅ It provides a more predictable data flow within the component."
    ]
  }
};

export default concept;
