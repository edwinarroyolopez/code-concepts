import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Tipos Avanzados en TypeScript",
    en: "Advanced Types in TypeScript"
  },
  slug: "advanced-types",
  description: {
    es: "Los tipos avanzados en TypeScript permiten crear estructuras de datos más flexibles y poderosas mediante características como uniones, intersecciones, tipos condicionales, tipos mapeados y utilidades de tipo.",
    en: "Advanced types in TypeScript allow creating more flexible and powerful data structures through features like unions, intersections, conditional types, mapped types, and type utilities."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Tipos Avanzados?",
        en: "🔹What are Advanced Types?"
      },
      code: `// Unión de tipos
type ID = string | number;

// Intersección de tipos
type Admin = { permissions: string[] };
type User = { name: string };
type AdminUser = Admin & User;

// Tipo condicional
type IsString<T> = T extends string ? true : false;

// Tipo mapeado
type Readonly<T> = { readonly [P in keyof T]: T[P] };`,
      content: {
        es: "Los **tipos avanzados** en TypeScript permiten definir estructuras de datos complejas y flexibles que no son posibles con los tipos básicos. Incluyen características como **uniones**, **intersecciones**, **tipos condicionales**, **tipos mapeados** y **utilidades de tipo**. Estas herramientas son fundamentales para escribir código genérico, reutilizable y seguro en proyectos grandes y complejos.",
        en: "Advanced types in TypeScript allow defining complex and flexible data structures that are not possible with basic types. They include features like **unions**, **intersections**, **conditional types**, **mapped types**, and **type utilities**. These tools are essential for writing generic, reusable, and safe code in large and complex projects."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Tipos Avanzados?",
        en: "🔹When to use Advanced Types?"
      },
      content: {
        es: [
          "Cuando necesitas modelar datos complejos que combinan múltiples tipos (uniones e intersecciones).",
          "Cuando deseas crear tipos genéricos y reutilizables mediante tipos condicionales o mapeados.",
          "Cuando trabajas con utilidades de tipo para transformar o manipular tipos existentes.",
          "Cuando necesitas escribir código seguro y flexible que pueda adaptarse a diferentes escenarios."
        ],
        en: [
          "When you need to model complex data that combines multiple types (unions and intersections).",
          "When you want to create generic and reusable types using conditional or mapped types.",
          "When working with type utilities to transform or manipulate existing types.",
          "When you need to write safe and flexible code that can adapt to different scenarios."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Tipos Avanzados",
        en: "🔹Features of Advanced Types"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Unión de tipos", "Combina múltiples tipos", "`type ID = string | number;`"],
          en: ["Union types", "Combines multiple types", "`type ID = string | number;`"]
        },
        {
          es: ["Intersección de tipos", "Combina propiedades de varios tipos", "`type AdminUser = Admin & User;`"],
          en: ["Intersection types", "Combines properties from multiple types", "`type AdminUser = Admin & User;`"]
        },
        {
          es: ["Tipos condicionales", "Define tipos basados en condiciones", "`type IsString<T> = T extends string ? true : false;`"],
          en: ["Conditional types", "Defines types based on conditions", "`type IsString<T> = T extends string ? true : false;`"]
        },
        {
          es: ["Tipos mapeados", "Transforma propiedades de un tipo", "`type Readonly<T> = { readonly [P in keyof T]: T[P] };`"],
          en: ["Mapped types", "Transforms properties of a type", "`type Readonly<T> = { readonly [P in keyof T]: T[P] };`"]
        },
        {
          es: ["Utilidades de tipo", "Manipula tipos existentes", "`type Partial<T> = { [P in keyof T]?: T[P]; };`"],
          en: ["Type utilities", "Manipulates existing types", "`type Partial<T> = { [P in keyof T]?: T[P]; };`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Unión de Tipos",
        en: "1️⃣ Practical example of Union Types"
      },
      caseTitle: {
        es: "Definir un Tipo que Acepte Múltiples Tipos",
        en: "Define a Type that Accepts Multiple Types"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar una unión de tipos para definir un tipo que acepte múltiples tipos.",
        en: "This example demonstrates how to use a union type to define a type that accepts multiple types."
      },
      code: `type ID = string | number;

function printID(id: ID): void {
  console.log(\`ID: \${id}\`);
}

printID(123); // ID: 123
printID('abc'); // ID: abc`,
      conclusion: {
        es: "🔥 Beneficio: Las uniones de tipos permiten trabajar con valores que pueden ser de diferentes tipos, mejorando la flexibilidad del código.",
        en: "🔥 Benefit: Union types allow working with values that can be of different types, improving code flexibility."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Intersección de Tipos",
        en: "2️⃣ Practical example of Intersection Types"
      },
      caseTitle: {
        es: "Combinar Propiedades de Varios Tipos",
        en: "Combine Properties from Multiple Types"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar una intersección de tipos para combinar propiedades de varios tipos.",
        en: "This example demonstrates how to use an intersection type to combine properties from multiple types."
      },
      code: `type Admin = { permissions: string[] };
type User = { name: string };

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: 'Alice',
  permissions: ['read', 'write']
};

console.log(adminUser.name); // Alice
console.log(adminUser.permissions); // ['read', 'write']`,
      conclusion: {
        es: "🔥 Beneficio: Las intersecciones de tipos permiten combinar múltiples interfaces o tipos en uno solo, facilitando la reutilización de código.",
        en: "🔥 Benefit: Intersection types allow combining multiple interfaces or types into one, facilitating code reuse."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Tipos Mapeados",
        en: "3️⃣ Practical example of Mapped Types"
      },
      caseTitle: {
        es: "Crear un Tipo de Solo Lectura",
        en: "Create a Read-Only Type"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un tipo mapeado para crear un tipo de solo lectura.",
        en: "This example demonstrates how to use a mapped type to create a read-only type."
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
        es: "🔥 Beneficio: Los tipos mapeados permiten transformar propiedades de un tipo existente, como hacer todas las propiedades de solo lectura.",
        en: "🔥 Benefit: Mapped types allow transforming properties of an existing type, such as making all properties read-only."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Tipos Avanzados?",
        en: "📌 When NOT to use Advanced Types?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere tipos complejos.",
          "❌ Si prefieres evitar la verbosidad innecesaria al usar tipos avanzados en casos triviales.",
          "❌ Si el uso excesivo de tipos avanzados complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require complex types.",
          "❌ If you prefer to avoid unnecessary verbosity when using advanced types in trivial cases.",
          "❌ If excessive use of advanced types complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los tipos avanzados son ideales para modelar datos complejos y flexibles en proyectos grandes.",
      "✅ Permiten crear tipos genéricos, reutilizables y seguros mediante uniones, intersecciones, tipos condicionales y mapeados.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Advanced types are ideal for modeling complex and flexible data in large projects.",
      "✅ They allow creating generic, reusable, and safe types using unions, intersections, conditional types, and mapped types.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;