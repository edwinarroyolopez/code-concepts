import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useState en React",
    en: "useState in React"
  },
  slug: "use-state",
  description: {
    es: "useState es el hook fundamental de React para manejar el estado local en componentes funcionales. Permite definir y actualizar el estado a lo largo del ciclo de vida del componente.",
    en: "useState is the fundamental React hook for managing local state in functional components. It allows you to define and update state throughout the component's lifecycle."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const [state, setState] = useState(initialValue);",
      content: {
        es: "useState devuelve un arreglo con el estado actual y una función para actualizarlo. Cada vez que se actualiza el estado, el componente se vuelve a renderizar.",
        en: "useState returns an array containing the current state and a function to update it. Every time the state updates, the component re-renders."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useState?",
        en: "🔹When to use useState?"
      },
      content: {
        es: [
          "Para estados locales simples en componentes funcionales.",
          "Cuando no se requiere lógica compleja para actualizar el estado.",
          "Para manejar datos que cambian a lo largo del ciclo de vida del componente."
        ],
        en: [
          "For simple local state in functional components.",
          "When complex state update logic is not required.",
          "To manage data that changes over the component's lifecycle."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre variables normales y useState",
        en: "🔹Comparison between normal variables and useState"
      },
      headers: {
        es: ["Característica", "Variable normal", "useState"],
        en: ["Feature", "Normal Variable", "useState"]
      },
      rows: [
        {
          es: ["Persistencia en renders", "No", "Sí"],
          en: ["Persistence across renders", "No", "Yes"]
        },
        {
          es: ["Actualización de UI", "No", "Sí"],
          en: ["UI update", "No", "Yes"]
        },
        {
          es: ["Inmutabilidad", "No garantizada", "Garantizada"],
          en: ["Immutability", "Not guaranteed", "Guaranteed"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useState",
        en: "1️⃣ Practical example of useState"
      },
      caseTitle: {
        es: "Contador simple",
        en: "Simple counter"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useState para manejar un contador.",
        en: "This example demonstrates how to use useState to manage a counter."
      },
      code: `import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Counter;`,
      conclusion: {
        es: "🔥 Beneficio: useState permite actualizar el estado de forma sencilla y reactiva.",
        en: "🔥 Benefit: useState allows you to update state in a simple and reactive way."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useState",
        en: "2️⃣ Practical example of useState"
      },
      caseTitle: {
        es: "Manejo de formularios",
        en: "Form handling"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useState para manejar los datos de un formulario.",
        en: "This example demonstrates how to use useState to handle form data."
      },
      code: `import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <form>
      <input\n        type=\"text\"\n        name=\"name\"\n        value={formData.name}\n        onChange={handleChange}\n        placeholder=\"Nombre\"\n      />\n      <input\n        type=\"email\"\n        name=\"email\"\n        value={formData.email}\n        onChange={handleChange}\n        placeholder=\"Correo\"\n      />\n      <button type=\"submit\">Enviar</button>\n    </form>\n  );\n};\n\nexport default FormComponent;`,
      conclusion: {
        es: "🔥 Beneficio: useState facilita el manejo de entradas en formularios y su actualización.",
        en: "🔥 Benefit: useState makes handling form inputs and updates straightforward."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useState",
        en: "3️⃣ Practical example of useState"
      },
      caseTitle: {
        es: "Toggle de un booleano",
        en: "Boolean toggle"
      },
      caseDescription: {
        es: "Este ejemplo demuestra cómo alternar un valor booleano usando useState.",
        en: "This example demonstrates how to toggle a boolean value using useState."
      },
      code: `import { useState } from "react";

const ToggleComponent = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>{isOn ? "Encendido" : "Apagado"}</p>
      <button onClick={() => setIsOn(prev => !prev)}>Alternar</button>
    </div>
  );
};

export default ToggleComponent;`,
      conclusion: {
        es: "🔥 Beneficio: useState permite alternar estados de manera sencilla.",
        en: "🔥 Benefit: useState enables simple toggling of state values."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo no usar useState?",
        en: "📌 When NOT to use useState?"
      },
      content: {
        es: [
          "❌ Si el estado es muy complejo o involucra múltiples subvalores, considera usar useReducer.",
          "❌ Si necesitas compartir el estado a nivel global, evalúa usar Context o una librería de estado.",
          "❌ Si la lógica de actualización es muy compleja, podrías considerar soluciones alternativas."
        ],
        en: [
          "❌ If the state is very complex or involves multiple sub-values, consider using useReducer.",
          "❌ If you need to share state globally, consider using Context or a state management library.",
          "❌ If the update logic is very complex, you might consider alternative solutions."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useState es el hook fundamental para manejar el estado local en componentes funcionales.",
      "✅ Es fácil de usar y adecuado para la mayoría de los casos simples.",
      "✅ Para estados complejos, se pueden considerar otros hooks como useReducer o Context."
    ],
    en: [
      "✅ useState is the fundamental hook for managing local state in functional components.",
      "✅ It is easy to use and suitable for most simple cases.",
      "✅ For complex state management, consider other hooks like useReducer or Context."
    ]
  }
};

export default concept;
