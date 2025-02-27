import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useContext en React",
    en: "useContext in React"
  },
  slug: "use-context",
  description: {
    es: "useContext es un hook de React que permite acceder al valor de un contexto sin necesidad de usar componentes intermedios. Es útil para compartir datos globales, como temas, preferencias de usuario o estados de autenticación, en toda la aplicación.",
    en: "useContext is a React hook that allows accessing the value of a context without using intermediate components. It is useful for sharing global data, such as themes, user preferences, or authentication states, across the entire application."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es useContext?",
        en: "🔹What is useContext?"
      },
      code: "const value = useContext(MyContext);",
      content: {
        es: "useContext es un hook que toma un objeto de contexto (creado con `React.createContext`) y devuelve el valor actual de ese contexto. Este valor es determinado por el `Provider` más cercano en el árbol de componentes.",
        en: "useContext is a hook that takes a context object (created with `React.createContext`) and returns the current value of that context. This value is determined by the nearest `Provider` in the component tree."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useContext?",
        en: "🔹When to use useContext?"
      },
      content: {
        es: [
          "Cuando necesitas compartir datos globales en toda la aplicación, como temas o estados de autenticación.",
          "Cuando quieres evitar el prop drilling (pasar props manualmente a través de múltiples niveles de componentes).",
          "Cuando necesitas un estado global simple sin usar bibliotecas externas como Redux."
        ],
        en: [
          "When you need to share global data across the entire application, such as themes or authentication states.",
          "When you want to avoid prop drilling (passing props manually through multiple component levels).",
          "When you need a simple global state without using external libraries like Redux."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre useContext y props",
        en: "🔹Comparison between useContext and props"
      },
      headers: {
        es: ["Característica", "Props", "useContext"],
        en: ["Feature", "Props", "useContext"]
      },
      rows: [
        {
          es: ["Compartir datos", "Requiere pasar props manualmente", "Acceso directo al contexto"],
          en: ["Sharing data", "Requires manually passing props", "Direct access to context"]
        },
        {
          es: ["Legibilidad", "❌ Prop drilling puede ser confuso", "✅ Más limpio y directo"],
          en: ["Readability", "❌ Prop drilling can be confusing", "✅ Cleaner and more direct"]
        },
        {
          es: ["Uso en aplicaciones grandes", "❌ Ineficiente para datos globales", "✅ Ideal para datos globales"],
          en: ["Usage in large apps", "❌ Inefficient for global data", "✅ Ideal for global data"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useContext",
        en: "1️⃣ Practical example of useContext"
      },
      caseTitle: {
        es: "Compartir un tema (theme) en la aplicación",
        en: "Sharing a theme across the application"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useContext para compartir un tema (light/dark) en toda la aplicación.",
        en: "This example demonstrates how to use useContext to share a theme (light/dark) across the application."
      },
      code: `import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const ThemeContext = createContext();

// Componente Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Componente que usa el contexto
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Cambiar tema
    </button>
  );
};

// Aplicación principal
const App = () => {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El tema se comparte globalmente sin necesidad de pasar props manualmente.",
        en: "🔥 Benefit: The theme is shared globally without manually passing props."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useContext",
        en: "2️⃣ Practical example of useContext"
      },
      caseTitle: {
        es: "Autenticación de usuario",
        en: "User authentication"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useContext para manejar el estado de autenticación de un usuario.",
        en: "This example demonstrates how to use useContext to handle user authentication state."
      },
      code: `import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const AuthContext = createContext();

// Componente Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Componente que usa el contexto
const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenido, {user.name}!</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <p>Por favor, inicia sesión.</p>
      )}
    </div>
  );
};

// Aplicación principal
const App = () => {
  return (
    <AuthProvider>
      <UserProfile />
    </AuthProvider>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El estado de autenticación se comparte globalmente, permitiendo un manejo sencillo del usuario.",
        en: "🔥 Benefit: The authentication state is shared globally, allowing easy user management."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useContext",
        en: "3️⃣ Practical example of useContext"
      },
      caseTitle: {
        es: "Configuración de idioma",
        en: "Language settings"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useContext para manejar la configuración de idioma en una aplicación.",
        en: "This example demonstrates how to use useContext to handle language settings in an application."
      },
      code: `import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const LanguageContext = createContext();

// Componente Provider
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Componente que usa el contexto
const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Idioma actual: {language}</p>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={() => changeLanguage("en")}>Inglés</button>
    </div>
  );
};

// Aplicación principal
const App = () => {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El idioma se gestiona globalmente, permitiendo cambios dinámicos en toda la aplicación.",
        en: "🔥 Benefit: The language is managed globally, allowing dynamic changes across the application."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar useContext?",
        en: "📌 When NOT to use useContext?"
      },
      content: {
        es: [
          "❌ Si los datos no son globales y solo se necesitan en un componente específico.",
          "❌ Si el uso excesivo de contextos hace que la aplicación sea difícil de mantener.",
          "❌ Si prefieres usar bibliotecas de gestión de estado como Redux o Zustand para casos complejos."
        ],
        en: [
          "❌ If the data is not global and is only needed in a specific component.",
          "❌ If overusing contexts makes the application hard to maintain.",
          "❌ If you prefer using state management libraries like Redux or Zustand for complex cases."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useContext es ideal para compartir datos globales en una aplicación sin necesidad de prop drilling.",
      "✅ Simplifica el manejo de estados globales como temas, autenticación o configuraciones.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura de la aplicación."
    ],
    en: [
      "✅ useContext is ideal for sharing global data in an application without prop drilling.",
      "✅ It simplifies managing global states like themes, authentication, or settings.",
      "✅ It should not be overused, as it can complicate the application structure."
    ]
  }
};

export default concept;