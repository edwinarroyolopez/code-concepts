import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Tipos Mapeados en TypeScript",
    en: "Mapped Types in TypeScript"
  },
  slug: "mapped-types",
  description: {
    es: "Los tipos mapeados en TypeScript permiten transformar propiedades de un tipo existente para crear nuevos tipos. Son útiles para aplicar modificaciones globales a las propiedades de un tipo, como hacerlas opcionales, de solo lectura o cambiar su tipo.",
    en: "Mapped types in TypeScript allow transforming properties of an existing type to create new types. They are useful for applying global modifications to the properties of a type, such as making them optional, read-only, or changing their type."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Tipos Mapeados?",
        en: "🔹What are Mapped Types?"
      },
      code: `// Tipo mapeado básico
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// Ejemplo de uso
interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = Readonly<Point>;

const point: ReadonlyPoint = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.`,
      content: {
        es: "Un **tipo mapeado** en TypeScript permite crear un nuevo tipo iterando sobre las propiedades de un tipo existente y aplicando transformaciones a cada propiedad. La sintaxis básica es `{ [P in keyof T]: X }`, donde `P` es una variable que representa cada clave del tipo `T`, y `X` es la transformación aplicada a cada propiedad. Los tipos mapeados son ampliamente utilizados para crear utilidades de tipo reutilizables, como `Readonly`, `Partial`, `Pick` y `Record`.",
        en: "A **mapped type** in TypeScript allows creating a new type by iterating over the properties of an existing type and applying transformations to each property. The basic syntax is `{ [P in keyof T]: X }`, where `P` is a variable representing each key of the type `T`, and `X` is the transformation applied to each property. Mapped types are widely used to create reusable type utilities like `Readonly`, `Partial`, `Pick`, and `Record`."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Tipos Mapeados?",
        en: "🔹When to use Mapped Types?"
      },
      content: {
        es: [
          "Cuando necesitas modificar globalmente las propiedades de un tipo existente, como hacerlas opcionales o de solo lectura.",
          "Cuando deseas crear utilidades de tipo reutilizables que funcionen con múltiples tipos.",
          "Cuando trabajas con interfaces o tipos complejos y necesitas aplicar transformaciones consistentes a sus propiedades.",
          "Cuando necesitas implementar patrones avanzados como mapeo condicional o combinación de tipos."
        ],
        en: [
          "When you need to globally modify the properties of an existing type, such as making them optional or read-only.",
          "When you want to create reusable type utilities that work with multiple types.",
          "When working with complex interfaces or types and need to apply consistent transformations to their properties.",
          "When you need to implement advanced patterns like conditional mapping or type combination."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Tipos Mapeados",
        en: "🔹Features of Mapped Types"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Sintaxis básica", "Itera sobre las claves de un tipo", "`{ [P in keyof T]: X }`"],
          en: ["Basic syntax", "Iterates over the keys of a type", "`{ [P in keyof T]: X }`"]
        },
        {
          es: ["Propiedades opcionales", "Hace todas las propiedades opcionales", "`type Partial<T> = { [P in keyof T]?: T[P]; };`"],
          en: ["Optional properties", "Makes all properties optional", "`type Partial<T> = { [P in keyof T]?: T[P]; };`"]
        },
        {
          es: ["Propiedades de solo lectura", "Hace todas las propiedades de solo lectura", "`type Readonly<T> = { readonly [P in keyof T]: T[P]; };`"],
          en: ["Read-only properties", "Makes all properties read-only", "`type Readonly<T> = { readonly [P in keyof T]: T[P]; };`"]
        },
        {
          es: ["Transformación de tipos", "Cambia el tipo de las propiedades", "`type Stringify<T> = { [P in keyof T]: string; };`"],
          en: ["Type transformation", "Changes the type of properties", "`type Stringify<T> = { [P in keyof T]: string; };`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Propiedades Opcionales",
        en: "1️⃣ Practical example of Optional Properties"
      },
      caseTitle: {
        es: "Crear un Tipo con Propiedades Opcionales",
        en: "Create a Type with Optional Properties"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un tipo mapeado para hacer todas las propiedades de un tipo opcionales.",
        en: "This example demonstrates how to use a mapped type to make all properties of a type optional."
      },
      code: `type Partial<T> = { [P in keyof T]?: T[P] };

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = { name: 'Alice' };
console.log(user); // { name: 'Alice' }`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos mapeados permiten hacer todas las propiedades opcionales sin duplicar código manualmente.",
        en: "🔥 Benefit: Mapped types allow making all properties optional without manually duplicating code."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Propiedades de Solo Lectura",
        en: "2️⃣ Practical example of Read-Only Properties"
      },
      caseTitle: {
        es: "Crear un Tipo con Propiedades de Solo Lectura",
        en: "Create a Type with Read-Only Properties"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un tipo mapeado para hacer todas las propiedades de un tipo de solo lectura.",
        en: "This example demonstrates how to use a mapped type to make all properties of a type read-only."
      },
      code: `type Readonly<T> = { readonly [P in keyof T]: T[P] };

interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = Readonly<Point>;

const point: ReadonlyPoint = { x: 10, y: 20 };
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos mapeados permiten proteger las propiedades de un tipo contra modificaciones accidentales.",
        en: "🔥 Benefit: Mapped types allow protecting the properties of a type against accidental modifications."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Transformación de Tipos",
        en: "3️⃣ Practical example of Type Transformation"
      },
      caseTitle: {
        es: "Cambiar el Tipo de las Propiedades",
        en: "Change the Type of Properties"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un tipo mapeado para cambiar el tipo de todas las propiedades de un tipo.",
        en: "This example demonstrates how to use a mapped type to change the type of all properties of a type."
      },
      code: `type Stringify<T> = { [P in keyof T]: string };

interface Coordinates {
  latitude: number;
  longitude: number;
}

type StringifiedCoordinates = Stringify<Coordinates>;

const coords: StringifiedCoordinates = { latitude: '40.7128', longitude: '-74.0060' };
console.log(coords); // { latitude: '40.7128', longitude: '-74.0060' }`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos mapeados permiten transformar el tipo de todas las propiedades de manera consistente y reutilizable.",
        en: "🔥 Benefit: Mapped types allow transforming the type of all properties in a consistent and reusable way."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Tipos Mapeados?",
        en: "📌 When NOT to use Mapped Types?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere transformaciones de tipos complejas.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar tipos mapeados en casos triviales.",
          "❌ Si el uso excesivo de tipos mapeados complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require complex type transformations.",
          "❌ If you prefer to avoid unnecessary complexity when using mapped types in trivial cases.",
          "❌ If excessive use of mapped types complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los tipos mapeados son ideales para aplicar transformaciones globales a las propiedades de un tipo existente.",
      "✅ Permiten crear utilidades de tipo reutilizables como `Partial`, `Readonly` y `Stringify`.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Mapped types are ideal for applying global transformations to the properties of an existing type.",
      "✅ They allow creating reusable type utilities like `Partial`, `Readonly`, and `Stringify`.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;