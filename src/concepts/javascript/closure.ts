import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Closures en JavaScript",
    en: "Closures in JavaScript"
  },
  slug: "closures",
  description: {
    es: "Los closures en JavaScript son funciones que tienen acceso al ámbito léxico (lexical scope) en el que fueron definidas, incluso después de que ese ámbito haya dejado de existir. Son una herramienta poderosa para encapsular datos y crear funciones con comportamiento dinámico.",
    en: "Closures in JavaScript are functions that have access to the lexical scope in which they were defined, even after that scope has ceased to exist. They are a powerful tool for encapsulating data and creating functions with dynamic behavior."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Closures?",
        en: "🔹What are Closures?"
      },
      code: `function outer() {
  const secret = 'Closure!';
  return function inner() {
    console.log(secret);
  };
}`,
      content: {
        es: "Un closure es una función que captura y retiene acceso a las variables de su entorno léxico, incluso después de que la función externa haya terminado de ejecutarse. Esto permite que los closures encapsulen datos y creen funciones con comportamiento dinámico basado en el contexto en el que fueron creadas.",
        en: "A closure is a function that captures and retains access to variables from its lexical scope, even after the outer function has finished executing. This allows closures to encapsulate data and create functions with dynamic behavior based on the context in which they were created."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Closures?",
        en: "🔹When to use Closures?"
      },
      content: {
        es: [
          "Cuando necesitas encapsular datos privados dentro de una función.",
          "Cuando deseas crear funciones con comportamiento dinámico basado en parámetros o estado inicial.",
          "Cuando trabajas con callbacks, eventos o temporizadores que requieren acceso a variables externas."
        ],
        en: [
          "When you need to encapsulate private data within a function.",
          "When you want to create functions with dynamic behavior based on parameters or initial state.",
          "When working with callbacks, events, or timers that require access to external variables."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Closures y Variables Globales",
        en: "🔹Comparison between Closures and Global Variables"
      },
      headers: {
        es: ["Característica", "Closures", "Variables Globales"],
        en: ["Feature", "Closures", "Global Variables"]
      },
      rows: [
        {
          es: ["Encapsulamiento", "✅ Sí (datos privados)", "❌ No (acceso global)"],
          en: ["Encapsulation", "✅ Yes (private data)", "❌ No (global access)"]
        },
        {
          es: ["Acceso a variables", "✅ Limitado (entorno léxico)", "❌ Amplio (todo el programa)"],
          en: ["Variable access", "✅ Limited (lexical scope)", "❌ Broad (entire program)"]
        },
        {
          es: ["Riesgo de colisiones", "✅ Bajo", "❌ Alto"],
          en: ["Collision risk", "✅ Low", "❌ High"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Closures",
        en: "1️⃣ Practical example of Closures"
      },
      caseTitle: {
        es: "Encapsulamiento de datos privados",
        en: "Encapsulation of private data"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar closures para encapsular datos privados y protegerlos de accesos externos.",
        en: "This example demonstrates how to use closures to encapsulate private data and protect it from external access."
      },
      code: `function createCounter() {
  let count = 0; // Variable privada
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.decrement(); // 0`,
      conclusion: {
        es: "🔥 Beneficio: Los closures permiten encapsular datos privados y exponer solo las funciones necesarias para interactuar con ellos.",
        en: "🔥 Benefit: Closures allow encapsulating private data and exposing only the necessary functions to interact with them."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Closures",
        en: "2️⃣ Practical example of Closures"
      },
      caseTitle: {
        es: "Funciones con comportamiento dinámico",
        en: "Functions with dynamic behavior"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar closures para crear funciones con comportamiento dinámico basado en parámetros iniciales.",
        en: "This example demonstrates how to use closures to create functions with dynamic behavior based on initial parameters."
      },
      code: `function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15`,
      conclusion: {
        es: "🔥 Beneficio: Los closures permiten crear funciones reutilizables con comportamiento personalizado basado en el contexto de creación.",
        en: "🔥 Benefit: Closures allow creating reusable functions with customized behavior based on the creation context."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Closures",
        en: "3️⃣ Practical example of Closures"
      },
      caseTitle: {
        es: "Uso de Closures con Temporizadores",
        en: "Using Closures with Timers"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar closures con temporizadores para acceder a variables externas.",
        en: "This example demonstrates how to use closures with timers to access external variables."
      },
      code: `function delayedMessage(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

delayedMessage('¡Hola después de 2 segundos!', 2000);`,
      conclusion: {
        es: "🔥 Beneficio: Los closures permiten que las funciones internas accedan a variables externas, incluso después de que el contexto original haya cambiado.",
        en: "🔥 Benefit: Closures allow inner functions to access external variables, even after the original context has changed."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Closures?",
        en: "📌 When NOT to use Closures?"
      },
      content: {
        es: [
          "❌ Si el uso de closures introduce complejidad innecesaria en casos simples.",
          "❌ Si no necesitas encapsular datos o crear funciones con comportamiento dinámico.",
          "❌ Si el rendimiento es crítico y el uso de closures puede causar fugas de memoria."
        ],
        en: [
          "❌ If using closures introduces unnecessary complexity in simple cases.",
          "❌ If you do not need to encapsulate data or create functions with dynamic behavior.",
          "❌ If performance is critical and using closures may cause memory leaks."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los closures son ideales para encapsular datos privados y crear funciones con comportamiento dinámico.",
      "✅ Facilitan la creación de funciones reutilizables y protegen el estado de variables externas.",
      "✅ No deben usarse en exceso si no se necesita su funcionalidad específica."
    ],
    en: [
      "✅ Closures are ideal for encapsulating private data and creating functions with dynamic behavior.",
      "✅ They facilitate the creation of reusable functions and protect the state of external variables.",
      "✅ They should not be overused if their specific functionality is not needed."
    ]
  }
};

export default concept;