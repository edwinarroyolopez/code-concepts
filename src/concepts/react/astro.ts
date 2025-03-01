import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Astro",
    en: "Astro"
  },
  slug: "astro",
  description: {
    es: "Astro es un framework moderno para construir sitios web rápidos y eficientes. Utiliza una arquitectura basada en 'islands' para cargar componentes interactivos de forma diferida, optimizando el rendimiento y reduciendo el tamaño del JavaScript enviado al navegador.",
    en: "Astro is a modern framework for building fast and efficient websites. It uses an 'islands' architecture to lazily load interactive components, optimizing performance and reducing the amount of JavaScript sent to the browser."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Astro?",
        en: "🔹What is Astro?"
      },
      code: `--- 
// Ejemplo de componente Astro
---
<h1>Hola, Astro!</h1>`,
      content: {
        es: "Astro es un framework diseñado para crear sitios web estáticos y dinámicos con un enfoque en el rendimiento. Utiliza una arquitectura basada en 'islands', donde solo los componentes interactivos necesarios se cargan en el cliente, mientras que el resto del contenido se renderiza como HTML estático.",
        en: "Astro is a framework designed to create static and dynamic websites with a focus on performance. It uses an 'islands' architecture, where only the necessary interactive components are loaded on the client, while the rest of the content is rendered as static HTML."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Astro?",
        en: "🔹When to use Astro?"
      },
      content: {
        es: [
          "Cuando necesitas un sitio web rápido y optimizado para SEO.",
          "Cuando deseas integrar frameworks como React, Vue o Svelte de manera eficiente.",
          "Cuando trabajas en proyectos como blogs, portafolios o sitios de documentación que requieren contenido estático."
        ],
        en: [
          "When you need a fast website optimized for SEO.",
          "When you want to efficiently integrate frameworks like React, Vue, or Svelte.",
          "When working on projects like blogs, portfolios, or documentation sites that require static content."
        ]
      }
    },
    {
        "type": "table",
        "title": {
          "es": "🔹 Comparación entre Astro, Next.js y Gatsby",
          "en": "🔹 Comparison between Astro, Next.js, and Gatsby"
        },
        "headers": {
          "es": ["Característica", "Astro 🚀", "Next.js ⚡", "Gatsby 🌍"],
          "en": ["Feature", "Astro 🚀", "Next.js ⚡", "Gatsby 🌍"]
        },
        "rows": [
          {
            "es": ["Renderizado", "✅ SSG y SSR híbrido", "✅ SSG, SSR e ISR", "✅ SSG con SSR opcional"],
            "en": ["Rendering", "✅ Hybrid SSG and SSR", "✅ SSG, SSR, and ISR", "✅ SSG with optional SSR"]
          },
          {
            "es": ["Carga de JS", "✅ Solo cuando es necesario", "❌ Siempre carga React", "⚠️ Pre-renderizado con React"],
            "en": ["JS Load", "✅ Only when necessary", "❌ Always loads React", "⚠️ Pre-rendered with React"]
          },
          {
            "es": ["Compatibilidad", "✅ React, Vue, Svelte, etc.", "❌ Solo React", "❌ Solo React"],
            "en": ["Compatibility", "✅ React, Vue, Svelte, etc.", "❌ Only React", "❌ Only React"]
          },
          {
            "es": ["Rendimiento", "🔥 Ultra rápido (carga mínima de JS)", "⚡ Rápido pero con más JS", "🐢 Puede ser pesado por GraphQL"],
            "en": ["Performance", "🔥 Ultra-fast (minimal JS load)", "⚡ Fast but with more JS", "🐢 Can be heavy due to GraphQL"]
          },
          {
            "es": ["Arquitectura", "✅ Islands Architecture (carga progresiva)", "⚠️ Tradicional SPA con optimizaciones", "❌ SSR con GraphQL integrado"],
            "en": ["Architecture", "✅ Islands Architecture (progressive loading)", "⚠️ Traditional SPA with optimizations", "❌ SSR with built-in GraphQL"]
          },
          {
            "es": ["SEO", "✅ Excelente (HTML puro por defecto)", "✅ Bueno con SSR/SSG", "⚠️ Bueno, pero depende de GraphQL"],
            "en": ["SEO", "✅ Excellent (pure HTML by default)", "✅ Good with SSR/SSG", "⚠️ Good but depends on GraphQL"]
          },
          {
            "es": ["Facilidad de uso", "✅ Sintaxis simple y flexible", "⚠️ Complejo si se mezcla SSR y CSR", "❌ Curva de aprendizaje más alta"],
            "en": ["Ease of use", "✅ Simple and flexible syntax", "⚠️ Complex if mixing SSR and CSR", "❌ Higher learning curve"]
          },
          {
            "es": ["Escalabilidad", "✅ Fácil de escalar con menos carga en el servidor", "✅ Escalable con ISR", "⚠️ Escalable pero depende de GraphQL"],
            "en": ["Scalability", "✅ Easy to scale with less server load", "✅ Scalable with ISR", "⚠️ Scalable but depends on GraphQL"]
          },
          {
            "es": ["Casos de uso ideales", "📌 Blogs, documentación, sitios estáticos rápidos", "📌 Aplicaciones interactivas, eCommerce", "📌 Blogs con alto tráfico y contenido dinámico"],
            "en": ["Best use cases", "📌 Blogs, documentation, fast static sites", "📌 Interactive apps, eCommerce", "📌 High-traffic blogs with dynamic content"]
          }
        ]
      }
      ,
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Astro",
        en: "1️⃣ Practical example of Astro"
      },
      caseTitle: {
        es: "Configuración básica de Astro",
        en: "Basic setup of Astro"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo configurar un proyecto básico con Astro y crear una página simple.",
        en: "This example demonstrates how to set up a basic project with Astro and create a simple page."
      },
      code: `// src/pages/index.astro
---
// Frontmatter (opcional)
const title = "Bienvenido a Astro";
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>Esta es tu primera página en Astro.</p>
  </body>
</html>`,
      conclusion: {
        es: "🔥 Beneficio: Astro genera HTML estático optimizado, lo que mejora el rendimiento y el SEO.",
        en: "🔥 Benefit: Astro generates optimized static HTML, improving performance and SEO."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Astro",
        en: "2️⃣ Practical example of Astro"
      },
      caseTitle: {
        es: "Integración de componentes React",
        en: "React component integration"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo integrar un componente React en un proyecto Astro utilizando la arquitectura de 'islands'.",
        en: "This example demonstrates how to integrate a React component into an Astro project using the 'islands' architecture."
      },
      code: `// src/components/Counter.jsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

// src/pages/react-integration.astro
---
import Counter from '../components/Counter.jsx';
---
<html>
  <head>
    <title>Integración de React</title>
  </head>
  <body>
    <h1>Componente React en Astro</h1>
    <Counter />
  </body>
</html>`,
      conclusion: {
        es: "🔥 Beneficio: Astro permite integrar frameworks como React de manera eficiente, cargando solo el JavaScript necesario para los componentes interactivos.",
        en: "🔥 Benefit: Astro allows integrating frameworks like React efficiently, loading only the necessary JavaScript for interactive components."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Astro",
        en: "3️⃣ Practical example of Astro"
      },
      caseTitle: {
        es: "Generación de páginas dinámicas",
        en: "Dynamic page generation"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo generar páginas dinámicas en Astro utilizando datos externos.",
        en: "This example demonstrates how to generate dynamic pages in Astro using external data."
      },
      code: `// src/pages/[slug].astro
---
export async function getStaticPaths() {
  const posts = [
    { slug: 'post-1', title: 'Primer Post' },
    { slug: 'post-2', title: 'Segundo Post' },
  ];

  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { title: post.title },
  }));
}

const { title } = Astro.props;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>Esta es una página dinámica generada por Astro.</p>
  </body>
</html>`,
      conclusion: {
        es: "🔥 Beneficio: Astro permite generar páginas dinámicas de manera eficiente, ideal para blogs o sitios de documentación.",
        en: "🔥 Benefit: Astro allows efficient dynamic page generation, ideal for blogs or documentation sites."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Astro?",
        en: "📌 When NOT to use Astro?"
      },
      content: {
        es: [
          "❌ Si tu proyecto requiere una aplicación completamente interactiva (SPA).",
          "❌ Si prefieres usar un framework monolítico como Next.js o Nuxt.js para aplicaciones complejas.",
          "❌ Si el uso de Astro introduce complejidad innecesaria en proyectos pequeños sin requisitos avanzados."
        ],
        en: [
          "❌ If your project requires a fully interactive application (SPA).",
          "❌ If you prefer using a monolithic framework like Next.js or Nuxt.js for complex applications.",
          "❌ If using Astro introduces unnecessary complexity in small projects without advanced requirements."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Astro es ideal para sitios web rápidos y optimizados, especialmente para contenido estático o semi-dinámico.",
      "✅ Facilita la integración de múltiples frameworks y reduce el tamaño del JavaScript enviado al navegador.",
      "✅ No debe usarse en exceso si el proyecto requiere una aplicación completamente interactiva."
    ],
    en: [
      "✅ Astro is ideal for fast and optimized websites, especially for static or semi-dynamic content.",
      "✅ It facilitates the integration of multiple frameworks and reduces the amount of JavaScript sent to the browser.",
      "✅ It should not be overused if the project requires a fully interactive application."
    ]
  }
};

export default concept;