import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Inferencia en Tipos Complejos en TypeScript",
    en: "Inference in Complex Types in TypeScript"
  },
  slug: "inference-complex-types",
  description: {
    es: "La inferencia en tipos complejos en TypeScript permite que el compilador deduzca automáticamente los tipos en estructuras avanzadas, como funciones genéricas, tipos condicionales y utilidades de tipo. Esto reduce la necesidad de declaraciones explícitas y mejora la legibilidad del código.",
    en: "Inference in complex types in TypeScript allows the compiler to automatically deduce types in advanced structures, such as generic functions, conditional types, and type utilities. This reduces the need for explicit declarations and improves code readability."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es la Inferencia en Tipos Complejos?",
        en: "🔹What is Inference in Complex Types?"
      },
      code: `// Inferencia en funciones genéricas
function wrap<T>(value: T): { value: T } {
  return { value };
}

const result = wrap(42); // TypeScript infiere que T es number

// Inferencia en tipos condicionales
type ElementType<T> = T extends (infer U)[] ? U : T;

type StringArrayElement = ElementType<string[]>; // string

// Inferencia en utilidades de tipo
type NonNullable<T> = T extends null | undefined ? never : T;

type Example = NonNullable<string | null>; // string`,
      content: {
        es: "La **inferencia en tipos complejos** en TypeScript permite que el compilador deduzca automáticamente los tipos en estructuras avanzadas, como funciones genéricas, tipos condicionales y utilidades de tipo. Esta capacidad es especialmente útil para trabajar con tipos dinámicos o estructuras complejas, ya que reduce la necesidad de declaraciones explícitas y mejora la legibilidad del código. La inferencia se basa en el contexto y las operaciones realizadas sobre los tipos, lo que permite escribir código más conciso y seguro.",
        en: "Inference in complex types in TypeScript allows the compiler to automatically deduce types in advanced structures, such as generic functions, conditional types, and type utilities. This capability is especially useful for working with dynamic types or complex structures, as it reduces the need for explicit declarations and improves code readability. Inference is based on context and operations performed on types, enabling more concise and safe code."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Inferencia en Tipos Complejos?",
        en: "🔹When to use Inference in Complex Types?"
      },
      content: {
        es: [
          "Cuando trabajas con funciones genéricas y deseas que TypeScript deduzca automáticamente los tipos de los parámetros.",
          "Cuando usas tipos condicionales y necesitas extraer información de tipos existentes.",
          "Cuando aplicas utilidades de tipo y deseas que TypeScript infiera el tipo resultante.",
          "Cuando quieres reducir la verbosidad del código sin sacrificar la seguridad de tipos."
        ],
        en: [
          "When working with generic functions and want TypeScript to automatically deduce parameter types.",
          "When using conditional types and need to extract information from existing types.",
          "When applying type utilities and want TypeScript to infer the resulting type.",
          "When you want to reduce code verbosity without sacrificing type safety."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Escenarios Comunes de Inferencia en Tipos Complejos",
        en: "🔹Common Scenarios of Inference in Complex Types"
      },
      headers: {
        es: ["Escenario", "Descripción", "Ejemplo"],
        en: ["Scenario", "Description", "Example"]
      },
      rows: [
        {
          es: ["Funciones genéricas", "Deducción automática de tipos en parámetros", "`function wrap<T>(value: T): { value: T };`"],
          en: ["Generic functions", "Automatic type deduction in parameters", "`function wrap<T>(value: T): { value: T };`"]
        },
        {
          es: ["Tipos condicionales", "Extracción de información de tipos", "`type ElementType<T> = T extends (infer U)[] ? U : T;`"],
          en: ["Conditional types", "Type information extraction", "`type ElementType<T> = T extends (infer U)[] ? U : T;`"]
        },
        {
          es: ["Utilidades de tipo", "Inferencia en transformaciones de tipos", "`type NonNullable<T> = T extends null | undefined ? never : T;`"],
          en: ["Type utilities", "Inference in type transformations", "`type NonNullable<T> = T extends null | undefined ? never : T;`"]
        },
        {
          es: ["Patrones avanzados", "Combinación de inferencia y tipos complejos", "`type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;`"],
          en: ["Advanced patterns", "Combination of inference and complex types", "`type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Inferencia en Funciones Genéricas",
        en: "1️⃣ Practical example of Inference in Generic Functions"
      },
      caseTitle: {
        es: "Deducir Tipos en una Función Genérica",
        en: "Deduce Types in a Generic Function"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo TypeScript deduce automáticamente los tipos en una función genérica.",
        en: "This example demonstrates how TypeScript automatically deduces types in a generic function."
      },
      code: `function wrap<T>(value: T): { value: T } {
  return { value };
}

const result = wrap(42); // TypeScript infiere que T es number
console.log(result.value); // 42`,
      conclusion: {
        es: "🔥 Beneficio: La inferencia en funciones genéricas elimina la necesidad de especificar tipos manualmente, mejorando la legibilidad del código.",
        en: "🔥 Benefit: Inference in generic functions eliminates the need to manually specify types, improving code readability."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Inferencia en Tipos Condicionales",
        en: "2️⃣ Practical example of Inference in Conditional Types"
      },
      caseTitle: {
        es: "Extraer Información de Tipos Usando Inferencia Condicional",
        en: "Extract Type Information Using Conditional Inference"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la inferencia condicional para extraer el tipo de elementos en un array.",
        en: "This example demonstrates how to use conditional inference to extract the type of elements in an array."
      },
      code: `type ElementType<T> = T extends (infer U)[] ? U : T;

type StringArrayElement = ElementType<string[]>; // string
type NumberElement = ElementType<number>; // number

console.log(StringArrayElement); // string
console.log(NumberElement); // number`,
      conclusion: {
        es: "🔥 Beneficio: La inferencia condicional permite extraer información útil de tipos complejos, facilitando la creación de tipos dinámicos.",
        en: "🔥 Benefit: Conditional inference allows extracting useful information from complex types, facilitating the creation of dynamic types."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Inferencia en Utilidades de Tipo",
        en: "3️⃣ Practical example of Inference in Type Utilities"
      },
      caseTitle: {
        es: "Aplicar Inferencia en una Utilidad de Tipo",
        en: "Apply Inference in a Type Utility"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo TypeScript infiere el tipo resultante al aplicar una utilidad de tipo.",
        en: "This example demonstrates how TypeScript infers the resulting type when applying a type utility."
      },
      code: `type NonNullable<T> = T extends null | undefined ? never : T;

type Example = NonNullable<string | null>; // string

console.log(Example); // string`,
      conclusion: {
        es: "🔥 Beneficio: La inferencia en utilidades de tipo permite transformar tipos de manera segura y concisa.",
        en: "🔥 Benefit: Inference in type utilities allows transforming types safely and concisely."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Inferencia en Tipos Complejos?",
        en: "📌 When NOT to use Inference in Complex Types?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere manejo avanzado de tipos.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar inferencia en casos triviales.",
          "❌ Si la inferencia automática genera ambigüedad o dificulta la comprensión del código."
        ],
        en: [
          "❌ If the project is too small and does not require advanced type handling.",
          "❌ If you prefer to avoid unnecessary complexity when using inference in trivial cases.",
          "❌ If automatic inference creates ambiguity or makes the code harder to understand."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La inferencia en tipos complejos es ideal para trabajar con funciones genéricas, tipos condicionales y utilidades de tipo.",
      "✅ Reduce la necesidad de declaraciones explícitas y mejora la legibilidad del código.",
      "✅ No debe usarse si genera ambigüedad o dificulta la comprensión del código."
    ],
    en: [
      "✅ Inference in complex types is ideal for working with generic functions, conditional types, and type utilities.",
      "✅ It reduces the need for explicit declarations and improves code readability.",
      "✅ It should not be used if it creates ambiguity or makes the code harder to understand."
    ]
  }
};

export default concept;