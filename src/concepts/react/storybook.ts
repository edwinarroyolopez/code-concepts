import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Storybook en React",
    en: "Storybook in React"
  },
  slug: "storybook",
  description: {
    es: "Storybook es una herramienta para desarrollar, documentar y probar componentes de interfaz de usuario de forma aislada. En React, Storybook permite visualizar y documentar componentes en diferentes estados, facilitando el desarrollo modular y la colaboración entre equipos.",
    en: "Storybook is a tool for developing, documenting, and testing user interface components in isolation. In React, Storybook allows visualizing and documenting components in different states, facilitating modular development and collaboration between teams."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Storybook?",
        en: "🔹What is Storybook?"
      },
      code: `export default { title: 'Button' };`,
      content: {
        es: "Storybook es una herramienta que permite desarrollar componentes de interfaz de usuario de forma aislada, sin necesidad de ejecutar toda la aplicación. Proporciona un entorno interactivo donde los desarrolladores pueden probar y documentar componentes en diferentes estados, como variaciones de props o interacciones.",
        en: "Storybook is a tool that allows developers to build user interface components in isolation, without needing to run the entire application. It provides an interactive environment where developers can test and document components in different states, such as prop variations or interactions."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Storybook?",
        en: "🔹When to use Storybook?"
      },
      content: {
        es: [
          "Cuando necesitas desarrollar y probar componentes de forma aislada sin depender del estado global de la aplicación.",
          "Cuando deseas documentar componentes para facilitar la reutilización y la colaboración entre equipos.",
          "Cuando quieres garantizar que los componentes funcionen correctamente en diferentes estados y configuraciones."
        ],
        en: [
          "When you need to develop and test components in isolation without relying on the global state of the application.",
          "When you want to document components to facilitate reuse and collaboration between teams.",
          "When you want to ensure that components work correctly in different states and configurations."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Storybook y Desarrollo Tradicional",
        en: "🔹Comparison between Storybook and Traditional Development"
      },
      headers: {
        es: ["Característica", "Storybook", "Desarrollo Tradicional"],
        en: ["Feature", "Storybook", "Traditional Development"]
      },
      rows: [
        {
          es: ["Desarrollo aislado", "✅ Sí (componentes individuales)", "❌ No (depende del contexto)"],
          en: ["Isolated development", "✅ Yes (individual components)", "❌ No (depends on context)"]
        },
        {
          es: ["Documentación", "✅ Automática y visual", "❌ Manual y textual"],
          en: ["Documentation", "✅ Automatic and visual", "❌ Manual and textual"]
        },
        {
          es: ["Pruebas visuales", "✅ Integradas", "❌ Requiere herramientas adicionales"],
          en: ["Visual testing", "✅ Integrated", "❌ Requires additional tools"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Storybook",
        en: "1️⃣ Practical example of Storybook"
      },
      caseTitle: {
        es: "Creación de una historia para un componente Button",
        en: "Creating a story for a Button component"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear una historia en Storybook para un componente Button con diferentes estados.",
        en: "This example demonstrates how to create a story in Storybook for a Button component with different states."
      },
      code: `// Button.js
import React from 'react';

export const Button = ({ label, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

// Button.stories.js
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Clicked!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  disabled: true,
};`,
      conclusion: {
        es: "🔥 Beneficio: Storybook permite visualizar y documentar el componente Button en diferentes estados, como activo y deshabilitado.",
        en: "🔥 Benefit: Storybook allows visualizing and documenting the Button component in different states, such as active and disabled."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Storybook",
        en: "2️⃣ Practical example of Storybook"
      },
      caseTitle: {
        es: "Uso de Addons para mejorar la experiencia",
        en: "Using Addons to enhance the experience"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Addons de Storybook para agregar funcionalidades como controles interactivos y pruebas visuales.",
        en: "This example demonstrates how to use Storybook Addons to add functionalities like interactive controls and visual testing."
      },
      code: `// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-controls', // Controles interactivos
    '@storybook/addon-actions', // Acciones para eventos
    '@storybook/addon-docs', // Documentación automática
  ],
};

// Button.stories.js
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Interactive Button',
  disabled: false,
};`,
      conclusion: {
        es: "🔥 Beneficio: Los Addons de Storybook mejoran la experiencia de desarrollo al proporcionar controles interactivos y documentación automática.",
        en: "🔥 Benefit: Storybook Addons enhance the development experience by providing interactive controls and automatic documentation."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Storybook",
        en: "3️⃣ Practical example of Storybook"
      },
      caseTitle: {
        es: "Integración con Pruebas Visuales",
        en: "Integration with Visual Testing"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo integrar Storybook con herramientas de pruebas visuales para detectar cambios inesperados en los componentes.",
        en: "This example demonstrates how to integrate Storybook with visual testing tools to detect unexpected changes in components."
      },
      code: `// Instalar Chromatic
npm install chromatic --save-dev

// Ejecutar Chromatic
npx chromatic --project-token=<your-project-token>

// Button.stories.js
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button label="Default Button" />;
export const Disabled = () => <Button label="Disabled Button" disabled />;`,
      conclusion: {
        es: "🔥 Beneficio: La integración con Chromatic permite realizar pruebas visuales automáticas y detectar cambios en los componentes.",
        en: "🔥 Benefit: Integration with Chromatic enables automatic visual testing and detects changes in components."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Storybook?",
        en: "📌 When NOT to use Storybook?"
      },
      content: {
        es: [
          "❌ Si tu proyecto es pequeño y no requiere documentación detallada de componentes.",
          "❌ Si prefieres desarrollar componentes directamente en el contexto de la aplicación.",
          "❌ Si el uso de Storybook introduce complejidad innecesaria en proyectos simples."
        ],
        en: [
          "❌ If your project is small and does not require detailed component documentation.",
          "❌ If you prefer developing components directly within the application context.",
          "❌ If using Storybook introduces unnecessary complexity in simple projects."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Storybook es ideal para desarrollar, documentar y probar componentes React de forma aislada.",
      "✅ Facilita la colaboración entre equipos y mejora la reutilización de componentes.",
      "✅ No debe usarse en exceso si el proyecto no requiere documentación detallada o pruebas visuales."
    ],
    en: [
      "✅ Storybook is ideal for developing, documenting, and testing React components in isolation.",
      "✅ It facilitates collaboration between teams and improves component reuse.",
      "✅ It should not be overused if the project does not require detailed documentation or visual testing."
    ]
  }
};

export default concept;