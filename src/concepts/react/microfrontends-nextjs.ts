import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Microfrontends con Next.js",
    en: "Microfrontends with Next.js"
  },
  slug: "microfrontends-nextjs",
  description: {
    es: "Los Microfrontends son una arquitectura que divide una aplicación frontend monolítica en partes más pequeñas e independientes. Next.js es una herramienta ideal para implementar esta arquitectura debido a su flexibilidad, soporte para SSR y SSG, y capacidad para integrar múltiples aplicaciones frontend.",
    en: "Microfrontends are an architecture that splits a monolithic frontend application into smaller, independent parts. Next.js is an ideal tool for implementing this architecture due to its flexibility, support for SSR and SSG, and ability to integrate multiple frontend applications."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Microfrontends?",
        en: "🔹What are Microfrontends?"
      },
      code: `// Estructura de microfrontends`,
      content: {
        es: "Los Microfrontends son una arquitectura que permite dividir una aplicación frontend monolítica en partes más pequeñas y manejables, cada una desarrollada y desplegada de forma independiente. Esto facilita la colaboración entre equipos, mejora la escalabilidad y permite actualizaciones incrementales sin afectar toda la aplicación.",
        en: "Microfrontends are an architecture that allows splitting a monolithic frontend application into smaller, manageable parts, each developed and deployed independently. This facilitates collaboration between teams, improves scalability, and enables incremental updates without affecting the entire application."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Microfrontends con Next.js?",
        en: "🔹When to use Microfrontends with Next.js?"
      },
      content: {
        es: [
          "Cuando trabajas en proyectos grandes con múltiples equipos que necesitan desarrollar y desplegar de forma independiente.",
          "Cuando deseas mejorar la escalabilidad y mantenibilidad de una aplicación monolítica existente.",
          "Cuando quieres aprovechar las características avanzadas de Next.js, como SSR, SSG y API Routes, en una arquitectura modular."
        ],
        en: [
          "When working on large projects with multiple teams that need to develop and deploy independently.",
          "When you want to improve the scalability and maintainability of an existing monolithic application.",
          "When you want to leverage advanced features of Next.js, such as SSR, SSG, and API Routes, in a modular architecture."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Monolítico y Microfrontends",
        en: "🔹Comparison between Monolithic and Microfrontends"
      },
      headers: {
        es: ["Característica", "Monolítico", "Microfrontends"],
        en: ["Feature", "Monolithic", "Microfrontends"]
      },
      rows: [
        {
          es: ["Despliegue", "❌ Todo junto", "✅ Independiente"],
          en: ["Deployment", "❌ All together", "✅ Independent"]
        },
        {
          es: ["Escalabilidad", "❌ Limitada", "✅ Alta"],
          en: ["Scalability", "❌ Limited", "✅ High"]
        },
        {
          es: ["Colaboración", "❌ Compleja", "✅ Mejorada (equipos independientes)"],
          en: ["Collaboration", "❌ Complex", "✅ Improved (independent teams)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Microfrontends con Next.js",
        en: "1️⃣ Practical example of Microfrontends with Next.js"
      },
      caseTitle: {
        es: "Estructura básica de Microfrontends",
        en: "Basic structure of Microfrontends"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo estructurar una aplicación Next.js para implementar Microfrontends.",
        en: "This example demonstrates how to structure a Next.js application to implement Microfrontends."
      },
      code: `// next.config.js
module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

// pages/_app.js
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('header-microfrontend'), { ssr: false });
const Footer = dynamic(() => import('footer-microfrontend'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}`,
      conclusion: {
        es: "🔥 Beneficio: Cada microfrontend (como Header y Footer) puede ser desarrollado y desplegado de forma independiente, mejorando la modularidad.",
        en: "🔥 Benefit: Each microfrontend (such as Header and Footer) can be developed and deployed independently, improving modularity."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Microfrontends con Next.js",
        en: "2️⃣ Practical example of Microfrontends with Next.js"
      },
      caseTitle: {
        es: "Integración de Microfrontends con Module Federation",
        en: "Integration of Microfrontends with Module Federation"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Webpack Module Federation para integrar Microfrontends en una aplicación Next.js.",
        en: "This example demonstrates how to use Webpack Module Federation to integrate Microfrontends into a Next.js application."
      },
      code: `// webpack.config.js (Microfrontend A)
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'microfrontendA',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './components/Header',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

// next.config.js (Aplicación principal)
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack(config) {
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          microfrontendA: 'microfrontendA@http://localhost:3001/remoteEntry.js',
        },
        shared: ['react', 'react-dom'],
      })
    );
    return config;
  },
};`,
      conclusion: {
        es: "🔥 Beneficio: Webpack Module Federation permite cargar Microfrontends dinámicamente en tiempo de ejecución, mejorando la flexibilidad.",
        en: "🔥 Benefit: Webpack Module Federation allows loading Microfrontends dynamically at runtime, improving flexibility."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Microfrontends con Next.js",
        en: "3️⃣ Practical example of Microfrontends with Next.js"
      },
      caseTitle: {
        es: "Despliegue independiente de Microfrontends",
        en: "Independent deployment of Microfrontends"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo desplegar Microfrontends de forma independiente usando Vercel o servicios similares.",
        en: "This example demonstrates how to deploy Microfrontends independently using Vercel or similar services."
      },
      code: `// Despliegue de Microfrontend A
// vercel.json
{
  "version": 2,
  "builds": [
    { "src": "next.config.js", "use": "@vercel/next" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}

// Despliegue de Microfrontend B
// vercel.json
{
  "version": 2,
  "builds": [
    { "src": "next.config.js", "use": "@vercel/next" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}`,
      conclusion: {
        es: "🔥 Beneficio: Cada Microfrontend puede ser desplegado de forma independiente, lo que reduce el riesgo y mejora la velocidad de entrega.",
        en: "🔥 Benefit: Each Microfrontend can be deployed independently, reducing risk and improving delivery speed."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Microfrontends con Next.js?",
        en: "📌 When NOT to use Microfrontends with Next.js?"
      },
      content: {
        es: [
          "❌ Si tu proyecto es pequeño y no requiere una arquitectura modular.",
          "❌ Si prefieres mantener una única base de código para simplificar el desarrollo.",
          "❌ Si el uso de Microfrontends introduce complejidad innecesaria en proyectos simples."
        ],
        en: [
          "❌ If your project is small and does not require a modular architecture.",
          "❌ If you prefer maintaining a single codebase to simplify development.",
          "❌ If using Microfrontends introduces unnecessary complexity in simple projects."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los Microfrontends con Next.js son ideales para proyectos grandes con múltiples equipos y requisitos de escalabilidad.",
      "✅ Facilitan la colaboración, el despliegue independiente y la modularidad.",
      "✅ No deben usarse en exceso si el proyecto no requiere una arquitectura modular."
    ],
    en: [
      "✅ Microfrontends with Next.js are ideal for large projects with multiple teams and scalability requirements.",
      "✅ They facilitate collaboration, independent deployment, and modularity.",
      "✅ They should not be overused if the project does not require a modular architecture."
    ]
  }
};

export default concept;