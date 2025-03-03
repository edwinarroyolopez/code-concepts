import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Módulos y Namespaces en TypeScript",
    en: "Modules and Namespaces in TypeScript"
  },
  slug: "modules-namespaces",
  description: {
    es: "Los módulos y namespaces en TypeScript permiten organizar y estructurar código en proyectos grandes. Los módulos son archivos independientes que exportan e importan funcionalidades, mientras que los namespaces agrupan código relacionado bajo un único ámbito global.",
    en: "Modules and namespaces in TypeScript allow organizing and structuring code in large projects. Modules are standalone files that export and import functionalities, while namespaces group related code under a single global scope."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Módulos y Namespaces?",
        en: "🔹What are Modules and Namespaces?"
      },
      code: `// Ejemplo de módulo
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './math';
console.log(add(2, 3)); // 5

// Ejemplo de namespace
namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString();
  }
}
console.log(Utils.formatDate(new Date()));`,
      content: {
        es: "Los **módulos** en TypeScript son archivos independientes que encapsulan código y permiten exportar e importar funcionalidades entre ellos. Son ideales para proyectos grandes y modernos, ya que promueven la modularidad y reutilización del código. Los **namespaces**, por otro lado, son una forma de agrupar código relacionado bajo un único ámbito global, lo que puede ser útil en proyectos más pequeños o cuando no se desea usar módulos.",
        en: "Modules in TypeScript are standalone files that encapsulate code and allow exporting and importing functionalities between them. They are ideal for large and modern projects, as they promote modularity and code reuse. Namespaces, on the other hand, are a way to group related code under a single global scope, which can be useful in smaller projects or when modules are not desired."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Módulos y Namespaces?",
        en: "🔹When to use Modules and Namespaces?"
      },
      content: {
        es: [
          "Usa **módulos** cuando trabajas en proyectos grandes y necesitas dividir el código en archivos independientes.",
          "Usa **namespaces** cuando trabajas en proyectos pequeños o necesitas agrupar código relacionado sin modularizarlo.",
          "Usa módulos para aprovechar las características modernas de JavaScript, como `import` y `export`.",
          "Usa namespaces si prefieres evitar la configuración adicional requerida por los módulos (como `tsconfig.json`)."
        ],
        en: [
          "Use **modules** when working on large projects and need to split the code into independent files.",
          "Use **namespaces** when working on small projects or need to group related code without modularizing it.",
          "Use modules to take advantage of modern JavaScript features like `import` and `export`.",
          "Use namespaces if you prefer to avoid the additional configuration required by modules (like `tsconfig.json`)."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Módulos y Namespaces",
        en: "🔹Comparison between Modules and Namespaces"
      },
      headers: {
        es: ["Característica", "Módulos", "Namespaces"],
        en: ["Feature", "Modules", "Namespaces"]
      },
      rows: [
        {
          es: ["Uso común", "Proyectos grandes y modernos", "Proyectos pequeños o específicos"],
          en: ["Common use", "Large and modern projects", "Small or specific projects"]
        },
        {
          es: ["Alcance", "Archivos independientes", "Ámbito global compartido"],
          en: ["Scope", "Independent files", "Shared global scope"]
        },
        {
          es: ["Exportación/Importación", "`export` y `import`", "`namespace` y `export` dentro del mismo archivo"],
          en: ["Export/Import", "`export` and `import`", "`namespace` and `export` within the same file"]
        },
        {
          es: ["Compatibilidad", "Requiere configuración (e.g., `tsconfig.json`)", "No requiere configuración adicional"],
          en: ["Compatibility", "Requires configuration (e.g., `tsconfig.json`)", "Does not require additional configuration"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Módulos",
        en: "1️⃣ Practical example of Modules"
      },
      caseTitle: {
        es: "Exportar e Importar Funcionalidades con Módulos",
        en: "Exporting and Importing Functionalities with Modules"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo exportar e importar funcionalidades usando módulos en TypeScript.",
        en: "This example demonstrates how to export and import functionalities using modules in TypeScript."
      },
      code: `// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// main.ts
import { add, subtract } from './math';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2`,
      conclusion: {
        es: "🔥 Beneficio: Los módulos permiten dividir el código en archivos independientes, mejorando la organización y reutilización del código.",
        en: "🔥 Benefit: Modules allow splitting code into independent files, improving organization and code reuse."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Namespaces",
        en: "2️⃣ Practical example of Namespaces"
      },
      caseTitle: {
        es: "Agrupar Código Relacionado con Namespaces",
        en: "Grouping Related Code with Namespaces"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo agrupar código relacionado usando namespaces en TypeScript.",
        en: "This example demonstrates how to group related code using namespaces in TypeScript."
      },
      code: `namespace Geometry {
  export function calculateArea(width: number, height: number): number {
    return width * height;
  }

  export function calculatePerimeter(width: number, height: number): number {
    return 2 * (width + height);
  }
}

console.log(Geometry.calculateArea(5, 3)); // 15
console.log(Geometry.calculatePerimeter(5, 3)); // 16`,
      conclusion: {
        es: "🔥 Beneficio: Los namespaces permiten agrupar código relacionado bajo un único ámbito global, facilitando la organización en proyectos pequeños.",
        en: "🔥 Benefit: Namespaces allow grouping related code under a single global scope, facilitating organization in small projects."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Combinación de Módulos y Namespaces",
        en: "3️⃣ Practical example of Combining Modules and Namespaces"
      },
      caseTitle: {
        es: "Usar Namespaces Dentro de Módulos",
        en: "Using Namespaces Within Modules"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo combinar módulos y namespaces para organizar código en proyectos más complejos.",
        en: "This example demonstrates how to combine modules and namespaces to organize code in more complex projects."
      },
      code: `// geometry.ts
export namespace Geometry {
  export function calculateArea(width: number, height: number): number {
    return width * height;
  }

  export function calculatePerimeter(width: number, height: number): number {
    return 2 * (width + height);
  }
}

// main.ts
import { Geometry } from './geometry';

console.log(Geometry.calculateArea(5, 3)); // 15
console.log(Geometry.calculatePerimeter(5, 3)); // 16`,
      conclusion: {
        es: "🔥 Beneficio: Combinar módulos y namespaces permite aprovechar las ventajas de ambos enfoques, organizando el código de manera modular y agrupada.",
        en: "🔥 Benefit: Combining modules and namespaces allows leveraging the advantages of both approaches, organizing code in a modular and grouped manner."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Módulos y Namespaces?",
        en: "📌 When NOT to use Modules and Namespaces?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere modularización.",
          "❌ Si prefieres evitar la verbosidad innecesaria al usar namespaces en proyectos modernos.",
          "❌ Si el uso excesivo de namespaces crea conflictos de nombres globales."
        ],
        en: [
          "❌ If the project is too small and does not require modularization.",
          "❌ If you prefer to avoid unnecessary verbosity when using namespaces in modern projects.",
          "❌ If excessive use of namespaces creates global name conflicts."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los módulos son ideales para proyectos grandes y modernos, promoviendo la modularidad y reutilización del código.",
      "✅ Los namespaces son útiles para proyectos pequeños o cuando se necesita agrupar código relacionado.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Modules are ideal for large and modern projects, promoting modularity and code reuse.",
      "✅ Namespaces are useful for small projects or when you need to group related code.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;