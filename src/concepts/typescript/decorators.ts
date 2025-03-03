import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Decoradores en TypeScript",
    en: "Decorators in TypeScript"
  },
  slug: "decorators",
  description: {
    es: "Los decoradores en TypeScript son funciones especiales que permiten modificar o ampliar clases, métodos, propiedades o parámetros en tiempo de diseño. Son útiles para metaprogramación y patrones como inyección de dependencias o registro automático.",
    en: "Decorators in TypeScript are special functions that allow modifying or extending classes, methods, properties, or parameters at design time. They are useful for metaprogramming and patterns like dependency injection or automatic registration."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Decoradores?",
        en: "🔹What are Decorators?"
      },
      code: `// Decorador de clase
function Logger(target: Function) {
  console.log('Clase registrada:', target.name);
}

@Logger
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Decorador de método
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Método \${propertyKey} llamado con argumentos: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}`,
      content: {
        es: "Un **decorador** en TypeScript es una función especial que se utiliza para modificar o ampliar el comportamiento de una clase, método, propiedad o parámetro en tiempo de diseño. Los decoradores son una característica experimental de TypeScript y deben habilitarse en el archivo `tsconfig.json` mediante la opción `experimentalDecorators`. Son ampliamente utilizados en frameworks como Angular para implementar patrones como inyección de dependencias, validaciones o registro automático.",
        en: "A **decorator** in TypeScript is a special function used to modify or extend the behavior of a class, method, property, or parameter at design time. Decorators are an experimental feature in TypeScript and must be enabled in the `tsconfig.json` file using the `experimentalDecorators` option. They are widely used in frameworks like Angular to implement patterns such as dependency injection, validations, or automatic registration."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Decoradores?",
        en: "🔹When to use Decorators?"
      },
      content: {
        es: [
          "Cuando necesitas agregar funcionalidades adicionales a una clase o método sin modificar su código directamente.",
          "Cuando deseas implementar patrones como inyección de dependencias o registro automático.",
          "Cuando trabajas en frameworks como Angular que utilizan decoradores para configurar componentes, servicios o rutas.",
          "Cuando necesitas realizar metaprogramación para registrar, validar o modificar comportamientos en tiempo de diseño."
        ],
        en: [
          "When you need to add additional functionality to a class or method without directly modifying its code.",
          "When you want to implement patterns such as dependency injection or automatic registration.",
          "When working with frameworks like Angular that use decorators to configure components, services, or routes.",
          "When you need to perform metaprogramming to register, validate, or modify behaviors at design time."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos de Decoradores",
        en: "🔹Types of Decorators"
      },
      headers: {
        es: ["Tipo", "Descripción", "Ejemplo"],
        en: ["Type", "Description", "Example"]
      },
      rows: [
        {
          es: ["Clase", "Modifica o amplía una clase", "`@Logger class MyClass {}`"],
          en: ["Class", "Modifies or extends a class", "`@Logger class MyClass {}`"]
        },
        {
          es: ["Método", "Modifica o amplía un método", "`@LogMethod method() {}`"],
          en: ["Method", "Modifies or extends a method", "`@LogMethod method() {}`"]
        },
        {
          es: ["Propiedad", "Modifica o amplía una propiedad", "`@ReadOnly property: string;`"],
          en: ["Property", "Modifies or extends a property", "`@ReadOnly property: string;`"]
        },
        {
          es: ["Parámetro", "Modifica o amplía un parámetro", "`method(@Required param: string) {}`"],
          en: ["Parameter", "Modifies or extends a parameter", "`method(@Required param: string) {}`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Decorador de Clase",
        en: "1️⃣ Practical example of Class Decorator"
      },
      caseTitle: {
        es: "Registrar una Clase con un Decorador",
        en: "Register a Class with a Decorator"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un decorador de clase para registrar una clase en tiempo de diseño.",
        en: "This example demonstrates how to use a class decorator to register a class at design time."
      },
      code: `function Logger(target: Function) {
  console.log('Clase registrada:', target.name);
}

@Logger
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('Alice'); // Clase registrada: Person`,
      conclusion: {
        es: "🔥 Beneficio: Los decoradores de clase permiten realizar acciones adicionales cuando se define una clase, como registro o validación.",
        en: "🔥 Benefit: Class decorators allow performing additional actions when a class is defined, such as registration or validation."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Decorador de Método",
        en: "2️⃣ Practical example of Method Decorator"
      },
      caseTitle: {
        es: "Registrar Llamadas a un Método",
        en: "Log Calls to a Method"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un decorador de método para registrar las llamadas a un método.",
        en: "This example demonstrates how to use a method decorator to log calls to a method."
      },
      code: `function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Método \${propertyKey} llamado con argumentos: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // Método add llamado con argumentos: [5,3] -> 8`,
      conclusion: {
        es: "🔥 Beneficio: Los decoradores de método permiten interceptar y modificar el comportamiento de un método sin cambiar su implementación original.",
        en: "🔥 Benefit: Method decorators allow intercepting and modifying the behavior of a method without changing its original implementation."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Decorador de Propiedad",
        en: "3️⃣ Practical example of Property Decorator"
      },
      caseTitle: {
        es: "Hacer una Propiedad de Solo Lectura",
        en: "Make a Property Read-Only"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un decorador de propiedad para hacer una propiedad de solo lectura.",
        en: "This example demonstrates how to use a property decorator to make a property read-only."
      },
      code: `function ReadOnly(target: any, propertyKey: string): void {
  let value = target[propertyKey];

  Object.defineProperty(target, propertyKey, {
    get: () => value,
    set: () => {
      console.error(\`La propiedad \${propertyKey} es de solo lectura.\`);
    }
  });
}

class User {
  @ReadOnly
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('Alice');
console.log(user.name); // Alice
user.name = 'Bob'; // Error: La propiedad name es de solo lectura.`,
      conclusion: {
        es: "🔥 Beneficio: Los decoradores de propiedad permiten controlar el acceso y modificación de propiedades de una clase.",
        en: "🔥 Benefit: Property decorators allow controlling access and modification of class properties."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Decoradores?",
        en: "📌 When NOT to use Decorators?"
      },
      content: {
        es: [
          "❌ Si el proyecto no requiere metaprogramación o patrones avanzados.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar decoradores en casos triviales.",
          "❌ Si el uso excesivo de decoradores complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project does not require metaprogramming or advanced patterns.",
          "❌ If you prefer to avoid unnecessary complexity when using decorators in trivial cases.",
          "❌ If excessive use of decorators complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los decoradores son ideales para modificar o ampliar el comportamiento de clases, métodos, propiedades o parámetros en tiempo de diseño.",
      "✅ Permiten implementar patrones avanzados como inyección de dependencias, registro automático o validaciones.",
      "✅ No deben usarse de manera excesiva si complican la lectura o mantenibilidad del código."
    ],
    en: [
      "✅ Decorators are ideal for modifying or extending the behavior of classes, methods, properties, or parameters at design time.",
      "✅ They allow implementing advanced patterns such as dependency injection, automatic registration, or validations.",
      "✅ They should not be used excessively if they complicate code readability or maintainability."
    ]
  }
};

export default concept;