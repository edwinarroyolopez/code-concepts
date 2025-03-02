import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Funciones de Orden Superior en JavaScript",
    en: "Higher-Order Functions in JavaScript"
  },
  slug: "higher-order-functions",
  description: {
    es: "Las funciones de orden superior en JavaScript son funciones que toman otras funciones como argumentos o devuelven funciones como resultado. Permiten escribir código más modular, reutilizable y declarativo, facilitando la programación funcional.",
    en: "Higher-order functions in JavaScript are functions that take other functions as arguments or return functions as results. They enable writing more modular, reusable, and declarative code, facilitating functional programming."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Funciones de Orden Superior?",
        en: "🔹What are Higher-Order Functions?"
      },
      code: `function higherOrderFunction(callback) {
  console.log('Ejecutando función de orden superior');
  callback();
}`,
      content: {
        es: "Una función de orden superior es una función que puede recibir otra función como argumento o devolver una función como resultado. Este concepto es clave en la programación funcional y permite abstraer comportamientos comunes, como iteraciones o transformaciones de datos, en funciones reutilizables.",
        en: "A higher-order function is a function that can receive another function as an argument or return a function as a result. This concept is key in functional programming and allows abstracting common behaviors, such as iterations or data transformations, into reusable functions."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Funciones de Orden Superior?",
        en: "🔹When to use Higher-Order Functions?"
      },
      content: {
        es: [
          "Cuando necesitas abstraer comportamientos repetitivos en funciones reutilizables.",
          "Cuando deseas trabajar con colecciones de datos usando métodos como `map`, `filter` o `reduce`.",
          "Cuando quieres implementar patrones de programación funcional para mejorar la legibilidad del código."
        ],
        en: [
          "When you need to abstract repetitive behaviors into reusable functions.",
          "When working with collections of data using methods like `map`, `filter`, or `reduce`.",
          "When you want to implement functional programming patterns to improve code readability."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Funciones de Orden Superior y Bucles Tradicionales",
        en: "🔹Comparison between Higher-Order Functions and Traditional Loops"
      },
      headers: {
        es: ["Característica", "Funciones de Orden Superior", "Bucles Tradicionales"],
        en: ["Feature", "Higher-Order Functions", "Traditional Loops"]
      },
      rows: [
        {
          es: ["Legibilidad", "✅ Más declarativa", "❌ Menos declarativa"],
          en: ["Readability", "✅ More declarative", "❌ Less declarative"]
        },
        {
          es: ["Reutilización", "✅ Alta (funciones reutilizables)", "❌ Baja (código repetitivo)"],
          en: ["Reusability", "✅ High (reusable functions)", "❌ Low (repetitive code)"]
        },
        {
          es: ["Manejo de errores", "✅ Mejor (encadenamiento)", "❌ Manual (más complejo)"],
          en: ["Error handling", "✅ Better (chaining)", "❌ Manual (more complex)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Funciones de Orden Superior",
        en: "1️⃣ Practical example of Higher-Order Functions"
      },
      caseTitle: {
        es: "Uso básico de una función de orden superior",
        en: "Basic usage of a higher-order function"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo una función de orden superior puede recibir otra función como argumento y ejecutarla.",
        en: "This example demonstrates how a higher-order function can receive another function as an argument and execute it."
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
        es: "🔥 Beneficio: Las funciones de orden superior permiten encapsular comportamientos específicos en funciones reutilizables.",
        en: "🔥 Benefit: Higher-order functions allow encapsulating specific behaviors into reusable functions."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Funciones de Orden Superior",
        en: "2️⃣ Practical example of Higher-Order Functions"
      },
      caseTitle: {
        es: "Transformación de datos con `map`",
        en: "Data transformation with `map`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la función de orden superior `map` para transformar una lista de números.",
        en: "This example demonstrates how to use the higher-order function `map` to transform a list of numbers."
      },
      code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]`,
      conclusion: {
        es: "🔥 Beneficio: `map` es una función de orden superior que simplifica la transformación de datos en colecciones.",
        en: "🔥 Benefit: `map` is a higher-order function that simplifies data transformation in collections."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Funciones de Orden Superior",
        en: "3️⃣ Practical example of Higher-Order Functions"
      },
      caseTitle: {
        es: "Filtrado de datos con `filter`",
        en: "Data filtering with `filter`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la función de orden superior `filter` para filtrar elementos de una lista.",
        en: "This example demonstrates how to use the higher-order function `filter` to filter elements from a list."
      },
      code: `const numbers = [10, 25, 30, 45];
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [10, 30]`,
      conclusion: {
        es: "🔥 Beneficio: `filter` es una función de orden superior que facilita el filtrado de datos en colecciones.",
        en: "🔥 Benefit: `filter` is a higher-order function that facilitates data filtering in collections."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Funciones de Orden Superior?",
        en: "📌 When NOT to use Higher-Order Functions?"
      },
      content: {
        es: [
          "❌ Si el uso de funciones de orden superior introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres un enfoque imperativo más directo para resolver problemas específicos.",
          "❌ Si el rendimiento es crítico y las funciones de orden superior generan sobrecarga significativa."
        ],
        en: [
          "❌ If using higher-order functions introduces unnecessary complexity in simple cases.",
          "❌ If you prefer a more direct imperative approach for solving specific problems.",
          "❌ If performance is critical and higher-order functions introduce significant overhead."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las funciones de orden superior son ideales para abstraer comportamientos comunes y escribir código declarativo.",
      "✅ Facilitan la manipulación de colecciones de datos y promueven la reutilización de código.",
      "✅ No deben usarse en exceso si el proyecto no requiere su funcionalidad específica o si el rendimiento es crítico."
    ],
    en: [
      "✅ Higher-order functions are ideal for abstracting common behaviors and writing declarative code.",
      "✅ They facilitate the manipulation of data collections and promote code reuse.",
      "✅ They should not be overused if the project does not require their specific functionality or if performance is critical."
    ]
  }
};

export default concept;