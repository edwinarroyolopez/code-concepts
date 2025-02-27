import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useImperativeHandle en React",
    en: "useImperativeHandle in React"
  },
  slug: "use-imperative-handle",
  description: {
    es: "useImperativeHandle es un hook de React que, junto con forwardRef, permite personalizar los métodos y propiedades expuestos a componentes padres mediante una ref. Es útil para encapsular la lógica interna y exponer solo lo necesario.",
    en: "useImperativeHandle is a React hook that, together with forwardRef, allows you to customize the methods and properties exposed to parent components via a ref. It is useful for encapsulating internal logic and exposing only what is necessary."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const refValue = useImperativeHandle(ref, () => ({ ...methods }), [dependencies]);",
      content: {
        es: "useImperativeHandle se utiliza junto con forwardRef para exponer únicamente los métodos o propiedades que el componente padre necesita, limitando lo que se muestra y mejorando el encapsulamiento.",
        en: "useImperativeHandle is used with forwardRef to expose only the methods or properties that the parent component needs, limiting what is exposed and improving encapsulation."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useImperativeHandle?",
        en: "🔹When to use useImperativeHandle?"
      },
      content: {
        es: [
          "Cuando se necesita exponer métodos imperativos desde un componente hijo.",
          "Para personalizar la API de una ref y limitar lo que se expone al componente padre.",
          "Cuando se requiere encapsular la lógica interna sin exponerla completamente."
        ],
        en: [
          "When you need to expose imperative methods from a child component.",
          "To customize the API of a ref and restrict what is exposed to the parent component.",
          "When you need to encapsulate internal logic without fully exposing it."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre uso predeterminado de ref y useImperativeHandle",
        en: "🔹Comparison between default ref usage and useImperativeHandle"
      },
      headers: {
        es: ["Característica", "Uso predeterminado", "useImperativeHandle"],
        en: ["Feature", "Default ref", "useImperativeHandle"]
      },
      rows: [
        {
          es: ["Exposición de métodos", "Exposición completa", "Exposición personalizada"],
          en: ["Method exposure", "Full exposure", "Customized exposure"]
        },
        {
          es: ["Encapsulamiento", "Bajo", "Alto"],
          en: ["Encapsulation", "Low", "High"]
        },
        {
          es: ["Control", "Limitado", "Mayor control sobre la API expuesta"],
          en: ["Control", "Limited", "More control over the exposed API"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useImperativeHandle",
        en: "1️⃣ Practical example of useImperativeHandle"
      },
      caseTitle: {
        es: "Exponer un método de enfoque",
        en: "Expose a focus method"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo exponer un método 'focus' en un componente de entrada.",
        en: "This example demonstrates how to expose a 'focus' method in an input component."
      },
      code: `import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  useImperativeHandle(ref, () => ({\n    focus: () => {\n      inputRef.current.focus();\n    }\n  }));\n  \n  return <input ref={inputRef} {...props} />;\n});

const Parent = () => {\n  const inputRef = useRef(null);\n  return (\n    <div>\n      <Input ref={inputRef} placeholder=\"Escribe algo...\" />\n      <button onClick={() => inputRef.current.focus()}>Enfocar</button>\n    </div>\n  );\n};

export default Parent;`,
      conclusion: {
        es: "🔥 Beneficio: Permite exponer solo los métodos necesarios, mejorando el encapsulamiento y la seguridad de la API del componente.",
        en: "🔥 Benefit: Allows exposing only the necessary methods, enhancing encapsulation and component API security."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useImperativeHandle",
        en: "2️⃣ Practical example of useImperativeHandle"
      },
      caseTitle: {
        es: "Limitar la API de una ref",
        en: "Limit the API of a ref"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useImperativeHandle para limitar los métodos expuestos por un componente, ocultando la implementación interna.",
        en: "This example demonstrates how to use useImperativeHandle to restrict the methods exposed by a component, hiding its internal implementation."
      },
      code: `import React, { useRef, forwardRef, useImperativeHandle } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  useImperativeHandle(ref, () => ({\n    clear: () => {\n      inputRef.current.value = \"\";\n    }\n  }));\n  \n  return <input ref={inputRef} {...props} />;\n});

const ParentComponent = () => {\n  const inputRef = useRef(null);\n  return (\n    <div>\n      <CustomInput ref={inputRef} placeholder=\"Ingresa texto...\" />\n      <button onClick={() => inputRef.current.clear()}>Limpiar</button>\n    </div>\n  );\n};

export default ParentComponent;`,
      conclusion: {
        es: "🔥 Beneficio: Se expone únicamente el método 'clear', ocultando la implementación interna del componente.",
        en: "🔥 Benefit: Only the 'clear' method is exposed, hiding the component's internal implementation."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useImperativeHandle",
        en: "3️⃣ Practical example of useImperativeHandle"
      },
      caseTitle: {
        es: "Exponer una API personalizada",
        en: "Expose a custom API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo exponer una API personalizada en un componente, permitiendo al componente padre interactuar de manera controlada.",
        en: "This example demonstrates how to expose a custom API in a component, allowing the parent to interact in a controlled manner."
      },
      code: `import React, { useRef, forwardRef, useImperativeHandle } from "react";

const CustomComponent = forwardRef((props, ref) => {
  const localValue = "Valor interno";\n  \n  useImperativeHandle(ref, () => ({\n    getValue: () => localValue,\n    alertValue: () => alert(localValue)\n  }));\n  \n  return <div>Componente Interno</div>;\n});\n\nconst ParentComponent = () => {\n  const compRef = useRef(null);\n  return (\n    <div>\n      <CustomComponent ref={compRef} />\n      <button onClick={() => alert(compRef.current.getValue())}>Obtener Valor</button>\n      <button onClick={() => compRef.current.alertValue()}>Alertar Valor</button>\n    </div>\n  );\n};\n\nexport default ParentComponent;`,
      conclusion: {
        es: "🔥 Beneficio: Permite al componente padre interactuar con el hijo a través de una API personalizada sin exponer toda su lógica interna.",
        en: "🔥 Benefit: Allows the parent component to interact with the child through a custom API without exposing its internal logic."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo no usar useImperativeHandle?",
        en: "📌 When NOT to use useImperativeHandle?"
      },
      content: {
        es: [
          "❌ Si no es necesario exponer métodos o propiedades, usar refs directamente es suficiente.",
          "❌ Si se puede lograr la funcionalidad mediante props y callbacks, es preferible esa solución.",
          "❌ Evitar usar useImperativeHandle para romper la abstracción de componentes."
        ],
        en: [
          "❌ If there is no need to expose methods or properties, using refs directly is enough.",
          "❌ If the functionality can be achieved through props and callbacks, that solution is preferable.",
          "❌ Avoid using useImperativeHandle to break component encapsulation."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useImperativeHandle permite exponer una API personalizada de un componente, mejorando el encapsulamiento.",
      "✅ Facilita la interacción controlada entre componentes padre e hijo.",
      "✅ Es útil para ocultar la lógica interna y exponer solo lo necesario."
    ],
    en: [
      "✅ useImperativeHandle allows exposing a custom API from a component, improving encapsulation.",
      "✅ It facilitates controlled interaction between parent and child components.",
      "✅ It is useful for hiding internal logic and exposing only what is necessary."
    ]
  }
};

export default concept;
