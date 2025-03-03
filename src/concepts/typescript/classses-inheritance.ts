import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Clases y Herencia en TypeScript",
    en: "Classes and Inheritance in TypeScript"
  },
  slug: "classes-inheritance",
  description: {
    es: "Las clases en TypeScript permiten modelar entidades con propiedades y métodos, mientras que la herencia permite que una clase derive de otra, reutilizando y extendiendo su funcionalidad. Esto facilita la creación de código modular y escalable.",
    en: "Classes in TypeScript allow modeling entities with properties and methods, while inheritance enables a class to derive from another, reusing and extending its functionality. This facilitates the creation of modular and scalable code."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Clases y la Herencia?",
        en: "🔹What are Classes and Inheritance?"
      },
      code: `// Definición de una clase
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

// Herencia de una clase
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  speak(): void {
    console.log(\`\${this.name} barks.\`);
  }
}`,
      content: {
        es: "Una **clase** en TypeScript es una plantilla para crear objetos que encapsulan datos (propiedades) y comportamiento (métodos). La **herencia** permite que una clase derive de otra, reutilizando sus propiedades y métodos. Además, las clases derivadas pueden sobrescribir métodos o agregar nuevas funcionalidades. Las clases y la herencia son fundamentales para la programación orientada a objetos, facilitando la organización y reutilización del código.",
        en: "A **class** in TypeScript is a blueprint for creating objects that encapsulate data (properties) and behavior (methods). **Inheritance** allows a class to derive from another, reusing its properties and methods. Additionally, derived classes can override methods or add new functionality. Classes and inheritance are fundamental to object-oriented programming, facilitating code organization and reuse."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Clases y Herencia?",
        en: "🔹When to use Classes and Inheritance?"
      },
      content: {
        es: [
          "Cuando necesitas modelar entidades con propiedades y comportamientos compartidos.",
          "Cuando deseas reutilizar código mediante la herencia, evitando duplicaciones.",
          "Cuando trabajas con jerarquías de objetos que comparten funcionalidad común.",
          "Cuando necesitas implementar polimorfismo, permitiendo que diferentes clases compartan una interfaz común."
        ],
        en: [
          "When you need to model entities with shared properties and behaviors.",
          "When you want to reuse code through inheritance, avoiding duplication.",
          "When working with object hierarchies that share common functionality.",
          "When you need to implement polymorphism, allowing different classes to share a common interface."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Características de Clases y Herencia",
        en: "🔹Features of Classes and Inheritance"
      },
      headers: {
        es: ["Característica", "Descripción", "Ejemplo"],
        en: ["Feature", "Description", "Example"]
      },
      rows: [
        {
          es: ["Constructor", "Inicializa las propiedades de una clase", "`constructor(name: string) { this.name = name; }`"],
          en: ["Constructor", "Initializes the properties of a class", "`constructor(name: string) { this.name = name; }`"]
        },
        {
          es: ["Herencia", "Una clase deriva de otra", "`class Dog extends Animal { ... }`"],
          en: ["Inheritance", "One class derives from another", "`class Dog extends Animal { ... }`"]
        },
        {
          es: ["Métodos", "Definen el comportamiento de una clase", "`speak(): void { ... }`"],
          en: ["Methods", "Define the behavior of a class", "`speak(): void { ... }`"]
        },
        {
          es: ["Sobrescritura", "Un método en la clase derivada reemplaza al de la clase base", "`speak(): void { console.log('Bark'); }`"],
          en: ["Overriding", "A method in the derived class replaces the one in the base class", "`speak(): void { console.log('Bark'); }`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Clase",
        en: "1️⃣ Practical example of Class"
      },
      caseTitle: {
        es: "Definición y Uso de una Clase",
        en: "Definition and Usage of a Class"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir y usar una clase simple en TypeScript.",
        en: "This example demonstrates how to define and use a simple class in TypeScript."
      },
      code: `// Definición de la clase
class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  displayInfo(): void {
    console.log(\`Brand: \${this.brand}, Year: \${this.year}\`);
  }
}

// Uso de la clase
const myCar = new Car('Toyota', 2020);
myCar.displayInfo(); // Brand: Toyota, Year: 2020`,
      conclusion: {
        es: "🔥 Beneficio: Las clases permiten encapsular datos y comportamiento en una estructura clara y reutilizable.",
        en: "🔥 Benefit: Classes allow encapsulating data and behavior into a clear and reusable structure."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Herencia",
        en: "2️⃣ Practical example of Inheritance"
      },
      caseTitle: {
        es: "Extender una Clase Base",
        en: "Extending a Base Class"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo extender una clase base para agregar funcionalidad adicional.",
        en: "This example demonstrates how to extend a base class to add additional functionality."
      },
      code: `// Clase base
class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(\`\${this.brand} is driving.\`);
  }
}

// Clase derivada
class ElectricCar extends Vehicle {
  batteryLife: number;

  constructor(brand: string, batteryLife: number) {
    super(brand);
    this.batteryLife = batteryLife;
  }

  charge(): void {
    console.log(\`\${this.brand} is charging. Battery life: \${this.batteryLife} hours.\`);
  }
}

// Uso de la clase derivada
const tesla = new ElectricCar('Tesla', 8);
tesla.drive(); // Tesla is driving.
tesla.charge(); // Tesla is charging. Battery life: 8 hours.`,
      conclusion: {
        es: "🔥 Beneficio: La herencia permite reutilizar y ampliar la funcionalidad de una clase base sin duplicar código.",
        en: "🔥 Benefit: Inheritance allows reusing and extending the functionality of a base class without duplicating code."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Sobrescritura de Métodos",
        en: "3️⃣ Practical example of Method Overriding"
      },
      caseTitle: {
        es: "Sobrescribir un Método en la Clase Derivada",
        en: "Overriding a Method in the Derived Class"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo sobrescribir un método en una clase derivada para modificar su comportamiento.",
        en: "This example demonstrates how to override a method in a derived class to modify its behavior."
      },
      code: `// Clase base
class Shape {
  draw(): void {
    console.log('Drawing a shape.');
  }
}

// Clase derivada
class Circle extends Shape {
  draw(): void {
    console.log('Drawing a circle.');
  }
}

// Uso de la clase derivada
const shape = new Shape();
shape.draw(); // Drawing a shape.

const circle = new Circle();
circle.draw(); // Drawing a circle.`,
      conclusion: {
        es: "🔥 Beneficio: La sobrescritura de métodos permite personalizar el comportamiento de una clase derivada según sea necesario.",
        en: "🔥 Benefit: Method overriding allows customizing the behavior of a derived class as needed."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Clases y Herencia?",
        en: "📌 When NOT to use Classes and Inheritance?"
      },
      content: {
        es: [
          "❌ Si los datos son demasiado simples y no requieren una estructura formal.",
          "❌ Si prefieres evitar la verbosidad innecesaria en casos triviales.",
          "❌ Si el uso excesivo de herencia crea jerarquías complejas y difíciles de mantener."
        ],
        en: [
          "❌ If the data is too simple and does not require a formal structure.",
          "❌ If you prefer to avoid unnecessary verbosity in trivial cases.",
          "❌ If excessive use of inheritance creates complex and hard-to-maintain hierarchies."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las clases son ideales para modelar entidades con propiedades y comportamientos compartidos.",
      "✅ La herencia permite reutilizar y ampliar funcionalidades, mejorando la modularidad del código.",
      "✅ No deben usarse de manera excesiva si los datos son simples o si complican la lectura del código."
    ],
    en: [
      "✅ Classes are ideal for modeling entities with shared properties and behaviors.",
      "✅ Inheritance allows reusing and extending functionality, improving code modularity.",
      "✅ They should not be used excessively if the data is simple or if they complicate code readability."
    ]
  }
};

export default concept;