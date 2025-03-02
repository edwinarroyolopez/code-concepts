import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Web Storage",
    en: "Web Storage"
  },
  slug: "web-storage",
  description: {
    es: "Web Storage es una API que permite almacenar datos en el navegador del usuario de manera persistente o temporal. Incluye dos tipos principales: localStorage (persistente) y sessionStorage (temporal).",
    en: "Web Storage is an API that allows storing data in the user's browser persistently or temporarily. It includes two main types: localStorage (persistent) and sessionStorage (temporary)."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Web Storage?",
        en: "🔹What is Web Storage?"
      },
      code: `// Guardar datos en localStorage
localStorage.setItem('username', 'Alice');

// Recuperar datos de localStorage
const username = localStorage.getItem('username');
console.log(username); // Alice

// Eliminar datos de localStorage
localStorage.removeItem('username');`,
      content: {
        es: "Web Storage es una API que permite almacenar pares clave-valor en el navegador del usuario. Existen dos tipos principales: **localStorage**, que almacena datos de forma persistente incluso después de cerrar el navegador, y **sessionStorage**, que almacena datos solo durante la sesión actual (hasta que se cierra la pestaña o ventana).",
        en: "Web Storage is an API that allows storing key-value pairs in the user's browser. There are two main types: **localStorage**, which stores data persistently even after closing the browser, and **sessionStorage**, which stores data only during the current session (until the tab or window is closed)."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Web Storage?",
        en: "🔹When to use Web Storage?"
      },
      content: {
        es: [
          "Cuando necesitas almacenar datos pequeños, como preferencias del usuario o tokens de autenticación.",
          "Cuando deseas mantener datos persistentes entre sesiones del navegador (usando localStorage).",
          "Cuando trabajas con datos temporales que solo deben existir durante la sesión actual (usando sessionStorage).",
          "Cuando prefieres una solución simple para almacenar datos sin depender de cookies o bases de datos externas."
        ],
        en: [
          "When you need to store small amounts of data, such as user preferences or authentication tokens.",
          "When you want to keep data persistent across browser sessions (using localStorage).",
          "When working with temporary data that should only exist during the current session (using sessionStorage).",
          "When you prefer a simple solution for storing data without relying on cookies or external databases."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre localStorage y sessionStorage",
        en: "🔹Comparison between localStorage and sessionStorage"
      },
      headers: {
        es: ["Característica", "localStorage", "sessionStorage"],
        en: ["Feature", "localStorage", "sessionStorage"]
      },
      rows: [
        {
          es: ["Persistencia", "✅ Persiste incluso después de cerrar el navegador", "❌ Solo dura mientras la pestaña está abierta"],
          en: ["Persistence", "✅ Persists even after closing the browser", "❌ Only lasts while the tab is open"]
        },
        {
          es: ["Alcance", "✅ Disponible en todas las pestañas del mismo origen", "❌ Limitado a la pestaña actual"],
          en: ["Scope", "✅ Available in all tabs of the same origin", "❌ Limited to the current tab"]
        },
        {
          es: ["Capacidad", "✅ Hasta 10MB por dominio", "✅ Hasta 10MB por dominio"],
          en: ["Capacity", "✅ Up to 10MB per domain", "✅ Up to 10MB per domain"]
        },
        {
          es: ["Uso común", "Guardar configuraciones o datos persistentes", "Guardar datos temporales de sesión"],
          en: ["Common use", "Storing settings or persistent data", "Storing temporary session data"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de localStorage",
        en: "1️⃣ Practical example of localStorage"
      },
      caseTitle: {
        es: "Guardar y Recuperar Datos Persistentes",
        en: "Saving and Retrieving Persistent Data"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar localStorage para guardar y recuperar datos persistentes en el navegador.",
        en: "This example demonstrates how to use localStorage to save and retrieve persistent data in the browser."
      },
      code: `// Guardar datos en localStorage
localStorage.setItem('theme', 'dark');

// Recuperar datos de localStorage
const theme = localStorage.getItem('theme');
console.log(theme); // dark

// Eliminar datos de localStorage
localStorage.removeItem('theme');`,
      conclusion: {
        es: "🔥 Beneficio: localStorage permite almacenar datos de forma persistente, lo que es ideal para guardar configuraciones o tokens de autenticación.",
        en: "🔥 Benefit: localStorage allows storing data persistently, making it ideal for saving settings or authentication tokens."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de sessionStorage",
        en: "2️⃣ Practical example of sessionStorage"
      },
      caseTitle: {
        es: "Guardar y Recuperar Datos Temporales",
        en: "Saving and Retrieving Temporary Data"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar sessionStorage para guardar y recuperar datos que solo existen durante la sesión actual.",
        en: "This example demonstrates how to use sessionStorage to save and retrieve data that only exists during the current session."
      },
      code: `// Guardar datos en sessionStorage
sessionStorage.setItem('cartItems', JSON.stringify(['item1', 'item2']));

// Recuperar datos de sessionStorage
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
console.log(cartItems); // ['item1', 'item2']

// Eliminar datos de sessionStorage
sessionStorage.removeItem('cartItems');`,
      conclusion: {
        es: "🔥 Beneficio: sessionStorage es útil para almacenar datos temporales, como el contenido de un carrito de compras durante una sesión.",
        en: "🔥 Benefit: sessionStorage is useful for storing temporary data, such as shopping cart contents during a session."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Eventos de Almacenamiento",
        en: "3️⃣ Practical example of Storage Events"
      },
      caseTitle: {
        es: "Detectar Cambios en Web Storage",
        en: "Detecting Changes in Web Storage"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo detectar cambios en Web Storage desde otras pestañas del mismo origen.",
        en: "This example demonstrates how to detect changes in Web Storage from other tabs of the same origin."
      },
      code: `// Escuchar eventos de almacenamiento
window.addEventListener('storage', (event) => {
  console.log('Clave modificada:', event.key);
  console.log('Valor anterior:', event.oldValue);
  console.log('Nuevo valor:', event.newValue);
});

// Simular un cambio en otra pestaña
localStorage.setItem('testKey', 'newValue');`,
      conclusion: {
        es: "🔥 Beneficio: Los eventos de almacenamiento permiten sincronizar datos entre pestañas del mismo origen.",
        en: "🔥 Benefit: Storage events allow synchronizing data between tabs of the same origin."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Web Storage?",
        en: "📌 When NOT to use Web Storage?"
      },
      content: {
        es: [
          "❌ Si necesitas almacenar grandes cantidades de datos (considera IndexedDB o una base de datos externa).",
          "❌ Si los datos son sensibles y requieren cifrado (Web Storage no es seguro para datos confidenciales).",
          "❌ Si prefieres una solución más robusta para manejar datos complejos o estructurados."
        ],
        en: [
          "❌ If you need to store large amounts of data (consider IndexedDB or an external database).",
          "❌ If the data is sensitive and requires encryption (Web Storage is not secure for sensitive data).",
          "❌ If you prefer a more robust solution for handling complex or structured data."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Web Storage es ideal para almacenar pequeños datos persistentes o temporales en el navegador.",
      "✅ Facilita la gestión de configuraciones, tokens de autenticación y datos de sesión.",
      "✅ No debe usarse para almacenar grandes volúmenes de datos o información sensible."
    ],
    en: [
      "✅ Web Storage is ideal for storing small amounts of persistent or temporary data in the browser.",
      "✅ It facilitates managing settings, authentication tokens, and session data.",
      "✅ It should not be used for storing large volumes of data or sensitive information."
    ]
  }
};

export default concept;