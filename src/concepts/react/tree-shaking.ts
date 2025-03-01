import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Tree-shaking en React",
    en: "Tree-shaking in React"
  },
  slug: "tree-shaking",
  description: {
    es: "Tree-shaking es una técnica de optimización que elimina código no utilizado o innecesario durante el proceso de empaquetado. En React, esta técnica es especialmente útil para reducir el tamaño del paquete final y mejorar los tiempos de carga de la aplicación.",
    en: "Tree-shaking is an optimization technique that removes unused or unnecessary code during the bundling process. In React, this technique is especially useful for reducing the size of the final bundle and improving application load times."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Tree-shaking?",
        en: "🔹What is Tree-shaking?"
      },
      code: `import { usedFunction } from 'library';`,
      content: {
        es: "Tree-shaking es una técnica que aprovecha las características de los módulos ES6 (como `import` y `export`) para identificar y eliminar código que no se utiliza en la aplicación. Esto ayuda a reducir el tamaño del paquete final y mejora el rendimiento.",
        en: "Tree-shaking is a technique that leverages ES6 module features (such as `import` and `export`) to identify and remove code that is not used in the application. This helps reduce the size of the final bundle and improves performance."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Tree-shaking?",
        en: "🔹When to use Tree-shaking?"
      },
      content: {
        es: [
          "Cuando utilizas bibliotecas grandes con muchas funciones, pero solo necesitas unas pocas.",
          "Cuando deseas reducir el tamaño del paquete inicial para mejorar los tiempos de carga.",
          "Cuando trabajas con herramientas modernas de empaquetado como Webpack o Rollup."
        ],
        en: [
          "When using large libraries with many functions but only needing a few.",
          "When you want to reduce the initial bundle size to improve load times.",
          "When working with modern bundling tools like Webpack or Rollup."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Tree-shaking y Sin Optimización",
        en: "🔹Comparison between Tree-shaking and No Optimization"
      },
      headers: {
        es: ["Característica", "Con Tree-shaking", "Sin Optimización"],
        en: ["Feature", "With Tree-shaking", "Without Optimization"]
      },
      rows: [
        {
          es: ["Tamaño del paquete", "✅ Más pequeño", "❌ Más grande"],
          en: ["Bundle size", "✅ Smaller", "❌ Larger"]
        },
        {
          es: ["Tiempo de carga", "✅ Más rápido", "❌ Más lento"],
          en: ["Load time", "✅ Faster", "❌ Slower"]
        },
        {
          es: ["Complejidad", "✅ Automatizado", "❌ Manual"],
          en: ["Complexity", "✅ Automated", "❌ Manual"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Tree-shaking",
        en: "1️⃣ Practical example of Tree-shaking"
      },
      caseTitle: {
        es: "Uso básico con ES6 Modules",
        en: "Basic usage with ES6 Modules"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo Tree-shaking elimina funciones no utilizadas de una biblioteca durante el proceso de empaquetado.",
        en: "This example demonstrates how Tree-shaking removes unused functions from a library during the bundling process."
      },
      code: `// math.js (biblioteca)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// App.js (aplicación)
import { add } from './math';

console.log(add(2, 3)); // Solo se importa 'add'

// Durante el empaquetado, 'subtract' y 'multiply' son eliminados.`,
      conclusion: {
        es: "🔥 Beneficio: Tree-shaking elimina automáticamente funciones no utilizadas (`subtract` y `multiply`), reduciendo el tamaño del paquete.",
        en: "🔥 Benefit: Tree-shaking automatically removes unused functions (`subtract` and `multiply`), reducing the bundle size."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Tree-shaking",
        en: "2️⃣ Practical example of Tree-shaking"
      },
      caseTitle: {
        es: "Tree-shaking con bibliotecas externas",
        en: "Tree-shaking with external libraries"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo Tree-shaking funciona con bibliotecas externas como Lodash cuando se usan módulos ES6.",
        en: "This example demonstrates how Tree-shaking works with external libraries like Lodash when using ES6 modules."
      },
      code: `// Importar solo lo necesario de Lodash
import { debounce } from 'lodash-es';

const debouncedFunction = debounce(() => {
  console.log('Esta función está debounced');
}, 300);

debouncedFunction();

// Durante el empaquetado, solo 'debounce' es incluido en el paquete final.`,
      conclusion: {
        es: "🔥 Beneficio: Al importar solo las funciones necesarias de Lodash, Tree-shaking elimina el resto de la biblioteca, reduciendo el tamaño del paquete.",
        en: "🔥 Benefit: By importing only the necessary functions from Lodash, Tree-shaking removes the rest of the library, reducing the bundle size."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Tree-shaking",
        en: "3️⃣ Practical example of Tree-shaking"
      },
      caseTitle: {
        es: "Configuración con Webpack",
        en: "Configuration with Webpack"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo configurar Webpack para habilitar Tree-shaking en una aplicación React.",
        en: "This example demonstrates how to configure Webpack to enable Tree-shaking in a React application."
      },
      code: `// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production', // Habilita optimizaciones
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true, // Habilita Tree-shaking
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};`,
      conclusion: {
        es: "🔥 Beneficio: Configurar Webpack con `usedExports: true` asegura que Tree-shaking funcione correctamente, eliminando código no utilizado.",
        en: "🔥 Benefit: Configuring Webpack with `usedExports: true` ensures that Tree-shaking works correctly, removing unused code."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Tree-shaking?",
        en: "📌 When NOT to use Tree-shaking?"
      },
      content: {
        es: [
          "❌ Si tu proyecto usa CommonJS (`require`/`module.exports`), ya que Tree-shaking no es compatible.",
          "❌ Si prefieres mantener el código sin optimizar para depuración o desarrollo.",
          "❌ Si el uso de Tree-shaking no tiene un impacto significativo en el tamaño del paquete (proyectos pequeños)."
        ],
        en: [
          "❌ If your project uses CommonJS (`require`/`module.exports`), as Tree-shaking is not compatible.",
          "❌ If you prefer keeping the code unoptimized for debugging or development.",
          "❌ If using Tree-shaking does not have a significant impact on bundle size (small projects)."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Tree-shaking es ideal para reducir el tamaño del paquete final eliminando código no utilizado.",
      "✅ Mejora los tiempos de carga y el rendimiento de aplicaciones React grandes y complejas.",
      "✅ No debe usarse en exceso si el proyecto no cumple con los requisitos necesarios (por ejemplo, CommonJS)."
    ],
    en: [
      "✅ Tree-shaking is ideal for reducing the final bundle size by removing unused code.",
      "✅ It improves load times and the performance of large and complex React applications.",
      "✅ It should not be overused if the project does not meet the necessary requirements (e.g., CommonJS)."
    ]
  }
};

export default concept;