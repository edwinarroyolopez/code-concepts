import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Jest en React",
    en: "Jest in React"
  },
  slug: "jest",
  description: {
    es: "Jest es una poderosa herramienta de pruebas desarrollada por Facebook que permite escribir y ejecutar pruebas en aplicaciones React. Es conocida por su simplicidad, velocidad y compatibilidad con herramientas como React Testing Library y Enzyme.",
    en: "Jest is a powerful testing tool developed by Facebook that allows writing and running tests in React applications. It is known for its simplicity, speed, and compatibility with tools like React Testing Library and Enzyme."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Jest?",
        en: "🔹What is Jest?"
      },
      code: `test('should render correctly', () => { /* ... */ });`,
      content: {
        es: "Jest es un framework de pruebas diseñado para facilitar la escritura y ejecución de pruebas en aplicaciones JavaScript, incluyendo React. Proporciona características como aserciones, mocking, snapshots y cobertura de código, lo que lo convierte en una herramienta integral para garantizar la calidad del software.",
        en: "Jest is a testing framework designed to simplify the writing and execution of tests in JavaScript applications, including React. It provides features like assertions, mocking, snapshots, and code coverage, making it a comprehensive tool for ensuring software quality."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Jest?",
        en: "🔹When to use Jest?"
      },
      content: {
        es: [
          "Cuando necesitas escribir pruebas unitarias para funciones o componentes individuales.",
          "Cuando deseas realizar pruebas de integración para verificar la interacción entre múltiples componentes.",
          "Cuando quieres generar informes de cobertura de código para identificar áreas no probadas."
        ],
        en: [
          "When you need to write unit tests for individual functions or components.",
          "When you want to perform integration tests to verify interactions between multiple components.",
          "When you want to generate code coverage reports to identify untested areas."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Jest y Otras Herramientas de Pruebas",
        en: "🔹Comparison between Jest and Other Testing Tools"
      },
      headers: {
        es: ["Característica", "Jest", "Otras Herramientas"],
        en: ["Feature", "Jest", "Other Tools"]
      },
      rows: [
        {
          es: ["Velocidad", "✅ Rápido (paralelización)", "❌ Más lento (depende de la configuración)"],
          en: ["Speed", "✅ Fast (parallelization)", "❌ Slower (depends on configuration)"]
        },
        {
          es: ["Facilidad de uso", "✅ Simple (configuración mínima)", "❌ Complejo (configuración manual)"],
          en: ["Ease of use", "✅ Simple (minimal configuration)", "❌ Complex (manual configuration)"]
        },
        {
          es: ["Compatibilidad", "✅ Amplia (React, Node.js, etc.)", "❌ Limitada (depende de la herramienta)"],
          en: ["Compatibility", "✅ Wide (React, Node.js, etc.)", "❌ Limited (depends on the tool)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Jest",
        en: "1️⃣ Practical example of Jest"
      },
      caseTitle: {
        es: "Prueba unitaria básica",
        en: "Basic unit test"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo escribir una prueba unitaria básica con Jest para una función simple.",
        en: "This example demonstrates how to write a basic unit test with Jest for a simple function."
      },
      code: `// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`,
      conclusion: {
        es: "🔥 Beneficio: Jest permite escribir pruebas unitarias simples y efectivas para validar funciones individuales.",
        en: "🔥 Benefit: Jest allows writing simple and effective unit tests to validate individual functions."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Jest",
        en: "2️⃣ Practical example of Jest"
      },
      caseTitle: {
        es: "Pruebas de componentes con React Testing Library",
        en: "Component tests with React Testing Library"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Jest junto con React Testing Library para probar componentes React.",
        en: "This example demonstrates how to use Jest with React Testing Library to test React components."
      },
      code: `// Button.js
import React from 'react';

export const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button and triggers click event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});`,
      conclusion: {
        es: "🔥 Beneficio: Jest y React Testing Library permiten probar la funcionalidad y comportamiento de los componentes React de manera efectiva.",
        en: "🔥 Benefit: Jest and React Testing Library allow effectively testing the functionality and behavior of React components."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Jest",
        en: "3️⃣ Practical example of Jest"
      },
      caseTitle: {
        es: "Snapshots para pruebas visuales",
        en: "Snapshots for visual tests"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar snapshots en Jest para capturar y comparar la salida de un componente React.",
        en: "This example demonstrates how to use snapshots in Jest to capture and compare the output of a React component."
      },
      code: `// Greeting.js
import React from 'react';

export const Greeting = ({ name }) => <div>Hello, {name}!</div>;

// Greeting.test.js
import { render } from '@testing-library/react';
import { Greeting } from './Greeting';

test('renders Greeting component correctly', () => {
  const { asFragment } = render(<Greeting name="World" />);
  expect(asFragment()).toMatchSnapshot();
});`,
      conclusion: {
        es: "🔥 Beneficio: Los snapshots permiten detectar cambios inesperados en la estructura o contenido de un componente.",
        en: "🔥 Benefit: Snapshots help detect unexpected changes in the structure or content of a component."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Jest?",
        en: "📌 When NOT to use Jest?"
      },
      content: {
        es: [
          "❌ Si prefieres usar herramientas de pruebas específicas para otros frameworks o lenguajes.",
          "❌ Si tu proyecto no requiere pruebas automatizadas o tiene requisitos mínimos de calidad.",
          "❌ Si estás trabajando en un entorno donde Jest no es compatible (por ejemplo, proyectos sin Node.js)."
        ],
        en: [
          "❌ If you prefer using testing tools specific to other frameworks or languages.",
          "❌ If your project does not require automated tests or has minimal quality requirements.",
          "❌ If you are working in an environment where Jest is not supported (e.g., projects without Node.js)."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Jest es ideal para escribir pruebas unitarias, de integración y de extremo a extremo en aplicaciones React.",
      "✅ Facilita la detección de errores y mejora la calidad del software mediante pruebas automatizadas.",
      "✅ No debe usarse en exceso si no hay una necesidad clara de pruebas automatizadas en el proyecto."
    ],
    en: [
      "✅ Jest is ideal for writing unit, integration, and end-to-end tests in React applications.",
      "✅ It facilitates error detection and improves software quality through automated testing.",
      "✅ It should not be overused if there is no clear need for automated testing in the project."
    ]
  }
};

export default concept;