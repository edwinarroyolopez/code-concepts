import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Type Guards y Refinamiento de Tipos en TypeScript",
    en: "Type Guards and Type Narrowing in TypeScript"
  },
  slug: "type-guards-narrowing",
  description: {
    es: "Los type guards y el refinamiento de tipos en TypeScript permiten verificar el tipo de una variable en tiempo de ejecución y reducir el conjunto de posibles tipos. Esto mejora la seguridad del código al trabajar con uniones de tipos o valores dinámicos.",
    en: "Type guards and type narrowing in TypeScript allow checking the type of a variable at runtime and reducing the set of possible types. This improves code safety when working with type unions or dynamic values."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Type Guards y Refinamiento de Tipos?",
        en: "🔹What are Type Guards and Type Narrowing?"
      },
      code: `// Type guard usando typeof
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Refinamiento de tipos usando instanceof
function processInput(input: string | number): void {
  if (typeof input === 'string') {
    console.log('Input is a string:', input.toUpperCase());
  } else {
    console.log('Input is a number:', input.toFixed(2));
  }
}`,
      content: {
        es: "Un **type guard** en TypeScript es una expresión que realiza una verificación de tipo en tiempo de ejecución, permitiendo asegurar que una variable pertenece a un tipo específico. El **refinamiento de tipos** es el proceso mediante el cual TypeScript reduce el conjunto de posibles tipos de una variable basándose en condiciones específicas, como `typeof`, `instanceof` o comparaciones personalizadas. Estas herramientas son fundamentales para trabajar con uniones de tipos y valores dinámicos, garantizando que el código sea seguro y predecible.",
        en: "A **type guard** in TypeScript is an expression that performs a type check at runtime, allowing you to ensure that a variable belongs to a specific type. **Type narrowing** is the process by which TypeScript reduces the set of possible types for a variable based on specific conditions, such as `typeof`, `instanceof`, or custom comparisons. These tools are essential for working with type unions and dynamic values, ensuring that the code is safe and predictable."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Type Guards y Refinamiento de Tipos?",
        en: "🔹When to use Type Guards and Type Narrowing?"
      },
      content: {
        es: [
          "Cuando trabajas con uniones de tipos (`string | number`) y necesitas determinar el tipo exacto en tiempo de ejecución.",
          "Cuando manejas valores dinámicos, como datos provenientes de APIs o entradas de usuario.",
          "Cuando deseas mejorar la seguridad del código al evitar errores relacionados con tipos incorrectos.",
          "Cuando necesitas implementar lógica específica basada en el tipo de una variable."
        ],
        en: [
          "When working with type unions (`string | number`) and need to determine the exact type at runtime.",
          "When handling dynamic values, such as data from APIs or user inputs.",
          "When you want to improve code safety by avoiding errors related to incorrect types.",
          "When you need to implement logic specific to the type of a variable."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos de Type Guards Comunes",
        en: "🔹Common Type Guards"
      },
      headers: {
        es: ["Tipo", "Descripción", "Ejemplo"],
        en: ["Type", "Description", "Example"]
      },
      rows: [
        {
          es: ["typeof", "Verifica tipos primitivos", "`typeof value === 'string'`"],
          en: ["typeof", "Checks primitive types", "`typeof value === 'string'`"]
        },
        {
          es: ["instanceof", "Verifica instancias de clases", "`value instanceof Date`"],
          en: ["instanceof", "Checks class instances", "`value instanceof Date`"]
        },
        {
          es: ["Predicados personalizados", "Funciones que devuelven un type guard", "`function isString(value: any): value is string`"],
          en: ["Custom predicates", "Functions that return a type guard", "`function isString(value: any): value is string`"]
        },
        {
          es: ["Comparaciones literales", "Verifica valores específicos", "`if (value === 'active')`"],
          en: ["Literal comparisons", "Checks specific values", "`if (value === 'active')`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de typeof",
        en: "1️⃣ Practical example of typeof"
      },
      caseTitle: {
        es: "Verificar el Tipo de una Variable Usando typeof",
        en: "Check the Type of a Variable Using typeof"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `typeof` para verificar si una variable es de tipo `string` o `number`.",
        en: "This example demonstrates how to use `typeof` to check if a variable is of type `string` or `number`."
      },
      code: `function processInput(input: string | number): void {
  if (typeof input === 'string') {
    console.log('Input is a string:', input.toUpperCase());
  } else {
    console.log('Input is a number:', input.toFixed(2));
  }
}

processInput('hello'); // Input is a string: HELLO
processInput(42); // Input is a number: 42.00`,
      conclusion: {
        es: "🔥 Beneficio: `typeof` es una forma simple y efectiva de verificar tipos primitivos en tiempo de ejecución.",
        en: "🔥 Benefit: `typeof` is a simple and effective way to check primitive types at runtime."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de instanceof",
        en: "2️⃣ Practical example of instanceof"
      },
      caseTitle: {
        es: "Verificar el Tipo de una Instancia Usando instanceof",
        en: "Check the Type of an Instance Using instanceof"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `instanceof` para verificar si una variable es una instancia de una clase específica.",
        en: "This example demonstrates how to use `instanceof` to check if a variable is an instance of a specific class."
      },
      code: `class Car {
  drive(): void {
    console.log('Driving a car');
  }
}

class Bike {
  ride(): void {
    console.log('Riding a bike');
  }
}

function operateVehicle(vehicle: Car | Bike): void {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

operateVehicle(new Car()); // Driving a car
operateVehicle(new Bike()); // Riding a bike`,
      conclusion: {
        es: "🔥 Beneficio: `instanceof` es ideal para verificar instancias de clases y acceder a métodos específicos de cada clase.",
        en: "🔥 Benefit: `instanceof` is ideal for checking class instances and accessing specific methods of each class."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Predicados Personalizados",
        en: "3️⃣ Practical example of Custom Predicates"
      },
      caseTitle: {
        es: "Crear un Type Guard Personalizado",
        en: "Create a Custom Type Guard"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear un type guard personalizado para verificar si una variable es de tipo `string`.",
        en: "This example demonstrates how to create a custom type guard to check if a variable is of type `string`."
      },
      code: `function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown): void {
  if (isString(value)) {
    console.log('Value is a string:', value.toUpperCase());
  } else {
    console.log('Value is not a string');
  }
}

processValue('hello'); // Value is a string: HELLO
processValue(42); // Value is not a string`,
      conclusion: {
        es: "🔥 Beneficio: Los predicados personalizados permiten definir type guards reutilizables para tipos complejos.",
        en: "🔥 Benefit: Custom predicates allow defining reusable type guards for complex types."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Type Guards y Refinamiento de Tipos?",
        en: "📌 When NOT to use Type Guards and Type Narrowing?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere manejo avanzado de tipos.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar type guards en casos triviales.",
          "❌ Si el uso excesivo de type guards complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require advanced type handling.",
          "❌ If you prefer to avoid unnecessary complexity when using type guards in trivial cases.",
          "❌ If excessive use of type guards complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los type guards y el refinamiento de tipos son ideales para trabajar con uniones de tipos y valores dinámicos.",
      "✅ Permiten mejorar la seguridad del código al verificar tipos en tiempo de ejecución.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Type guards and type narrowing are ideal for working with type unions and dynamic values.",
      "✅ They improve code safety by checking types at runtime.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;