import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Definición y Mantenimiento de Tipos en Librerías Externas en TypeScript",
    en: "Definition and Maintenance of Types in External Libraries in TypeScript"
  },
  slug: "external-library-types",
  description: {
    es: "La definición y mantenimiento de tipos en librerías externas en TypeScript permite garantizar la seguridad de tipos al trabajar con librerías JavaScript que no incluyen definiciones de tipos nativas. Esto se logra mediante archivos `.d.ts` o repositorios como DefinitelyTyped.",
    en: "The definition and maintenance of types in external libraries in TypeScript ensures type safety when working with JavaScript libraries that do not include native type definitions. This is achieved through `.d.ts` files or repositories like DefinitelyTyped."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Definiciones de Tipos en Librerías Externas?",
        en: "🔹What are Type Definitions in External Libraries?"
      },
      code: `// Ejemplo básico de archivo .d.ts para una librería externa
declare module 'my-external-library' {
  export function add(a: number, b: number): number;
  export function subtract(a: number, b: number): number;
}

// Uso de la librería externa con tipos
import { add, subtract } from 'my-external-library';

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6`,
      content: {
        es: "Las **definiciones de tipos en librerías externas** en TypeScript permiten añadir soporte de tipos a librerías JavaScript que no incluyen definiciones de tipos nativas. Esto se logra mediante archivos `.d.ts`, que describen la estructura de la API de la librería, o utilizando repositorios como **DefinitelyTyped**, que proporcionan definiciones de tipos para miles de librerías populares. Estas definiciones garantizan la seguridad de tipos, mejoran la experiencia del desarrollador y facilitan la integración de librerías externas en proyectos TypeScript.",
        en: "Type definitions in external libraries in TypeScript allow adding type support to JavaScript libraries that do not include native type definitions. This is achieved through `.d.ts` files, which describe the structure of the library's API, or by using repositories like **DefinitelyTyped**, which provide type definitions for thousands of popular libraries. These definitions ensure type safety, improve the developer experience, and facilitate the integration of external libraries into TypeScript projects."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Definiciones de Tipos en Librerías Externas?",
        en: "🔹When to use Type Definitions in External Libraries?"
      },
      content: {
        es: [
          "Cuando necesitas trabajar con una librería JavaScript que no incluye definiciones de tipos nativas.",
          "Cuando deseas garantizar la seguridad de tipos al usar funciones, objetos o clases de una librería externa.",
          "Cuando trabajas en un proyecto TypeScript y necesitas integrar librerías populares sin perder las ventajas del tipado estático.",
          "Cuando contribuyes a repositorios como DefinitelyTyped para mejorar las definiciones de tipos de librerías existentes."
        ],
        en: [
          "When you need to work with a JavaScript library that does not include native type definitions.",
          "When you want to ensure type safety when using functions, objects, or classes from an external library.",
          "When working on a TypeScript project and need to integrate popular libraries without losing the benefits of static typing.",
          "When contributing to repositories like DefinitelyTyped to improve type definitions for existing libraries."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de las Definiciones de Tipos en Librerías Externas",
        en: "🔹Features of Type Definitions in External Libraries"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Archivos .d.ts", "Define tipos para librerías externas", "`declare module 'my-library' {}`"],
          en: [".d.ts files", "Define types for external libraries", "`declare module 'my-library' {}`"]
        },
        {
          es: ["DefinitelyTyped", "Repositorio de definiciones de tipos", "`@types/lodash`"],
          en: ["DefinitelyTyped", "Repository of type definitions", "`@types/lodash`"]
        },
        {
          es: ["IntelliSense", "Proporciona autocompletado y documentación", "`add(a: number, b: number)`"],
          en: ["IntelliSense", "Provides autocompletion and documentation", "`add(a: number, b: number)`"]
        },
        {
          es: ["Compatibilidad", "Garantiza compatibilidad con TypeScript", "`npm install @types/react`"],
          en: ["Compatibility", "Ensures compatibility with TypeScript", "`npm install @types/react`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Creación de un Archivo .d.ts",
        en: "1️⃣ Practical example of Creating a .d.ts File"
      },
      caseTitle: {
        es: "Crear un Archivo .d.ts para una Librería Externa",
        en: "Create a .d.ts File for an External Library"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear un archivo `.d.ts` para definir los tipos de una librería externa.",
        en: "This example demonstrates how to create a `.d.ts` file to define the types for an external library."
      },
      code: `// my-external-library.d.ts
declare module 'my-external-library' {
  export function greet(name: string): string;
  export function calculateSum(...numbers: number[]): number;
}

// Uso de la librería externa con tipos
import { greet, calculateSum } from 'my-external-library';

console.log(greet('Alice')); // Hello, Alice
console.log(calculateSum(1, 2, 3, 4)); // 10`,
      conclusion: {
        es: "🔥 Beneficio: Los archivos `.d.ts` permiten añadir soporte de tipos a librerías externas, garantizando la seguridad de tipos y mejorando la experiencia del desarrollador.",
        en: "🔥 Benefit: `.d.ts` files allow adding type support to external libraries, ensuring type safety and improving the developer experience."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Uso de DefinitelyTyped",
        en: "2️⃣ Practical example of Using DefinitelyTyped"
      },
      caseTitle: {
        es: "Instalar y Usar Definiciones de Tipos desde DefinitelyTyped",
        en: "Install and Use Type Definitions from DefinitelyTyped"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo instalar y usar definiciones de tipos desde el repositorio DefinitelyTyped para una librería popular como Lodash.",
        en: "This example demonstrates how to install and use type definitions from the DefinitelyTyped repository for a popular library like Lodash."
      },
      code: `// Instalar definiciones de tipos para Lodash
npm install --save-dev @types/lodash

// Uso de Lodash con tipos
import _ from 'lodash';

const numbers = [1, 2, 3, 4];
const sum = _.sum(numbers);
console.log(sum); // 10`,
      conclusion: {
        es: "🔥 Beneficio: DefinitelyTyped proporciona definiciones de tipos para miles de librerías populares, facilitando su integración en proyectos TypeScript.",
        en: "🔥 Benefit: DefinitelyTyped provides type definitions for thousands of popular libraries, facilitating their integration into TypeScript projects."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Contribución a DefinitelyTyped",
        en: "3️⃣ Practical example of Contributing to DefinitelyTyped"
      },
      caseTitle: {
        es: "Contribuir con Definiciones de Tipos a DefinitelyTyped",
        en: "Contribute Type Definitions to DefinitelyTyped"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo contribuir con definiciones de tipos para una librería externa en el repositorio DefinitelyTyped.",
        en: "This example demonstrates how to contribute type definitions for an external library to the DefinitelyTyped repository."
      },
      code: `// Clonar el repositorio DefinitelyTyped
git clone https://github.com/DefinitelyTyped/DefinitelyTyped.git

// Crear una carpeta para la nueva definición de tipos
mkdir types/my-library
cd types/my-library

// Crear el archivo index.d.ts
declare module 'my-library' {
  export function multiply(a: number, b: number): number;
}

// Crear un archivo de pruebas
// my-library-tests.ts
import { multiply } from 'my-library';
multiply(2, 3); // 6

// Enviar un Pull Request al repositorio DefinitelyTyped`,
      conclusion: {
        es: "🔥 Beneficio: Contribuir a DefinitelyTyped ayuda a mejorar la calidad de las definiciones de tipos disponibles para la comunidad TypeScript.",
        en: "🔥 Benefit: Contributing to DefinitelyTyped helps improve the quality of type definitions available to the TypeScript community."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Definiciones de Tipos en Librerías Externas?",
        en: "📌 When NOT to use Type Definitions in External Libraries?"
      },
      content: {
        es: [
          "❌ Si la librería ya incluye definiciones de tipos nativas.",
          "❌ Si prefieres evitar la complejidad innecesaria al trabajar con librerías pequeñas o poco usadas.",
          "❌ Si el uso excesivo de definiciones de tipos complica la configuración del proyecto."
        ],
        en: [
          "❌ If the library already includes native type definitions.",
          "❌ If you prefer to avoid unnecessary complexity when working with small or rarely used libraries.",
          "❌ If excessive use of type definitions complicates project configuration."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las definiciones de tipos en librerías externas son ideales para garantizar la seguridad de tipos al trabajar con librerías JavaScript.",
      "✅ Permiten integrar librerías populares en proyectos TypeScript sin perder las ventajas del tipado estático.",
      "✅ No deben usarse si generan complejidad innecesaria o dificultan la configuración del proyecto."
    ],
    en: [
      "✅ Type definitions in external libraries are ideal for ensuring type safety when working with JavaScript libraries.",
      "✅ They allow integrating popular libraries into TypeScript projects without losing the benefits of static typing.",
      "✅ They should not be used if they generate unnecessary complexity or complicate project configuration."
    ]
  }
};

export default concept;