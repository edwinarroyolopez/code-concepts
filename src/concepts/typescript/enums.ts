import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Enums en TypeScript",
    en: "Enums in TypeScript"
  },
  slug: "enums",
  description: {
    es: "Los enums en TypeScript permiten definir un conjunto de constantes con nombres, mejorando la legibilidad y seguridad del código al trabajar con valores específicos. Son útiles para representar estados, opciones o categorías.",
    en: "Enums in TypeScript allow defining a set of named constants, improving code readability and safety when working with specific values. They are useful for representing states, options, or categories."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Enums?",
        en: "🔹What are Enums?"
      },
      code: `// Enum básico
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Uso del enum
let direction: Direction = Direction.Up;
console.log(direction); // 0

// Enum con valores personalizados
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

// Uso del enum con valores personalizados
let status: Status = Status.Active;
console.log(status); // ACTIVE`,
      content: {
        es: "Un **enum** en TypeScript es una forma de definir un conjunto de constantes con nombres. Pueden ser numéricos (por defecto) o basados en cadenas. Los enums son útiles para representar estados, opciones o categorías, ya que hacen que el código sea más legible y menos propenso a errores al evitar el uso de valores mágicos directamente en el código.",
        en: "An **enum** in TypeScript is a way to define a set of named constants. They can be numeric (by default) or string-based. Enums are useful for representing states, options, or categories, as they make the code more readable and less error-prone by avoiding the use of magic values directly in the code."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Enums?",
        en: "🔹When to use Enums?"
      },
      content: {
        es: [
          "Cuando necesitas representar un conjunto fijo de valores, como estados o categorías.",
          "Cuando deseas mejorar la legibilidad del código al reemplazar valores mágicos con nombres significativos.",
          "Cuando trabajas con datos que tienen un conjunto limitado de opciones predefinidas.",
          "Cuando necesitas asegurar que solo se usen valores válidos en ciertos contextos."
        ],
        en: [
          "When you need to represent a fixed set of values, such as states or categories.",
          "When you want to improve code readability by replacing magic values with meaningful names.",
          "When working with data that has a limited set of predefined options.",
          "When you need to ensure that only valid values are used in certain contexts."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Enums",
        en: "🔹Features of Enums"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Enum numérico", "Asigna valores numéricos automáticamente", "`enum Direction { Up, Down, Left, Right }`"],
          en: ["Numeric enum", "Automatically assigns numeric values", "`enum Direction { Up, Down, Left, Right }`"]
        },
        {
          es: ["Enum de cadenas", "Asigna valores explícitos como cadenas", "`enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' }`"],
          en: ["String enum", "Assigns explicit string values", "`enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE' }`"]
        },
        {
          es: ["Acceso por nombre", "Accede a valores usando el nombre del enum", "`Direction.Up`"],
          en: ["Access by name", "Access values using the enum name", "`Direction.Up`"]
        },
        {
          es: ["Acceso por valor", "Accede al nombre del enum usando su valor", "`Direction[0] // 'Up'`"],
          en: ["Access by value", "Access the enum name using its value", "`Direction[0] // 'Up'`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Enum Numérico",
        en: "1️⃣ Practical example of Numeric Enum"
      },
      caseTitle: {
        es: "Definir y Usar un Enum Numérico",
        en: "Define and Use a Numeric Enum"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar un enum numérico en TypeScript.",
        en: "This example demonstrates how to define and use a numeric enum in TypeScript."
      },
      code: `enum Direction {
  Up,
  Down,
  Left,
  Right
}

function move(direction: Direction): void {
  switch (direction) {
    case Direction.Up:
      console.log('Moving up');
      break;
    case Direction.Down:
      console.log('Moving down');
      break;
    case Direction.Left:
      console.log('Moving left');
      break;
    case Direction.Right:
      console.log('Moving right');
      break;
  }
}

move(Direction.Up); // Moving up`,
      conclusion: {
        es: "🔥 Beneficio: Los enums numéricos asignan valores automáticamente, lo que simplifica la representación de estados o direcciones.",
        en: "🔥 Benefit: Numeric enums automatically assign values, simplifying the representation of states or directions."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Enum de Cadenas",
        en: "2️⃣ Practical example of String Enum"
      },
      caseTitle: {
        es: "Definir y Usar un Enum de Cadenas",
        en: "Define and Use a String Enum"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar un enum de cadenas en TypeScript.",
        en: "This example demonstrates how to define and use a string enum in TypeScript."
      },
      code: `enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

function getUserStatus(status: Status): string {
  return \`User is \${status}\`;
}

console.log(getUserStatus(Status.Active)); // User is ACTIVE`,
      conclusion: {
        es: "🔥 Beneficio: Los enums de cadenas mejoran la legibilidad y evitan errores al usar valores explícitos y descriptivos.",
        en: "🔥 Benefit: String enums improve readability and prevent errors by using explicit and descriptive values."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Acceso Bidireccional",
        en: "3️⃣ Practical example of Bidirectional Access"
      },
      caseTitle: {
        es: "Acceder a Valores y Nombres de un Enum",
        en: "Access Values and Names of an Enum"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo acceder tanto a los valores como a los nombres de un enum numérico.",
        en: "This example demonstrates how to access both the values and names of a numeric enum."
      },
      code: `enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Up); // 1
console.log(Direction[1]); // 'Up'`,
      conclusion: {
        es: "🔥 Beneficio: Los enums numéricos permiten acceso bidireccional, lo que facilita la depuración y manipulación de valores.",
        en: "🔥 Benefit: Numeric enums allow bidirectional access, making debugging and value manipulation easier."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Enums?",
        en: "📌 When NOT to use Enums?"
      },
      content: {
        es: [
          "❌ Si los valores son dinámicos y no pueden ser representados como constantes.",
          "❌ Si prefieres evitar la verbosidad innecesaria al usar enums en casos triviales.",
          "❌ Si el uso excesivo de enums complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the values are dynamic and cannot be represented as constants.",
          "❌ If you prefer to avoid unnecessary verbosity when using enums in trivial cases.",
          "❌ If excessive use of enums complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los enums son ideales para representar conjuntos fijos de valores, como estados o categorías.",
      "✅ Mejoran la legibilidad y seguridad del código al evitar el uso de valores mágicos.",
      "✅ No deben usarse de manera excesiva si los valores son dinámicos o si complican la lectura del código."
    ],
    en: [
      "✅ Enums are ideal for representing fixed sets of values, such as states or categories.",
      "✅ They improve code readability and safety by avoiding the use of magic values.",
      "✅ They should not be used excessively if the values are dynamic or if they complicate code readability."
    ]
  }
};

export default concept;