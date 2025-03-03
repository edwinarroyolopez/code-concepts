import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Funciones Básicas en TypeScript",
    en: "Basic Functions in TypeScript"
  },
  slug: "basic-functions",
  description: {
    es: "Las funciones básicas en TypeScript son bloques de código reutilizables que pueden incluir anotaciones de tipos para parámetros y valores de retorno. Esto garantiza la seguridad de tipos y mejora la legibilidad del código.",
    en: "Basic functions in TypeScript are reusable blocks of code that can include type annotations for parameters and return values. This ensures type safety and improves code readability."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Funciones Básicas?",
        en: "🔹What are Basic Functions?"
      },
      code: `// Función básica sin tipo
function greet(name) {
  return \`Hello, \${name}\`;
}

// Función básica con tipos
function greetTyped(name: string): string {
  return \`Hello, \${name}\`;
}`,
      content: {
        es: "Las funciones básicas en TypeScript son bloques de código que realizan una tarea específica y pueden ser reutilizadas. A diferencia de JavaScript, TypeScript permite agregar anotaciones de tipos a los parámetros y al valor de retorno, lo que garantiza que las funciones sean más seguras y fáciles de entender. Las funciones pueden ser declaradas de varias formas, como funciones nombradas, funciones anónimas o funciones flecha.",
        en: "Basic functions in TypeScript are blocks of code that perform a specific task and can be reused. Unlike JavaScript, TypeScript allows adding type annotations to parameters and return values, ensuring that functions are safer and easier to understand. Functions can be declared in various ways, such as named functions, anonymous functions, or arrow functions."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Funciones Básicas?",
        en: "🔹When to use Basic Functions?"
      },
      content: {
        es: [
          "Cuando necesitas encapsular una lógica repetitiva en un bloque reutilizable.",
          "Cuando deseas mejorar la legibilidad del código mediante la separación de responsabilidades.",
          "Cuando trabajas con datos que requieren validación de tipos para evitar errores.",
          "Cuando necesitas funciones simples para realizar operaciones matemáticas, manipulación de cadenas o lógica condicional."
        ],
        en: [
          "When you need to encapsulate repetitive logic into a reusable block.",
          "When you want to improve code readability by separating responsibilities.",
          "When working with data that requires type validation to avoid errors.",
          "When you need simple functions to perform mathematical operations, string manipulation, or conditional logic."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos de Funciones en TypeScript",
        en: "🔹Types of Functions in TypeScript"
      },
      headers: {
        es: ["Tipo", "Descripción", "Ejemplo"],
        en: ["Type", "Description", "Example"]
      },
      rows: [
        {
          es: ["Nombrada", "Función con nombre", "`function add(a: number, b: number): number { return a + b; }`"],
          en: ["Named", "Function with a name", "`function add(a: number, b: number): number { return a + b; }`"]
        },
        {
          es: ["Anónima", "Función sin nombre", "`const greet = function(name: string): string { return \`Hello, \${name}\`; };`"],
          en: ["Anonymous", "Function without a name", "`const greet = function(name: string): string { return \`Hello, \${name}\`; };`"]
        },
        {
          es: ["Flecha", "Función flecha (arrow function)", "`const multiply = (a: number, b: number): number => a * b;`"],
          en: ["Arrow", "Arrow function", "`const multiply = (a: number, b: number): number => a * b;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Función Nombrada",
        en: "1️⃣ Practical example of Named Function"
      },
      caseTitle: {
        es: "Función Nombrada con Anotaciones de Tipos",
        en: "Named Function with Type Annotations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo declarar una función nombrada con anotaciones de tipos para parámetros y valor de retorno.",
        en: "This example demonstrates how to declare a named function with type annotations for parameters and return value."
      },
      code: `function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 10);
console.log(result); // 15`,
      conclusion: {
        es: "🔥 Beneficio: Las funciones nombradas con anotaciones de tipos mejoran la claridad y previenen errores de tipo.",
        en: "🔥 Benefit: Named functions with type annotations improve clarity and prevent type errors."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Función Anónima",
        en: "2️⃣ Practical example of Anonymous Function"
      },
      caseTitle: {
        es: "Función Anónima con Anotaciones de Tipos",
        en: "Anonymous Function with Type Annotations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo declarar una función anónima con anotaciones de tipos.",
        en: "This example demonstrates how to declare an anonymous function with type annotations."
      },
      code: `const greet = function(name: string): string {
  return \`Hello, \${name}\`;
};

console.log(greet('Alice')); // Hello, Alice`,
      conclusion: {
        es: "🔥 Beneficio: Las funciones anónimas son útiles cuando no necesitas un nombre específico para la función.",
        en: "🔥 Benefit: Anonymous functions are useful when you don't need a specific name for the function."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Función Flecha",
        en: "3️⃣ Practical example of Arrow Function"
      },
      caseTitle: {
        es: "Función Flecha con Anotaciones de Tipos",
        en: "Arrow Function with Type Annotations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo declarar una función flecha con anotaciones de tipos.",
        en: "This example demonstrates how to declare an arrow function with type annotations."
      },
      code: `const multiply = (a: number, b: number): number => a * b;

const result = multiply(3, 7);
console.log(result); // 21`,
      conclusion: {
        es: "🔥 Beneficio: Las funciones flecha son concisas y mantienen el contexto (`this`) del entorno donde se definen.",
        en: "🔥 Benefit: Arrow functions are concise and maintain the context (`this`) of the environment where they are defined."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Funciones Básicas?",
        en: "📌 When NOT to use Basic Functions?"
      },
      content: {
        es: [
          "❌ Si la lógica es demasiado compleja y requiere estructuras más avanzadas como clases o interfaces.",
          "❌ Si prefieres evitar la verbosidad innecesaria al usar funciones simples en casos triviales.",
          "❌ Si el uso excesivo de funciones pequeñas dificulta la lectura del código."
        ],
        en: [
          "❌ If the logic is too complex and requires more advanced structures like classes or interfaces.",
          "❌ If you prefer to avoid unnecessary verbosity when using simple functions in trivial cases.",
          "❌ If excessive use of small functions makes the code harder to read."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las funciones básicas son esenciales para encapsular lógica repetitiva y mejorar la legibilidad del código.",
      "✅ Las anotaciones de tipos en funciones garantizan la seguridad de tipos y previenen errores.",
      "✅ No deben usarse de manera excesiva si la lógica requiere estructuras más avanzadas o si complican la lectura del código."
    ],
    en: [
      "✅ Basic functions are essential for encapsulating repetitive logic and improving code readability.",
      "✅ Type annotations in functions ensure type safety and prevent errors.",
      "✅ They should not be used excessively if the logic requires more advanced structures or if they complicate code readability."
    ]
  }
};

export default concept;