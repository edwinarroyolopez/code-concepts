import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Inferencia y Anotación de Tipos en TypeScript",
    en: "Type Inference and Type Annotation in TypeScript"
  },
  slug: "type-inference-annotation",
  description: {
    es: "La inferencia de tipos permite que TypeScript deduzca automáticamente el tipo de una variable, mientras que la anotación de tipos implica declarar explícitamente el tipo. Ambas técnicas son fundamentales para garantizar la seguridad de tipos en TypeScript.",
    en: "Type inference allows TypeScript to automatically deduce the type of a variable, while type annotation involves explicitly declaring the type. Both techniques are fundamental for ensuring type safety in TypeScript."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son la Inferencia y Anotación de Tipos?",
        en: "🔹What are Type Inference and Type Annotation?"
      },
      code: `// Inferencia de tipos
let age = 25; // TypeScript infiere que 'age' es de tipo number

// Anotación de tipos
let name: string = 'Alice'; // Se declara explícitamente que 'name' es de tipo string`,
      content: {
        es: "La **inferencia de tipos** es una característica de TypeScript que permite deducir automáticamente el tipo de una variable basándose en su valor inicial. Por otro lado, la **anotación de tipos** consiste en declarar explícitamente el tipo de una variable. Ambas técnicas son útiles para garantizar la seguridad de tipos y mejorar la legibilidad del código.",
        en: "Type **inference** is a feature of TypeScript that automatically deduces the type of a variable based on its initial value. On the other hand, **type annotation** involves explicitly declaring the type of a variable. Both techniques are useful for ensuring type safety and improving code readability."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Inferencia o Anotación de Tipos?",
        en: "🔹When to use Type Inference or Type Annotation?"
      },
      content: {
        es: [
          "Usa **inferencia de tipos** cuando el tipo de una variable es obvio a partir de su valor inicial.",
          "Usa **anotación de tipos** cuando necesitas claridad adicional o cuando el tipo no puede ser inferido automáticamente.",
          "Usa **anotación de tipos** en funciones para especificar los tipos de parámetros y valores de retorno.",
          "Usa **inferencia de tipos** para reducir la verbosidad en código simple y directo."
        ],
        en: [
          "Use **type inference** when the type of a variable is obvious from its initial value.",
          "Use **type annotation** when additional clarity is needed or when the type cannot be inferred automatically.",
          "Use **type annotation** in functions to specify parameter types and return values.",
          "Use **type inference** to reduce verbosity in simple and straightforward code."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Inferencia y Anotación de Tipos",
        en: "🔹Comparison between Type Inference and Type Annotation"
      },
      headers: {
        es: ["Característica", "Inferencia de Tipos", "Anotación de Tipos"],
        en: ["Feature", "Type Inference", "Type Annotation"]
      },
      rows: [
        {
          es: ["Sintaxis", "Automática (sin declaración explícita)", "Explícita (`let x: type`)" ],
          en: ["Syntax", "Automatic (no explicit declaration)", "Explicit (`let x: type`)"]
        },
        {
          es: ["Legibilidad", "✅ Menos verbosa", "❌ Más verbosa"],
          en: ["Readability", "✅ Less verbose", "❌ More verbose"]
        },
        {
          es: ["Uso común", "Código simple y directo", "Funciones, interfaces o casos complejos"],
          en: ["Common use", "Simple and straightforward code", "Functions, interfaces, or complex cases"]
        },
        {
          es: ["Seguridad de tipos", "✅ Garantizada", "✅ Garantizada"],
          en: ["Type safety", "✅ Ensured", "✅ Ensured"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Inferencia de Tipos",
        en: "1️⃣ Practical example of Type Inference"
      },
      caseTitle: {
        es: "Declaración de Variables con Inferencia de Tipos",
        en: "Declaring Variables with Type Inference"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo TypeScript infiere automáticamente el tipo de una variable basándose en su valor inicial.",
        en: "This example demonstrates how TypeScript automatically infers the type of a variable based on its initial value."
      },
      code: `let age = 25; // TypeScript infiere que 'age' es de tipo number
let name = 'Alice'; // TypeScript infiere que 'name' es de tipo string
let isActive = true; // TypeScript infiere que 'isActive' es de tipo boolean

console.log(age, name, isActive); // 25 Alice true`,
      conclusion: {
        es: "🔥 Beneficio: La inferencia de tipos reduce la verbosidad del código sin comprometer la seguridad de tipos.",
        en: "🔥 Benefit: Type inference reduces code verbosity without compromising type safety."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Anotación de Tipos",
        en: "2️⃣ Practical example of Type Annotation"
      },
      caseTitle: {
        es: "Declaración de Variables con Anotación de Tipos",
        en: "Declaring Variables with Type Annotation"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo declarar explícitamente el tipo de una variable usando anotaciones de tipos.",
        en: "This example demonstrates how to explicitly declare the type of a variable using type annotations."
      },
      code: `let age: number = 30;
let name: string = 'John Doe';
let isActive: boolean = false;

console.log(age, name, isActive); // 30 John Doe false`,
      conclusion: {
        es: "🔥 Beneficio: La anotación de tipos mejora la claridad del código, especialmente en casos complejos o cuando el tipo no es obvio.",
        en: "🔥 Benefit: Type annotation improves code clarity, especially in complex cases or when the type is not obvious."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Anotación de Tipos en Funciones",
        en: "3️⃣ Practical example of Type Annotation in Functions"
      },
      caseTitle: {
        es: "Especificar Tipos en Parámetros y Valores de Retorno",
        en: "Specifying Types in Parameters and Return Values"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar anotaciones de tipos en funciones para especificar los tipos de parámetros y valores de retorno.",
        en: "This example demonstrates how to use type annotations in functions to specify parameter types and return values."
      },
      code: `function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 10);
console.log(result); // 15`,
      conclusion: {
        es: "🔥 Beneficio: La anotación de tipos en funciones mejora la legibilidad y previene errores de tipo en tiempo de desarrollo.",
        en: "🔥 Benefit: Type annotation in functions improves readability and prevents type errors during development."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Inferencia o Anotación de Tipos?",
        en: "📌 When NOT to use Type Inference or Type Annotation?"
      },
      content: {
        es: [
          "❌ Si la inferencia de tipos no es suficiente para casos complejos donde el tipo debe ser explícito.",
          "❌ Si prefieres evitar la verbosidad innecesaria al usar anotaciones de tipos en código simple.",
          "❌ Si el uso excesivo de anotaciones de tipos dificulta la lectura del código."
        ],
        en: [
          "❌ If type inference is insufficient for complex cases where the type must be explicit.",
          "❌ If you prefer to avoid unnecessary verbosity when using type annotations in simple code.",
          "❌ If excessive use of type annotations makes the code harder to read."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La inferencia de tipos es ideal para código simple y directo, reduciendo la verbosidad.",
      "✅ La anotación de tipos es útil para mejorar la claridad en funciones, interfaces o casos complejos.",
      "✅ No deben usarse de manera exclusiva; ambas técnicas complementan la seguridad y legibilidad del código."
    ],
    en: [
      "✅ Type inference is ideal for simple and straightforward code, reducing verbosity.",
      "✅ Type annotation is useful for improving clarity in functions, interfaces, or complex cases.",
      "✅ They should not be used exclusively; both techniques complement code safety and readability."
    ]
  }
};

export default concept;