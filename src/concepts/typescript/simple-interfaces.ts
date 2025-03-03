import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Interfaces Simples en TypeScript",
    en: "Simple Interfaces in TypeScript"
  },
  slug: "simple-interfaces",
  description: {
    es: "Las interfaces simples en TypeScript permiten definir la estructura de objetos, especificando las propiedades y sus tipos. Esto garantiza que los datos cumplan con un contrato específico y mejora la seguridad de tipos.",
    en: "Simple interfaces in TypeScript allow defining the structure of objects, specifying properties and their types. This ensures that data adheres to a specific contract and improves type safety."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Interfaces Simples?",
        en: "🔹What are Simple Interfaces?"
      },
      code: `// Definición de una interfaz simple
interface User {
  id: number;
  name: string;
  age: number;
}

// Uso de la interfaz
const user: User = { id: 1, name: 'Alice', age: 25 };`,
      content: {
        es: "Una **interfaz** en TypeScript define la estructura de un objeto, especificando las propiedades que debe tener y sus tipos. Las interfaces no contienen lógica ni implementaciones; solo describen cómo deben verse los datos. Son útiles para garantizar que los objetos cumplan con un contrato específico, lo que facilita la detección de errores en tiempo de desarrollo.",
        en: "An **interface** in TypeScript defines the structure of an object, specifying the properties it must have and their types. Interfaces do not contain logic or implementations; they only describe how the data should look. They are useful for ensuring that objects adhere to a specific contract, making it easier to catch errors during development."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Interfaces Simples?",
        en: "🔹When to use Simple Interfaces?"
      },
      content: {
        es: [
          "Cuando necesitas definir la estructura de objetos para garantizar consistencia en los datos.",
          "Cuando trabajas con funciones que requieren objetos con propiedades específicas.",
          "Cuando deseas mejorar la legibilidad del código al documentar claramente la estructura de los datos.",
          "Cuando necesitas reutilizar la misma estructura en múltiples partes del código."
        ],
        en: [
          "When you need to define the structure of objects to ensure data consistency.",
          "When working with functions that require objects with specific properties.",
          "When you want to improve code readability by clearly documenting the structure of the data.",
          "When you need to reuse the same structure in multiple parts of the code."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de las Interfaces Simples",
        en: "🔹Features of Simple Interfaces"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Propiedades obligatorias", "Todas las propiedades deben estar presentes", "`id: number; name: string;`"],
          en: ["Required properties", "All properties must be present", "`id: number; name: string;`"]
        },
        {
          es: ["Propiedades opcionales", "Se pueden omitir ciertas propiedades", "`age?: number;`"],
          en: ["Optional properties", "Certain properties can be omitted", "`age?: number;`"]
        },
        {
          es: ["Reutilización", "Se pueden usar en múltiples lugares", "`interface User { ... }`"],
          en: ["Reusability", "Can be used in multiple places", "`interface User { ... }`"]
        },
        {
          es: ["Extensión", "Se pueden extender para agregar más propiedades", "`interface Admin extends User { role: string; }`"],
          en: ["Extension", "Can be extended to add more properties", "`interface Admin extends User { role: string; }`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Interfaz Simple",
        en: "1️⃣ Practical example of Simple Interface"
      },
      caseTitle: {
        es: "Definición y Uso de una Interfaz",
        en: "Definition and Usage of an Interface"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar una interfaz simple para describir la estructura de un objeto.",
        en: "This example demonstrates how to define and use a simple interface to describe the structure of an object."
      },
      code: `// Definición de la interfaz
interface Product {
  id: number;
  name: string;
  price: number;
}

// Uso de la interfaz
const laptop: Product = { id: 1, name: 'Laptop Pro', price: 1000 };
console.log(laptop.name); // Laptop Pro`,
      conclusion: {
        es: "🔥 Beneficio: Las interfaces garantizan que los objetos cumplan con una estructura específica, mejorando la seguridad de tipos.",
        en: "🔥 Benefit: Interfaces ensure that objects adhere to a specific structure, improving type safety."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Propiedades Opcionales",
        en: "2️⃣ Practical example of Optional Properties"
      },
      caseTitle: {
        es: "Interfaz con Propiedades Opcionales",
        en: "Interface with Optional Properties"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir una interfaz con propiedades opcionales.",
        en: "This example demonstrates how to define an interface with optional properties."
      },
      code: `// Definición de la interfaz
interface Config {
  theme?: string;
  debug?: boolean;
}

// Uso de la interfaz
const settings: Config = { theme: 'dark' };
console.log(settings); // { theme: 'dark' }`,
      conclusion: {
        es: "🔥 Beneficio: Las propiedades opcionales permiten flexibilidad en la estructura de los objetos.",
        en: "🔥 Benefit: Optional properties allow flexibility in the structure of objects."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Extensión de Interfaces",
        en: "3️⃣ Practical example of Interface Extension"
      },
      caseTitle: {
        es: "Extender una Interfaz",
        en: "Extending an Interface"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo extender una interfaz para agregar propiedades adicionales.",
        en: "This example demonstrates how to extend an interface to add additional properties."
      },
      code: `// Interfaz base
interface User {
  id: number;
  name: string;
}

// Interfaz extendida
interface Admin extends User {
  role: string;
}

// Uso de la interfaz extendida
const admin: Admin = { id: 1, name: 'Alice', role: 'Administrator' };
console.log(admin.role); // Administrator`,
      conclusion: {
        es: "🔥 Beneficio: La extensión de interfaces permite reutilizar y ampliar estructuras existentes sin duplicar código.",
        en: "🔥 Benefit: Interface extension allows reusing and extending existing structures without duplicating code."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Interfaces Simples?",
        en: "📌 When NOT to use Simple Interfaces?"
      },
      content: {
        es: [
          "❌ Si los datos son demasiado simples y no requieren una estructura formal.",
          "❌ Si prefieres evitar la verbosidad innecesaria en casos triviales.",
          "❌ Si el uso excesivo de interfaces complica la lectura del código."
        ],
        en: [
          "❌ If the data is too simple and does not require a formal structure.",
          "❌ If you prefer to avoid unnecessary verbosity in trivial cases.",
          "❌ If excessive use of interfaces complicates code readability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las interfaces simples son ideales para definir la estructura de objetos y garantizar la consistencia de los datos.",
      "✅ Mejoran la legibilidad y reutilización del código al documentar claramente las estructuras de datos.",
      "✅ No deben usarse de manera excesiva si los datos son simples o si complican la lectura del código."
    ],
    en: [
      "✅ Simple interfaces are ideal for defining the structure of objects and ensuring data consistency.",
      "✅ They improve code readability and reusability by clearly documenting data structures.",
      "✅ They should not be used excessively if the data is simple or if they complicate code readability."
    ]
  }
};

export default concept;