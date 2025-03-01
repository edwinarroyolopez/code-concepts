import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Vitest en React",
    en: "Vitest in React"
  },
  slug: "vitest",
  description: {
    es: "Vitest es una herramienta de pruebas moderna y rápida diseñada para proyectos basados en Vite. Ofrece una experiencia similar a Jest, pero con mejor rendimiento gracias a la integración nativa con Vite y su soporte para ESM (Módulos ES).",
    en: "Vitest is a modern and fast testing tool designed for projects based on Vite. It offers a Jest-like experience but with better performance thanks to native integration with Vite and support for ESM (ES Modules)."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Vitest?",
        en: "🔹What is Vitest?"
      },
      code: `test('should render correctly', () => { /* ... */ });`,
      content: {
        es: "Vitest es un framework de pruebas que aprovecha la velocidad y las capacidades de Vite para ejecutar pruebas rápidamente. Es ideal para proyectos React que utilizan Vite como empaquetador, ya que permite escribir pruebas unitarias, de integración y de extremo a extremo con una configuración mínima.",
        en: "Vitest is a testing framework that leverages the speed and capabilities of Vite to run tests quickly. It is ideal for React projects using Vite as a bundler, as it allows writing unit, integration, and end-to-end tests with minimal configuration."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Vitest?",
        en: "🔹When to use Vitest?"
      },
      content: {
        es: [
          "Cuando trabajas en un proyecto React que utiliza Vite como empaquetador.",
          "Cuando necesitas una herramienta de pruebas rápida y eficiente para proyectos modernos.",
          "Cuando deseas aprovechar las características avanzadas de Vite, como el soporte nativo para ESM."
        ],
        en: [
          "When working on a React project that uses Vite as a bundler.",
          "When you need a fast and efficient testing tool for modern projects.",
          "When you want to leverage advanced Vite features, such as native ESM support."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Vitest y Jest",
        en: "🔹Comparison between Vitest and Jest"
      },
      headers: {
        es: ["Característica", "Vitest", "Jest"],
        en: ["Feature", "Vitest", "Jest"]
      },
      rows: [
        {
          es: ["Velocidad", "✅ Más rápido (gracias a Vite)", "❌ Más lento (configuración tradicional)"],
          en: ["Speed", "✅ Faster (thanks to Vite)", "❌ Slower (traditional setup)"]
        },
        {
          es: ["Compatibilidad con Vite", "✅ Total", "❌ Limitada"],
          en: ["Vite compatibility", "✅ Full", "❌ Limited"]
        },
        {
          es: ["Soporte para ESM", "✅ Nativo", "❌ Requiere configuración adicional"],
          en: ["ESM support", "✅ Native", "❌ Requires additional configuration"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Vitest",
        en: "1️⃣ Practical example of Vitest"
      },
      caseTitle: {
        es: "Prueba unitaria básica",
        en: "Basic unit test"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo escribir una prueba unitaria básica con Vitest para una función simple.",
        en: "This example demonstrates how to write a basic unit test with Vitest for a simple function."
      },
      code: `// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { test, expect } from 'vitest';
import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`,
      conclusion: {
        es: "🔥 Beneficio: Vitest permite escribir pruebas unitarias simples y efectivas con una sintaxis familiar similar a Jest.",
        en: "🔥 Benefit: Vitest allows writing simple and effective unit tests with a familiar syntax similar to Jest."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Vitest",
        en: "2️⃣ Practical example of Vitest"
      },
      caseTitle: {
        es: "Pruebas de componentes con React Testing Library",
        en: "Component tests with React Testing Library"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Vitest junto con React Testing Library para probar componentes React.",
        en: "This example demonstrates how to use Vitest with React Testing Library to test React components."
      },
      code: `// Button.js
import React from 'react';

export const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

// Button.test.js
import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('renders button and triggers click event', () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalledTimes(1);
});`,
      conclusion: {
        es: "🔥 Beneficio: Vitest y React Testing Library permiten probar la funcionalidad y comportamiento de los componentes React de manera efectiva.",
        en: "🔥 Benefit: Vitest and React Testing Library allow effectively testing the functionality and behavior of React components."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Vitest",
        en: "3️⃣ Practical example of Vitest"
      },
      caseTitle: {
        es: "Snapshots para pruebas visuales",
        en: "Snapshots for visual tests"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar snapshots en Vitest para capturar y comparar la salida de un componente React.",
        en: "This example demonstrates how to use snapshots in Vitest to capture and compare the output of a React component."
      },
      code: `// Greeting.js
import React from 'react';

export const Greeting = ({ name }) => <div>Hello, {name}!</div>;

// Greeting.test.js
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Greeting } from './Greeting';

test('renders Greeting component correctly', () => {
  const { asFragment } = render(<Greeting name="World" />);
  expect(asFragment()).toMatchSnapshot();
});`,
      conclusion: {
        es: "🔥 Beneficio: Los snapshots en Vitest permiten detectar cambios inesperados en la estructura o contenido de un componente.",
        en: "🔥 Benefit: Snapshots in Vitest help detect unexpected changes in the structure or content of a component."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Vitest?",
        en: "📌 When NOT to use Vitest?"
      },
      content: {
        es: [
          "❌ Si tu proyecto no utiliza Vite como empaquetador.",
          "❌ Si prefieres usar Jest debido a su amplia comunidad y compatibilidad con proyectos más antiguos.",
          "❌ Si estás trabajando en un entorno donde las características avanzadas de Vitest no son necesarias."
        ],
        en: [
          "❌ If your project does not use Vite as a bundler.",
          "❌ If you prefer using Jest due to its large community and compatibility with older projects.",
          "❌ If you are working in an environment where Vitest's advanced features are not necessary."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Vitest es ideal para proyectos React basados en Vite que requieren pruebas rápidas y eficientes.",
      "✅ Ofrece una experiencia moderna con soporte nativo para ESM y ejecución paralela.",
      "✅ No debe usarse en exceso si no hay una necesidad clara de integración con Vite."
    ],
    en: [
      "✅ Vitest is ideal for React projects based on Vite that require fast and efficient testing.",
      "✅ It offers a modern experience with native ESM support and parallel execution.",
      "✅ It should not be overused if there is no clear need for Vite integration."
    ]
  }
};

export default concept;