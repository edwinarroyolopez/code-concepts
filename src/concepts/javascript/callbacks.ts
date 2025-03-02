import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Callbacks en JavaScript",
    en: "Callbacks in JavaScript"
  },
  slug: "callbacks",
  description: {
    es: "Los callbacks en JavaScript son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una tarea asíncrona o específica haya finalizado. Son ampliamente utilizados para manejar operaciones asíncronas como solicitudes HTTP, temporizadores y eventos.",
    en: "Callbacks in JavaScript are functions passed as arguments to other functions and executed after a specific or asynchronous task has completed. They are widely used to handle asynchronous operations such as HTTP requests, timers, and events."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Callbacks?",
        en: "🔹What are Callbacks?"
      },
      code: `function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}`,
      content: {
        es: "Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal haya completado su tarea. Los callbacks son esenciales para manejar operaciones asíncronas en JavaScript, como solicitudes de red, lectura de archivos o temporizadores.",
        en: "A callback is a function passed as an argument to another function and executed after the main function has completed its task. Callbacks are essential for handling asynchronous operations in JavaScript, such as network requests, file reading, or timers."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Callbacks?",
        en: "🔹When to use Callbacks?"
      },
      content: {
        es: [
          "Cuando necesitas manejar operaciones asíncronas como solicitudes HTTP o lectura de archivos.",
          "Cuando deseas ejecutar código después de que una tarea específica haya finalizado.",
          "Cuando trabajas con eventos o temporizadores que requieren una función de respuesta."
        ],
        en: [
          "When you need to handle asynchronous operations like HTTP requests or file reading.",
          "When you want to execute code after a specific task has completed.",
          "When working with events or timers that require a response function."
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
          es: ["Lectura del código", "❌ Menos legible (callback hell)", "✅ Más legible (encadenamiento)"],
          en: ["Code readability", "❌ Less readable (callback hell)", "✅ More readable (chaining)"]
        },
        {
          es: ["Manejo de errores", "❌ Manual (try-catch limitado)", "✅ Automático (.catch)"],
          en: ["Error handling", "❌ Manual (limited try-catch)", "✅ Automatic (.catch)"]
        },
        {
          es: ["Complejidad", "❌ Alta (anidación)", "✅ Baja (encadenamiento lineal)"],
          en: ["Complexity", "❌ High (nesting)", "✅ Low (linear chaining)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Callbacks",
        en: "1️⃣ Practical example of Callbacks"
      },
      caseTitle: {
        es: "Uso básico de Callbacks",
        en: "Basic usage of Callbacks"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un callback para ejecutar una función después de que otra haya terminado.",
        en: "This example demonstrates how to use a callback to execute a function after another has finished."
      },
      code: `function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);`,
      conclusion: {
        es: "🔥 Beneficio: Los callbacks permiten ejecutar código secuencialmente, asegurando que una tarea se complete antes de iniciar otra.",
        en: "🔥 Benefit: Callbacks allow sequential execution of code, ensuring one task completes before starting another."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Callbacks",
        en: "2️⃣ Practical example of Callbacks"
      },
      caseTitle: {
        es: "Callbacks con Temporizadores",
        en: "Callbacks with Timers"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar callbacks con temporizadores para ejecutar código después de un retraso específico.",
        en: "This example demonstrates how to use callbacks with timers to execute code after a specific delay."
      },
      code: `function delayedMessage(message, delay, callback) {
  setTimeout(function () {
    console.log(message);
    callback();
  }, delay);
}

delayedMessage('¡Hola después de 2 segundos!', 2000, function () {
  console.log('Callback ejecutado.');
});`,
      conclusion: {
        es: "🔥 Beneficio: Los callbacks permiten ejecutar código después de que una operación asíncrona (como un temporizador) haya finalizado.",
        en: "🔥 Benefit: Callbacks allow executing code after an asynchronous operation (like a timer) has completed."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Callbacks",
        en: "3️⃣ Practical example of Callbacks"
      },
      caseTitle: {
        es: "Callbacks con Solicitudes HTTP",
        en: "Callbacks with HTTP Requests"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar callbacks para manejar respuestas de una solicitud HTTP simulada.",
        en: "This example demonstrates how to use callbacks to handle responses from a simulated HTTP request."
      },
      code: `function fetchData(url, callback) {
  // Simulación de una solicitud HTTP
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 1000);
}

fetchData('https://api.example.com/user', function (response) {
  console.log('Datos recibidos:', response);
});`,
      conclusion: {
        es: "🔥 Beneficio: Los callbacks permiten manejar datos recibidos de operaciones asíncronas como solicitudes HTTP.",
        en: "🔥 Benefit: Callbacks allow handling data received from asynchronous operations like HTTP requests."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Callbacks?",
        en: "📌 When NOT to use Callbacks?"
      },
      content: {
        es: [
          "❌ Si el uso de callbacks introduce complejidad excesiva (callback hell).",
          "❌ Si prefieres un manejo más limpio y estructurado de operaciones asíncronas (usar Promesas o async/await).",
          "❌ Si el proyecto requiere un manejo avanzado de errores, donde las promesas son más adecuadas."
        ],
        en: [
          "❌ If using callbacks introduces excessive complexity (callback hell).",
          "❌ If you prefer cleaner and more structured handling of asynchronous operations (use Promises or async/await).",
          "❌ If the project requires advanced error handling, where promises are more suitable."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los callbacks son ideales para manejar operaciones asíncronas simples y ejecutar código secuencialmente.",
      "✅ Facilitan la ejecución de tareas después de que otras hayan finalizado.",
      "✅ No deben usarse en exceso si el proyecto requiere un manejo más limpio de operaciones asíncronas (usar Promesas o async/await)."
    ],
    en: [
      "✅ Callbacks are ideal for handling simple asynchronous operations and executing code sequentially.",
      "✅ They facilitate the execution of tasks after others have completed.",
      "✅ They should not be overused if the project requires cleaner handling of asynchronous operations (use Promises or async/await)."
    ]
  }
};

export default concept;