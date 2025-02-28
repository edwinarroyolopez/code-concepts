import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Patrón Singleton en React",
    en: "Singleton Pattern in React"
  },
  slug: "singleton-pattern",
  description: {
    es: "El Patrón Singleton es un patrón de diseño que garantiza que una clase o instancia tenga una única instancia compartida en toda la aplicación. En React, este patrón se utiliza comúnmente para gestionar estados globales, servicios compartidos o configuraciones globales.",
    en: "The Singleton Pattern is a design pattern that ensures a class or instance has only one shared instance throughout the application. In React, this pattern is commonly used to manage global states, shared services, or global configurations."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Patrón Singleton?",
        en: "🔹What is the Singleton Pattern?"
      },
      code: `class Singleton { static instance; }`,
      content: {
        es: "El Patrón Singleton asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia. En React, esto puede implementarse mediante Context API, módulos ES6 o clases para gestionar estados o servicios compartidos.",
        en: "The Singleton Pattern ensures that a class has only one instance and provides a global access point to that instance. In React, this can be implemented using Context API, ES6 modules, or classes to manage shared states or services."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Patrón Singleton?",
        en: "🔹When to use the Singleton Pattern?"
      },
      content: {
        es: [
          "Cuando necesitas compartir un estado global entre múltiples componentes.",
          "Cuando quieres centralizar la gestión de servicios o utilidades compartidas.",
          "Cuando deseas evitar la creación de múltiples instancias de un objeto o servicio."
        ],
        en: [
          "When you need to share a global state between multiple components.",
          "When you want to centralize the management of shared services or utilities.",
          "When you want to avoid creating multiple instances of an object or service."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Patrón Singleton y Estados Locales",
        en: "🔹Comparison between Singleton Pattern and Local States"
      },
      headers: {
        es: ["Característica", "Patrón Singleton", "Estados Locales"],
        en: ["Feature", "Singleton Pattern", "Local States"]
      },
      rows: [
        {
          es: ["Compartición de estado", "✅ Global (compartido)", "❌ Local (aislado)"],
          en: ["State sharing", "✅ Global (shared)", "❌ Local (isolated)"]
        },
        {
          es: ["Centralización", "✅ Alta (gestión centralizada)", "❌ Baja (dispersa)"],
          en: ["Centralization", "✅ High (centralized management)", "❌ Low (scattered)"]
        },
        {
          es: ["Escalabilidad", "✅ Escalable (global)", "❌ Menos escalable (local)"],
          en: ["Scalability", "✅ Scalable (global)", "❌ Less scalable (local)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico del Patrón Singleton",
        en: "1️⃣ Practical example of the Singleton Pattern"
      },
      caseTitle: {
        es: "Uso básico con ES6 Modules",
        en: "Basic usage with ES6 Modules"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo implementar el Patrón Singleton usando un módulo ES6 para gestionar un estado global compartido.",
        en: "This example demonstrates how to implement the Singleton Pattern using an ES6 module to manage a shared global state."
      },
      code: `// singleton.js
let instance;
let counter = 0;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  increment() {
    counter++;
    console.log(\`Contador: \${counter}\`);
  }

  getCounter() {
    return counter;
  }
}

export default new Singleton();

// Uso en la aplicación
import singleton from './singleton';

singleton.increment(); // Contador: 1
singleton.increment(); // Contador: 2
console.log(singleton.getCounter()); // 2`,
      conclusion: {
        es: "🔥 Beneficio: El módulo ES6 asegura que solo exista una única instancia del contador, compartida en toda la aplicación.",
        en: "🔥 Benefit: The ES6 module ensures that only one instance of the counter exists, shared throughout the application."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico del Patrón Singleton",
        en: "2️⃣ Practical example of the Singleton Pattern"
      },
      caseTitle: {
        es: "Singleton con Context API",
        en: "Singleton with Context API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo combinar el Patrón Singleton con Context API para gestionar un estado global compartido.",
        en: "This example demonstrates how to combine the Singleton Pattern with Context API to manage a shared global state."
      },
      code: `import React, { createContext, useContext, useState } from 'react';

// Crear un contexto
const SingletonContext = createContext();

// Proveedor de contexto
function SingletonProvider({ children }) {
  const [state, setState] = useState(0);

  return (
    <SingletonContext.Provider value={{ state, setState }}>
      {children}
    </SingletonContext.Provider>
  );
}

// Hook personalizado
function useSingleton() {
  const context = useContext(SingletonContext);
  if (!context) {
    throw new Error('useSingleton debe usarse dentro de un SingletonProvider');
  }
  return context;
}

// Componente consumidor
function CounterDisplay() {
  const { state } = useSingleton();
  return <p>Contador: {state}</p>;
}

function CounterButton() {
  const { setState } = useSingleton();
  return <button onClick={() => setState((prev) => prev + 1)}>Incrementar</button>;
}

// Uso en la aplicación
function App() {
  return (
    <SingletonProvider>
      <CounterDisplay />
      <CounterButton />
    </SingletonProvider>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Context API actúa como un Singleton para gestionar un estado global compartido entre componentes.",
        en: "🔥 Benefit: Context API acts as a Singleton to manage a shared global state across components."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico del Patrón Singleton",
        en: "3️⃣ Practical example of the Singleton Pattern"
      },
      caseTitle: {
        es: "Singleton para servicios compartidos",
        en: "Singleton for shared services"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el Patrón Singleton para crear un servicio compartido que gestione datos globales, como una API de autenticación.",
        en: "This example demonstrates how to use the Singleton Pattern to create a shared service that manages global data, such as an authentication API."
      },
      code: `// authService.js
let instance;

class AuthService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.isAuthenticated = false;
    return instance;
  }

  login() {
    this.isAuthenticated = true;
    console.log('Usuario autenticado');
  }

  logout() {
    this.isAuthenticated = false;
    console.log('Usuario desautenticado');
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}

export default new AuthService();

// Uso en la aplicación
import authService from './authService';

authService.login(); // Usuario autenticado
console.log(authService.isAuthenticatedUser()); // true
authService.logout(); // Usuario desautenticado
console.log(authService.isAuthenticatedUser()); // false`,
      conclusion: {
        es: "🔥 Beneficio: El servicio de autenticación es único en toda la aplicación, lo que garantiza consistencia y evita duplicaciones.",
        en: "🔥 Benefit: The authentication service is unique throughout the application, ensuring consistency and avoiding duplication."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar el Patrón Singleton?",
        en: "📌 When NOT to use the Singleton Pattern?"
      },
      content: {
        es: [
          "❌ Si el estado o servicio no necesita ser compartido globalmente.",
          "❌ Si prefieres mantener los estados locales para simplificar el flujo de datos.",
          "❌ Si el uso del patrón introduce complejidad innecesaria en aplicaciones pequeñas."
        ],
        en: [
          "❌ If the state or service does not need to be shared globally.",
          "❌ If you prefer keeping local states to simplify data flow.",
          "❌ If using the pattern introduces unnecessary complexity in small applications."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Patrón Singleton es ideal para gestionar estados globales o servicios compartidos en una aplicación.",
      "✅ Permite centralizar la lógica y garantizar consistencia en toda la aplicación.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura si no se gestiona adecuadamente."
    ],
    en: [
      "✅ The Singleton Pattern is ideal for managing global states or shared services in an application.",
      "✅ It allows centralizing logic and ensuring consistency throughout the application.",
      "✅ It should not be overused, as it can complicate the structure if not managed properly."
    ]
  }
};

export default concept;