import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Remix",
    en: "Remix"
  },
  slug: "remix",
  description: {
    es: "Remix es un framework de React que permite crear aplicaciones web modernas con una arquitectura basada en rutas y cargas eficientes de datos. Ofrece características avanzadas como renderizado en el servidor (SSR), carga progresiva y manejo de errores robusto.",
    en: "Remix is a React framework that allows building modern web applications with a route-based architecture and efficient data loading. It offers advanced features like server-side rendering (SSR), progressive loading, and robust error handling."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Remix?",
        en: "🔹What is Remix?"
      },
      code: `export default function App() { return <h1>Hola, Remix!</h1>; }`,
      content: {
        es: "Remix es un framework de React que simplifica la construcción de aplicaciones web modernas mediante una arquitectura basada en rutas. Cada ruta puede cargar datos de forma independiente, lo que mejora el rendimiento y la experiencia del usuario. Además, Remix aprovecha el poder del servidor para ofrecer SSR y manejar errores de manera efectiva.",
        en: "Remix is a React framework that simplifies building modern web applications through a route-based architecture. Each route can load data independently, improving performance and user experience. Additionally, Remix leverages the power of the server to provide SSR and handle errors effectively."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Remix?",
        en: "🔹When to use Remix?"
      },
      content: {
        es: [
          "Cuando necesitas una aplicación web con rendimiento optimizado y cargas eficientes de datos.",
          "Cuando deseas aprovechar el renderizado en el servidor (SSR) para mejorar el SEO y la experiencia del usuario.",
          "Cuando trabajas en proyectos grandes donde la modularidad y la escalabilidad son clave."
        ],
        en: [
          "When you need a web application with optimized performance and efficient data loading.",
          "When you want to leverage server-side rendering (SSR) to improve SEO and user experience.",
          "When working on large projects where modularity and scalability are key."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Remix y Next.js",
        en: "🔹Comparison between Remix and Next.js"
      },
      headers: {
        es: ["Característica", "Remix", "Next.js"],
        en: ["Feature", "Remix", "Next.js"]
      },
      rows: [
        {
          es: ["Enfoque principal", "✅ Rutas y cargas de datos", "✅ SSR y SSG"],
          en: ["Main focus", "✅ Routes and data loading", "✅ SSR and SSG"]
        },
        {
          es: ["Manejo de errores", "✅ Robusto (por ruta)", "❌ Limitado (global)"],
          en: ["Error handling", "✅ Robust (per route)", "❌ Limited (global)"]
        },
        {
          es: ["Carga progresiva", "✅ Nativa", "❌ Requiere configuración adicional"],
          en: ["Progressive loading", "✅ Native", "❌ Requires additional configuration"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Remix",
        en: "1️⃣ Practical example of Remix"
      },
      caseTitle: {
        es: "Configuración básica de Remix",
        en: "Basic setup of Remix"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo configurar un proyecto básico con Remix y crear una ruta simple.",
        en: "This example demonstrates how to set up a basic project with Remix and create a simple route."
      },
      code: `// app/routes/index.jsx
export default function Index() {
  return (
    <div>
      <h1>Bienvenido a Remix</h1>
      <p>Esta es tu primera ruta.</p>
    </div>
  );
}`,
      conclusion: {
        es: "🔥 Beneficio: Remix simplifica la creación de rutas y permite cargar datos de forma eficiente en cada una.",
        en: "🔥 Benefit: Remix simplifies route creation and allows efficient data loading in each route."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Remix",
        en: "2️⃣ Practical example of Remix"
      },
      caseTitle: {
        es: "Carga de datos con loaders",
        en: "Data loading with loaders"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar loaders en Remix para cargar datos de forma eficiente en una ruta específica.",
        en: "This example demonstrates how to use loaders in Remix to efficiently load data in a specific route."
      },
      code: `// app/routes/posts.jsx
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// Loader para cargar datos
export async function loader() {
  const posts = await fetch('https://api.example.com/posts').then((res) => res.json());
  return json(posts);
}

// Componente de la ruta
export default function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
      conclusion: {
        es: "🔥 Beneficio: Los loaders en Remix permiten cargar datos de forma eficiente y mantener la lógica de carga separada del componente.",
        en: "🔥 Benefit: Loaders in Remix allow efficient data loading and keep the loading logic separate from the component."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Remix",
        en: "3️⃣ Practical example of Remix"
      },
      caseTitle: {
        es: "Manejo de errores por ruta",
        en: "Route-specific error handling"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo manejar errores específicos de una ruta en Remix.",
        en: "This example demonstrates how to handle route-specific errors in Remix."
      },
      code: `// app/routes/error-example.jsx
import { useRouteError } from '@remix-run/react';

// Manejador de errores
export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      <h1>Algo salió mal</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Componente de la ruta
export default function ErrorExample() {
  throw new Error('Este es un error de prueba');
}`,
      conclusion: {
        es: "🔥 Beneficio: Remix permite manejar errores de forma robusta y específica para cada ruta, mejorando la experiencia del usuario.",
        en: "🔥 Benefit: Remix allows robust and route-specific error handling, improving the user experience."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Remix?",
        en: "📌 When NOT to use Remix?"
      },
      content: {
        es: [
          "❌ Si tu proyecto es pequeño y no requiere una arquitectura basada en rutas.",
          "❌ Si prefieres usar herramientas más simples como Create React App para proyectos básicos.",
          "❌ Si el uso de Remix introduce complejidad innecesaria en proyectos sin requisitos avanzados."
        ],
        en: [
          "❌ If your project is small and does not require a route-based architecture.",
          "❌ If you prefer using simpler tools like Create React App for basic projects.",
          "❌ If using Remix introduces unnecessary complexity in projects without advanced requirements."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Remix es ideal para aplicaciones web modernas que requieren rendimiento optimizado y cargas eficientes de datos.",
      "✅ Facilita la modularidad, el manejo de errores y la carga progresiva.",
      "✅ No debe usarse en exceso si el proyecto no requiere una arquitectura basada en rutas o características avanzadas."
    ],
    en: [
      "✅ Remix is ideal for modern web applications that require optimized performance and efficient data loading.",
      "✅ It facilitates modularity, error handling, and progressive loading.",
      "✅ It should not be overused if the project does not require a route-based architecture or advanced features."
    ]
  }
};

export default concept;