import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Component Slot en React",
    en: "Component Slot in React"
  },
  slug: "component-slot",
  description: {
    es: "Un Component Slot es un patrón en React que permite a los desarrolladores inyectar contenido personalizado dentro de un componente. Esto se logra utilizando las props `children` o props específicas para definir áreas donde se puede insertar contenido.",
    en: "A Component Slot is a pattern in React that allows developers to inject custom content into a component. This is achieved by using the `children` prop or specific props to define areas where content can be inserted."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es un Component Slot?",
        en: "🔹What is a Component Slot?"
      },
      code: `<Layout><p>Contenido personalizado</p></Layout>`,
      content: {
        es: "Un Component Slot es un área dentro de un componente que permite recibir contenido personalizado. Esto se logra utilizando la prop `children` o props específicas para definir diferentes 'slots' dentro del componente.",
        en: "A Component Slot is an area within a component that allows receiving custom content. This is achieved by using the `children` prop or specific props to define different 'slots' within the component."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar un Component Slot?",
        en: "🔹When to use a Component Slot?"
      },
      content: {
        es: [
          "Cuando necesitas crear componentes reutilizables con contenido dinámico.",
          "Cuando quieres separar la estructura del diseño del contenido específico.",
          "Cuando deseas permitir que otros desarrolladores personalicen partes específicas de un componente."
        ],
        en: [
          "When you need to create reusable components with dynamic content.",
          "When you want to separate layout structure from specific content.",
          "When you want to allow other developers to customize specific parts of a component."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Component Slot y HOC",
        en: "🔹Comparison between Component Slot and HOC"
      },
      headers: {
        es: ["Característica", "Component Slot", "HOC"],
        en: ["Feature", "Component Slot", "HOC"]
      },
      rows: [
        {
          es: ["Reutilización de lógica", "✅ Sí (mediante props)", "✅ Sí (mediante composición)"],
          en: ["Logic reuse", "✅ Yes (via props)", "✅ Yes (via composition)"]
        },
        {
          es: ["Legibilidad", "✅ Más explícito (contenido visible)", "✅ Menos explícito (lógica oculta)"],
          en: ["Readability", "✅ More explicit (visible content)", "✅ Less explicit (hidden logic)"]
        },
        {
          es: ["Flexibilidad", "✅ Más flexible (contenido dinámico)", "✅ Menos flexible (estructura fija)"],
          en: ["Flexibility", "✅ More flexible (dynamic content)", "✅ Less flexible (fixed structure)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Component Slot",
        en: "1️⃣ Practical example of Component Slot"
      },
      caseTitle: {
        es: "Uso básico de `children`",
        en: "Basic usage of `children`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la prop `children` para inyectar contenido personalizado en un componente.",
        en: "This example demonstrates how to use the `children` prop to inject custom content into a component."
      },
      code: `import React from 'react';

// Componente con slot básico
const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      {children}
    </div>
  );
};

// Uso del componente
const App = () => {
  return (
    <Card>
      <h1>Título de la tarjeta</h1>
      <p>Este es el contenido personalizado.</p>
    </Card>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El uso de `children` permite inyectar contenido dinámico sin modificar el componente base.",
        en: "🔥 Benefit: The use of `children` allows injecting dynamic content without modifying the base component."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Component Slot",
        en: "2️⃣ Practical example of Component Slot"
      },
      caseTitle: {
        es: "Slots nombrados",
        en: "Named slots"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar props específicas para definir múltiples slots dentro de un componente.",
        en: "This example demonstrates how to use specific props to define multiple slots within a component."
      },
      code: `import React from 'react';

// Componente con slots nombrados
const Layout = ({ header, sidebar, content }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <header style={{ backgroundColor: '#f0f0f0', padding: '8px' }}>{header}</header>
      <aside style={{ backgroundColor: '#e0e0e0', padding: '8px' }}>{sidebar}</aside>
      <main style={{ backgroundColor: '#ffffff', padding: '16px' }}>{content}</main>
    </div>
  );
};

// Uso del componente
const App = () => {
  return (
    <Layout
      header={<h1>Encabezado</h1>}
      sidebar={<p>Menú lateral</p>}
      content={<p>Contenido principal</p>}
    />
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Los slots nombrados permiten una mayor flexibilidad al definir áreas específicas dentro de un componente.",
        en: "🔥 Benefit: Named slots provide greater flexibility by defining specific areas within a component."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Component Slot",
        en: "3️⃣ Practical example of Component Slot"
      },
      caseTitle: {
        es: "Composición avanzada con slots",
        en: "Advanced composition with slots"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo combinar múltiples slots para crear componentes altamente personalizables.",
        en: "This example demonstrates how to combine multiple slots to create highly customizable components."
      },
      code: `import React from 'react';

// Componente con múltiples slots
const Modal = ({ title, body, footer }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px' }}>
      <div style={{ marginBottom: '8px' }}>{title}</div>
      <div style={{ marginBottom: '16px' }}>{body}</div>
      <div>{footer}</div>
    </div>
  );
};

// Uso del componente
const App = () => {
  return (
    <Modal
      title={<h2>Título del modal</h2>}
      body={<p>Este es el cuerpo del modal.</p>}
      footer={<button>Cerrar</button>}
    />
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: La composición avanzada con slots permite crear componentes modulares y reutilizables.",
        en: "🔥 Benefit: Advanced composition with slots allows creating modular and reusable components."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar un Component Slot?",
        en: "📌 When NOT to use a Component Slot?"
      },
      content: {
        es: [
          "❌ Si el contenido no necesita ser dinámico ni personalizable.",
          "❌ Si prefieres usar HOC o hooks para compartir lógica en lugar de estructura.",
          "❌ Si el uso de slots hace que el componente sea menos legible o más complejo."
        ],
        en: [
          "❌ If the content does not need to be dynamic or customizable.",
          "❌ If you prefer using HOCs or hooks to share logic instead of structure.",
          "❌ If using slots makes the component less readable or more complex."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los Component Slots son ideales para crear componentes reutilizables con contenido dinámico.",
      "✅ Permiten separar la estructura del diseño del contenido específico, mejorando la organización del código.",
      "✅ No deben usarse en exceso, ya que pueden complicar la estructura del componente si no se gestionan adecuadamente."
    ],
    en: [
      "✅ Component Slots are ideal for creating reusable components with dynamic content.",
      "✅ They allow separating layout structure from specific content, improving code organization.",
      "✅ They should not be overused, as they can complicate the component structure if not managed properly."
    ]
  }
};

export default concept;