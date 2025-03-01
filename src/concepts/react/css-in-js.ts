import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "CSS in JS en React",
    en: "CSS in JS in React"
  },
  slug: "css-in-js",
  description: {
    es: "CSS in JS es una técnica que permite escribir estilos directamente en JavaScript dentro de componentes React. Esto facilita la encapsulación de estilos, la gestión dinámica de clases y la reutilización de estilos en aplicaciones modernas.",
    en: "CSS in JS is a technique that allows writing styles directly in JavaScript within React components. This facilitates style encapsulation, dynamic class management, and style reuse in modern applications."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es CSS in JS?",
        en: "🔹What is CSS in JS?"
      },
      code: `const styles = { color: 'red' };`,
      content: {
        es: "CSS in JS es una técnica que combina estilos CSS con lógica JavaScript para definir estilos directamente en los componentes. Herramientas como styled-components o Emotion permiten escribir estilos de manera declarativa y dinámica, encapsulando los estilos en componentes específicos.",
        en: "CSS in JS is a technique that combines CSS styles with JavaScript logic to define styles directly in components. Tools like styled-components or Emotion allow writing styles declaratively and dynamically, encapsulating styles within specific components."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar CSS in JS?",
        en: "🔹When to use CSS in JS?"
      },
      content: {
        es: [
          "Cuando necesitas encapsular estilos para evitar conflictos globales de CSS.",
          "Cuando deseas gestionar estilos dinámicamente basados en el estado o props del componente.",
          "Cuando trabajas en proyectos grandes donde la modularidad y la reutilización son clave."
        ],
        en: [
          "When you need to encapsulate styles to avoid global CSS conflicts.",
          "When you want to manage styles dynamically based on the component's state or props.",
          "When working on large projects where modularity and reuse are key."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre CSS in JS y CSS Tradicional",
        en: "🔹Comparison between CSS in JS and Traditional CSS"
      },
      headers: {
        es: ["Característica", "CSS in JS", "CSS Tradicional"],
        en: ["Feature", "CSS in JS", "Traditional CSS"]
      },
      rows: [
        {
          es: ["Encapsulación", "✅ Local (componente)", "❌ Global (hoja de estilos)"],
          en: ["Encapsulation", "✅ Local (component)", "❌ Global (stylesheet)"]
        },
        {
          es: ["Dinamismo", "✅ Alto (basado en estado/props)", "❌ Bajo (clases estáticas)"],
          en: ["Dynamism", "✅ High (state/props-based)", "❌ Low (static classes)"]
        },
        {
          es: ["Reutilización", "✅ Modular (componentes)", "❌ Limitada (clases globales)"],
          en: ["Reusability", "✅ Modular (components)", "❌ Limited (global classes)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de CSS in JS",
        en: "1️⃣ Practical example of CSS in JS"
      },
      caseTitle: {
        es: "Uso básico con styled-components",
        en: "Basic usage with styled-components"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar styled-components para crear componentes con estilos encapsulados.",
        en: "This example demonstrates how to use styled-components to create components with encapsulated styles."
      },
      code: `import styled from 'styled-components';

// Crear un componente con estilos
const Button = styled.button\`
  background-color: \${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
\`;

// Uso en el componente principal
function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: styled-components encapsula los estilos en el componente, evitando conflictos globales y permitiendo estilos dinámicos basados en props.",
        en: "🔥 Benefit: styled-components encapsulates styles within the component, avoiding global conflicts and enabling dynamic styles based on props."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de CSS in JS",
        en: "2️⃣ Practical example of CSS in JS"
      },
      caseTitle: {
        es: "Estilos dinámicos con Emotion",
        en: "Dynamic styles with Emotion"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Emotion para aplicar estilos dinámicos basados en el estado del componente.",
        en: "This example demonstrates how to use Emotion to apply dynamic styles based on the component's state."
      },
      code: `/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function App() {
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = css\`
    background-color: \${isActive ? 'green' : 'red'};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  \`;

  return (
    <div>
      <button css={buttonStyle} onClick={() => setIsActive(!isActive)}>
        Toggle State
      </button>
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Emotion permite aplicar estilos dinámicos basados en el estado del componente, mejorando la flexibilidad y reutilización.",
        en: "🔥 Benefit: Emotion allows applying dynamic styles based on the component's state, improving flexibility and reuse."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de CSS in JS",
        en: "3️⃣ Practical example of CSS in JS"
      },
      caseTitle: {
        es: "Tematización con styled-components",
        en: "Theming with styled-components"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar styled-components para implementar tematización en una aplicación React.",
        en: "This example demonstrates how to use styled-components to implement theming in a React application."
      },
      code: `import styled, { ThemeProvider } from 'styled-components';

// Definir estilos con tema
const Button = styled.button\`
  background-color: \${(props) => props.theme.primaryColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
\`;

// Temas
const lightTheme = { primaryColor: 'blue' };
const darkTheme = { primaryColor: 'black' };

// Componente principal
function App() {
  return (
    <div>
      <h1>Tema Claro</h1>
      <ThemeProvider theme={lightTheme}>
        <Button>Botón Tema Claro</Button>
      </ThemeProvider>

      <h1>Tema Oscuro</h1>
      <ThemeProvider theme={darkTheme}>
        <Button>Botón Tema Oscuro</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: styled-components permite implementar tematización de manera sencilla y modular, mejorando la experiencia del usuario.",
        en: "🔥 Benefit: styled-components allows implementing theming in a simple and modular way, enhancing the user experience."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar CSS in JS?",
        en: "📌 When NOT to use CSS in JS?"
      },
      content: {
        es: [
          "❌ Si tu proyecto es pequeño y no requiere estilos dinámicos o encapsulados.",
          "❌ Si prefieres mantener los estilos separados del código JavaScript para simplificar el mantenimiento.",
          "❌ Si el uso de CSS in JS introduce complejidad innecesaria en proyectos simples."
        ],
        en: [
          "❌ If your project is small and does not require dynamic or encapsulated styles.",
          "❌ If you prefer keeping styles separate from JavaScript code to simplify maintenance.",
          "❌ If using CSS in JS introduces unnecessary complexity in simple projects."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ CSS in JS es ideal para encapsular estilos, gestionar estilos dinámicos y mejorar la modularidad en proyectos React.",
      "✅ Facilita la tematización y la reutilización de estilos en aplicaciones grandes.",
      "✅ No debe usarse en exceso si el proyecto no requiere estilos dinámicos o encapsulados."
    ],
    en: [
      "✅ CSS in JS is ideal for encapsulating styles, managing dynamic styles, and improving modularity in React projects.",
      "✅ It facilitates theming and style reuse in large applications.",
      "✅ It should not be overused if the project does not require dynamic or encapsulated styles."
    ]
  }
};

export default concept;