import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "LogRocket en React",
    en: "LogRocket in React"
  },
  slug: "logrocket",
  description: {
    es: "LogRocket es una herramienta de monitoreo y depuración que permite grabar sesiones de usuario, capturar errores y analizar el comportamiento de las aplicaciones React en tiempo real. Proporciona información detallada sobre interacciones del usuario, estado de la aplicación y problemas de rendimiento.",
    en: "LogRocket is a monitoring and debugging tool that allows recording user sessions, capturing errors, and analyzing the behavior of React applications in real-time. It provides detailed information about user interactions, application state, and performance issues."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es LogRocket?",
        en: "🔹What is LogRocket?"
      },
      code: `LogRocket.init('your-app-id');`,
      content: {
        es: "LogRocket es una plataforma que combina la grabación de sesiones de usuario con el monitoreo de errores y el análisis de rendimiento. Permite a los desarrolladores reproducir exactamente lo que los usuarios hacen en la aplicación, identificar problemas y solucionar errores de manera eficiente.",
        en: "LogRocket is a platform that combines user session recording with error monitoring and performance analysis. It allows developers to replay exactly what users do in the application, identify issues, and resolve errors efficiently."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar LogRocket?",
        en: "🔹When to use LogRocket?"
      },
      content: {
        es: [
          "Cuando necesitas grabar sesiones de usuario para entender cómo interactúan con tu aplicación.",
          "Cuando deseas capturar errores junto con el contexto del usuario y el estado de la aplicación.",
          "Cuando trabajas en proyectos donde la depuración y el análisis de rendimiento son críticos."
        ],
        en: [
          "When you need to record user sessions to understand how they interact with your application.",
          "When you want to capture errors along with user context and application state.",
          "When working on projects where debugging and performance analysis are critical."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre LogRocket y Herramientas de Logging Tradicionales",
        en: "🔹Comparison between LogRocket and Traditional Logging Tools"
      },
      headers: {
        es: ["Característica", "LogRocket", "Logging Tradicional"],
        en: ["Feature", "LogRocket", "Traditional Logging"]
      },
      rows: [
        {
          es: ["Grabación de sesiones", "✅ Sí (reproducción completa)", "❌ No (solo mensajes)"],
          en: ["Session recording", "✅ Yes (full replay)", "❌ No (only messages)"]
        },
        {
          es: ["Contexto del usuario", "✅ Completo (interacciones, estado)", "❌ Limitado (mensajes simples)"],
          en: ["User context", "✅ Complete (interactions, state)", "❌ Limited (simple messages)"]
        },
        {
          es: ["Análisis de rendimiento", "✅ Integrado", "❌ Requiere herramientas adicionales"],
          en: ["Performance analysis", "✅ Integrated", "❌ Requires additional tools"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de LogRocket",
        en: "1️⃣ Practical example of LogRocket"
      },
      caseTitle: {
        es: "Configuración básica en React",
        en: "Basic setup in React"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo configurar LogRocket en una aplicación React para grabar sesiones de usuario y capturar errores.",
        en: "This example demonstrates how to set up LogRocket in a React application to record user sessions and capture errors."
      },
      code: `// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import LogRocket from 'logrocket';

LogRocket.init('your-app-id'); // Reemplaza con tu App ID

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
      conclusion: {
        es: "🔥 Beneficio: LogRocket graba automáticamente las sesiones de usuario y captura errores, proporcionando contexto detallado para su resolución.",
        en: "🔥 Benefit: LogRocket automatically records user sessions and captures errors, providing detailed context for resolution."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de LogRocket",
        en: "2️⃣ Practical example of LogRocket"
      },
      caseTitle: {
        es: "Identificación de problemas con grabaciones",
        en: "Problem identification with recordings"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar las grabaciones de LogRocket para identificar problemas específicos en la interacción del usuario.",
        en: "This example demonstrates how to use LogRocket recordings to identify specific issues in user interactions."
      },
      code: `// Simulación de un error en un componente
function ErrorComponent() {
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    try {
      throw new Error('Error simulado');
    } catch (err) {
      setError(err.message);
      LogRocket.captureException(err); // Captura el error en LogRocket
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
        es: "🔥 Beneficio: Las grabaciones de LogRocket permiten reproducir exactamente lo que el usuario hizo antes de que ocurriera el error, facilitando la depuración.",
        en: "🔥 Benefit: LogRocket recordings allow you to replay exactly what the user did before the error occurred, making debugging easier."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de LogRocket",
        en: "3️⃣ Practical example of LogRocket"
      },
      caseTitle: {
        es: "Monitoreo de estado y rendimiento",
        en: "State and performance monitoring"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar LogRocket para monitorear el estado de la aplicación y analizar problemas de rendimiento.",
        en: "This example demonstrates how to use LogRocket to monitor the application state and analyze performance issues."
      },
      code: `// src/App.js
import React, { useState } from 'react';
import LogRocket from 'logrocket';

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    LogRocket.startTransaction('fetchData', 'API Call'); // Inicia una transacción
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        LogRocket.endTransaction('fetchData'); // Finaliza la transacción
      })
      .catch((err) => {
        LogRocket.captureException(err); // Captura errores en la transacción
        LogRocket.endTransaction('fetchData');
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Cargar Datos</button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: LogRocket no solo graba sesiones, sino que también monitorea el estado de la aplicación y analiza problemas de rendimiento como tiempos de carga de API.",
        en: "🔥 Benefit: LogRocket not only records sessions but also monitors the application state and analyzes performance issues like API load times."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar LogRocket?",
        en: "📌 When NOT to use LogRocket?"
      },
      content: {
        es: [
          "❌ Si tu proyecto es pequeño y no requiere grabación de sesiones o análisis avanzado.",
          "❌ Si prefieres usar herramientas de logging simples en lugar de una plataforma completa.",
          "❌ Si el uso de LogRocket introduce complejidad innecesaria en proyectos sin entornos de producción críticos."
        ],
        en: [
          "❌ If your project is small and does not require session recording or advanced analysis.",
          "❌ If you prefer using simple logging tools instead of a full-fledged platform.",
          "❌ If using LogRocket introduces unnecessary complexity in projects without critical production environments."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ LogRocket es ideal para grabar sesiones de usuario, capturar errores y analizar el rendimiento en aplicaciones React.",
      "✅ Facilita la depuración y mejora la experiencia del usuario al proporcionar contexto detallado.",
      "✅ No debe usarse en exceso si el proyecto no requiere monitoreo avanzado o grabación de sesiones."
    ],
    en: [
      "✅ LogRocket is ideal for recording user sessions, capturing errors, and analyzing performance in React applications.",
      "✅ It facilitates debugging and improves the user experience by providing detailed context.",
      "✅ It should not be overused if the project does not require advanced monitoring or session recording."
    ]
  }
};

export default concept;