import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Tipos Condicionales en TypeScript",
    en: "Conditional Types in TypeScript"
  },
  slug: "conditional-types",
  description: {
    es: "Los tipos condicionales en TypeScript permiten definir tipos basados en condiciones, lo que facilita la creación de tipos dinámicos y flexibles. Son útiles para escribir código genérico y reutilizable.",
    en: "Conditional types in TypeScript allow defining types based on conditions, making it easier to create dynamic and flexible types. They are useful for writing generic and reusable code."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Tipos Condicionales?",
        en: "🔹What are Conditional Types?"
      },
      code: `// Tipo condicional básico
type IsString<T> = T extends string ? true : false;

// Ejemplo de uso
type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false

// Tipo condicional con distribución
type NonNullable<T> = T extends null | undefined ? never : T;

// Ejemplo de uso
type Example = NonNullable<string | null>; // string`,
      content: {
        es: "Un **tipo condicional** en TypeScript permite definir un tipo basado en una condición, similar a una expresión ternaria en JavaScript. La sintaxis básica es `T extends U ? X : Y`, donde `T` es el tipo a evaluar, `U` es la condición, y `X` e `Y` son los tipos resultantes si la condición es verdadera o falsa, respectivamente. Los tipos condicionales son especialmente útiles para escribir código genérico y reutilizable, ya que permiten adaptar tipos dinámicamente según las necesidades del contexto.",
        en: "A **conditional type** in TypeScript allows defining a type based on a condition, similar to a ternary expression in JavaScript. The basic syntax is `T extends U ? X : Y`, where `T` is the type being evaluated, `U` is the condition, and `X` and `Y` are the resulting types if the condition is true or false, respectively. Conditional types are especially useful for writing generic and reusable code, as they allow adapting types dynamically based on the context's needs."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Tipos Condicionales?",
        en: "🔹When to use Conditional Types?"
      },
      content: {
        es: [
          "Cuando necesitas definir tipos dinámicos que dependen de otras condiciones.",
          "Cuando deseas crear utilidades de tipo reutilizables que funcionen con múltiples tipos.",
          "Cuando trabajas con tipos genéricos y necesitas adaptar el tipo resultante según ciertas condiciones.",
          "Cuando necesitas implementar patrones avanzados como distribución de tipos o inferencia condicional."
        ],
        en: [
          "When you need to define dynamic types that depend on other conditions.",
          "When you want to create reusable type utilities that work with multiple types.",
          "When working with generic types and need to adapt the resulting type based on certain conditions.",
          "When you need to implement advanced patterns like type distribution or conditional inference."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Tipos Condicionales",
        en: "🔹Features of Conditional Types"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Sintaxis básica", "Define tipos basados en condiciones", "`T extends U ? X : Y`"],
          en: ["Basic syntax", "Defines types based on conditions", "`T extends U ? X : Y`"]
        },
        {
          es: ["Distribución", "Aplica condiciones a cada miembro de un tipo unión", "`type NonNullable<T> = T extends null | undefined ? never : T;`"],
          en: ["Distribution", "Applies conditions to each member of a union type", "`type NonNullable<T> = T extends null | undefined ? never : T;`"]
        },
        {
          es: ["Inferencia condicional", "Extrae información de tipos dentro de una condición", "`type ElementType<T> = T extends (infer U)[] ? U : T;`"],
          en: ["Conditional inference", "Extracts type information within a condition", "`type ElementType<T> = T extends (infer U)[] ? U : T;`"]
        },
        {
          es: ["Utilidades estándar", "Usa tipos condicionales predefinidos", "`Exclude<T, U>`, `Extract<T, U>`"],
          en: ["Standard utilities", "Uses predefined conditional types", "`Exclude<T, U>`, `Extract<T, U>`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Tipo Condicional Básico",
        en: "1️⃣ Practical example of Basic Conditional Type"
      },
      caseTitle: {
        es: "Definir un Tipo Basado en una Condición",
        en: "Define a Type Based on a Condition"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir un tipo condicional básico que verifica si un tipo es una cadena.",
        en: "This example demonstrates how to define a basic conditional type that checks if a type is a string."
      },
      code: `type IsString<T> = T extends string ? true : false;

type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false

console.log(Result1); // true
console.log(Result2); // false`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos condicionales permiten definir tipos dinámicos que dependen de condiciones específicas.",
        en: "🔥 Benefit: Conditional types allow defining dynamic types that depend on specific conditions."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Distribución de Tipos",
        en: "2️⃣ Practical example of Type Distribution"
      },
      caseTitle: {
        es: "Filtrar Tipos Usando Distribución",
        en: "Filter Types Using Distribution"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la distribución de tipos para filtrar miembros de un tipo unión.",
        en: "This example demonstrates how to use type distribution to filter members of a union type."
      },
      code: `type NonNullable<T> = T extends null | undefined ? never : T;

type Example = NonNullable<string | number | null | undefined>; // string | number

console.log(Example); // string | number`,
      conclusion: {
        es: "🔥 Beneficio: La distribución de tipos permite aplicar condiciones a cada miembro de un tipo unión, facilitando la creación de tipos más específicos.",
        en: "🔥 Benefit: Type distribution allows applying conditions to each member of a union type, making it easier to create more specific types."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Inferencia Condicional",
        en: "3️⃣ Practical example of Conditional Inference"
      },
      caseTitle: {
        es: "Extraer Información de Tipos",
        en: "Extract Type Information"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la inferencia condicional para extraer el tipo de elementos en un array.",
        en: "This example demonstrates how to use conditional inference to extract the type of elements in an array."
      },
      code: `type ElementType<T> = T extends (infer U)[] ? U : T;

type ArrayType = ElementType<string[]>; // string
type NonArrayType = ElementType<number>; // number

console.log(ArrayType); // string
console.log(NonArrayType); // number`,
      conclusion: {
        es: "🔥 Beneficio: La inferencia condicional permite extraer información útil de tipos complejos, mejorando la flexibilidad y reutilización del código.",
        en: "🔥 Benefit: Conditional inference allows extracting useful information from complex types, improving code flexibility and reuse."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Tipos Condicionales?",
        en: "📌 When NOT to use Conditional Types?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere tipos dinámicos o avanzados.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar tipos condicionales en casos triviales.",
          "❌ Si el uso excesivo de tipos condicionales complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require dynamic or advanced types.",
          "❌ If you prefer to avoid unnecessary complexity when using conditional types in trivial cases.",
          "❌ If excessive use of conditional types complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los tipos condicionales son ideales para definir tipos dinámicos y flexibles que dependen de condiciones específicas.",
      "✅ Permiten implementar patrones avanzados como distribución de tipos e inferencia condicional.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Conditional types are ideal for defining dynamic and flexible types that depend on specific conditions.",
      "✅ They allow implementing advanced patterns like type distribution and conditional inference.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;