import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Generics Avanzados en TypeScript",
    en: "Advanced Generics in TypeScript"
  },
  slug: "advanced-generics",
  description: {
    es: "Los generics avanzados en TypeScript permiten crear tipos y funciones genéricas más flexibles y potentes, utilizando características como restricciones, inferencia condicional, mapeo de tipos y utilidades de tipo.",
    en: "Advanced generics in TypeScript allow creating more flexible and powerful generic types and functions by leveraging features such as constraints, conditional inference, type mapping, and type utilities."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Generics Avanzados?",
        en: "🔹What are Advanced Generics?"
      },
      code: `// Ejemplo básico de generics avanzados
type Partial<T> = { [P in keyof T]?: T[P] };

// Restricciones en generics
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Inferencia condicional en generics
type IsArray<T> = T extends Array<infer U> ? U : never;

// Mapeo de tipos en generics
type Readonly<T> = { readonly [P in keyof T]: T[P] };`,
      content: {
        es: "Los **generics avanzados** en TypeScript amplían las capacidades de los generics básicos mediante el uso de características avanzadas como **restricciones**, **inferencia condicional**, **mapeo de tipos** y **utilidades de tipo**. Estos mecanismos permiten crear tipos y funciones genéricas más flexibles y reutilizables, adaptándose a una amplia variedad de escenarios. Los generics avanzados son especialmente útiles para trabajar con estructuras de datos complejas, transformaciones de tipos y patrones de diseño avanzados.",
        en: "Advanced generics in TypeScript extend the capabilities of basic generics by leveraging advanced features such as **constraints**, **conditional inference**, **type mapping**, and **type utilities**. These mechanisms allow creating more flexible and reusable generic types and functions, adapting to a wide range of scenarios. Advanced generics are especially useful for working with complex data structures, type transformations, and advanced design patterns."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Generics Avanzados?",
        en: "🔹When to use Advanced Generics?"
      },
      content: {
        es: [
          "Cuando necesitas aplicar restricciones a los tipos genéricos para limitar los valores permitidos.",
          "Cuando deseas utilizar inferencia condicional para extraer información de tipos o crear tipos dinámicos.",
          "Cuando trabajas con mapeo de tipos para transformar propiedades de un tipo existente.",
          "Cuando necesitas implementar utilidades de tipo personalizadas para manipular estructuras de datos complejas."
        ],
        en: [
          "When you need to apply constraints to generic types to limit allowed values.",
          "When you want to use conditional inference to extract type information or create dynamic types.",
          "When working with type mapping to transform properties of an existing type.",
          "When you need to implement custom type utilities to manipulate complex data structures."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Generics Avanzados",
        en: "🔹Features of Advanced Generics"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Restricciones", "Limita los tipos permitidos en un generic", "`<T extends string>`"],
          en: ["Constraints", "Limits allowed types in a generic", "`<T extends string>`"]
        },
        {
          es: ["Inferencia condicional", "Extrae información de tipos dentro de una condición", "`T extends Array<infer U> ? U : never`"],
          en: ["Conditional inference", "Extracts type information within a condition", "`T extends Array<infer U> ? U : never`"]
        },
        {
          es: ["Mapeo de tipos", "Transforma propiedades de un tipo existente", "`{ [P in keyof T]: T[P] }`"],
          en: ["Type mapping", "Transforms properties of an existing type", "`{ [P in keyof T]: T[P] }`"]
        },
        {
          es: ["Utilidades de tipo", "Define funciones genéricas reutilizables", "`type Partial<T> = { [P in keyof T]?: T[P] };`"],
          en: ["Type utilities", "Defines reusable generic functions", "`type Partial<T> = { [P in keyof T]?: T[P] };`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Restricciones",
        en: "1️⃣ Practical example of Constraints"
      },
      caseTitle: {
        es: "Aplicar Restricciones a un Generic",
        en: "Apply Constraints to a Generic"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo aplicar restricciones a un generic para limitar los tipos permitidos.",
        en: "This example demonstrates how to apply constraints to a generic to limit allowed types."
      },
      code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Alice' };
const id = getProperty(user, 'id'); // number
const name = getProperty(user, 'name'); // string

console.log(id); // 1
console.log(name); // Alice`,
      conclusion: {
        es: "🔥 Beneficio: Las restricciones garantizan que solo se usen claves válidas del objeto, mejorando la seguridad del código.",
        en: "🔥 Benefit: Constraints ensure that only valid object keys are used, improving code safety."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Inferencia Condicional",
        en: "2️⃣ Practical example of Conditional Inference"
      },
      caseTitle: {
        es: "Extraer Información de Tipos Usando Inferencia Condicional",
        en: "Extract Type Information Using Conditional Inference"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar inferencia condicional para extraer el tipo de elementos en un array.",
        en: "This example demonstrates how to use conditional inference to extract the type of elements in an array."
      },
      code: `type IsArray<T> = T extends Array<infer U> ? U : never;

type StringArrayElement = IsArray<string[]>; // string
type NumberArrayElement = IsArray<number[]>; // number
type NotArray = IsArray<boolean>; // never

console.log(StringArrayElement); // string
console.log(NumberArrayElement); // number
console.log(NotArray); // never`,
      conclusion: {
        es: "🔥 Beneficio: La inferencia condicional permite extraer información útil de tipos complejos, facilitando la creación de tipos dinámicos.",
        en: "🔥 Benefit: Conditional inference allows extracting useful information from complex types, facilitating the creation of dynamic types."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Mapeo de Tipos",
        en: "3️⃣ Practical example of Type Mapping"
      },
      caseTitle: {
        es: "Transformar Propiedades de un Tipo Usando Mapeo",
        en: "Transform Properties of a Type Using Mapping"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar mapeo de tipos para hacer todas las propiedades de un tipo de solo lectura.",
        en: "This example demonstrates how to use type mapping to make all properties of a type read-only."
      },
      code: `type Readonly<T> = { readonly [P in keyof T]: T[P] };

interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { id: 1, name: 'Alice' };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.`,
      conclusion: {
        es: "🔥 Beneficio: El mapeo de tipos permite transformar propiedades de un tipo existente de manera consistente y reutilizable.",
        en: "🔥 Benefit: Type mapping allows transforming properties of an existing type consistently and reusably."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Generics Avanzados?",
        en: "📌 When NOT to use Advanced Generics?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere tipos genéricos complejos.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar generics avanzados en casos triviales.",
          "❌ Si el uso excesivo de generics avanzados complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require complex generic types.",
          "❌ If you prefer to avoid unnecessary complexity when using advanced generics in trivial cases.",
          "❌ If excessive use of advanced generics complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los generics avanzados son ideales para crear tipos y funciones genéricas más flexibles y potentes.",
      "✅ Permiten aplicar restricciones, inferencia condicional, mapeo de tipos y utilidades de tipo.",
      "✅ No deben usarse si generan complejidad innecesaria o dificultan la comprensión del código."
    ],
    en: [
      "✅ Advanced generics are ideal for creating more flexible and powerful generic types and functions.",
      "✅ They allow applying constraints, conditional inference, type mapping, and type utilities.",
      "✅ They should not be used if they generate unnecessary complexity or make the code harder to understand."
    ]
  }
};

export default concept;