import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Fetch en JavaScript",
    en: "Fetch in JavaScript"
  },
  slug: "fetch",
  description: {
    es: "La API Fetch en JavaScript permite realizar solicitudes HTTP para interactuar con APIs o recursos externos. Es una alternativa moderna y flexible a XMLHttpRequest, basada en Promises.",
    en: "The Fetch API in JavaScript allows making HTTP requests to interact with APIs or external resources. It is a modern and flexible alternative to XMLHttpRequest, based on Promises."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Fetch?",
        en: "🔹What is Fetch?"
      },
      code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
      content: {
        es: "Fetch es una API moderna que permite realizar solicitudes HTTP (GET, POST, PUT, DELETE, etc.) para interactuar con recursos externos, como APIs REST. Está basada en Promises, lo que la hace más legible y fácil de usar en comparación con XMLHttpRequest. Además, Fetch soporta características avanzadas como encabezados personalizados, métodos HTTP específicos y manejo de errores.",
        en: "Fetch is a modern API that allows making HTTP requests (GET, POST, PUT, DELETE, etc.) to interact with external resources, such as REST APIs. It is based on Promises, making it more readable and easier to use compared to XMLHttpRequest. Additionally, Fetch supports advanced features like custom headers, specific HTTP methods, and error handling."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Fetch?",
        en: "🔹When to use Fetch?"
      },
      content: {
        es: [
          "Cuando necesitas obtener datos de una API externa, como datos de usuarios o productos.",
          "Cuando deseas enviar datos a un servidor, como formularios o actualizaciones de estado.",
          "Cuando trabajas con aplicaciones modernas que requieren interacción con servicios web.",
          "Cuando prefieres una sintaxis basada en Promises para manejar solicitudes HTTP."
        ],
        en: [
          "When you need to retrieve data from an external API, such as user or product data.",
          "When you want to send data to a server, such as forms or status updates.",
          "When working with modern applications that require interaction with web services.",
          "When you prefer a Promise-based syntax for handling HTTP requests."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Fetch y XMLHttpRequest",
        en: "🔹Comparison between Fetch and XMLHttpRequest"
      },
      headers: {
        es: ["Característica", "Fetch", "XMLHttpRequest"],
        en: ["Feature", "Fetch", "XMLHttpRequest"]
      },
      rows: [
        {
          es: ["Sintaxis", "✅ Basada en Promises", "❌ Callbacks"],
          en: ["Syntax", "✅ Promise-based", "❌ Callback-based"]
        },
        {
          es: ["Legibilidad", "✅ Más legible", "❌ Menos legible"],
          en: ["Readability", "✅ More readable", "❌ Less readable"]
        },
        {
          es: ["Soporte nativo", "✅ Amplio soporte moderno", "✅ Compatible con navegadores antiguos"],
          en: ["Native support", "✅ Wide modern support", "✅ Compatible with older browsers"]
        },
        {
          es: ["Manejo de errores", "✅ Centralizado (.catch)", "❌ Manual"],
          en: ["Error handling", "✅ Centralized (.catch)", "❌ Manual"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Fetch",
        en: "1️⃣ Practical example of Fetch"
      },
      caseTitle: {
        es: "Obtener Datos de una API con GET",
        en: "Fetching Data from an API with GET"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Fetch para obtener datos de una API externa.",
        en: "This example demonstrates how to use Fetch to retrieve data from an external API."
      },
      code: `fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error capturado:', error.message));`,
      conclusion: {
        es: "🔥 Beneficio: Fetch simplifica la obtención de datos de APIs externas usando Promises.",
        en: "🔥 Benefit: Fetch simplifies retrieving data from external APIs using Promises."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Fetch",
        en: "2️⃣ Practical example of Fetch"
      },
      caseTitle: {
        es: "Enviar Datos a un Servidor con POST",
        en: "Sending Data to a Server with POST"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Fetch para enviar datos a un servidor mediante una solicitud POST.",
        en: "This example demonstrates how to use Fetch to send data to a server via a POST request."
      },
      code: `const postData = {
  title: 'Nuevo post',
  body: 'Contenido del post',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log('Respuesta del servidor:', data))
  .catch(error => console.error('Error capturado:', error.message));`,
      conclusion: {
        es: "🔥 Beneficio: Fetch permite enviar datos estructurados al servidor de manera sencilla.",
        en: "🔥 Benefit: Fetch allows sending structured data to the server easily."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Fetch",
        en: "3️⃣ Practical example of Fetch"
      },
      caseTitle: {
        es: "Manejo de Errores con Fetch",
        en: "Error Handling with Fetch"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo manejar errores en Fetch cuando la solicitud falla o el servidor devuelve un estado de error.",
        en: "This example demonstrates how to handle errors in Fetch when the request fails or the server returns an error status."
      },
      code: `fetch('https://jsonplaceholder.typicode.com/nonexistent')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error capturado:', error.message));`,
      conclusion: {
        es: "🔥 Beneficio: El manejo de errores en Fetch asegura que las respuestas no válidas sean detectadas y gestionadas adecuadamente.",
        en: "🔥 Benefit: Error handling in Fetch ensures invalid responses are detected and managed properly."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Fetch?",
        en: "📌 When NOT to use Fetch?"
      },
      content: {
        es: [
          "❌ Si necesitas compatibilidad con navegadores muy antiguos que no soportan Promises.",
          "❌ Si prefieres una sintaxis más declarativa para manejar solicitudes HTTP (usar Axios u otras bibliotecas).",
          "❌ Si el proyecto requiere funcionalidades avanzadas que Fetch no cubre directamente, como cancelación de solicitudes."
        ],
        en: [
          "❌ If you need compatibility with very old browsers that do not support Promises.",
          "❌ If you prefer a more declarative syntax for handling HTTP requests (use Axios or other libraries).",
          "❌ If the project requires advanced features that Fetch does not cover directly, such as request cancellation."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Fetch es ideal para realizar solicitudes HTTP modernas y manejar respuestas de manera flexible.",
      "✅ Facilita el trabajo con APIs externas y el envío de datos estructurados al servidor.",
      "✅ No debe usarse en exceso si el proyecto requiere compatibilidad con navegadores antiguos o funcionalidades avanzadas."
    ],
    en: [
      "✅ Fetch is ideal for making modern HTTP requests and handling responses flexibly.",
      "✅ It facilitates working with external APIs and sending structured data to the server.",
      "✅ It should not be overused if the project requires compatibility with older browsers or advanced features."
    ]
  }
};

export default concept;