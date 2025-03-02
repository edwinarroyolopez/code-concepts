import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Clases en JavaScript, Métodos Estáticos, Getters/Setters",
    en: "Classes in JavaScript, Static Methods, Getters/Setters"
  },
  slug: "classes-static-methods-getters-setters",
  description: {
    es: "Las clases en JavaScript permiten implementar la programación orientada a objetos. Los métodos estáticos son funciones asociadas directamente a la clase, mientras que los getters y setters permiten controlar el acceso y modificación de las propiedades de una instancia.",
    en: "Classes in JavaScript allow implementing object-oriented programming. Static methods are functions directly associated with the class, while getters and setters allow controlling access and modification of instance properties."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Clases, Métodos Estáticos y Getters/Setters?",
        en: "🔹What are Classes, Static Methods, and Getters/Setters?"
      },
      code: `class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error('La edad debe ser positiva.');
    }
  }

  // Método estático
  static greet() {
    console.log('¡Bienvenido a la clase User!');
  }
}`,
      content: {
        es: "Las clases en JavaScript son plantillas para crear objetos. Los métodos estáticos pertenecen a la clase en lugar de a las instancias, lo que significa que no requieren crear un objeto para ser utilizados. Los getters y setters permiten definir comportamientos personalizados al acceder o modificar propiedades de una instancia, asegurando encapsulamiento y validación de datos.",
        en: "Classes in JavaScript are templates for creating objects. Static methods belong to the class rather than instances, meaning they can be used without creating an object. Getters and setters allow defining custom behaviors when accessing or modifying instance properties, ensuring encapsulation and data validation."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Clases, Métodos Estáticos y Getters/Setters?",
        en: "🔹When to use Classes, Static Methods, and Getters/Setters?"
      },
      content: {
        es: [
          "Usa clases cuando necesitas modelar entidades con propiedades y comportamientos compartidos.",
          "Usa métodos estáticos para funcionalidades que no dependen de instancias específicas, como utilidades o fábricas de objetos.",
          "Usa getters y setters para validar o transformar datos al acceder o modificar propiedades de una instancia."
        ],
        en: [
          "Use classes when you need to model entities with shared properties and behaviors.",
          "Use static methods for functionalities that do not depend on specific instances, such as utilities or object factories.",
          "Use getters and setters to validate or transform data when accessing or modifying instance properties."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Métodos Estáticos y Métodos de Instancia",
        en: "🔹Comparison between Static Methods and Instance Methods"
      },
      headers: {
        es: ["Característica", "Métodos Estáticos", "Métodos de Instancia"],
        en: ["Feature", "Static Methods", "Instance Methods"]
      },
      rows: [
        {
          es: ["Acceso", "✅ A través de la clase", "✅ A través de instancias"],
          en: ["Access", "✅ Through the class", "✅ Through instances"]
        },
        {
          es: ["Uso común", "✅ Funciones utilitarias", "✅ Comportamientos específicos de instancias"],
          en: ["Common use", "✅ Utility functions", "✅ Instance-specific behaviors"]
        },
        {
          es: ["Dependencia de instancias", "❌ No", "✅ Sí"],
          en: ["Instance dependency", "❌ No", "✅ Yes"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Clases",
        en: "1️⃣ Practical example of Classes"
      },
      caseTitle: {
        es: "Modelado de una Entidad con Clases",
        en: "Modeling an Entity with Classes"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar una clase para modelar una entidad 'User' con propiedades y métodos.",
        en: "This example demonstrates how to use a class to model a 'User' entity with properties and methods."
      },
      code: `class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  greet() {
    console.log(\`Hola, soy \${this._name} y tengo \${this._age} años.\`);
  }
}

const user = new User('Alice', 25);
user.greet(); // Hola, soy Alice y tengo 25 años.`,
      conclusion: {
        es: "🔥 Beneficio: Las clases permiten organizar código en torno a entidades, facilitando la reutilización y mantenibilidad.",
        en: "🔥 Benefit: Classes allow organizing code around entities, facilitating reuse and maintainability."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Métodos Estáticos",
        en: "2️⃣ Practical example of Static Methods"
      },
      caseTitle: {
        es: "Uso de Métodos Estáticos para Funcionalidades Globales",
        en: "Using Static Methods for Global Functionalities"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar métodos estáticos para funcionalidades que no dependen de instancias específicas.",
        en: "This example demonstrates how to use static methods for functionalities that do not depend on specific instances."
      },
      code: `class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.multiply(4, 6)); // 24`,
      conclusion: {
        es: "🔥 Beneficio: Los métodos estáticos permiten agrupar utilidades relacionadas sin necesidad de crear instancias.",
        en: "🔥 Benefit: Static methods allow grouping related utilities without needing to create instances."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Getters y Setters",
        en: "3️⃣ Practical example of Getters and Setters"
      },
      caseTitle: {
        es: "Control de Acceso a Propiedades con Getters y Setters",
        en: "Controlling Property Access with Getters and Setters"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar getters y setters para validar y controlar el acceso a propiedades de una instancia.",
        en: "This example demonstrates how to use getters and setters to validate and control access to instance properties."
      },
      code: `class Product {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }

  // Getter para obtener el nombre
  get name() {
    return this._name;
  }

  // Setter para modificar el precio
  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.error('El precio debe ser positivo.');
    }
  }

  displayInfo() {
    console.log(\`\${this._name} - \$\${this._price}\`);
  }
}

const product = new Product('Laptop', 1000);
product.displayInfo(); // Laptop - $1000

// Usando el setter
product.price = 1200;
product.displayInfo(); // Laptop - $1200

// Intentando asignar un precio inválido
product.price = -50; // Error: El precio debe ser positivo.`,
      conclusion: {
        es: "🔥 Beneficio: Los getters y setters permiten encapsular lógica de validación y transformación al acceder o modificar propiedades.",
        en: "🔥 Benefit: Getters and setters allow encapsulating validation and transformation logic when accessing or modifying properties."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Clases, Métodos Estáticos o Getters/Setters?",
        en: "📌 When NOT to use Classes, Static Methods, or Getters/Setters?"
      },
      content: {
        es: [
          "❌ Si estás trabajando en un proyecto pequeño donde las clases añaden complejidad innecesaria.",
          "❌ Si prefieres un enfoque funcional en lugar de orientado a objetos.",
          "❌ Si los getters y setters no aportan valor adicional, como validaciones o transformaciones."
        ],
        en: [
          "❌ If working on a small project where classes add unnecessary complexity.",
          "❌ If you prefer a functional approach instead of object-oriented programming.",
          "❌ If getters and setters do not provide additional value, such as validations or transformations."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las clases son ideales para modelar entidades con propiedades y comportamientos compartidos.",
      "✅ Los métodos estáticos son útiles para funcionalidades globales o utilitarias.",
      "✅ Los getters y setters permiten controlar el acceso y modificación de propiedades de manera segura."
    ],
    en: [
      "✅ Classes are ideal for modeling entities with shared properties and behaviors.",
      "✅ Static methods are useful for global or utility functionalities.",
      "✅ Getters and setters allow safe access and modification of properties."
    ]
  }
};

export default concept;