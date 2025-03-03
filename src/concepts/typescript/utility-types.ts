import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Utility Types en TypeScript",
    en: "Utility Types in TypeScript"
  },
  slug: "utility-types",
  description: {
    es: "Los utility types en TypeScript son herramientas predefinidas que permiten transformar tipos existentes de manera eficiente y reutilizable. Son especialmente útiles para aplicar modificaciones globales a los tipos sin necesidad de escribir código adicional.",
    en: "Utility types in TypeScript are predefined tools that allow transforming existing types efficiently and reusably. They are especially useful for applying global modifications to types without the need to write additional code."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Utility Types?",
        en: "🔹What are Utility Types?"
      },
      code: `// Ejemplo de Partial
type Partial<T> = { [P in keyof T]?: T[P] };

// Ejemplo de Readonly
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// Ejemplo de Pick
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

// Uso de utility types
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type NameAndAge = Pick<User, 'name' | 'age'>;`,
      content: {
        es: "Los **utility types** en TypeScript son herramientas predefinidas que permiten transformar tipos existentes de manera eficiente y reutilizable. Estos tipos son parte de la biblioteca estándar de TypeScript y están diseñados para simplificar tareas comunes, como hacer propiedades opcionales, de solo lectura o seleccionar un subconjunto de propiedades de un tipo. Algunos ejemplos populares incluyen `Partial`, `Readonly`, `Pick` y `Record`.",
        en: "Utility types in TypeScript are predefined tools that allow transforming existing types efficiently and reusably. These types are part of the standard TypeScript library and are designed to simplify common tasks, such as making properties optional, read-only, or selecting a subset of properties from a type. Some popular examples include `Partial`, `Readonly`, `Pick`, and `Record`."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Utility Types?",
        en: "🔹When to use Utility Types?"
      },
      content: {
        es: [
          "Cuando necesitas modificar globalmente las propiedades de un tipo existente, como hacerlas opcionales o de solo lectura.",
          "Cuando deseas crear subtipos seleccionando o excluyendo propiedades específicas de un tipo.",
          "Cuando trabajas con interfaces o tipos complejos y necesitas aplicar transformaciones consistentes a sus propiedades.",
          "Cuando necesitas implementar patrones avanzados como mapeo condicional o combinación de tipos."
        ],
        en: [
          "When you need to globally modify the properties of an existing type, such as making them optional or read-only.",
          "When you want to create subtypes by selecting or excluding specific properties from a type.",
          "When working with complex interfaces or types and need to apply consistent transformations to their properties.",
          "When you need to implement advanced patterns like conditional mapping or type combination."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos de Utility Types Comunes",
        en: "🔹Common Utility Types"
      },
      headers: {
        es: ["Tipo", "Descripción", "Ejemplo"],
        en: ["Type", "Description", "Example"]
      },
      rows: [
        {
          es: ["Partial<T>", "Hace todas las propiedades opcionales", "`type PartialUser = Partial<User>;`"],
          en: ["Partial<T>", "Makes all properties optional", "`type PartialUser = Partial<User>;`"]
        },
        {
          es: ["Readonly<T>", "Hace todas las propiedades de solo lectura", "`type ReadonlyUser = Readonly<User>;`"],
          en: ["Readonly<T>", "Makes all properties read-only", "`type ReadonlyUser = Readonly<User>;`"]
        },
        {
          es: ["Pick<T, K>", "Selecciona un subconjunto de propiedades", "`type NameAndAge = Pick<User, 'name' | 'age'>;`"],
          en: ["Pick<T, K>", "Selects a subset of properties", "`type NameAndAge = Pick<User, 'name' | 'age'>;`"]
        },
        {
          es: ["Omit<T, K>", "Excluye un subconjunto de propiedades", "`type WithoutId = Omit<User, 'id'>;`"],
          en: ["Omit<T, K>", "Excludes a subset of properties", "`type WithoutId = Omit<User, 'id'>;`"]
        },
        {
          es: ["Record<K, T>", "Crea un objeto con claves de tipo K y valores de tipo T", "`type Roles = Record<string, string>;`"],
          en: ["Record<K, T>", "Creates an object with keys of type K and values of type T", "`type Roles = Record<string, string>;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Partial<T>",
        en: "1️⃣ Practical example of Partial<T>"
      },
      caseTitle: {
        es: "Hacer Todas las Propiedades Opcionales",
        en: "Make All Properties Optional"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `Partial<T>` para hacer todas las propiedades de un tipo opcionales.",
        en: "This example demonstrates how to use `Partial<T>` to make all properties of a type optional."
      },
      code: `interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = { name: 'Alice' };
console.log(user); // { name: 'Alice' }`,
      conclusion: {
        es: "🔥 Beneficio: `Partial<T>` permite hacer todas las propiedades opcionales sin duplicar código manualmente.",
        en: "🔥 Benefit: `Partial<T>` allows making all properties optional without manually duplicating code."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Readonly<T>",
        en: "2️⃣ Practical example of Readonly<T>"
      },
      caseTitle: {
        es: "Hacer Todas las Propiedades de Solo Lectura",
        en: "Make All Properties Read-Only"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `Readonly<T>` para hacer todas las propiedades de un tipo de solo lectura.",
        en: "This example demonstrates how to use `Readonly<T>` to make all properties of a type read-only."
      },
      code: `interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = Readonly<Point>;

const point: ReadonlyPoint = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.`,
      conclusion: {
        es: "🔥 Beneficio: `Readonly<T>` protege las propiedades de un tipo contra modificaciones accidentales.",
        en: "🔥 Benefit: `Readonly<T>` protects the properties of a type against accidental modifications."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Pick<T, K>",
        en: "3️⃣ Practical example of Pick<T, K>"
      },
      caseTitle: {
        es: "Seleccionar un Subconjunto de Propiedades",
        en: "Select a Subset of Properties"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `Pick<T, K>` para seleccionar un subconjunto de propiedades de un tipo.",
        en: "This example demonstrates how to use `Pick<T, K>` to select a subset of properties from a type."
      },
      code: `interface User {
  id: number;
  name: string;
  age: number;
}

type NameAndAge = Pick<User, 'name' | 'age'>;

const user: NameAndAge = { name: 'Alice', age: 25 };
console.log(user); // { name: 'Alice', age: 25 }`,
      conclusion: {
        es: "🔥 Beneficio: `Pick<T, K>` permite crear subtipos seleccionando solo las propiedades necesarias.",
        en: "🔥 Benefit: `Pick<T, K>` allows creating subtypes by selecting only the necessary properties."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Utility Types?",
        en: "📌 When NOT to use Utility Types?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere transformaciones de tipos complejas.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar utility types en casos triviales.",
          "❌ Si el uso excesivo de utility types complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require complex type transformations.",
          "❌ If you prefer to avoid unnecessary complexity when using utility types in trivial cases.",
          "❌ If excessive use of utility types complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los utility types son ideales para aplicar transformaciones globales a los tipos existentes de manera eficiente.",
      "✅ Permiten crear subtipos, hacer propiedades opcionales o de solo lectura, y seleccionar/excluir propiedades.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Utility types are ideal for applying global transformations to existing types efficiently.",
      "✅ They allow creating subtypes, making properties optional or read-only, and selecting/excluding properties.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;