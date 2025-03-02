import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "async/await en JavaScript",
    en: "async/await in JavaScript"
  },
  slug: "async-await",
  description: {
    es: "La sintaxis async/await en JavaScript permite manejar operaciones asíncronas de manera más limpia y legible. Convierte el código basado en Promises en una estructura similar a código síncrono, facilitando su comprensión y mantenimiento.",
    en: "The async/await syntax in JavaScript allows handling asynchronous operations in a cleaner and more readable way. It transforms Promise-based code into a structure similar to synchronous code, making it easier to understand and maintain."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es async/await?",
        en: "🔹What is async/await?"
      },
      code: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error capturado:', error.message);
  }
}`,
      content: {
        es: "La sintaxis `async/await` es una forma moderna de trabajar con Promises en JavaScript. Una función marcada como `async` siempre devuelve una Promise, y la palabra clave `await` pausa la ejecución de la función hasta que la Promise se resuelve. Esto permite escribir código asíncrono de manera más lineal y legible.",
        en: "The `async/await` syntax is a modern way to work with Promises in JavaScript. A function marked as `async` always returns a Promise, and the `await` keyword pauses the execution of the function until the Promise resolves. This allows writing asynchronous code in a more linear and readable manner."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar async/await?",
        en: "🔹When to use async/await?"
      },
      content: {
        es: [
          "Cuando necesitas manejar operaciones asíncronas complejas, como solicitudes HTTP o lectura de archivos.",
          "Cuando deseas escribir código asíncrono más limpio y legible, evitando el encadenamiento excesivo de Promises.",
          "Cuando trabajas con APIs modernas que devuelven Promises, como Fetch API."
        ],
        en: [
          "When you need to handle complex asynchronous operations, such as HTTP requests or file reading.",
          "When you want to write cleaner and more readable asynchronous code, avoiding excessive Promise chaining.",
          "When working with modern APIs that return Promises, such as the Fetch API."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre async/await y Promises",
        en: "🔹Comparison between async/await and Promises"
      },
      headers: {
        es: ["Característica", "async/await", "Promises"],
        en: ["Feature", "async/await", "Promises"]
      },
      rows: [
        {
          es: ["Legibilidad", "✅ Más legible", "❌ Menos legible (encadenamiento)"],
          en: ["Readability", "✅ More readable", "❌ Less readable (chaining)"]
        },
        {
          es: ["Manejo de errores", "✅ Centralizado (try/catch)", "❌ Descentralizado (.catch)"],
          en: ["Error handling", "✅ Centralized (try/catch)", "❌ Decentralized (.catch)"]
        },
        {
          es: ["Flexibilidad", "✅ Alto (parecido a código síncrono)", "✅ Alto (basado en Promises)"],
          en: ["Flexibility", "✅ High (similar to synchronous code)", "✅ High (Promise-based)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de async/await",
        en: "1️⃣ Practical example of async/await"
      },
      caseTitle: {
        es: "Uso básico de async/await",
        en: "Basic usage of async/await"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar async/await para manejar una solicitud HTTP con Fetch API.",
        en: "This example demonstrates how to use async/await to handle an HTTP request with Fetch API."
      },
      code: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    console.log('Datos recibidos:', data);
  } catch (error) {
    console.error('Error capturado:', error.message);
  }
}

fetchData();`,
      conclusion: {
        es: "🔥 Beneficio: async/await simplifica el manejo de operaciones asíncronas, haciendo que el código sea más legible y fácil de mantener.",
        en: "🔥 Benefit: async/await simplifies handling asynchronous operations, making the code more readable and easier to maintain."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de async/await",
        en: "2️⃣ Practical example of async/await"
      },
      caseTitle: {
        es: "Encadenamiento de operaciones asíncronas",
        en: "Chaining asynchronous operations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar async/await para realizar múltiples operaciones asíncronas en secuencia.",
        en: "This example demonstrates how to use async/await to perform multiple asynchronous operations in sequence."
      },
      code: `async function processUserData() {
  try {
    const userResponse = await fetch('https://api.example.com/user');
    const user = await userResponse.json();

    const postsResponse = await fetch("https://api.example.com/posts?userId=${'user.id'}");
    const posts = await postsResponse.json();

    console.log('Usuario:', user);
    console.log('Publicaciones:', posts);
  } catch (error) {
    console.error('Error capturado:', error.message);
  }
}

processUserData();`,
      conclusion: {
        es: "🔥 Beneficio: async/await permite realizar operaciones asíncronas secuenciales de manera clara y estructurada.",
        en: "🔥 Benefit: async/await allows performing sequential asynchronous operations in a clear and structured way."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de async/await",
        en: "3️⃣ Practical example of async/await"
      },
      caseTitle: {
        es: "Manejo de errores con try/catch",
        en: "Error handling with try/catch"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar try/catch con async/await para manejar errores de manera centralizada.",
        en: "This example demonstrates how to use try/catch with async/await to handle errors in a centralized way."
      },
      code: `async function riskyOperation() {
  throw new Error('Algo salió mal');
}

async function main() {
  try {
    await riskyOperation();
  } catch (error) {
    console.error('Error capturado:', error.message);
  }
}

main();`,
      conclusion: {
        es: "🔥 Beneficio: try/catch con async/await centraliza el manejo de errores, mejorando la robustez del código.",
        en: "🔥 Benefit: try/catch with async/await centralizes error handling, improving code robustness."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar async/await?",
        en: "📌 When NOT to use async/await?"
      },
      content: {
        es: [
          "❌ Si el uso de async/await introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres el encadenamiento tradicional de Promises para operaciones sencillas.",
          "❌ Si el proyecto requiere un manejo avanzado de errores que no dependa exclusivamente de async/await."
        ],
        en: [
          "❌ If using async/await introduces unnecessary complexity in simple cases.",
          "❌ If you prefer traditional Promise chaining for simple operations.",
          "❌ If the project requires advanced error handling that does not rely exclusively on async/await."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ async/await es ideal para manejar operaciones asíncronas de manera limpia y legible.",
      "✅ Facilita el manejo de errores y mejora la estructura del código.",
      "✅ No debe usarse en exceso si el manejo de operaciones asíncronas puede resolverse de forma más sencilla con Promises."
    ],
    en: [
      "✅ async/await is ideal for handling asynchronous operations in a clean and readable way.",
      "✅ It facilitates error handling and improves code structure.",
      "✅ It should not be overused if asynchronous operations can be resolved more simply with Promises."
    ]
  }
};

export default concept;