import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Event Loop en JavaScript",
    en: "Event Loop in JavaScript"
  },
  slug: "event-loop",
  description: {
    es: "El Event Loop en JavaScript es un mecanismo que permite manejar operaciones asíncronas sin bloquear el hilo principal de ejecución. Gestiona la ejecución de código, las colas de tareas (task queues) y los microtareas (microtasks), asegurando que las operaciones asíncronas se resuelvan correctamente.",
    en: "The Event Loop in JavaScript is a mechanism that allows handling asynchronous operations without blocking the main execution thread. It manages code execution, task queues, and microtasks, ensuring that asynchronous operations are resolved correctly."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Event Loop?",
        en: "🔹What is the Event Loop?"
      },
      code: `console.log('Inicio');
setTimeout(() => console.log('Temporizador'), 0);
Promise.resolve().then(() => console.log('Promesa'));
console.log('Fin');`,
      content: {
        es: "El Event Loop es un componente clave del motor de JavaScript que permite manejar operaciones asíncronas. Funciona coordinando el Call Stack (pila de llamadas), la Task Queue (cola de tareas) y la Microtask Queue (cola de microtareas). Asegura que las operaciones asíncronas se ejecuten en el orden correcto sin bloquear el hilo principal.",
        en: "The Event Loop is a key component of the JavaScript engine that enables handling asynchronous operations. It coordinates the Call Stack, Task Queue, and Microtask Queue, ensuring that asynchronous operations execute in the correct order without blocking the main thread."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Event Loop?",
        en: "🔹When to use the Event Loop?"
      },
      content: {
        es: [
          "Cuando necesitas manejar operaciones asíncronas como temporizadores, promesas o eventos.",
          "Cuando deseas entender cómo JavaScript gestiona la concurrencia y la ejecución de código.",
          "Cuando trabajas con APIs asíncronas como Fetch, setTimeout o setInterval."
        ],
        en: [
          "When you need to handle asynchronous operations like timers, promises, or events.",
          "When you want to understand how JavaScript manages concurrency and code execution.",
          "When working with asynchronous APIs like Fetch, setTimeout, or setInterval."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Tareas y Microtareas",
        en: "🔹Comparison between Tasks and Microtasks"
      },
      headers: {
        es: ["Característica", "Tareas (Tasks)", "Microtareas (Microtasks)"],
        en: ["Feature", "Tasks", "Microtasks"]
      },
      rows: [
        {
          es: ["Ejemplos", "setTimeout, setInterval", "Promesas, MutationObserver"],
          en: ["Examples", "setTimeout, setInterval", "Promises, MutationObserver"]
        },
        {
          es: ["Prioridad", "✅ Baja (ejecutadas después de microtareas)", "🔥 Alta (ejecutadas antes de tareas)"],
          en: ["Priority", "✅ Low (executed after microtasks)", "🔥 High (executed before tasks)"]
        },
        {
          es: ["Cola", "Task Queue", "Microtask Queue"],
          en: ["Queue", "Task Queue", "Microtask Queue"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico del Event Loop",
        en: "1️⃣ Practical example of the Event Loop"
      },
      caseTitle: {
        es: "Ejecución de código síncrono y asíncrono",
        en: "Execution of synchronous and asynchronous code"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo el Event Loop maneja la ejecución de código síncrono y asíncrono.",
        en: "This example demonstrates how the Event Loop handles the execution of synchronous and asynchronous code."
      },
      code: `console.log('Inicio');

setTimeout(() => {
  console.log('Temporizador');
}, 0);

Promise.resolve().then(() => {
  console.log('Promesa');
});

console.log('Fin');`,
      conclusion: {
        es: "🔥 Beneficio: El Event Loop asegura que las microtareas (promesas) se ejecuten antes que las tareas (temporizadores), manteniendo un orden predecible.",
        en: "🔥 Benefit: The Event Loop ensures that microtasks (promises) execute before tasks (timers), maintaining a predictable order."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico del Event Loop",
        en: "2️⃣ Practical example of the Event Loop"
      },
      caseTitle: {
        es: "Uso de setTimeout y Promesas",
        en: "Using setTimeout and Promises"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo el Event Loop prioriza las microtareas sobre las tareas.",
        en: "This example demonstrates how the Event Loop prioritizes microtasks over tasks."
      },
      code: `console.log('Inicio');

setTimeout(() => {
  console.log('Temporizador 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promesa 1');
}).then(() => {
  console.log('Promesa 2');
});

setTimeout(() => {
  console.log('Temporizador 2');
}, 0);

console.log('Fin');`,
      conclusion: {
        es: "🔥 Beneficio: Las microtareas siempre se ejecutan antes de las tareas, incluso si hay múltiples promesas o temporizadores.",
        en: "🔥 Benefit: Microtasks always execute before tasks, even if there are multiple promises or timers."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico del Event Loop",
        en: "3️⃣ Practical example of the Event Loop"
      },
      caseTitle: {
        es: "Simulación de una API asíncrona",
        en: "Simulation of an asynchronous API"
      },
      caseDescription: {
        es: "Este ejemplo simula una llamada a una API asíncrona y muestra cómo el Event Loop maneja la respuesta.",
        en: "This example simulates an asynchronous API call and demonstrates how the Event Loop handles the response."
      },
      code: `console.log('Llamando a la API...');

setTimeout(() => {
  console.log('Respuesta de la API recibida');
  Promise.resolve().then(() => {
    console.log('Procesando datos de la API');
  });
}, 1000);

console.log('Esperando respuesta...');`,
      conclusion: {
        es: "🔥 Beneficio: El Event Loop garantiza que las respuestas asíncronas se manejen correctamente, permitiendo que el código siga ejecutándose mientras espera.",
        en: "🔥 Benefit: The Event Loop ensures that asynchronous responses are handled correctly, allowing the code to continue executing while waiting."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO preocuparse por el Event Loop?",
        en: "📌 When NOT to worry about the Event Loop?"
      },
      content: {
        es: [
          "❌ Si estás escribiendo código completamente síncrono sin operaciones asíncronas.",
          "❌ Si usas frameworks modernos que manejan automáticamente el Event Loop (como React o Angular).",
          "❌ Si no necesitas entender los detalles internos de JavaScript para tu proyecto actual."
        ],
        en: [
          "❌ If you're writing completely synchronous code without asynchronous operations.",
          "❌ If you're using modern frameworks that automatically handle the Event Loop (like React or Angular).",
          "❌ If you don't need to understand the internal details of JavaScript for your current project."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Event Loop es esencial para manejar operaciones asíncronas en JavaScript.",
      "✅ Facilita la ejecución de código sin bloquear el hilo principal, mejorando la experiencia del usuario.",
      "✅ No es necesario preocuparse por él en proyectos simples o cuando se usa un framework que lo abstrae."
    ],
    en: [
      "✅ The Event Loop is essential for handling asynchronous operations in JavaScript.",
      "✅ It facilitates code execution without blocking the main thread, improving user experience.",
      "✅ It is not necessary to worry about it in simple projects or when using a framework that abstracts it."
    ]
  }
};

export default concept;