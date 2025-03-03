import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Arrays y Objetos en TypeScript",
    en: "Arrays and Objects in TypeScript"
  },
  slug: "arrays-objects",
  description: {
    es: "Los arrays y objetos en TypeScript son estructuras de datos fundamentales que permiten almacenar colecciones de valores o propiedades clave-valor. TypeScript mejora estas estructuras con anotaciones de tipos para garantizar la seguridad y claridad del código.",
    en: "Arrays and objects in TypeScript are fundamental data structures that allow storing collections of values or key-value properties. TypeScript enhances these structures with type annotations to ensure code safety and clarity."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Arrays y Objetos?",
        en: "🔹What are Arrays and Objects?"
      },
      code: `// Array con anotación de tipo
const numbers: number[] = [1, 2, 3, 4];

// Objeto con anotación de tipo
const user: { name: string; age: number } = { name: 'Alice', age: 25 };`,
      content: {
        es: "En TypeScript, los **arrays** son colecciones ordenadas de elementos del mismo tipo (o de tipos específicos si se usa unión de tipos). Los **objetos** son colecciones de propiedades clave-valor donde cada propiedad puede tener un tipo específico. Las anotaciones de tipos en arrays y objetos garantizan que los datos sean consistentes y predecibles, lo que reduce errores en tiempo de desarrollo.",
        en: "In TypeScript, **arrays** are ordered collections of elements of the same type (or specific types if using union types). **Objects** are collections of key-value properties where each property can have a specific type. Type annotations in arrays and objects ensure that data is consistent and predictable, reducing errors during development."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Arrays y Objetos?",
        en: "🔹When to use Arrays and Objects?"
      },
      content: {
        es: [
          "Usa **arrays** cuando necesitas almacenar una lista de elementos del mismo tipo o de tipos relacionados.",
          "Usa **objetos** cuando necesitas representar entidades con propiedades específicas, como usuarios, productos o configuraciones.",
          "Usa anotaciones de tipos en arrays y objetos para garantizar la seguridad de tipos y evitar errores.",
          "Usa arrays y objetos para estructurar datos complejos y mejorar la organización del código."
        ],
        en: [
          "Use **arrays** when you need to store a list of elements of the same type or related types.",
          "Use **objects** when you need to represent entities with specific properties, such as users, products, or configurations.",
          "Use type annotations in arrays and objects to ensure type safety and prevent errors.",
          "Use arrays and objects to structure complex data and improve code organization."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Arrays y Objetos",
        en: "🔹Comparison between Arrays and Objects"
      },
      headers: {
        es: ["Característica", "Array", "Objeto"],
        en: ["Feature", "Array", "Object"]
      },
      rows: [
        {
          es: ["Estructura", "Colección ordenada de elementos", "Colección de propiedades clave-valor"],
          en: ["Structure", "Ordered collection of elements", "Collection of key-value properties"]
        },
        {
          es: ["Uso común", "Listas de elementos homogéneos", "Representación de entidades con propiedades"],
          en: ["Common use", "Lists of homogeneous elements", "Representation of entities with properties"]
        },
        {
          es: ["Anotación de tipos", "`number[]`, `string[]`, `(number | string)[]`", "`{ key: type }`"],
          en: ["Type annotation", "`number[]`, `string[]`, `(number | string)[]`", "`{ key: type }`"]
        },
        {
          es: ["Acceso", "Por índice numérico", "Por clave (nombre de propiedad)"],
          en: ["Access", "By numeric index", "By key (property name)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Arrays",
        en: "1️⃣ Practical example of Arrays"
      },
      caseTitle: {
        es: "Declaración y Uso de Arrays con Anotaciones de Tipos",
        en: "Declaration and Usage of Arrays with Type Annotations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo declarar y usar arrays con anotaciones de tipos en TypeScript.",
        en: "This example demonstrates how to declare and use arrays with type annotations in TypeScript."
      },
      code: `// Array de números
const numbers: number[] = [1, 2, 3, 4];
console.log(numbers[0]); // 1

// Array de cadenas
const names: string[] = ['Alice', 'Bob', 'Charlie'];
console.log(names.join(', ')); // Alice, Bob, Charlie

// Array con unión de tipos
const mixed: (number | string)[] = [1, 'two', 3, 'four'];
console.log(mixed); // [1, 'two', 3, 'four']`,
      conclusion: {
        es: "🔥 Beneficio: Las anotaciones de tipos en arrays garantizan que todos los elementos sean del tipo esperado.",
        en: "🔥 Benefit: Type annotations in arrays ensure that all elements are of the expected type."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Objetos",
        en: "2️⃣ Practical example of Objects"
      },
      caseTitle: {
        es: "Declaración y Uso de Objetos con Anotaciones de Tipos",
        en: "Declaration and Usage of Objects with Type Annotations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo declarar y usar objetos con anotaciones de tipos en TypeScript.",
        en: "This example demonstrates how to declare and use objects with type annotations in TypeScript."
      },
      code: `// Objeto simple
const user: { name: string; age: number } = { name: 'Alice', age: 25 };
console.log(user.name); // Alice

// Objeto con métodos
const product: { id: number; name: string; getPrice: () => number } = {
  id: 1,
  name: 'Laptop',
  getPrice: () => 1000
};
console.log(product.getPrice()); // 1000

// Objeto con tipos opcionales
const config: { theme?: string; debug?: boolean } = {};
config.theme = 'dark';
console.log(config); // { theme: 'dark' }`,
      conclusion: {
        es: "🔥 Beneficio: Las anotaciones de tipos en objetos garantizan que las propiedades tengan los tipos correctos y sean consistentes.",
        en: "🔥 Benefit: Type annotations in objects ensure that properties have the correct types and are consistent."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Arrays y Objetos Combinados",
        en: "3️⃣ Practical example of Arrays and Objects Combined"
      },
      caseTitle: {
        es: "Uso de Arrays de Objetos",
        en: "Using Arrays of Objects"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo combinar arrays y objetos para representar datos más complejos.",
        en: "This example demonstrates how to combine arrays and objects to represent more complex data."
      },
      code: `// Array de objetos
const users: { id: number; name: string; age: number }[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Filtrar usuarios mayores de 30 años
const olderUsers = users.filter(user => user.age > 30);
console.log(olderUsers); // [{ id: 3, name: 'Charlie', age: 35 }]`,
      conclusion: {
        es: "🔥 Beneficio: Combinar arrays y objetos permite estructurar y manipular datos complejos de manera eficiente.",
        en: "🔥 Benefit: Combining arrays and objects allows structuring and manipulating complex data efficiently."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Arrays y Objetos?",
        en: "📌 When NOT to use Arrays and Objects?"
      },
      content: {
        es: [
          "❌ Si los datos son demasiado simples y no requieren estructuras complejas.",
          "❌ Si prefieres evitar la verbosidad innecesaria al usar anotaciones de tipos en casos triviales.",
          "❌ Si el uso excesivo de arrays y objetos dificulta la lectura del código."
        ],
        en: [
          "❌ If the data is too simple and does not require complex structures.",
          "❌ If you prefer to avoid unnecessary verbosity when using type annotations in trivial cases.",
          "❌ If excessive use of arrays and objects makes the code harder to read."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los arrays son ideales para almacenar listas de elementos homogéneos o relacionados.",
      "✅ Los objetos son útiles para representar entidades con propiedades específicas.",
      "✅ Las anotaciones de tipos en arrays y objetos mejoran la seguridad y claridad del código.",
      "✅ No deben usarse de manera excesiva si los datos son simples o si complican la lectura del código."
    ],
    en: [
      "✅ Arrays are ideal for storing lists of homogeneous or related elements.",
      "✅ Objects are useful for representing entities with specific properties.",
      "✅ Type annotations in arrays and objects improve code safety and clarity.",
      "✅ They should not be used excessively if the data is simple or if they complicate code readability."
    ]
  }
};

export default concept;