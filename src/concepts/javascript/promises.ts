import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Promises en JavaScript",
    en: "Promises in JavaScript"
  },
  slug: "promises",
  description: {
    es: "Las Promises en JavaScript son objetos que representan la finalización (o el fracaso) eventual de una operación asíncrona. Permiten escribir código asíncrono más limpio y estructurado, evitando los problemas del 'callback hell'.",
    en: "Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation. They allow writing cleaner and more structured asynchronous code, avoiding the problems of 'callback hell'."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Promises?",
        en: "🔹What are Promises?"
      },
      code: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('¡Éxito!'), 1000);
});

promise.then(result => console.log(result));`,
      content: {
        es: "Una Promise es un objeto que representa el resultado eventual de una operación asíncrona. Puede estar en uno de tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected). Las Promises permiten manejar operaciones asíncronas de manera más estructurada y evitar el anidamiento excesivo de callbacks.",
        en: "A Promise is an object that represents the eventual result of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. Promises allow handling asynchronous operations in a more structured way and avoid excessive callback nesting."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Promises?",
        en: "🔹When to use Promises?"
      },
      content: {
        es: [
          "Cuando necesitas manejar operaciones asíncronas como solicitudes HTTP o lectura de archivos.",
          "Cuando deseas escribir código asíncrono más limpio y legible, evitando el 'callback hell'.",
          "Cuando trabajas con APIs modernas que devuelven Promises, como Fetch API."
        ],
        en: [
          "When you need to handle asynchronous operations like HTTP requests or file reading.",
          "When you want to write cleaner and more readable asynchronous code, avoiding 'callback hell'.",
          "When working with modern APIs that return Promises, such as the Fetch API."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Callbacks y Promises",
        en: "🔹Comparison between Callbacks and Promises"
      },
      headers: {
        es: ["Característica", "Callbacks", "Promises"],
        en: ["Feature", "Callbacks", "Promises"]
      },
      rows: [
        {
          es: ["Legibilidad", "❌ Menos legible (callback hell)", "✅ Más legible (encadenamiento)"],
          en: ["Readability", "❌ Less readable (callback hell)", "✅ More readable (chaining)"]
        },
        {
          es: ["Manejo de errores", "❌ Manual (try-catch limitado)", "✅ Automático (.catch)"],
          en: ["Error handling", "❌ Manual (limited try-catch)", "✅ Automatic (.catch)"]
        },
        {
          es: ["Encadenamiento", "❌ Complejo (anidación)", "✅ Simple (then/catch)"],
          en: ["Chaining", "❌ Complex (nesting)", "✅ Simple (then/catch)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Promises",
        en: "1️⃣ Practical example of Promises"
      },
      caseTitle: {
        es: "Uso básico de Promises",
        en: "Basic usage of Promises"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear y usar una Promise básica para manejar una operación asíncrona.",
        en: "This example demonstrates how to create and use a basic Promise to handle an asynchronous operation."
      },
      code: `const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Operación exitosa');
  } else {
    reject('Operación fallida');
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));`,
      conclusion: {
        es: "🔥 Beneficio: Las Promises permiten manejar operaciones asíncronas de manera estructurada y evitar el anidamiento excesivo de callbacks.",
        en: "🔥 Benefit: Promises allow handling asynchronous operations in a structured way and avoid excessive callback nesting."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Promises",
        en: "2️⃣ Practical example of Promises"
      },
      caseTitle: {
        es: "Encadenamiento de Promises",
        en: "Promise Chaining"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo encadenar múltiples Promises para realizar operaciones secuenciales.",
        en: "This example demonstrates how to chain multiple Promises to perform sequential operations."
      },
      code: `function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: 'Datos iniciales' }), 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
    return { processedData: data.data + ' procesados' };
  })
  .then(processed => {
    console.log(processed);
  })
  .catch(error => {
    console.error('Error:', error);
  });`,
      conclusion: {
        es: "🔥 Beneficio: El encadenamiento de Promises permite realizar operaciones secuenciales de manera limpia y legible.",
        en: "🔥 Benefit: Promise chaining allows performing sequential operations in a clean and readable way."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Promises",
        en: "3️⃣ Practical example of Promises"
      },
      caseTitle: {
        es: "Uso de Fetch API con Promises",
        en: "Using Fetch API with Promises"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la Fetch API, que devuelve Promises, para realizar una solicitud HTTP.",
        en: "This example demonstrates how to use the Fetch API, which returns Promises, to make an HTTP request."
      },
      code: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
      conclusion: {
        es: "🔥 Beneficio: La Fetch API utiliza Promises para manejar solicitudes HTTP de manera simple y estructurada.",
        en: "🔥 Benefit: The Fetch API uses Promises to handle HTTP requests in a simple and structured way."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Promises?",
        en: "📌 When NOT to use Promises?"
      },
      content: {
        es: [
          "❌ Si el uso de Promises introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres un manejo más limpio y moderno de operaciones asíncronas (usar async/await).",
          "❌ Si el proyecto requiere un manejo avanzado de errores, donde async/await puede ser más adecuado."
        ],
        en: [
          "❌ If using Promises introduces unnecessary complexity in simple cases.",
          "❌ If you prefer cleaner and more modern handling of asynchronous operations (use async/await).",
          "❌ If the project requires advanced error handling, where async/await may be more suitable."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las Promises son ideales para manejar operaciones asíncronas de manera estructurada y legible.",
      "✅ Facilitan el encadenamiento de operaciones y el manejo de errores.",
      "✅ No deben usarse en exceso si el proyecto requiere un manejo más moderno de operaciones asíncronas (usar async/await)."
    ],
    en: [
      "✅ Promises are ideal for handling asynchronous operations in a structured and readable way.",
      "✅ They facilitate chaining operations and error handling.",
      "✅ They should not be overused if the project requires more modern handling of asynchronous operations (use async/await)."
    ]
  }
};

export default concept;