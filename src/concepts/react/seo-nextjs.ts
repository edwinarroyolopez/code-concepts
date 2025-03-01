import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "SEO en Next.js",
    en: "SEO in Next.js"
  },
  slug: "seo-nextjs",
  description: {
    es: "El SEO en Next.js implica aprovechar sus características avanzadas como SSR, SSG y generación de metadatos dinámicos para optimizar la visibilidad de una aplicación en los motores de búsqueda. Next.js facilita la creación de contenido pre-renderizado y accesible para los crawlers de Google.",
    en: "SEO in Next.js involves leveraging its advanced features like SSR, SSG, and dynamic metadata generation to optimize the visibility of an application in search engines. Next.js makes it easy to create pre-rendered and accessible content for Google crawlers."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es SEO en Next.js?",
        en: "🔹What is SEO in Next.js?"
      },
      code: `export const getStaticProps = async () => { /* ... */ };`,
      content: {
        es: "El SEO en Next.js se refiere a las prácticas y herramientas que aprovechan las capacidades de renderizado del framework para mejorar la indexación en los motores de búsqueda. Next.js permite generar contenido estático (SSG) o dinámico (SSR) que es fácilmente accesible para los crawlers, mejorando así el SEO.",
        en: "SEO in Next.js refers to the practices and tools that leverage the rendering capabilities of the framework to improve indexing in search engines. Next.js allows generating static (SSG) or dynamic (SSR) content that is easily accessible to crawlers, thus improving SEO."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar SEO en Next.js?",
        en: "🔹When to use SEO in Next.js?"
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
        es: "🔹Comparación entre SSR y SSG para SEO en Next.js",
        en: "🔹Comparison between SSR and SSG for SEO in Next.js"
      },
      headers: {
        es: ["Característica", "SSR", "SSG"],
        en: ["Feature", "SSR", "SSG"]
      },
      rows: [
        {
          es: ["Velocidad de carga", "✅ Buena (HTML generado en el servidor)", "🔥 Excelente (HTML pre-generado)"],
          en: ["Load speed", "✅ Good (HTML generated on the server)", "🔥 Excellent (pre-generated HTML)"]
        },
        {
          es: ["Indexación", "✅ Completa (contenido accesible)", "🔥 Completa (contenido pre-renderizado)"],
          en: ["Indexing", "✅ Complete (accessible content)", "🔥 Complete (pre-rendered content)"]
        },
        {
          es: ["Actualización de datos", "✅ Dinámica (en cada solicitud)", "❌ Limitada (requiere regeneración)"],
          en: ["Data updates", "✅ Dynamic (on each request)", "❌ Limited (requires regeneration)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de SEO en Next.js",
        en: "1️⃣ Practical example of SEO in Next.js"
      },
      caseTitle: {
        es: "Generación de metadatos dinámicos con next/head",
        en: "Dynamic metadata generation with next/head"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el componente `next/head` para gestionar etiquetas meta dinámicas que mejoren el SEO.",
        en: "This example demonstrates how to use the `next/head` component to manage dynamic meta tags that improve SEO."
      },
      code: `// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Optimización SEO con Next.js</title>
        <meta name="description" content="Ejemplo de optimización SEO usando Next.js." />
        <meta name="keywords" content="Next.js, SEO, React" />
      </Head>
      <h1>Bienvenido a mi aplicación</h1>
      <p>Este es un ejemplo de SEO en Next.js.</p>
    </div>
  );
}`,
      conclusion: {
        es: "🔥 Beneficio: `next/head` permite gestionar dinámicamente etiquetas meta, mejorando la indexación y el SEO de la aplicación.",
        en: "🔥 Benefit: `next/head` allows dynamically managing meta tags, improving indexing and SEO of the application."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de SEO en Next.js",
        en: "2️⃣ Practical example of SEO in Next.js"
      },
      caseTitle: {
        es: "Implementación de SSR para SEO",
        en: "Implementing SSR for SEO"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar SSR en Next.js para generar contenido dinámico optimizado para SEO.",
        en: "This example demonstrates how to use SSR in Next.js to generate dynamic content optimized for SEO."
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
        es: "🔥 Beneficio: SSR en Next.js genera HTML pre-renderizado en cada solicitud, lo que mejora la indexación y el SEO.",
        en: "🔥 Benefit: SSR in Next.js generates pre-rendered HTML on each request, improving indexing and SEO."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de SEO en Next.js",
        en: "3️⃣ Practical example of SEO in Next.js"
      },
      caseTitle: {
        es: "Generación estática con SSG para SEO",
        en: "Static generation with SSG for SEO"
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
  const post = await fetch("https://api.example.com/posts/params.id").then((res) => res.json());

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
        es: "📌 ¿Cuándo NO usar SEO en Next.js?",
        en: "📌 When NOT to use SEO in Next.js?"
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
      "✅ El SEO en Next.js es ideal para proyectos que dependen del tráfico orgánico, como blogs o tiendas en línea.",
      "✅ Facilita la indexación y mejora el rendimiento mediante técnicas como SSR y SSG.",
      "✅ No debe usarse en exceso si el proyecto no requiere visibilidad en motores de búsqueda."
    ],
    en: [
      "✅ SEO in Next.js is ideal for projects that rely on organic traffic, such as blogs or e-commerce sites.",
      "✅ It facilitates indexing and improves performance through techniques like SSR and SSG.",
      "✅ It should not be overused if the project does not require visibility in search engines."
    ]
  }
};

export default concept;