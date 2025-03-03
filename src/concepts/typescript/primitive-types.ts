import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Tipos Primitivos en TypeScript",
    en: "Primitive Types in TypeScript"
  },
  slug: "primitive-types",
  description: {
    es: "Los tipos primitivos en TypeScript son los bloques básicos para definir variables y estructuras de datos. Incluyen números, cadenas, booleanos, nulos, indefinidos y otros tipos fundamentales.",
    en: "Primitive types in TypeScript are the basic building blocks for defining variables and data structures. They include numbers, strings, booleans, nulls, undefined, and other fundamental types."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Tipos Primitivos?",
        en: "🔹What are Primitive Types?"
      },
      code: `// Ejemplos de tipos primitivos
let age: number = 25;
let name: string = 'Alice';
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;`,
      content: {
        es: "Los tipos primitivos en TypeScript representan los valores más simples que se pueden manipular en un programa. Son inmutables y no tienen métodos ni propiedades adicionales. TypeScript incluye tipos como `number`, `string`, `boolean`, `null`, `undefined`, `symbol` y `bigint`. Estos tipos son esenciales para definir variables y garantizar la seguridad de tipos en el código.",
        en: "Primitive types in TypeScript represent the simplest values that can be manipulated in a program. They are immutable and do not have additional methods or properties. TypeScript includes types such as `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`. These types are essential for defining variables and ensuring type safety in the code."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Tipos Primitivos?",
        en: "🔹When to use Primitive Types?"
      },
      content: {
        es: [
          "Cuando necesitas definir variables con valores simples como números, cadenas o booleanos.",
          "Cuando deseas garantizar la seguridad de tipos en tu código mediante la asignación explícita de tipos.",
          "Cuando trabajas con estructuras de datos básicas que no requieren objetos complejos.",
          "Cuando necesitas manejar valores especiales como `null` o `undefined`."
        ],
        en: [
          "When you need to define variables with simple values like numbers, strings, or booleans.",
          "When you want to ensure type safety in your code by explicitly assigning types.",
          "When working with basic data structures that do not require complex objects.",
          "When you need to handle special values like `null` or `undefined`."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos Primitivos en TypeScript",
        en: "🔹Primitive Types in TypeScript"
      },
      headers: {
        es: ["Tipo", "Descripción", "Ejemplo"],
        en: ["Type", "Description", "Example"]
      },
      rows: [
        {
          es: ["`number`", "Representa números enteros o decimales", "`let age: number = 25;`"],
          en: ["`number`", "Represents integers or decimals", "`let age: number = 25;`"]
        },
        {
          es: ["`string`", "Representa cadenas de texto", "`let name: string = 'Alice';`"],
          en: ["`string`", "Represents text strings", "`let name: string = 'Alice';`"]
        },
        {
          es: ["`boolean`", "Representa valores verdadero/falso", "`let isActive: boolean = true;`"],
          en: ["`boolean`", "Represents true/false values", "`let isActive: boolean = true;`"]
        },
        {
          es: ["`null`", "Representa la ausencia intencionada de valor", "`let nothing: null = null;`"],
          en: ["`null`", "Represents intentional absence of value", "`let nothing: null = null;`"]
        },
        {
          es: ["`undefined`", "Representa un valor no inicializado", "`let notDefined: undefined = undefined;`"],
          en: ["`undefined`", "Represents an uninitialized value", "`let notDefined: undefined = undefined;`"]
        },
        {
          es: ["`symbol`", "Representa valores únicos e inmutables", "`let id: symbol = Symbol('id');`"],
          en: ["`symbol`", "Represents unique and immutable values", "`let id: symbol = Symbol('id');`"]
        },
        {
          es: ["`bigint`", "Representa números enteros grandes", "`let bigNumber: bigint = 123456789012345678901234567890n;`"],
          en: ["`bigint`", "Represents large integers", "`let bigNumber: bigint = 123456789012345678901234567890n;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Tipos Primitivos",
        en: "1️⃣ Practical example of Primitive Types"
      },
      caseTitle: {
        es: "Definición de Variables con Tipos Primitivos",
        en: "Defining Variables with Primitive Types"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir variables utilizando diferentes tipos primitivos en TypeScript.",
        en: "This example demonstrates how to define variables using different primitive types in TypeScript."
      },
      code: `let age: number = 30;
let name: string = 'John Doe';
let isStudent: boolean = false;
let score: null = null;
let status: undefined = undefined;
let id: symbol = Symbol('uniqueId');
let bigNumber: bigint = 9007199254740991n;

console.log(age, name, isStudent, score, status, id, bigNumber);`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos primitivos permiten definir variables con claridad y garantizar la seguridad de tipos en TypeScript.",
        en: "🔥 Benefit: Primitive types allow defining variables clearly and ensuring type safety in TypeScript."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Tipos Primitivos",
        en: "2️⃣ Practical example of Primitive Types"
      },
      caseTitle: {
        es: "Uso de Tipos Primitivos en Funciones",
        en: "Using Primitive Types in Functions"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar tipos primitivos como parámetros y valores de retorno en funciones.",
        en: "This example demonstrates how to use primitive types as parameters and return values in functions."
      },
      code: `function greet(name: string, age: number): string {
  return \`Hello, my name is \${name} and I am \${age} years old.\`;
}

const message = greet('Alice', 25);
console.log(message); // Hello, my name is Alice and I am 25 years old.`,
      conclusion: {
        es: "🔥 Beneficio: Usar tipos primitivos en funciones mejora la legibilidad y evita errores de tipo.",
        en: "🔥 Benefit: Using primitive types in functions improves readability and prevents type errors."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Tipos Primitivos",
        en: "3️⃣ Practical example of Primitive Types"
      },
      caseTitle: {
        es: "Manejo de Valores Especiales (`null` y `undefined`)",
        en: "Handling Special Values (`null` and `undefined`)"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo manejar valores especiales como `null` y `undefined` en TypeScript.",
        en: "This example demonstrates how to handle special values like `null` and `undefined` in TypeScript."
      },
      code: `function processValue(value: string | null | undefined): string {
  if (value === null || value === undefined) {
    return 'No value provided';
  }
  return \`Processed: \${value}\`;
}

console.log(processValue(null)); // No value provided
console.log(processValue(undefined)); // No value provided
console.log(processValue('Hello')); // Processed: Hello`,
      conclusion: {
        es: "🔥 Beneficio: Manejar valores especiales como `null` y `undefined` asegura que el código sea robusto y seguro.",
        en: "🔥 Benefit: Handling special values like `null` and `undefined` ensures that the code is robust and safe."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Tipos Primitivos?",
        en: "📌 When NOT to use Primitive Types?"
      },
      content: {
        es: [
          "❌ Si necesitas trabajar con estructuras de datos complejas como objetos o arrays.",
          "❌ Si prefieres usar tipos más avanzados como interfaces, clases o tipos personalizados.",
          "❌ Si los tipos primitivos no cubren las necesidades específicas del proyecto."
        ],
        en: [
          "❌ If you need to work with complex data structures like objects or arrays.",
          "❌ If you prefer to use more advanced types like interfaces, classes, or custom types.",
          "❌ If primitive types do not cover the specific needs of the project."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los tipos primitivos son esenciales para definir variables simples y garantizar la seguridad de tipos.",
      "✅ Facilitan la escritura de código claro y predecible.",
      "✅ No deben usarse si se requieren estructuras de datos más complejas o tipos avanzados."
    ],
    en: [
      "✅ Primitive types are essential for defining simple variables and ensuring type safety.",
      "✅ They facilitate writing clear and predictable code.",
      "✅ They should not be used if more complex data structures or advanced types are required."
    ]
  }
};

export default concept;