import { Concept } from "@/types/concept";

const concept: Concept = {
    title: {
        es: "SEO en React",
        en: "SEO in React"
    },
    slug: "seo-react",
    description: {
        es: "El SEO en React implica optimizar una aplicación para mejorar su visibilidad en los motores de búsqueda. Esto incluye técnicas como renderizado en el servidor (SSR), uso de metadatos dinámicos y herramientas como React Helmet o Next.js para gestionar etiquetas HTML críticas.",
        en: "SEO in React involves optimizing an application to improve its visibility in search engines. This includes techniques like server-side rendering (SSR), dynamic metadata management, and tools like React Helmet or Next.js to handle critical HTML tags."
    },
    sections: [
        {
            type: "text",
            title: {
                es: "🔹¿Qué es SEO en React?",
                en: "🔹What is SEO in React?"
            },
            code: `<Helmet><title>Optimización SEO</title></Helmet>`,
            content: {
                es: "El SEO en React se refiere a las prácticas y herramientas utilizadas para asegurar que una aplicación React sea indexada correctamente por los motores de búsqueda. Dado que React genera contenido dinámicamente en el cliente, es necesario implementar técnicas como SSR o SSG para garantizar que los motores de búsqueda puedan leer el contenido.",
                en: "SEO in React refers to the practices and tools used to ensure that a React application is properly indexed by search engines. Since React generates content dynamically on the client side, it is necessary to implement techniques like SSR or SSG to ensure that search engines can read the content."
            }
        },
        {
            type: "list",
            title: {
                es: "🔹¿Cuándo usar SEO en React?",
                en: "🔹When to use SEO in React?"
            },
            content: {
                es: [
                    "Cuando necesitas mejorar la visibilidad de tu aplicación en los motores de búsqueda.",
                    "Cuando trabajas en proyectos como blogs, tiendas en línea o sitios de documentación que dependen del tráfico orgánico.",
                    "Cuando deseas implementar técnicas como SSR o SSG para optimizar el rendimiento y el SEO."
                ],
                en: [
                    "When you need to improve your application's visibility in search engines.",
                    "When working on projects like blogs, e-commerce sites, or documentation sites that rely on organic traffic.",
                    "When you want to implement techniques like SSR or SSG to optimize performance and SEO."
                ]
            }
        },
        {
            type: "table",
            title: {
                es: "🔹Comparación entre CSR y SSR/SSG para SEO",
                en: "🔹Comparison between CSR and SSR/SSG for SEO"
            },
            headers: {
                es: ["Característica", "CSR (Cliente)", "SSR/SSG (Servidor)"],
                en: ["Feature", "CSR (Client)", "SSR/SSG (Server)"]
            },
            rows: [
                {
                    es: ["Indexación", "❌ Limitada (contenido dinámico)", "✅ Completa (HTML pre-renderizado)"],
                    en: ["Indexing", "❌ Limited (dynamic content)", "✅ Complete (pre-rendered HTML)"]
                },
                {
                    es: ["Rendimiento", "❌ Menor (carga inicial pesada)", "✅ Mejor (HTML ligero)"],
                    en: ["Performance", "❌ Lower (heavy initial load)", "✅ Better (lightweight HTML)"]
                },
                {
                    es: ["SEO", "❌ Bajo (depende de JavaScript)", "✅ Alto (contenido accesible)"],
                    en: ["SEO", "❌ Low (depends on JavaScript)", "✅ High (accessible content)"]
                }
            ]
        },
        {
            type: "example",
            title: {
                es: "1️⃣ Ejemplo práctico de SEO en React",
                en: "1️⃣ Practical example of SEO in React"
            },
            caseTitle: {
                es: "Uso de React Helmet para gestionar metadatos",
                en: "Using React Helmet to manage metadata"
            },
            caseDescription: {
                es: "Este ejemplo muestra cómo usar React Helmet para agregar etiquetas meta dinámicas que mejoren el SEO.",
                en: "This example demonstrates how to use React Helmet to add dynamic meta tags that improve SEO."
            },
            code: `import React from 'react';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>Optimización SEO con React Helmet</title>
        <meta name="description" content="Ejemplo de optimización SEO usando React Helmet." />
        <meta name="keywords" content="React, SEO, Helmet" />
      </Helmet>
      <h1>Bienvenido a mi aplicación</h1>
      <p>Este es un ejemplo de SEO en React.</p>
    </div>
  );
}

export default App;`,
            conclusion: {
                es: "🔥 Beneficio: React Helmet permite gestionar dinámicamente etiquetas meta, mejorando la indexación y el SEO de la aplicación.",
                en: "🔥 Benefit: React Helmet allows dynamically managing meta tags, improving indexing and SEO of the application."
            }
        },
        {
            type: "example",
            title: {
                es: "2️⃣ Ejemplo práctico de SEO en React",
                en: "2️⃣ Practical example of SEO in React"
            },
            caseTitle: {
                es: "Implementación de SSR con Next.js",
                en: "Implementing SSR with Next.js"
            },
            caseDescription: {
                es: "Este ejemplo muestra cómo usar Next.js para implementar SSR y mejorar el SEO.",
                en: "This example demonstrates how to use Next.js to implement SSR and improve SEO."
            },
            code: `// pages/index.js
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data').then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Contenido dinámico con SSR</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
            conclusion: {
                es: "🔥 Beneficio: SSR en Next.js genera HTML pre-renderizado, lo que mejora la indexación y el SEO.",
                en: "🔥 Benefit: SSR in Next.js generates pre-rendered HTML, improving indexing and SEO."
            }
        },
        {
            type: "example",
            title: {
                es: "3️⃣ Ejemplo práctico de SEO en React",
                en: "3️⃣ Practical example of SEO in React"
            },
            caseTitle: {
                es: "Generación estática con SSG en Next.js",
                en: "Static generation with SSG in Next.js"
            },
            caseDescription: {
                es: "Este ejemplo muestra cómo usar SSG en Next.js para generar páginas estáticas optimizadas para SEO.",
                en: "This example demonstrates how to use SSG in Next.js to generate static pages optimized for SEO."
            },
            code: `// pages/posts/[id].js
export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/posts').then((res) => res.json());

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await fetch("https://api.example.com/posts/${"params.id"}").then((res) => res.json());

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}`,
            conclusion: {
                es: "🔥 Beneficio: SSG en Next.js genera páginas estáticas optimizadas para SEO, mejorando el rendimiento y la indexación.",
                en: "🔥 Benefit: SSG in Next.js generates static pages optimized for SEO, improving performance and indexing."
            }
        },
        {
            type: "list",
            title: {
                es: "📌 ¿Cuándo NO usar SEO en React?",
                en: "📌 When NOT to use SEO in React?"
            },
            content: {
                es: [
                    "❌ Si tu aplicación es una herramienta interna o no necesita tráfico orgánico.",
                    "❌ Si prefieres priorizar la interactividad completa sobre la optimización para motores de búsqueda.",
                    "❌ Si el uso de técnicas como SSR o SSG introduce complejidad innecesaria en proyectos pequeños."
                ],
                en: [
                    "❌ If your application is an internal tool or does not require organic traffic.",
                    "❌ If you prefer prioritizing full interactivity over optimization for search engines.",
                    "❌ If using techniques like SSR or SSG introduces unnecessary complexity in small projects."
                ]
            }
        }
    ],
    conclusion: {
        es: [
            "✅ El SEO en React es ideal para proyectos que dependen del tráfico orgánico, como blogs o tiendas en línea.",
            "✅ Facilita la indexación y mejora el rendimiento mediante técnicas como SSR y SSG.",
            "✅ No debe usarse en exceso si el proyecto no requiere visibilidad en motores de búsqueda."
        ],
        en: [
            "✅ SEO in React is ideal for projects that rely on organic traffic, such as blogs or e-commerce sites.",
            "✅ It facilitates indexing and improves performance through techniques like SSR and SSG.",
            "✅ It should not be overused if the project does not require visibility in search engines."
        ]
    }
};

export default concept;