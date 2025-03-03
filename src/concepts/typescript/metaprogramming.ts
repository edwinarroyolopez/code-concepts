import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Meta-programación en TypeScript",
    en: "Metaprogramming in TypeScript"
  },
  slug: "metaprogramming",
  description: {
    es: "La meta-programación en TypeScript permite escribir código que genera o manipula otros fragmentos de código en tiempo de diseño. Esto incluye el uso de características avanzadas como decoradores, tipos condicionales, utilidades de tipo y herramientas como `keyof`, `typeof` e `infer`.",
    en: "Metaprogramming in TypeScript allows writing code that generates or manipulates other fragments of code at design time. This includes the use of advanced features such as decorators, conditional types, type utilities, and tools like `keyof`, `typeof`, and `infer`."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es la Meta-programación?",
        en: "🔹What is Metaprogramming?"
      },
      code: `// Ejemplo de meta-programación con decoradores
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Método \${propertyKey} llamado con argumentos: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Ejemplo de meta-programación con tipos condicionales
type IsString<T> = T extends string ? true : false;

type Result = IsString<string>; // true

// Ejemplo de meta-programación con keyof
type KeysOf<T> = keyof T;

interface User {
  id: number;
  name: string;
}

type UserKeys = KeysOf<User>; // 'id' | 'name'`,
      content: {
        es: "La **meta-programación** en TypeScript permite escribir código que genera o manipula otros fragmentos de código en tiempo de diseño. Esto incluye el uso de características avanzadas como **decoradores**, **tipos condicionales**, **utilidades de tipo** y herramientas como `keyof`, `typeof` e `infer`. La meta-programación es especialmente útil para crear código reutilizable, flexible y seguro, ya que permite automatizar tareas repetitivas y adaptar el comportamiento del código según las necesidades del contexto.",
        en: "Metaprogramming in TypeScript allows writing code that generates or manipulates other fragments of code at design time. This includes the use of advanced features such as **decorators**, **conditional types**, **type utilities**, and tools like `keyof`, `typeof`, and `infer`. Metaprogramming is especially useful for creating reusable, flexible, and safe code, as it allows automating repetitive tasks and adapting the behavior of the code according to the context's needs."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Meta-programación?",
        en: "🔹When to use Metaprogramming?"
      },
      content: {
        es: [
          "Cuando necesitas generar o manipular código dinámicamente en tiempo de diseño.",
          "Cuando deseas implementar patrones avanzados como decoradores, tipos condicionales o inferencia de tipos.",
          "Cuando trabajas con frameworks como Angular que utilizan meta-programación para configurar componentes, servicios o rutas.",
          "Cuando necesitas crear utilidades de tipo reutilizables que funcionen con múltiples tipos."
        ],
        en: [
          "When you need to generate or manipulate code dynamically at design time.",
          "When you want to implement advanced patterns such as decorators, conditional types, or type inference.",
          "When working with frameworks like Angular that use metaprogramming to configure components, services, or routes.",
          "When you need to create reusable type utilities that work with multiple types."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Herramientas Comunes de Meta-programación",
        en: "🔹Common Metaprogramming Tools"
      },
      headers: {
        es: ["Herramienta", "Descripción", "Ejemplo"],
        en: ["Tool", "Description", "Example"]
      },
      rows: [
        {
          es: ["Decoradores", "Modifican o amplían clases, métodos o propiedades", "`@Log method() {}`"],
          en: ["Decorators", "Modify or extend classes, methods, or properties", "`@Log method() {}`"]
        },
        {
          es: ["Tipos condicionales", "Definen tipos basados en condiciones", "`T extends U ? X : Y`"],
          en: ["Conditional types", "Define types based on conditions", "`T extends U ? X : Y`"]
        },
        {
          es: ["keyof", "Extrae las claves de un tipo", "`type Keys = keyof User;`"],
          en: ["keyof", "Extracts the keys of a type", "`type Keys = keyof User;`"]
        },
        {
          es: ["typeof", "Obtiene el tipo de una variable", "`type Type = typeof variable;`"],
          en: ["typeof", "Gets the type of a variable", "`type Type = typeof variable;`"]
        },
        {
          es: ["infer", "Extrae información de tipos dentro de una condición", "`type ElementType<T> = T extends (infer U)[] ? U : T;`"],
          en: ["infer", "Extracts type information within a condition", "`type ElementType<T> = T extends (infer U)[] ? U : T;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Decoradores",
        en: "1️⃣ Practical example of Decorators"
      },
      caseTitle: {
        es: "Registrar Llamadas a un Método Usando un Decorador",
        en: "Log Method Calls Using a Decorator"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un decorador para registrar las llamadas a un método.",
        en: "This example demonstrates how to use a decorator to log method calls."
      },
      code: `function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Método \${propertyKey} llamado con argumentos: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // Método add llamado con argumentos: [5,3] -> 8`,
      conclusion: {
        es: "🔥 Beneficio: Los decoradores permiten modificar o extender el comportamiento de métodos sin cambiar su implementación original.",
        en: "🔥 Benefit: Decorators allow modifying or extending the behavior of methods without changing their original implementation."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Tipos Condicionales",
        en: "2️⃣ Practical example of Conditional Types"
      },
      caseTitle: {
        es: "Definir un Tipo Basado en una Condición",
        en: "Define a Type Based on a Condition"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar tipos condicionales para definir un tipo basado en una condición específica.",
        en: "This example demonstrates how to use conditional types to define a type based on a specific condition."
      },
      code: `type IsString<T> = T extends string ? true : false;

type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false

console.log(Result1); // true
console.log(Result2); // false`,
      conclusion: {
        es: "🔥 Beneficio: Los tipos condicionales permiten crear tipos dinámicos que dependen de condiciones específicas.",
        en: "🔥 Benefit: Conditional types allow creating dynamic types that depend on specific conditions."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de keyof y typeof",
        en: "3️⃣ Practical example of keyof and typeof"
      },
      caseTitle: {
        es: "Extraer Claves de un Objeto Usando keyof y typeof",
        en: "Extract Keys from an Object Using keyof and typeof"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `keyof` y `typeof` para extraer las claves de un objeto.",
        en: "This example demonstrates how to use `keyof` and `typeof` to extract the keys of an object."
      },
      code: `const user = {
  id: 1,
  name: 'Alice',
  age: 30
};

type UserKeys = keyof typeof user; // 'id' | 'name' | 'age'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProperty(user, 'name')); // Alice`,
      conclusion: {
        es: "🔥 Beneficio: Las herramientas como `keyof` y `typeof` permiten trabajar con tipos dinámicos basados en objetos existentes.",
        en: "🔥 Benefit: Tools like `keyof` and `typeof` allow working with dynamic types based on existing objects."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Meta-programación?",
        en: "📌 When NOT to use Metaprogramming?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere generación o manipulación de código.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar meta-programación en casos triviales.",
          "❌ Si el uso excesivo de meta-programación complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require code generation or manipulation.",
          "❌ If you prefer to avoid unnecessary complexity when using metaprogramming in trivial cases.",
          "❌ If excessive use of metaprogramming complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La meta-programación es ideal para generar o manipular código dinámicamente en tiempo de diseño.",
      "✅ Permite implementar patrones avanzados y crear código reutilizable, flexible y seguro.",
      "✅ No debe usarse si genera complejidad innecesaria o dificulta la comprensión del código."
    ],
    en: [
      "✅ Metaprogramming is ideal for generating or manipulating code dynamically at design time.",
      "✅ It allows implementing advanced patterns and creating reusable, flexible, and safe code.",
      "✅ It should not be used if it generates unnecessary complexity or makes the code harder to understand."
    ]
  }
};

export default concept;