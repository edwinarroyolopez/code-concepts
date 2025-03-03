import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Tipos Recursivos en TypeScript",
    en: "Recursive Types in TypeScript"
  },
  slug: "recursive-types",
  description: {
    es: "Los tipos recursivos en TypeScript permiten definir estructuras de datos complejas que se refieren a sí mismas, como árboles, listas enlazadas o estructuras anidadas. Son especialmente útiles para modelar datos jerárquicos o recursivos.",
    en: "Recursive types in TypeScript allow defining complex data structures that refer to themselves, such as trees, linked lists, or nested structures. They are especially useful for modeling hierarchical or recursive data."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Tipos Recursivos?",
        en: "🔹What are Recursive Types?"
      },
      code: `// Ejemplo básico de tipo recursivo
type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};

// Uso del tipo recursivo
const tree: TreeNode<string> = {
  value: 'root',
  children: [
    {
      value: 'child1',
      children: []
    },
    {
      value: 'child2',
      children: [
        {
          value: 'grandchild',
          children: []
        }
      ]
    }
  ]
};`,
      content: {
        es: "Un **tipo recursivo** en TypeScript es un tipo que se define en términos de sí mismo, permitiendo crear estructuras de datos complejas y jerárquicas. Estos tipos son especialmente útiles para modelar datos recursivos, como árboles, listas enlazadas o estructuras anidadas. Al definir un tipo recursivo, puedes especificar cómo cada elemento puede contener otros elementos del mismo tipo, lo que permite representar relaciones jerárquicas de manera natural y flexible.",
        en: "A **recursive type** in TypeScript is a type defined in terms of itself, allowing the creation of complex and hierarchical data structures. These types are especially useful for modeling recursive data, such as trees, linked lists, or nested structures. By defining a recursive type, you can specify how each element can contain other elements of the same type, enabling the representation of hierarchical relationships naturally and flexibly."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Tipos Recursivos?",
        en: "🔹When to use Recursive Types?"
      },
      content: {
        es: [
          "Cuando necesitas modelar estructuras de datos jerárquicas, como árboles o grafos.",
          "Cuando trabajas con datos anidados, como configuraciones JSON o estructuras de directorios.",
          "Cuando deseas representar relaciones recursivas, como listas enlazadas o expresiones matemáticas.",
          "Cuando necesitas garantizar la seguridad de tipos en estructuras de datos complejas."
        ],
        en: [
          "When you need to model hierarchical data structures, such as trees or graphs.",
          "When working with nested data, such as JSON configurations or directory structures.",
          "When you want to represent recursive relationships, such as linked lists or mathematical expressions.",
          "When you need to ensure type safety in complex data structures."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de los Tipos Recursivos",
        en: "🔹Features of Recursive Types"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Autoreferencia", "El tipo se define en términos de sí mismo", "`type TreeNode<T> = { children: TreeNode<T>[] };`"],
          en: ["Self-reference", "The type is defined in terms of itself", "`type TreeNode<T> = { children: TreeNode<T>[] };`"]
        },
        {
          es: ["Árboles", "Modela estructuras jerárquicas como árboles", "`type Tree<T> = { value: T; children: Tree<T>[] };`"],
          en: ["Trees", "Models hierarchical structures like trees", "`type Tree<T> = { value: T; children: Tree<T>[] };`"]
        },
        {
          es: ["Listas enlazadas", "Representa nodos que apuntan a otros nodos", "`type LinkedList<T> = { value: T; next: LinkedList<T> | null };`"],
          en: ["Linked lists", "Represents nodes pointing to other nodes", "`type LinkedList<T> = { value: T; next: LinkedList<T> | null };`"]
        },
        {
          es: ["Expresiones matemáticas", "Modela operaciones recursivas", "`type Expression = number | { op: string; args: Expression[] };`"],
          en: ["Mathematical expressions", "Models recursive operations", "`type Expression = number | { op: string; args: Expression[] };`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Árbol Jerárquico",
        en: "1️⃣ Practical example of Hierarchical Tree"
      },
      caseTitle: {
        es: "Definir y Usar un Tipo Recursivo para un Árbol",
        en: "Define and Use a Recursive Type for a Tree"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar un tipo recursivo para representar un árbol jerárquico.",
        en: "This example demonstrates how to define and use a recursive type to represent a hierarchical tree."
      },
      code: `type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};

const tree: TreeNode<string> = {
  value: 'root',
  children: [
    {
      value: 'child1',
      children: []
    },
    {
      value: 'child2',
      children: [
        {
          value: 'grandchild',
          children: []
        }
      ]
    }
  ]
};

console.log(tree); // Representa una estructura de árbol`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos recursivos permiten modelar estructuras jerárquicas de manera natural y segura.",
        en: "🔥 Benefit: Recursive types allow modeling hierarchical structures naturally and safely."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Lista Enlazada",
        en: "2️⃣ Practical example of Linked List"
      },
      caseTitle: {
        es: "Definir y Usar un Tipo Recursivo para una Lista Enlazada",
        en: "Define and Use a Recursive Type for a Linked List"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar un tipo recursivo para representar una lista enlazada.",
        en: "This example demonstrates how to define and use a recursive type to represent a linked list."
      },
      code: `type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

const list: LinkedList<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(list); // Representa una lista enlazada`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos recursivos permiten representar estructuras lineales como listas enlazadas de manera segura.",
        en: "🔥 Benefit: Recursive types allow representing linear structures like linked lists safely."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Expresiones Matemáticas",
        en: "3️⃣ Practical example of Mathematical Expressions"
      },
      caseTitle: {
        es: "Definir y Usar un Tipo Recursivo para Expresiones Matemáticas",
        en: "Define and Use a Recursive Type for Mathematical Expressions"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar un tipo recursivo para representar expresiones matemáticas.",
        en: "This example demonstrates how to define and use a recursive type to represent mathematical expressions."
      },
      code: `type Expression = number | { op: string; args: Expression[] };

const expr: Expression = {
  op: '+',
  args: [
    5,
    {
      op: '*',
      args: [3, 4]
    }
  ]
};

console.log(expr); // Representa una expresión matemática`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos recursivos permiten modelar operaciones matemáticas complejas de manera flexible.",
        en: "🔥 Benefit: Recursive types allow modeling complex mathematical operations flexibly."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Tipos Recursivos?",
        en: "📌 When NOT to use Recursive Types?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere estructuras de datos complejas.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar tipos recursivos en casos triviales.",
          "❌ Si el uso excesivo de tipos recursivos complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require complex data structures.",
          "❌ If you prefer to avoid unnecessary complexity when using recursive types in trivial cases.",
          "❌ If excessive use of recursive types complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los tipos recursivos son ideales para modelar estructuras de datos complejas y jerárquicas.",
      "✅ Permiten representar relaciones recursivas de manera natural y segura.",
      "✅ No deben usarse si generan complejidad innecesaria o dificultan la comprensión del código."
    ],
    en: [
      "✅ Recursive types are ideal for modeling complex and hierarchical data structures.",
      "✅ They allow representing recursive relationships naturally and safely.",
      "✅ They should not be used if they generate unnecessary complexity or make the code harder to understand."
    ]
  }
};

export default concept;