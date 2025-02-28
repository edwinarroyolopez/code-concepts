import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Patrón Factory en React",
    en: "Factory Pattern in React"
  },
  slug: "factory-pattern",
  description: {
    es: "El Patrón Factory es un patrón de diseño que proporciona una interfaz para crear objetos o componentes sin especificar sus clases concretas. En React, este patrón se utiliza comúnmente para generar componentes dinámicamente según ciertas condiciones o configuraciones.",
    en: "The Factory Pattern is a design pattern that provides an interface for creating objects or components without specifying their concrete classes. In React, this pattern is commonly used to dynamically generate components based on certain conditions or configurations."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Patrón Factory?",
        en: "🔹What is the Factory Pattern?"
      },
      code: `const component = factoryFunction(type);`,
      content: {
        es: "El Patrón Factory encapsula la lógica de creación de objetos o componentes en una función o clase especializada. Esto permite centralizar la creación de componentes y facilita la gestión de diferentes tipos de componentes basados en condiciones específicas.",
        en: "The Factory Pattern encapsulates the logic for creating objects or components in a specialized function or class. This allows centralizing component creation and facilitates managing different types of components based on specific conditions."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Patrón Factory?",
        en: "🔹When to use the Factory Pattern?"
      },
      content: {
        es: [
          "Cuando necesitas crear múltiples componentes similares con pequeñas diferencias.",
          "Cuando quieres evitar repetir código al instanciar componentes.",
          "Cuando deseas centralizar la lógica de creación de componentes para mejorar la mantenibilidad."
        ],
        en: [
          "When you need to create multiple similar components with slight differences.",
          "When you want to avoid repeating code when instantiating components.",
          "When you want to centralize component creation logic to improve maintainability."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Patrón Factory y Creación Directa",
        en: "🔹Comparison between Factory Pattern and Direct Creation"
      },
      headers: {
        es: ["Característica", "Patrón Factory", "Creación Directa"],
        en: ["Feature", "Factory Pattern", "Direct Creation"]
      },
      rows: [
        {
          es: ["Reutilización de lógica", "✅ Sí (centralizado)", "❌ No (repetición de código)"],
          en: ["Logic reuse", "✅ Yes (centralized)", "❌ No (code repetition)"]
        },
        {
          es: ["Flexibilidad", "✅ Alta (basada en condiciones)", "❌ Baja (fijo)"],
          en: ["Flexibility", "✅ High (condition-based)", "❌ Low (fixed)"]
        },
        {
          es: ["Mantenibilidad", "✅ Alta (lógica centralizada)", "❌ Baja (dispersa)"],
          en: ["Maintainability", "✅ High (centralized logic)", "❌ Low (scattered)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico del Patrón Factory",
        en: "1️⃣ Practical example of the Factory Pattern"
      },
      caseTitle: {
        es: "Uso básico con una función Factory",
        en: "Basic usage with a Factory function"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar una función Factory para crear componentes dinámicamente según un tipo específico.",
        en: "This example demonstrates how to use a Factory function to dynamically create components based on a specific type."
      },
      code: `import React from 'react';

// Componentes base
const Button = ({ children }) => <button>{children}</button>;
const Link = ({ children }) => <a href="#">{children}</a>;

// Función Factory
const componentFactory = (type) => {
  switch (type) {
    case 'button':
      return Button;
    case 'link':
      return Link;
    default:
      return () => <p>Tipo no soportado</p>;
  }
};

// Componente principal
const App = () => {
  const TypeComponent = componentFactory('button');

  return (
    <div>
      <h1>Patrón Factory</h1>
      <TypeComponent>Haz clic aquí</TypeComponent>
    </div>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: La función Factory centraliza la lógica de creación de componentes, lo que facilita la gestión de diferentes tipos de componentes.",
        en: "🔥 Benefit: The Factory function centralizes component creation logic, making it easier to manage different types of components."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico del Patrón Factory",
        en: "2️⃣ Practical example of the Factory Pattern"
      },
      caseTitle: {
        es: "Factory con propiedades dinámicas",
        en: "Factory with dynamic properties"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar una función Factory para crear componentes con propiedades dinámicas basadas en una configuración.",
        en: "This example demonstrates how to use a Factory function to create components with dynamic properties based on a configuration."
      },
      code: `import React from 'react';

// Componentes base
const Heading = ({ level, children }) => {
  const Tag = \`h\${level}\`;
  return <Tag>{children}</Tag>;
};

// Función Factory
const headingFactory = (level) => {
  return (props) => <Heading level={level} {...props} />;
};

// Componente principal
const App = () => {
  const H1 = headingFactory(1);
  const H2 = headingFactory(2);

  return (
    <div>
      <H1>Título Principal</H1>
      <H2>Subtítulo</H2>
    </div>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: La función Factory permite crear componentes con propiedades dinámicas, reduciendo la repetición de código.",
        en: "🔥 Benefit: The Factory function allows creating components with dynamic properties, reducing code repetition."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico del Patrón Factory",
        en: "3️⃣ Practical example of the Factory Pattern"
      },
      caseTitle: {
        es: "Factory con Context API",
        en: "Factory with Context API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo combinar el Patrón Factory con Context API para crear componentes dinámicamente en función del contexto global.",
        en: "This example demonstrates how to combine the Factory Pattern with Context API to dynamically create components based on global context."
      },
      code: `import React, { createContext, useContext } from 'react';

// Crear un contexto
const ThemeContext = createContext();

// Componentes base
const LightButton = ({ children }) => <button style={{ background: '#fff', color: '#000' }}>{children}</button>;
const DarkButton = ({ children }) => <button style={{ background: '#000', color: '#fff' }}>{children}</button>;

// Función Factory
const buttonFactory = (theme) => {
  switch (theme) {
    case 'light':
      return LightButton;
    case 'dark':
      return DarkButton;
    default:
      return () => <p>Tema no soportado</p>;
  }
};

// Proveedor de contexto
const ThemeProvider = ({ children }) => {
  const theme = 'dark'; // Simulación de tema global

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Componente consumidor
const ThemedButton = ({ children }) => {
  const theme = useContext(ThemeContext);
  const ButtonComponent = buttonFactory(theme);

  return <ButtonComponent>{children}</ButtonComponent>;
};

// Uso en la aplicación
const App = () => {
  return (
    <ThemeProvider>
      <ThemedButton>Haz clic aquí</ThemedButton>
    </ThemeProvider>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: La combinación del Patrón Factory con Context API permite crear componentes dinámicamente basados en el estado global.",
        en: "🔥 Benefit: Combining the Factory Pattern with Context API allows dynamically creating components based on global state."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar el Patrón Factory?",
        en: "📌 When NOT to use the Factory Pattern?"
      },
      content: {
        es: [
          "❌ Si solo necesitas crear un único tipo de componente sin variaciones.",
          "❌ Si la lógica de creación es demasiado simple como para justificar el uso del patrón.",
          "❌ Si el uso del patrón introduce complejidad innecesaria en aplicaciones pequeñas."
        ],
        en: [
          "❌ If you only need to create a single type of component without variations.",
          "❌ If the creation logic is too simple to justify using the pattern.",
          "❌ If using the pattern introduces unnecessary complexity in small applications."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Patrón Factory es ideal para crear componentes dinámicamente y centralizar la lógica de creación.",
      "✅ Permite mejorar la reutilización de código y la mantenibilidad al evitar la repetición de lógica.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura si no se gestiona adecuadamente."
    ],
    en: [
      "✅ The Factory Pattern is ideal for dynamically creating components and centralizing creation logic.",
      "✅ It improves code reuse and maintainability by avoiding logic repetition.",
      "✅ It should not be overused, as it can complicate the structure if not managed properly."
    ]
  }
};

export default concept;