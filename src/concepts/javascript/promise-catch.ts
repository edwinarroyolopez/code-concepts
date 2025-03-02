import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Promise.catch en JavaScript",
    en: "Promise.catch in JavaScript"
  },
  slug: "promise-catch",
  description: {
    es: "El método Promise.catch en JavaScript permite manejar errores que ocurren durante la ejecución de una Promise. Es una forma conveniente de capturar rechazos (rejected Promises) y tomar acciones específicas para manejarlos.",
    en: "The Promise.catch method in JavaScript allows handling errors that occur during the execution of a Promise. It is a convenient way to catch rejections (rejected Promises) and take specific actions to handle them."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Promise.catch?",
        en: "🔹What is Promise.catch?"
      },
      code: `const promise = new Promise((resolve, reject) => {
  reject('Algo salió mal');
});

promise
  .then(result => console.log(result))
  .catch(error => console.error('Error capturado:', error));`,
      content: {
        es: "El método `.catch` es una función que se utiliza para manejar errores en Promises. Se ejecuta cuando una Promise es rechazada (rejected), permitiendo capturar el error y realizar acciones específicas, como registrar el error o mostrar un mensaje al usuario.",
        en: "The `.catch` method is a function used to handle errors in Promises. It executes when a Promise is rejected, allowing you to capture the error and perform specific actions, such as logging the error or displaying a message to the user."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Promise.catch?",
        en: "🔹When to use Promise.catch?"
      },
      content: {
        es: [
          "Cuando necesitas manejar errores en Promises que pueden fallar, como solicitudes HTTP o lectura de archivos.",
          "Cuando deseas evitar que un error en una Promise detenga completamente el flujo del programa.",
          "Cuando trabajas con APIs modernas que devuelven Promises, como Fetch API."
        ],
        en: [
          "When you need to handle errors in Promises that may fail, such as HTTP requests or file reading.",
          "When you want to prevent an error in a Promise from completely halting program flow.",
          "When working with modern APIs that return Promises, such as the Fetch API."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Promise.catch y try/catch",
        en: "🔹Comparison between Promise.catch and try/catch"
      },
      headers: {
        es: ["Característica", "Promise.catch", "try/catch"],
        en: ["Feature", "Promise.catch", "try/catch"]
      },
      rows: [
        {
          es: ["Uso principal", "✅ Manejo de errores en Promises", "✅ Manejo de errores en código síncrono/async"],
          en: ["Main use", "✅ Error handling in Promises", "✅ Error handling in synchronous/async code"]
        },
        {
          es: ["Legibilidad", "✅ Más legible para Promises", "❌ Menos legible para Promises"],
          en: ["Readability", "✅ More readable for Promises", "❌ Less readable for Promises"]
        },
        {
          es: ["Flexibilidad", "✅ Alto (solo maneja rechazos)", "✅ Alto (maneja cualquier error)"],
          en: ["Flexibility", "✅ High (handles only rejections)", "✅ High (handles any error)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Promise.catch",
        en: "1️⃣ Practical example of Promise.catch"
      },
      caseTitle: {
        es: "Uso básico de Promise.catch",
        en: "Basic usage of Promise.catch"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Promise.catch para manejar errores en una Promise rechazada.",
        en: "This example demonstrates how to use Promise.catch to handle errors in a rejected Promise."
      },
      code: `const promise = new Promise((resolve, reject) => {
  reject('Operación fallida');
});

promise
  .then(result => console.log(result))
  .catch(error => console.error('Error capturado:', error));`,
      conclusion: {
        es: "🔥 Beneficio: Promise.catch permite manejar errores de manera específica y evitar que detengan el flujo del programa.",
        en: "🔥 Benefit: Promise.catch allows handling errors specifically and prevents them from halting program flow."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Promise.catch",
        en: "2️⃣ Practical example of Promise.catch"
      },
      caseTitle: {
        es: "Manejo de errores con Fetch API",
        en: "Error handling with Fetch API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Promise.catch para manejar errores en una solicitud HTTP realizada con Fetch API.",
        en: "This example demonstrates how to use Promise.catch to handle errors in an HTTP request made with Fetch API."
      },
      code: `fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => console.log('Datos recibidos:', data))
  .catch(error => console.error('Error capturado:', error.message));`,
      conclusion: {
        es: "🔥 Beneficio: Promise.catch simplifica el manejo de errores en operaciones asíncronas como solicitudes HTTP.",
        en: "🔥 Benefit: Promise.catch simplifies error handling in asynchronous operations like HTTP requests."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Promise.catch",
        en: "3️⃣ Practical example of Promise.catch"
      },
      caseTitle: {
        es: "Encadenamiento de Promises con .catch",
        en: "Promise chaining with .catch"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Promise.catch en un encadenamiento de Promises para manejar errores en cualquier punto del flujo.",
        en: "This example demonstrates how to use Promise.catch in a Promise chain to handle errors at any point in the flow."
      },
      code: `function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: 'Datos iniciales' }), 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
    throw new Error('Error simulado');
  })
  .then(processed => {
    console.log(processed);
  })
  .catch(error => {
    console.error('Error capturado:', error.message);
  });`,
      conclusion: {
        es: "🔥 Beneficio: Promise.catch puede manejar errores en cualquier punto de un encadenamiento de Promises, asegurando un flujo robusto.",
        en: "🔥 Benefit: Promise.catch can handle errors at any point in a Promise chain, ensuring a robust flow."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Promise.catch?",
        en: "📌 When NOT to use Promise.catch?"
      },
      content: {
        es: [
          "❌ Si el uso de Promise.catch introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres manejar errores de forma centralizada usando try/catch con async/await.",
          "❌ Si el proyecto requiere un manejo avanzado de errores que no dependa exclusivamente de Promises."
        ],
        en: [
          "❌ If using Promise.catch introduces unnecessary complexity in simple cases.",
          "❌ If you prefer centralized error handling using try/catch with async/await.",
          "❌ If the project requires advanced error handling that does not rely exclusively on Promises."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Promise.catch es ideal para manejar errores en Promises de manera específica y evitar que detengan el flujo del programa.",
      "✅ Facilita el manejo de errores en operaciones asíncronas como solicitudes HTTP o lectura de archivos.",
      "✅ No debe usarse en exceso si el manejo de errores puede resolverse de forma más sencilla con try/catch."
    ],
    en: [
      "✅ Promise.catch is ideal for handling errors in Promises specifically and preventing them from halting program flow.",
      "✅ It facilitates error handling in asynchronous operations like HTTP requests or file reading.",
      "✅ It should not be overused if error handling can be resolved more simply with try/catch."
    ]
  }
};

export default concept;