import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "HOC (Componentes de Orden Superior) en React",
    en: "HOC (Higher-Order Components) in React"
  },
  slug: "hoc",
  description: {
    es: "Un HOC (Componente de Orden Superior) es una función que toma un componente y devuelve un nuevo componente con funcionalidades adicionales. Es un patrón avanzado en React que permite reutilizar lógica entre componentes sin duplicar código.",
    en: "A HOC (Higher-Order Component) is a function that takes a component and returns a new component with additional functionalities. It is an advanced pattern in React that allows reusing logic between components without duplicating code."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es un HOC?",
        en: "🔹What is a HOC?"
      },
      code: "const EnhancedComponent = withHOC(OriginalComponent);",
      content: {
        es: "Un HOC es una función que recibe un componente como argumento y devuelve un nuevo componente enriquecido con props adicionales, estado, o lógica. Es útil para compartir comportamientos comunes entre componentes.",
        en: "A HOC is a function that takes a component as an argument and returns a new component enriched with additional props, state, or logic. It is useful for sharing common behaviors between components."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar un HOC?",
        en: "🔹When to use a HOC?"
      },
      content: {
        es: [
          "Cuando necesitas reutilizar lógica en múltiples componentes (por ejemplo, autenticación, logging, etc.).",
          "Cuando quieres separar la lógica de la presentación en componentes.",
          "Cuando necesitas inyectar props adicionales o modificar el comportamiento de un componente."
        ],
        en: [
          "When you need to reuse logic across multiple components (e.g., authentication, logging, etc.).",
          "When you want to separate logic from presentation in components.",
          "When you need to inject additional props or modify a component's behavior."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre HOC y Render Props",
        en: "🔹Comparison between HOC and Render Props"
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
          es: ["Legibilidad", "✅ Menos explícito (puede ser confuso)", "✅ Más explícito (fácil de seguir)"],
          en: ["Readability", "✅ Less explicit (can be confusing)", "✅ More explicit (easy to follow)"]
        },
        {
          es: ["Flexibilidad", "✅ Menos flexible (estructura fija)", "✅ Más flexible (dinámico)"],
          en: ["Flexibility", "✅ Less flexible (fixed structure)", "✅ More flexible (dynamic)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de HOC",
        en: "1️⃣ Practical example of HOC"
      },
      caseTitle: {
        es: "Inyectar props adicionales",
        en: "Inject additional props"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un HOC para inyectar props adicionales a un componente.",
        en: "This example demonstrates how to use a HOC to inject additional props into a component."
      },
      code: `import React from 'react';

// HOC que inyecta un prop "message"
const withMessage = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} message="¡Hola desde el HOC!" />;
  };
};

// Componente original
const MyComponent = ({ message }) => {
  return <p>{message}</p>;
};

// Componente mejorado con el HOC
const EnhancedComponent = withMessage(MyComponent);

// Uso en la aplicación
const App = () => {
  return <EnhancedComponent />;
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El HOC inyecta props adicionales sin modificar el componente original.",
        en: "🔥 Benefit: The HOC injects additional props without modifying the original component."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de HOC",
        en: "2️⃣ Practical example of HOC"
      },
      caseTitle: {
        es: "Manejo de autenticación",
        en: "Authentication handling"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un HOC para manejar la autenticación y redirigir a los usuarios no autenticados.",
        en: "This example demonstrates how to use a HOC to handle authentication and redirect unauthenticated users."
      },
      code: `import React from 'react';
import { Redirect } from 'react-router-dom';

// HOC para manejar autenticación
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

// Componente protegido
const Dashboard = () => {
  return <p>Bienvenido al Dashboard</p>;
};

// Componente mejorado con el HOC
const ProtectedDashboard = withAuth(Dashboard);

// Uso en la aplicación
const App = () => {
  return <ProtectedDashboard />;
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El HOC maneja la lógica de autenticación de manera reutilizable.",
        en: "🔥 Benefit: The HOC handles authentication logic in a reusable way."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de HOC",
        en: "3️⃣ Practical example of HOC"
      },
      caseTitle: {
        es: "Logging de eventos",
        en: "Event logging"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un HOC para agregar logging de eventos a un componente.",
        en: "This example demonstrates how to use a HOC to add event logging to a component."
      },
      code: `import React from 'react';

// HOC para logging de eventos
const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(\`Componente \${WrappedComponent.name} montado\`);
    }

    componentWillUnmount() {
      console.log(\`Componente \${WrappedComponent.name} desmontado\`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Componente original
const MyComponent = () => {
  return <p>Componente con logging</p>;
};

// Componente mejorado con el HOC
const EnhancedComponent = withLogging(MyComponent);

// Uso en la aplicación
const App = () => {
  return <EnhancedComponent />;
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El HOC agrega logging sin modificar la lógica del componente original.",
        en: "🔥 Benefit: The HOC adds logging without modifying the original component's logic."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar un HOC?",
        en: "📌 When NOT to use a HOC?"
      },
      content: {
        es: [
          "❌ Si la lógica es específica de un solo componente y no necesita reutilización.",
          "❌ Si prefieres usar hooks personalizados para compartir lógica.",
          "❌ Si el uso de HOC hace que el código sea menos legible o más difícil de mantener."
        ],
        en: [
          "❌ If the logic is specific to a single component and does not need reuse.",
          "❌ If you prefer using custom hooks to share logic.",
          "❌ If using HOCs makes the code less readable or harder to maintain."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los HOC son ideales para reutilizar lógica en múltiples componentes sin duplicar código.",
      "✅ Permiten separar la lógica de la presentación, mejorando la organización del código.",
      "✅ No deben usarse en exceso, ya que pueden complicar la estructura del componente."
    ],
    en: [
      "✅ HOCs are ideal for reusing logic across multiple components without duplicating code.",
      "✅ They allow separating logic from presentation, improving code organization.",
      "✅ They should not be overused, as they can complicate the component structure."
    ]
  }
};

export default concept;