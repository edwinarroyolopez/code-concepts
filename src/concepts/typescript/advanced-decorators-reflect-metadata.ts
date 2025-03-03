import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Decoradores Avanzados y Reflect Metadata en TypeScript",
    en: "Advanced Decorators and Reflect Metadata in TypeScript"
  },
  slug: "advanced-decorators-reflect-metadata",
  description: {
    es: "Los decoradores avanzados en TypeScript permiten modificar o ampliar clases, métodos, propiedades o parámetros en tiempo de diseño. La API Reflect Metadata complementa esta funcionalidad al permitir trabajar con metadatos en tiempo de ejecución, lo que es fundamental para frameworks como Angular y NestJS.",
    en: "Advanced decorators in TypeScript allow modifying or extending classes, methods, properties, or parameters at design time. The Reflect Metadata API complements this functionality by enabling work with metadata at runtime, which is essential for frameworks like Angular and NestJS."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Decoradores Avanzados y Reflect Metadata?",
        en: "🔹What are Advanced Decorators and Reflect Metadata?"
      },
      code: `// Ejemplo básico de decorador avanzado
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

// Uso de Reflect Metadata
import 'reflect-metadata';

const key = Symbol('description');

class User {
  @Reflect.metadata(key, 'This is the user ID')
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const metadata = Reflect.getMetadata(key, new User(1), 'id');
console.log(metadata); // This is the user ID`,
      content: {
        es: "Los **decoradores avanzados** en TypeScript son funciones especiales que permiten modificar o ampliar el comportamiento de clases, métodos, propiedades o parámetros en tiempo de diseño. Son ampliamente utilizados en frameworks como Angular y NestJS para implementar patrones como inyección de dependencias, validaciones o registro automático. La API **Reflect Metadata** complementa esta funcionalidad al permitir trabajar con metadatos en tiempo de ejecución, lo que facilita la creación de sistemas dinámicos basados en información adicional asociada a clases, métodos o propiedades.",
        en: "Advanced decorators in TypeScript are special functions that allow modifying or extending the behavior of classes, methods, properties, or parameters at design time. They are widely used in frameworks like Angular and NestJS to implement patterns such as dependency injection, validations, or automatic registration. The **Reflect Metadata** API complements this functionality by enabling work with metadata at runtime, facilitating the creation of dynamic systems based on additional information associated with classes, methods, or properties."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Decoradores Avanzados y Reflect Metadata?",
        en: "🔹When to use Advanced Decorators and Reflect Metadata?"
      },
      content: {
        es: [
          "Cuando necesitas implementar patrones avanzados como inyección de dependencias o registro automático.",
          "Cuando deseas agregar funcionalidades adicionales a una clase o método sin modificar su código directamente.",
          "Cuando trabajas con frameworks como Angular o NestJS que utilizan decoradores y metadatos para configurar componentes, servicios o rutas.",
          "Cuando necesitas trabajar con metadatos en tiempo de ejecución para crear sistemas dinámicos."
        ],
        en: [
          "When you need to implement advanced patterns such as dependency injection or automatic registration.",
          "When you want to add additional functionalities to a class or method without directly modifying its code.",
          "When working with frameworks like Angular or NestJS that use decorators and metadata to configure components, services, or routes.",
          "When you need to work with metadata at runtime to create dynamic systems."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de Decoradores Avanzados y Reflect Metadata",
        en: "🔹Features of Advanced Decorators and Reflect Metadata"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Decorador de clase", "Modifica o amplía una clase", "`@Logger class MyClass {}`"],
          en: ["Class decorator", "Modifies or extends a class", "`@Logger class MyClass {}`"]
        },
        {
          es: ["Decorador de método", "Modifica o amplía un método", "`@LogMethod method() {}`"],
          en: ["Method decorator", "Modifies or extends a method", "`@LogMethod method() {}`"]
        },
        {
          es: ["Reflect Metadata", "Define metadatos en tiempo de ejecución", "`Reflect.defineMetadata(key, value, target)`"],
          en: ["Reflect Metadata", "Defines metadata at runtime", "`Reflect.defineMetadata(key, value, target)`"]
        },
        {
          es: ["Obtener metadatos", "Recupera metadatos asociados a un objeto", "`Reflect.getMetadata(key, target)`"],
          en: ["Get metadata", "Retrieves metadata associated with an object", "`Reflect.getMetadata(key, target)`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Decorador de Método",
        en: "1️⃣ Practical example of Method Decorator"
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
        es: "🔥 Beneficio: Los decoradores de método permiten interceptar y modificar el comportamiento de un método sin cambiar su implementación original.",
        en: "🔥 Benefit: Method decorators allow intercepting and modifying the behavior of a method without changing its original implementation."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Reflect Metadata",
        en: "2️⃣ Practical example of Reflect Metadata"
      },
      caseTitle: {
        es: "Definir y Recuperar Metadatos Usando Reflect Metadata",
        en: "Define and Retrieve Metadata Using Reflect Metadata"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y recuperar metadatos asociados a una propiedad usando Reflect Metadata.",
        en: "This example demonstrates how to define and retrieve metadata associated with a property using Reflect Metadata."
      },
      code: `import 'reflect-metadata';

const key = Symbol('description');

class User {
  @Reflect.metadata(key, 'This is the user ID')
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const user = new User(1);
const metadata = Reflect.getMetadata(key, user, 'id');
console.log(metadata); // This is the user ID`,
      conclusion: {
        es: "🔥 Beneficio: Reflect Metadata permite trabajar con metadatos en tiempo de ejecución, facilitando la creación de sistemas dinámicos.",
        en: "🔥 Benefit: Reflect Metadata allows working with metadata at runtime, facilitating the creation of dynamic systems."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Decorador de Clase con Reflect Metadata",
        en: "3️⃣ Practical example of Class Decorator with Reflect Metadata"
      },
      caseTitle: {
        es: "Registrar Metadatos en una Clase Usando un Decorador",
        en: "Register Metadata in a Class Using a Decorator"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un decorador de clase junto con Reflect Metadata para registrar metadatos en una clase.",
        en: "This example demonstrates how to use a class decorator along with Reflect Metadata to register metadata in a class."
      },
      code: `import 'reflect-metadata';

const metadataKey = 'class:description';

function Description(description: string) {
  return function (target: Function) {
    Reflect.defineMetadata(metadataKey, description, target);
  };
}

@Description('This is a sample class')
class SampleClass {}

const description = Reflect.getMetadata(metadataKey, SampleClass);
console.log(description); // This is a sample class`,
      conclusion: {
        es: "🔥 Beneficio: Los decoradores de clase combinados con Reflect Metadata permiten asociar información adicional a una clase en tiempo de ejecución.",
        en: "🔥 Benefit: Class decorators combined with Reflect Metadata allow associating additional information with a class at runtime."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Decoradores Avanzados y Reflect Metadata?",
        en: "📌 When NOT to use Advanced Decorators and Reflect Metadata?"
      },
      content: {
        es: [
          "❌ Si el proyecto es demasiado pequeño y no requiere funcionalidades avanzadas como decoradores o metadatos.",
          "❌ Si prefieres evitar la complejidad innecesaria al usar decoradores avanzados en casos triviales.",
          "❌ Si el uso excesivo de decoradores y metadatos complica la lectura y mantenibilidad del código."
        ],
        en: [
          "❌ If the project is too small and does not require advanced features like decorators or metadata.",
          "❌ If you prefer to avoid unnecessary complexity when using advanced decorators in trivial cases.",
          "❌ If excessive use of decorators and metadata complicates code readability and maintainability."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los decoradores avanzados y Reflect Metadata son ideales para implementar patrones avanzados y trabajar con metadatos en tiempo de ejecución.",
      "✅ Permiten modificar o ampliar el comportamiento de clases, métodos, propiedades o parámetros en tiempo de diseño.",
      "✅ No deben usarse si generan complejidad innecesaria o dificultan la comprensión del código."
    ],
    en: [
      "✅ Advanced decorators and Reflect Metadata are ideal for implementing advanced patterns and working with metadata at runtime.",
      "✅ They allow modifying or extending the behavior of classes, methods, properties, or parameters at design time.",
      "✅ They should not be used if they generate unnecessary complexity or make the code harder to understand."
    ]
  }
};

export default concept;