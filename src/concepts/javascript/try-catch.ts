import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "try/catch en JavaScript",
    en: "try/catch in JavaScript"
  },
  slug: "try-catch",
  description: {
    es: "El bloque try/catch en JavaScript permite manejar errores de manera controlada. El código dentro del bloque `try` se ejecuta normalmente, y si ocurre un error, el control pasa al bloque `catch`, donde se puede manejar el error de forma segura.",
    en: "The try/catch block in JavaScript allows handling errors in a controlled manner. The code inside the `try` block executes normally, and if an error occurs, control passes to the `catch` block, where the error can be safely handled."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es try/catch?",
        en: "🔹What is try/catch?"
      },
      code: `try {
  throw new Error('Algo salió mal');
} catch (error) {
  console.error('Error capturado:', error.message);
}`,
      content: {
        es: "El bloque `try/catch` es una estructura que permite manejar errores en tiempo de ejecución. El código dentro del bloque `try` se ejecuta normalmente, y si ocurre un error, el control pasa al bloque `catch`, donde se puede capturar y manejar el error. También se puede usar un bloque `finally` opcional para ejecutar código independientemente de si ocurrió un error o no.",
        en: "The `try/catch` block is a structure that allows handling runtime errors. The code inside the `try` block executes normally, and if an error occurs, control passes to the `catch` block, where the error can be captured and handled. An optional `finally` block can also be used to execute code regardless of whether an error occurred or not."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar try/catch?",
        en: "🔹When to use try/catch?"
      },
      content: {
        es: [
          "Cuando necesitas manejar errores potenciales en operaciones críticas, como solicitudes HTTP o lectura de archivos.",
          "Cuando deseas evitar que un error detenga completamente la ejecución del programa.",
          "Cuando trabajas con código asíncrono que utiliza `async/await` para manejar Promises."
        ],
        en: [
          "When you need to handle potential errors in critical operations, such as HTTP requests or file reading.",
          "When you want to prevent an error from completely halting program execution.",
          "When working with asynchronous code that uses `async/await` to handle Promises."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre try/catch y Manejo de Errores Manual",
        en: "🔹Comparison between try/catch and Manual Error Handling"
      },
      headers: {
        es: ["Característica", "try/catch", "Manejo Manual"],
        en: ["Feature", "try/catch", "Manual Handling"]
      },
      rows: [
        {
          es: ["Legibilidad", "✅ Más legible", "❌ Menos legible"],
          en: ["Readability", "✅ More readable", "❌ Less readable"]
        },
        {
          es: ["Control de errores", "✅ Centralizado", "❌ Descentralizado"],
          en: ["Error control", "✅ Centralized", "❌ Decentralized"]
        },
        {
          es: ["Flexibilidad", "✅ Alto (captura cualquier error)", "❌ Bajo (requiere validaciones específicas)"],
          en: ["Flexibility", "✅ High (catches any error)", "❌ Low (requires specific validations)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de try/catch",
        en: "1️⃣ Practical example of try/catch"
      },
      caseTitle: {
        es: "Uso básico de try/catch",
        en: "Basic usage of try/catch"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar try/catch para capturar y manejar errores en tiempo de ejecución.",
        en: "This example demonstrates how to use try/catch to capture and handle runtime errors."
      },
      code: `try {
  const result = riskyOperation();
  console.log('Resultado:', result);
} catch (error) {
  console.error('Error capturado:', error.message);
}

function riskyOperation() {
  throw new Error('Operación fallida');
}`,
      conclusion: {
        es: "🔥 Beneficio: try/catch permite capturar errores de manera centralizada y evitar que detengan la ejecución del programa.",
        en: "🔥 Benefit: try/catch allows capturing errors in a centralized way and prevents them from halting program execution."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de try/catch",
        en: "2️⃣ Practical example of try/catch"
      },
      caseTitle: {
        es: "Uso de try/catch con async/await",
        en: "Using try/catch with async/await"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar try/catch con funciones asíncronas que utilizan `async/await`.",
        en: "This example demonstrates how to use try/catch with asynchronous functions that use `async/await`."
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
        es: "🔥 Beneficio: try/catch con async/await simplifica el manejo de errores en código asíncrono.",
        en: "🔥 Benefit: try/catch with async/await simplifies error handling in asynchronous code."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de try/catch",
        en: "3️⃣ Practical example of try/catch"
      },
      caseTitle: {
        es: "Uso del bloque finally",
        en: "Using the finally block"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el bloque `finally` para ejecutar código después de intentar una operación, independientemente de si ocurrió un error o no.",
        en: "This example demonstrates how to use the `finally` block to execute code after attempting an operation, regardless of whether an error occurred or not."
      },
      code: `try {
  console.log('Intentando operación...');
  throw new Error('Algo salió mal');
} catch (error) {
  console.error('Error capturado:', error.message);
} finally {
  console.log('Bloque finally: Esto siempre se ejecuta.');
}`,
      conclusion: {
        es: "🔥 Beneficio: El bloque `finally` asegura que cierto código se ejecute siempre, lo que es útil para limpieza o cierre de recursos.",
        en: "🔥 Benefit: The `finally` block ensures that certain code always executes, which is useful for cleanup or resource closure."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar try/catch?",
        en: "📌 When NOT to use try/catch?"
      },
      content: {
        es: [
          "❌ Si el uso de try/catch introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres manejar errores de forma manual en situaciones específicas.",
          "❌ Si el proyecto requiere un manejo avanzado de errores que no dependa exclusivamente de try/catch."
        ],
        en: [
          "❌ If using try/catch introduces unnecessary complexity in simple cases.",
          "❌ If you prefer handling errors manually in specific situations.",
          "❌ If the project requires advanced error handling that does not rely exclusively on try/catch."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ try/catch es ideal para manejar errores de manera centralizada y evitar que detengan la ejecución del programa.",
      "✅ Facilita el manejo de errores en código asíncrono cuando se combina con async/await.",
      "✅ No debe usarse en exceso si el manejo de errores puede resolverse de forma más sencilla sin él."
    ],
    en: [
      "✅ try/catch is ideal for handling errors in a centralized way and preventing them from halting program execution.",
      "✅ It facilitates error handling in asynchronous code when combined with async/await.",
      "✅ It should not be overused if error handling can be resolved more simply without it."
    ]
  }
};

export default concept;