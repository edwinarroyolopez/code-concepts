import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Métodos de Arrays en JavaScript",
    en: "Array Methods in JavaScript"
  },
  slug: "array-methods",
  description: {
    es: "Los métodos de arrays en JavaScript permiten manipular, filtrar, transformar y reducir colecciones de datos de manera declarativa y funcional. Son herramientas poderosas para trabajar con listas de elementos.",
    en: "Array methods in JavaScript allow manipulating, filtering, transforming, and reducing collections of data in a declarative and functional way. They are powerful tools for working with lists of elements."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Métodos de Arrays?",
        en: "🔹What are Array Methods?"
      },
      code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]`,
      content: {
        es: "Los métodos de arrays son funciones integradas en JavaScript que permiten realizar operaciones comunes sobre arrays, como iterar, filtrar, transformar o reducir datos. Estos métodos son fundamentales para escribir código limpio y funcional, especialmente cuando se trabaja con colecciones de datos.",
        en: "Array methods are built-in functions in JavaScript that allow performing common operations on arrays, such as iterating, filtering, transforming, or reducing data. These methods are fundamental for writing clean and functional code, especially when working with collections of data."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Métodos de Arrays?",
        en: "🔹When to use Array Methods?"
      },
      content: {
        es: [
          "Cuando necesitas transformar datos en un array (usando `map`).",
          "Cuando deseas filtrar elementos específicos de un array (usando `filter`).",
          "Cuando quieres reducir un array a un único valor (usando `reduce`).",
          "Cuando trabajas con colecciones de datos y necesitas realizar operaciones declarativas."
        ],
        en: [
          "When you need to transform data in an array (using `map`).",
          "When you want to filter specific elements from an array (using `filter`).",
          "When you want to reduce an array to a single value (using `reduce`).",
          "When working with collections of data and need to perform declarative operations."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Métodos de Arrays",
        en: "🔹Comparison between Array Methods"
      },
      headers: {
        es: ["Método", "Propósito", "Ejemplo"],
        en: ["Method", "Purpose", "Example"]
      },
      rows: [
        {
          es: ["`map`", "Transforma cada elemento", "`[1, 2].map(x => x * 2)` → `[2, 4]`"],
          en: ["`map`", "Transforms each element", "`[1, 2].map(x => x * 2)` → `[2, 4]`"]
        },
        {
          es: ["`filter`", "Filtra elementos", "`[1, 2, 3].filter(x => x > 1)` → `[2, 3]`"],
          en: ["`filter`", "Filters elements", "`[1, 2, 3].filter(x => x > 1)` → `[2, 3]`"]
        },
        {
          es: ["`reduce`", "Reduce a un valor", "`[1, 2, 3].reduce((sum, x) => sum + x, 0)` → `6`"],
          en: ["`reduce`", "Reduces to a single value", "`[1, 2, 3].reduce((sum, x) => sum + x, 0)` → `6`"]
        },
        {
          es: ["`forEach`", "Itera sin retorno", "`[1, 2].forEach(x => console.log(x))`"],
          en: ["`forEach`", "Iterates without return", "`[1, 2].forEach(x => console.log(x))`"]
        }
      ]
    },
    {
        "type": "example",
        "title": {
          "es": "1️⃣ Ejemplo práctico de `map`",
          "en": "1️⃣ Practical example of `map`"
        },
        "caseTitle": {
          "es": "Transformación de datos con `map`",
          "en": "Data transformation with `map`"
        },
        "caseDescription": {
          "es": "Duplica los valores de un array usando `map`.",
          "en": "Doubles the values in an array using `map`."
        },
        "code": "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8]",
        "conclusion": {
          "es": "🔥 `map` transforma cada elemento sin modificar el original.",
          "en": "🔥 `map` transforms each element without modifying the original."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "2️⃣ Ejemplo práctico de `filter`",
          "en": "2️⃣ Practical example of `filter`"
        },
        "caseTitle": {
          "es": "Filtrado de datos con `filter`",
          "en": "Data filtering with `filter`"
        },
        "caseDescription": {
          "es": "Obtiene solo los números mayores a 2.",
          "en": "Gets only numbers greater than 2."
        },
        "code": "const numbers = [1, 2, 3, 4];\nconst greaterThanTwo = numbers.filter(num => num > 2);\nconsole.log(greaterThanTwo); // [3, 4]",
        "conclusion": {
          "es": "🔥 `filter` extrae elementos basados en una condición.",
          "en": "🔥 `filter` extracts elements based on a condition."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "3️⃣ Ejemplo práctico de `find`",
          "en": "3️⃣ Practical example of `find`"
        },
        "caseTitle": {
          "es": "Búsqueda en un array con `find`",
          "en": "Searching an array with `find`"
        },
        "caseDescription": {
          "es": "Encuentra el primer número mayor que 2.",
          "en": "Finds the first number greater than 2."
        },
        "code": "const numbers = [1, 2, 3, 4];\nconst firstMatch = numbers.find(num => num > 2);\nconsole.log(firstMatch); // 3",
        "conclusion": {
          "es": "🔥 `find` devuelve el primer elemento que cumple una condición.",
          "en": "🔥 `find` returns the first element that meets a condition."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "4️⃣ Ejemplo práctico de `some`",
          "en": "4️⃣ Practical example of `some`"
        },
        "caseTitle": {
          "es": "Verificación rápida con `some`",
          "en": "Quick verification with `some`"
        },
        "caseDescription": {
          "es": "Verifica si hay algún número mayor que 3.",
          "en": "Checks if there is any number greater than 3."
        },
        "code": "const numbers = [1, 2, 3, 4];\nconst hasLargeNumber = numbers.some(num => num > 3);\nconsole.log(hasLargeNumber); // true",
        "conclusion": {
          "es": "🔥 `some` verifica si al menos un elemento cumple una condición.",
          "en": "🔥 `some` checks if at least one element meets a condition."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "5️⃣ Ejemplo práctico de `forEach`",
          "en": "5️⃣ Practical example of `forEach`"
        },
        "caseTitle": {
          "es": "Iteración sobre un array con `forEach`",
          "en": "Iterating over an array with `forEach`"
        },
        "caseDescription": {
          "es": "Ejecuta una función en cada elemento del array.",
          "en": "Executes a function on each element of the array."
        },
        "code": "const numbers = [1, 2, 3, 4];\nnumbers.forEach(num => console.log(num * 2));\n// Output: 2, 4, 6, 8",
        "conclusion": {
          "es": "🔥 `forEach` ejecuta una función en cada elemento pero no devuelve un nuevo array.",
          "en": "🔥 `forEach` executes a function on each element but does not return a new array."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "6️⃣ Ejemplo práctico de `sort`",
          "en": "6️⃣ Practical example of `sort`"
        },
        "caseTitle": {
          "es": "Ordenación de arrays con `sort`",
          "en": "Sorting arrays with `sort`"
        },
        "caseDescription": {
          "es": "Ordena los números de menor a mayor.",
          "en": "Sorts numbers from smallest to largest."
        },
        "code": "const numbers = [4, 2, 1, 3];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers); // [1, 2, 3, 4]",
        "conclusion": {
          "es": "🔥 `sort` ordena el array pero lo modifica directamente.",
          "en": "🔥 `sort` sorts the array but modifies it directly."
        }
      },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Métodos de Arrays?",
        en: "📌 When NOT to use Array Methods?"
      },
      content: {
        es: [
          "❌ Si el uso de métodos de arrays introduce complejidad innecesaria en casos simples.",
          "❌ Si prefieres un enfoque imperativo más directo para resolver problemas específicos.",
          "❌ Si el rendimiento es crítico y los métodos de arrays generan sobrecarga significativa."
        ],
        en: [
          "❌ If using array methods introduces unnecessary complexity in simple cases.",
          "❌ If you prefer a more direct imperative approach for solving specific problems.",
          "❌ If performance is critical and array methods introduce significant overhead."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los métodos de arrays son ideales para manipular y transformar colecciones de datos de manera declarativa.",
      "✅ Facilitan la escritura de código limpio y funcional, mejorando la legibilidad y mantenibilidad.",
      "✅ No deben usarse en exceso si el proyecto no requiere su funcionalidad específica o si el rendimiento es crítico."
    ],
    en: [
      "✅ Array methods are ideal for manipulating and transforming collections of data in a declarative way.",
      "✅ They facilitate writing clean and functional code, improving readability and maintainability.",
      "✅ They should not be overused if the project does not require their specific functionality or if performance is critical."
    ]
  }
};

export default concept;