import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Desestructuración en JavaScript",
    en: "Destructuring in JavaScript"
  },
  slug: "destructuring",
  description: {
    es: "La desestructuración en JavaScript es una sintaxis que permite extraer valores de arrays u objetos y asignarlos a variables de manera más concisa y legible. Es especialmente útil para trabajar con datos estructurados como APIs o configuraciones.",
    en: "Destructuring in JavaScript is a syntax that allows extracting values from arrays or objects and assigning them to variables in a more concise and readable way. It is especially useful for working with structured data such as APIs or configurations."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es la Desestructuración?",
        en: "🔹What is Destructuring?"
      },
      code: `// Desestructuración de objetos
const user = { name: 'Alice', age: 25 };
const { name, age } = user;

// Desestructuración de arrays
const numbers = [1, 2, 3];
const [first, second] = numbers;`,
      content: {
        es: "La desestructuración es una característica de JavaScript que simplifica la extracción de valores de arrays u objetos. Permite asignar valores directamente a variables con una sintaxis clara y concisa, reduciendo la cantidad de código repetitivo y mejorando la legibilidad.",
        en: "Destructuring is a feature of JavaScript that simplifies extracting values from arrays or objects. It allows assigning values directly to variables with a clear and concise syntax, reducing repetitive code and improving readability."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar la Desestructuración?",
        en: "🔹When to use Destructuring?"
      },
      content: {
        es: [
          "Cuando necesitas extraer múltiples valores de un objeto o array de manera rápida y limpia.",
          "Cuando trabajas con APIs que devuelven objetos complejos y deseas acceder a propiedades específicas.",
          "Cuando quieres simplificar el paso de argumentos a funciones usando objetos."
        ],
        en: [
          "When you need to extract multiple values from an object or array quickly and cleanly.",
          "When working with APIs that return complex objects and you want to access specific properties.",
          "When you want to simplify passing arguments to functions using objects."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Desestructuración y Acceso Directo",
        en: "🔹Comparison between Destructuring and Direct Access"
      },
      headers: {
        es: ["Característica", "Desestructuración", "Acceso Directo"],
        en: ["Feature", "Destructuring", "Direct Access"]
      },
      rows: [
        {
          es: ["Legibilidad", "✅ Más legible", "❌ Menos legible"],
          en: ["Readability", "✅ More readable", "❌ Less readable"]
        },
        {
          es: ["Concisión", "✅ Código más corto", "❌ Código más largo"],
          en: ["Conciseness", "✅ Shorter code", "❌ Longer code"]
        },
        {
          es: ["Flexibilidad", "✅ Alto (permite alias)", "✅ Bajo (nombres fijos)"],
          en: ["Flexibility", "✅ High (allows aliases)", "✅ Low (fixed names)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Desestructuración",
        en: "1️⃣ Practical example of Destructuring"
      },
      caseTitle: {
        es: "Desestructuración de Objetos",
        en: "Object Destructuring"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la desestructuración para extraer propiedades de un objeto.",
        en: "This example demonstrates how to use destructuring to extract properties from an object."
      },
      code: `const user = { name: 'Alice', age: 25, country: 'USA' };

// Sin desestructuración
const name = user.name;
const age = user.age;

// Con desestructuración
const { name, age, country } = user;

console.log(name, age, country); // Alice 25 USA`,
      conclusion: {
        es: "🔥 Beneficio: La desestructuración reduce la repetición de código y mejora la legibilidad al acceder a propiedades de objetos.",
        en: "🔥 Benefit: Destructuring reduces code repetition and improves readability when accessing object properties."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Desestructuración",
        en: "2️⃣ Practical example of Destructuring"
      },
      caseTitle: {
        es: "Desestructuración de Arrays",
        en: "Array Destructuring"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la desestructuración para extraer valores de un array.",
        en: "This example demonstrates how to use destructuring to extract values from an array."
      },
      code: `const numbers = [1, 2, 3];

// Sin desestructuración
const first = numbers[0];
const second = numbers[1];

// Con desestructuración
const [first, second, third] = numbers;

console.log(first, second, third); // 1 2 3`,
      conclusion: {
        es: "🔥 Beneficio: La desestructuración simplifica el acceso a elementos de un array, haciendo el código más limpio y legible.",
        en: "🔥 Benefit: Destructuring simplifies accessing array elements, making the code cleaner and more readable."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Desestructuración",
        en: "3️⃣ Practical example of Destructuring"
      },
      caseTitle: {
        es: "Desestructuración en Funciones",
        en: "Destructuring in Functions"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la desestructuración en los parámetros de una función para simplificar el acceso a propiedades de un objeto.",
        en: "This example demonstrates how to use destructuring in function parameters to simplify accessing object properties."
      },
      code: `function displayUser({ name, age }) {
  console.log("Nombre: ${'name'}, Edad: ${'age'}");
}

const user = { name: 'Bob', age: 30, country: 'Canada' };
displayUser(user); // Nombre: Bob, Edad: 30`,
      conclusion: {
        es: "🔥 Beneficio: La desestructuración en funciones permite acceder directamente a las propiedades necesarias, reduciendo la verbosidad del código.",
        en: "🔥 Benefit: Destructuring in functions allows direct access to the necessary properties, reducing code verbosity."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar la Desestructuración?",
        en: "📌 When NOT to use Destructuring?"
      },
      content: {
        es: [
          "❌ Si el uso de la desestructuración introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres un enfoque más explícito para acceder a propiedades de objetos o arrays.",
          "❌ Si el rendimiento es crítico y la desestructuración genera sobrecarga significativa."
        ],
        en: [
          "❌ If using destructuring introduces unnecessary complexity in simple cases.",
          "❌ If you prefer a more explicit approach to accessing object or array properties.",
          "❌ If performance is critical and destructuring introduces significant overhead."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La desestructuración es ideal para extraer valores de objetos y arrays de manera concisa y legible.",
      "✅ Facilita el manejo de datos estructurados como APIs o configuraciones.",
      "✅ No debe usarse en exceso si el proyecto no requiere su funcionalidad específica o si el rendimiento es crítico."
    ],
    en: [
      "✅ Destructuring is ideal for extracting values from objects and arrays in a concise and readable way.",
      "✅ It facilitates handling structured data such as APIs or configurations.",
      "✅ It should not be overused if the project does not require its specific functionality or if performance is critical."
    ]
  }
};

export default concept;