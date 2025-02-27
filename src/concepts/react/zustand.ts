import { Concept } from "@/types/concept";

const concept: Concept = {
    title: {
        es: "Zustand en React",
        en: "Zustand in React"
    },
    slug: "zustand",
    description: {
        es: "Zustand es una biblioteca de gestión de estado minimalista y eficiente para React. Ofrece una API simple y directa para manejar el estado global sin la complejidad de otras soluciones como Redux. Es ideal para aplicaciones pequeñas y medianas que necesitan un estado global accesible y fácil de mantener.",
        en: "Zustand is a minimalist and efficient state management library for React. It provides a simple and straightforward API for managing global state without the complexity of other solutions like Redux. It is ideal for small to medium-sized applications that need accessible and easy-to-maintain global state."
    },
    sections: [
        {
            type: "text",
            title: {
                es: "🔹¿Qué es Zustand?",
                en: "🔹What is Zustand?"
            },
            code: "import create from 'zustand';",
            content: {
                es: "Zustand es una biblioteca que permite crear un almacén de estado global (`store`) usando un hook personalizado. Este almacén puede ser accedido desde cualquier componente sin necesidad de proveedores o conectores complejos.",
                en: "Zustand is a library that allows you to create a global state store (`store`) using a custom hook. This store can be accessed from any component without the need for complex providers or connectors."
            }
        },
        {
            type: "list",
            title: {
                es: "🔹¿Cuándo usar Zustand?",
                en: "🔹When to use Zustand?"
            },
            content: {
                es: [
                    "Cuando necesitas un estado global simple y accesible en toda la aplicación.",
                    "Cuando quieres evitar la complejidad de bibliotecas como Redux.",
                    "Cuando buscas una solución ligera y fácil de integrar en proyectos pequeños o medianos."
                ],
                en: [
                    "When you need a simple and accessible global state across the application.",
                    "When you want to avoid the complexity of libraries like Redux.",
                    "When you are looking for a lightweight and easy-to-integrate solution for small to medium projects."
                ]
            }
        },
        {
            type: "table",
            title: {
                es: "🔹Comparación entre Redux, Zustand y Context API",
                en: "🔹Comparison between Redux, Zustand, and Context API"
            },
            headers: {
                es: ["Característica", "Redux", "Zustand", "Context API"],
                en: ["Feature", "Redux", "Zustand", "Context API"]
            },
            rows: [
                {
                    es: [
                        "Complejidad",
                        "✅ Alta (requiere acciones, reductores, conectores)",
                        "✅ Baja (API simple y directa)",
                        "✅ Media (sencillo, pero puede volverse caótico en aplicaciones grandes)"
                    ],
                    en: [
                        "Complexity",
                        "✅ High (requires actions, reducers, connectors)",
                        "✅ Low (simple and straightforward API)",
                        "✅ Medium (simple, but can become chaotic in large applications)"
                    ]
                },
                {
                    es: [
                        "Configuración inicial",
                        "✅ Compleja (store, proveedores, middleware)",
                        "✅ Sencilla (creación directa del store)",
                        "✅ Muy sencilla (solo crear el contexto y usar useContext)"
                    ],
                    en: [
                        "Initial setup",
                        "✅ Complex (store, providers, middleware)",
                        "✅ Simple (direct store creation)",
                        "✅ Very simple (just create the context and use useContext)"
                    ]
                },
                {
                    es: [
                        "Rendimiento",
                        "✅ Bueno, pero puede ser pesado",
                        "✅ Ligero y optimizado",
                        "⚠️ Adecuado para datos estáticos, no óptimo para actualizaciones frecuentes"
                    ],
                    en: [
                        "Performance",
                        "✅ Good, but can be heavy",
                        "✅ Lightweight and optimized",
                        "⚠️ Suitable for static data, not optimal for frequent updates"
                    ]
                }
            ]
        },
        {
            type: "example",
            title: {
                es: "1️⃣ Ejemplo práctico de Zustand",
                en: "1️⃣ Practical example of Zustand"
            },
            caseTitle: {
                es: "Crear un store básico",
                en: "Create a basic store"
            },
            caseDescription: {
                es: "Este ejemplo muestra cómo crear un store básico con Zustand y usarlo en un componente.",
                en: "This example demonstrates how to create a basic store with Zustand and use it in a component."
            },
            code: `import create from 'zustand';

// Crear un store
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Componente que usa el store
const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;`,
            conclusion: {
                es: "🔥 Beneficio: El estado global se gestiona de manera sencilla y accesible desde cualquier componente.",
                en: "🔥 Benefit: The global state is managed simply and accessibly from any component."
            }
        },
        {
            type: "example",
            title: {
                es: "2️⃣ Ejemplo práctico de Zustand",
                en: "2️⃣ Practical example of Zustand"
            },
            caseTitle: {
                es: "Estado global con acciones complejas",
                en: "Global state with complex actions"
            },
            caseDescription: {
                es: "Este ejemplo muestra cómo manejar un estado global con acciones más complejas, como actualizaciones condicionales.",
                en: "This example demonstrates how to handle global state with more complex actions, such as conditional updates."
            },
            code: `import create from 'zustand';

// Crear un store con acciones complejas
const useStore = create((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
  updateUser: (newData) =>
    set((state) => ({
      user: { ...state.user, ...newData },
    })),
}));

// Componente que usa el store
const UserProfile = () => {
  const { user, login, logout, updateUser } = useStore();

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenido, {user.name}!</p>
          <button onClick={() => updateUser({ name: "Nuevo Nombre" })}>
            Actualizar nombre
          </button>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={() => login({ name: "Usuario Ejemplo" })}>
          Iniciar sesión
        </button>
      )}
    </div>
  );
};

export default UserProfile;`,
            conclusion: {
                es: "🔥 Beneficio: Las acciones complejas se manejan de manera eficiente en el store global.",
                en: "🔥 Benefit: Complex actions are handled efficiently in the global store."
            }
        },
        {
            type: "example",
            title: {
                es: "3️⃣ Ejemplo práctico de Zustand",
                en: "3️⃣ Practical example of Zustand"
            },
            caseTitle: {
                es: "Persistencia del estado",
                en: "State persistence"
            },
            caseDescription: {
                es: "Este ejemplo muestra cómo usar Zustand con persistencia de estado (por ejemplo, en localStorage).",
                en: "This example demonstrates how to use Zustand with state persistence (e.g., in localStorage)."
            },
            code: `import create from 'zustand';
import { persist } from 'zustand/middleware';

// Crear un store persistente
const useStore = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage", // Nombre de la clave en localStorage
    }
  )
);

// Componente que usa el store persistente
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
};

export default ThemeSwitcher;`,
            conclusion: {
                es: "🔥 Beneficio: El estado persiste incluso después de recargar la página, mejorando la experiencia del usuario.",
                en: "🔥 Benefit: The state persists even after page reload, enhancing user experience."
            }
        },
        {
            type: "list",
            title: {
                es: "📌 ¿Cuándo NO usar Zustand?",
                en: "📌 When NOT to use Zustand?"
            },
            content: {
                es: [
                    "❌ Si tu aplicación es muy grande y compleja, y necesitas herramientas avanzadas como Redux.",
                    "❌ Si prefieres un enfoque más estructurado y con convenciones estrictas.",
                    "❌ Si no necesitas un estado global y puedes manejar el estado localmente."
                ],
                en: [
                    "❌ If your application is very large and complex, and you need advanced tools like Redux.",
                    "❌ If you prefer a more structured approach with strict conventions.",
                    "❌ If you don't need global state and can manage state locally."
                ]
            }
        }
    ],
    conclusion: {
        es: [
            "✅ Zustand es una excelente opción para aplicaciones pequeñas y medianas que necesitan un estado global simple y accesible.",
            "✅ Ofrece una API minimalista y fácil de usar, sin la complejidad de otras soluciones.",
            "✅ No es ideal para aplicaciones extremadamente grandes o complejas que requieren un manejo de estado más robusto."
        ],
        en: [
            "✅ Zustand is an excellent choice for small to medium applications that need simple and accessible global state.",
            "✅ It provides a minimalist and easy-to-use API without the complexity of other solutions.",
            "✅ It is not ideal for extremely large or complex applications that require more robust state management."
        ]
    }
};

export default concept;