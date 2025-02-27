import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Promesas y Async/Await en JavaScript",
    en: "Promises and Async/Await in JavaScript"
  },
  slug: "promises-async-await",
  description: {
    es: "Las promesas (Promises) y Async/Await son características de JavaScript que permiten manejar operaciones asíncronas de manera más eficiente y legible. Las promesas representan un valor que puede estar disponible ahora, en el futuro o nunca, mientras que Async/Await es una sintaxis más moderna y clara para trabajar con promesas.",
    en: "Promises and Async/Await are JavaScript features that allow handling asynchronous operations more efficiently and readably. Promises represent a value that may be available now, in the future, or never, while Async/Await is a more modern and clear syntax for working with promises."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Promesas?",
        en: "🔹What are Promises?"
      },
      code: "const promise = new Promise((resolve, reject) => { /* código asíncrono */ });",
      content: {
        es: "Una Promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona. Tiene tres estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected).",
        en: "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, or rejected."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Promesas?",
        en: "🔹When to use Promises?"
      },
      content: {
        es: [
          "Cuando necesitas manejar operaciones asíncronas, como llamadas a APIs.",
          "Cuando deseas encadenar múltiples operaciones asíncronas usando `.then()`.",
          "Cuando necesitas manejar errores de manera centralizada con `.catch()`."
        ],
        en: [
          "When you need to handle asynchronous operations, such as API calls.",
          "When you want to chain multiple asynchronous operations using `.then()`.",
          "When you need to handle errors centrally with `.catch()`."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Callbacks y Promesas",
        en: "🔹Comparison between Callbacks and Promises"
      },
      headers: {
        es: ["Característica", "Callbacks", "Promesas"],
        en: ["Feature", "Callbacks", "Promises"]
      },
      rows: [
        {
          es: ["Legibilidad", "❌ Difícil de leer con múltiples callbacks", "✅ Más legible con `.then()`"],
          en: ["Readability", "❌ Hard to read with multiple callbacks", "✅ More readable with `.then()`"]
        },
        {
          es: ["Manejo de errores", "❌ Requiere manejo manual", "✅ Centralizado con `.catch()`"],
          en: ["Error handling", "❌ Requires manual handling", "✅ Centralized with `.catch()`"]
        },
        {
          es: ["Encadenamiento", "❌ Callback Hell", "✅ Encadenamiento sencillo con `.then()`"],
          en: ["Chaining", "❌ Callback Hell", "✅ Simple chaining with `.then()`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Promesas",
        en: "1️⃣ Practical example of Promises"
      },
      caseTitle: {
        es: "Llamada a una API con Promesas",
        en: "API call with Promises"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo hacer una llamada a una API usando Promesas y manejar la respuesta.",
        en: "This example demonstrates how to make an API call using Promises and handle the response."
      },
      code: `const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
};

fetchData();`,
      conclusion: {
        es: "🔥 Beneficio: Las promesas permiten manejar operaciones asíncronas de manera más limpia y legible.",
        en: "🔥 Benefit: Promises allow handling asynchronous operations in a cleaner and more readable way."
      }
    },
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Async/Await?",
        en: "🔹What is Async/Await?"
      },
      code: "async function myFunction() { const result = await someAsyncOperation(); }",
      content: {
        es: "Async/Await es una sintaxis moderna que permite trabajar con promesas de manera más sencilla y legible. La palabra clave `async` declara una función asíncrona, y `await` pausa la ejecución hasta que la promesa se resuelve.",
        en: "Async/Await is a modern syntax that allows working with promises in a simpler and more readable way. The `async` keyword declares an asynchronous function, and `await` pauses execution until the promise is resolved."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Async/Await?",
        en: "🔹When to use Async/Await?"
      },
      content: {
        es: [
          "Cuando deseas un código más limpio y legible para operaciones asíncronas.",
          "Cuando necesitas manejar múltiples operaciones asíncronas de manera secuencial.",
          "Cuando prefieres usar bloques `try/catch` para manejar errores."
        ],
        en: [
          "When you want cleaner and more readable code for asynchronous operations.",
          "When you need to handle multiple asynchronous operations sequentially.",
          "When you prefer using `try/catch` blocks for error handling."
        ]
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Async/Await",
        en: "2️⃣ Practical example of Async/Await"
      },
      caseTitle: {
        es: "Llamada a una API con Async/Await",
        en: "API call with Async/Await"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo hacer una llamada a una API usando Async/Await y manejar la respuesta.",
        en: "This example demonstrates how to make an API call using Async/Await and handle the response."
      },
      code: `const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData();`,
      conclusion: {
        es: "🔥 Beneficio: Async/Await hace que el código asíncrono parezca síncrono, mejorando la legibilidad.",
        en: "🔥 Benefit: Async/Await makes asynchronous code look synchronous, improving readability."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Async/Await con múltiples llamadas",
        en: "3️⃣ Practical example of Async/Await with multiple calls"
      },
      caseTitle: {
        es: "Múltiples llamadas a API secuenciales",
        en: "Multiple sequential API calls"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo hacer múltiples llamadas a una API de manera secuencial usando Async/Await.",
        en: "This example demonstrates how to make multiple sequential API calls using Async/Await."
      },
      code: `const fetchMultipleData = async () => {
  try {
    const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data1 = await response1.json();
    console.log("Datos 1:", data1);

    const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data2 = await response2.json();
    console.log("Datos 2:", data2);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchMultipleData();`,
      conclusion: {
        es: "🔥 Beneficio: Async/Await permite manejar múltiples operaciones asíncronas de manera secuencial y legible.",
        en: "🔥 Benefit: Async/Await allows handling multiple asynchronous operations sequentially and readably."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Async/Await?",
        en: "📌 When NOT to use Async/Await?"
      },
      content: {
        es: [
          "❌ Si no necesitas manejar operaciones asíncronas.",
          "❌ Si prefieres usar callbacks o promesas para casos simples.",
          "❌ Si no necesitas la legibilidad adicional que proporciona Async/Await."
        ],
        en: [
          "❌ If you don't need to handle asynchronous operations.",
          "❌ If you prefer using callbacks or promises for simple cases.",
          "❌ If you don't need the additional readability provided by Async/Await."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las promesas son ideales para manejar operaciones asíncronas y evitar el Callback Hell.",
      "✅ Async/Await es una sintaxis moderna que mejora la legibilidad del código asíncrono.",
      "✅ Ambos son herramientas esenciales para trabajar con operaciones asíncronas en JavaScript."
    ],
    en: [
      "✅ Promises are ideal for handling asynchronous operations and avoiding Callback Hell.",
      "✅ Async/Await is a modern syntax that improves the readability of asynchronous code.",
      "✅ Both are essential tools for working with asynchronous operations in JavaScript."
    ]
  }
};

export default concept;