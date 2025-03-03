import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Generics en TypeScript",
    en: "Generics in TypeScript"
  },
  slug: "generics",
  description: {
    es: "Los generics en TypeScript permiten escribir código reutilizable y flexible que puede trabajar con una variedad de tipos sin sacrificar la seguridad de tipos. Son especialmente útiles para funciones, clases e interfaces genéricas.",
    en: "Generics in TypeScript allow writing reusable and flexible code that can work with a variety of types without sacrificing type safety. They are especially useful for generic functions, classes, and interfaces."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Generics?",
        en: "🔹What are Generics?"
      },
      code: `// Función genérica
function identity<T>(arg: T): T {
  return arg;
}

// Clase genérica
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}`,
      content: {
        es: "Los **generics** en TypeScript permiten crear componentes (funciones, clases o interfaces) que pueden trabajar con cualquier tipo de dato mientras mantienen la seguridad de tipos. Esto significa que puedes escribir código que sea flexible y reutilizable sin perder la capacidad de detectar errores de tipo durante el desarrollo.",
        en: "Generics in TypeScript allow creating components (functions, classes, or interfaces) that can work with any data type while maintaining type safety. This means you can write code that is flexible and reusable without losing the ability to catch type errors during development."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Generics?",
        en: "🔹When to use Generics?"
      },
      content: {
        es: [
          "Cuando necesitas escribir funciones o clases que funcionen con múltiples tipos de datos.",
          "Cuando deseas mantener la seguridad de tipos sin duplicar código para cada tipo específico.",
          "Cuando trabajas con estructuras de datos genéricas como listas, colas o pilas.",
          "Cuando necesitas definir interfaces o clases que sean flexibles pero seguras en términos de tipos."
        ],
        en: [
          "When you need to write functions or classes that work with multiple data types.",
          "When you want to maintain type safety without duplicating code for each specific type.",
          "When working with generic data structures like lists, queues, or stacks.",
          "When you need to define interfaces or classes that are flexible but safe in terms of types."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Generics",
        en: "🔹Features of Generics"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Funciones genéricas", "Funciones que aceptan cualquier tipo", "`function identity<T>(arg: T): T { ... }`"],
          en: ["Generic functions", "Functions that accept any type", "`function identity<T>(arg: T): T { ... }`"]
        },
        {
          es: ["Clases genéricas", "Clases que trabajan con tipos específicos", "`class Box<T> { value: T; ... }`"],
          en: ["Generic classes", "Classes that work with specific types", "`class Box<T> { value: T; ... }`"]
        },
        {
          es: ["Restricciones", "Limitar los tipos permitidos", "`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { ... }`"],
          en: ["Constraints", "Limit allowed types", "`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { ... }`"]
        },
        {
          es: ["Utilidades de tipo", "Manipular tipos genéricos", "`type Partial<T> = { [P in keyof T]?: T[P]; };`"],
          en: ["Type utilities", "Manipulate generic types", "`type Partial<T> = { [P in keyof T]?: T[P]; };`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Función Genérica",
        en: "1️⃣ Practical example of Generic Function"
      },
      caseTitle: {
        es: "Crear una Función Genérica",
        en: "Create a Generic Function"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear una función genérica que acepte cualquier tipo de dato.",
        en: "This example demonstrates how to create a generic function that accepts any data type."
      },
      code: `function identity<T>(arg: T): T {
  return arg;
}

const numberResult = identity<number>(42);
console.log(numberResult); // 42

const stringResult = identity<string>('Hello');
console.log(stringResult); // Hello`,
      conclusion: {
        es: "🔥 Beneficio: Las funciones genéricas permiten escribir código reutilizable que funciona con cualquier tipo de dato mientras mantiene la seguridad de tipos.",
        en: "🔥 Benefit: Generic functions allow writing reusable code that works with any data type while maintaining type safety."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Clase Genérica",
        en: "2️⃣ Practical example of Generic Class"
      },
      caseTitle: {
        es: "Crear una Clase Genérica",
        en: "Create a Generic Class"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear una clase genérica que pueda almacenar y recuperar valores de cualquier tipo.",
        en: "This example demonstrates how to create a generic class that can store and retrieve values of any type."
      },
      code: `class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // 42

const stringBox = new Box<string>('Hello');
console.log(stringBox.getValue()); // Hello`,
      conclusion: {
        es: "🔥 Beneficio: Las clases genéricas permiten crear estructuras de datos flexibles que pueden trabajar con cualquier tipo de dato.",
        en: "🔥 Benefit: Generic classes allow creating flexible data structures that can work with any data type."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Restricciones en Generics",
        en: "3️⃣ Practical example of Constraints in Generics"
      },
      caseTitle: {
        es: "Usar Restricciones para Limitar Tipos",
        en: "Use Constraints to Limit Types"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar restricciones para limitar los tipos permitidos en un generic.",
        en: "This example demonstrates how to use constraints to limit the allowed types in a generic."
      },
      code: `interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(item: T): number {
  return item.length;
}

console.log(getLength('Hello')); // 5
// console.log(getLength(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.`,
      conclusion: {
        es: "🔥 Beneficio: Las restricciones permiten asegurar que los generics solo acepten tipos que cumplan con ciertas condiciones, mejorando la seguridad del código.",
        en: "🔥 Benefit: Constraints ensure that generics only accept types that meet certain conditions, improving code safety."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Generics?",
        en: "📌 When NOT to use Generics?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere reutilización de código.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar generics en casos triviales.",
          "❌ Si el uso excesivo de generics complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require code reuse.",
          "❌ If you prefer to avoid unnecessary complexity when using generics in trivial cases.",
          "❌ If excessive use of generics complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los generics son ideales para escribir código reutilizable y flexible que funcione con múltiples tipos de datos.",
      "✅ Permiten mantener la seguridad de tipos sin duplicar código para cada tipo específico.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Generics are ideal for writing reusable and flexible code that works with multiple data types.",
      "✅ They allow maintaining type safety without duplicating code for each specific type.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;