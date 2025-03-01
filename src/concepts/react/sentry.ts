import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Sentry en React",
    en: "Sentry in React"
  },
  slug: "sentry",
  description: {
    es: "Sentry es una herramienta de monitoreo de errores que permite capturar, rastrear y solucionar errores en aplicaciones React. Proporciona información detallada sobre los errores, como el stack trace, el contexto del usuario y el estado de la aplicación en el momento del error.",
    en: "Sentry is an error monitoring tool that allows capturing, tracking, and resolving errors in React applications. It provides detailed information about errors, such as the stack trace, user context, and application state at the time of the error."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Sentry?",
        en: "🔹What is Sentry?"
      },
      code: `Sentry.init({ dsn: 'your-dsn-here' });`,
      content: {
        es: "Sentry es una plataforma de monitoreo de errores que ayuda a los desarrolladores a identificar y solucionar problemas en aplicaciones React. Captura errores en tiempo real, proporcionando detalles como el stack trace, el navegador del usuario y el estado de la aplicación, lo que facilita la depuración.",
        en: "Sentry is an error monitoring platform that helps developers identify and resolve issues in React applications. It captures errors in real-time, providing details such as the stack trace, user's browser, and application state, making debugging easier."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Sentry?",
        en: "🔹When to use Sentry?"
      },
      content: {
        es: [
          "Cuando necesitas monitorear errores en tiempo real en entornos de producción.",
          "Cuando deseas obtener información detallada sobre los errores, como el stack trace y el contexto del usuario.",
          "Cuando trabajas en proyectos grandes donde la identificación rápida de errores es crítica."
        ],
        en: [
          "When you need to monitor errors in real-time in production environments.",
          "When you want to obtain detailed information about errors, such as the stack trace and user context.",
          "When working on large projects where quick error identification is critical."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Sentry y Logging Manual",
        en: "🔹Comparison between Sentry and Manual Logging"
      },
      headers: {
        es: ["Característica", "Sentry", "Logging Manual"],
        en: ["Feature", "Sentry", "Manual Logging"]
      },
      rows: [
        {
          es: ["Captura de errores", "✅ Automática", "❌ Manual"],
          en: ["Error capture", "✅ Automatic", "❌ Manual"]
        },
        {
          es: ["Detalles del error", "✅ Completo (stack trace, contexto)", "❌ Limitado (mensajes simples)"],
          en: ["Error details", "✅ Complete (stack trace, context)", "❌ Limited (simple messages)"]
        },
        {
          es: ["Monitoreo en tiempo real", "✅ Sí", "❌ No"],
          en: ["Real-time monitoring", "✅ Yes", "❌ No"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Sentry",
        en: "1️⃣ Practical example of Sentry"
      },
      caseTitle: {
        es: "Configuración básica en React",
        en: "Basic setup in React"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo configurar Sentry en una aplicación React para capturar errores automáticamente.",
        en: "This example demonstrates how to set up Sentry in a React application to automatically capture errors."
      },
      code: `// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './App';

Sentry.init({
  dsn: 'https://your-dsn-here.sentry.io', // Reemplaza con tu DSN
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0, // Habilita el seguimiento de rendimiento
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
      conclusion: {
        es: "🔥 Beneficio: Sentry captura automáticamente errores en la aplicación y proporciona detalles útiles para su resolución.",
        en: "🔥 Benefit: Sentry automatically captures errors in the application and provides useful details for resolution."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Sentry",
        en: "2️⃣ Practical example of Sentry"
      },
      caseTitle: {
        es: "Captura manual de errores",
        en: "Manual error capture"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo capturar errores manualmente en componentes específicos usando Sentry.",
        en: "This example demonstrates how to manually capture errors in specific components using Sentry."
      },
      code: `import React, { useState } from 'react';
import * as Sentry from '@sentry/react';

function ErrorComponent() {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      throw new Error('Error simulado');
    } catch (err) {
      Sentry.captureException(err); // Captura el error manualmente
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Simular Error</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default ErrorComponent;`,
      conclusion: {
        es: "🔥 Beneficio: Sentry permite capturar errores manualmente en situaciones específicas, proporcionando flexibilidad adicional.",
        en: "🔥 Benefit: Sentry allows manually capturing errors in specific situations, providing additional flexibility."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Sentry",
        en: "3️⃣ Practical example of Sentry"
      },
      caseTitle: {
        es: "Monitoreo de rendimiento",
        en: "Performance monitoring"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Sentry para monitorear el rendimiento de una aplicación React.",
        en: "This example demonstrates how to use Sentry to monitor the performance of a React application."
      },
      code: `// src/App.js
import React from 'react';
import * as Sentry from '@sentry/react';

function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 2000)); // Simula una llamada API
}

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const transaction = Sentry.startTransaction({
      op: 'fetchData',
      name: 'Fetch Data Transaction',
    });

    fetchData()
      .then(() => {
        setData('Datos cargados');
        transaction.finish(); // Finaliza la transacción
      })
      .catch((err) => {
        Sentry.captureException(err); // Captura errores en la transacción
        transaction.finish();
      });
  }, []);

  return (
    <div>
      <h1>{data || 'Cargando...'}</h1>
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Sentry no solo captura errores, sino que también monitorea el rendimiento de las transacciones, como llamadas API o interacciones del usuario.",
        en: "🔥 Benefit: Sentry not only captures errors but also monitors the performance of transactions, such as API calls or user interactions."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Sentry?",
        en: "📌 When NOT to use Sentry?"
      },
      content: {
        es: [
          "❌ Si tu proyecto es pequeño y no requiere monitoreo avanzado de errores.",
          "❌ Si prefieres usar herramientas de logging simples en lugar de una plataforma completa.",
          "❌ Si el uso de Sentry introduce complejidad innecesaria en proyectos sin entornos de producción críticos."
        ],
        en: [
          "❌ If your project is small and does not require advanced error monitoring.",
          "❌ If you prefer using simple logging tools instead of a full-fledged platform.",
          "❌ If using Sentry introduces unnecessary complexity in projects without critical production environments."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Sentry es ideal para monitorear errores y rendimiento en aplicaciones React en entornos de producción.",
      "✅ Facilita la identificación rápida de problemas y mejora la experiencia del usuario.",
      "✅ No debe usarse en exceso si el proyecto no requiere monitoreo avanzado de errores."
    ],
    en: [
      "✅ Sentry is ideal for monitoring errors and performance in React applications in production environments.",
      "✅ It facilitates quick problem identification and improves the user experience.",
      "✅ It should not be overused if the project does not require advanced error monitoring."
    ]
  }
};

export default concept;