import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Debounce, Throttle y Lazy Loading",
    en: "Debounce, Throttle, and Lazy Loading"
  },
  slug: "debounce-throttle-lazy-loading",
  description: {
    es: "Debounce, throttle y lazy loading son técnicas clave para optimizar el rendimiento de aplicaciones web. Debounce y throttle limitan la frecuencia de ejecución de funciones, mientras que lazy loading carga recursos solo cuando son necesarios.",
    en: "Debounce, throttle, and lazy loading are key techniques for optimizing the performance of web applications. Debounce and throttle limit the frequency of function execution, while lazy loading loads resources only when they are needed."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son Debounce, Throttle y Lazy Loading?",
        en: "🔹What are Debounce, Throttle, and Lazy Loading?"
      },
      code: `// Ejemplo de debounce
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Ejemplo de throttle
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Ejemplo de lazy loading
const image = document.createElement('img');
image.src = 'placeholder.jpg';
image.dataset.src = 'real-image.jpg';
image.addEventListener('load', () => {
  image.src = image.dataset.src;
});
document.body.appendChild(image);`,
      content: {
        es: "El **debounce** limita la ejecución de una función hasta que haya transcurrido un tiempo determinado desde la última vez que se llamó. El **throttle** asegura que una función no se ejecute más de una vez en un intervalo de tiempo específico. El **lazy loading** carga recursos (como imágenes o scripts) solo cuando son necesarios, mejorando el rendimiento inicial de la página.",
        en: "The **debounce** limits the execution of a function until a specified time has passed since the last time it was called. The **throttle** ensures that a function is not executed more than once within a specific time interval. **Lazy loading** loads resources (such as images or scripts) only when they are needed, improving the initial page load performance."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Debounce, Throttle y Lazy Loading?",
        en: "🔹When to use Debounce, Throttle, and Lazy Loading?"
      },
      content: {
        es: [
          "Usa **debounce** para eventos frecuentes como redimensionar ventanas o escribir en campos de búsqueda.",
          "Usa **throttle** para eventos continuos como desplazamiento (scroll) o movimiento del ratón.",
          "Usa **lazy loading** para cargar imágenes, videos u otros recursos pesados solo cuando sean visibles en la pantalla."
        ],
        en: [
          "Use **debounce** for frequent events like resizing windows or typing in search fields.",
          "Use **throttle** for continuous events like scrolling or mouse movement.",
          "Use **lazy loading** to load heavy resources like images or videos only when they become visible on the screen."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Debounce, Throttle y Lazy Loading",
        en: "🔹Comparison between Debounce, Throttle, and Lazy Loading"
      },
      headers: {
        es: ["Técnica", "Propósito", "Ejemplo de Uso"],
        en: ["Technique", "Purpose", "Use Case"]
      },
      rows: [
        {
          es: ["Debounce", "Limitar ejecuciones tras inactividad", "Búsquedas en tiempo real"],
          en: ["Debounce", "Limit executions after inactivity", "Real-time search"]
        },
        {
          es: ["Throttle", "Limitar ejecuciones en intervalos", "Scroll o redimensionamiento"],
          en: ["Throttle", "Limit executions at intervals", "Scroll or resizing"]
        },
        {
          es: ["Lazy Loading", "Cargar recursos bajo demanda", "Imágenes o scripts pesados"],
          en: ["Lazy Loading", "Load resources on demand", "Heavy images or scripts"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Debounce",
        en: "1️⃣ Practical example of Debounce"
      },
      caseTitle: {
        es: "Implementar Debounce en un Campo de Búsqueda",
        en: "Implementing Debounce in a Search Field"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar debounce para evitar llamadas innecesarias a una API mientras el usuario escribe en un campo de búsqueda.",
        en: "This example demonstrates how to use debounce to avoid unnecessary API calls while the user types in a search field."
      },
      code: `function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const searchInput = document.getElementById('search');
const handleSearch = (query) => console.log('Buscando:', query);

const debouncedSearch = debounce(handleSearch, 500);

searchInput.addEventListener('input', (event) => {
  debouncedSearch(event.target.value);
});`,
      conclusion: {
        es: "🔥 Beneficio: Debounce reduce el número de llamadas a funciones costosas, mejorando el rendimiento.",
        en: "🔥 Benefit: Debounce reduces the number of calls to expensive functions, improving performance."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Throttle",
        en: "2️⃣ Practical example of Throttle"
      },
      caseTitle: {
        es: "Implementar Throttle en Scroll",
        en: "Implementing Throttle on Scroll"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar throttle para limitar la frecuencia de ejecución de una función durante el desplazamiento.",
        en: "This example demonstrates how to use throttle to limit the frequency of function execution during scrolling."
      },
      code: `function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const handleScroll = () => console.log('Scroll detectado');

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener('scroll', throttledScroll);`,
      conclusion: {
        es: "🔥 Beneficio: Throttle evita que funciones costosas se ejecuten demasiado rápido, optimizando el rendimiento.",
        en: "🔥 Benefit: Throttle prevents expensive functions from executing too quickly, optimizing performance."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Lazy Loading",
        en: "3️⃣ Practical example of Lazy Loading"
      },
      caseTitle: {
        es: "Implementar Lazy Loading en Imágenes",
        en: "Implementing Lazy Loading on Images"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo implementar lazy loading para cargar imágenes solo cuando estén visibles en la pantalla.",
        en: "This example demonstrates how to implement lazy loading to load images only when they are visible on the screen."
      },
      code: `document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');

  const lazyLoad = (target) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(image => observer.observe(image));
  };

  lazyLoad();
});`,
      conclusion: {
        es: "🔥 Beneficio: Lazy loading mejora el rendimiento inicial de la página al cargar recursos solo cuando son necesarios.",
        en: "🔥 Benefit: Lazy loading improves the initial page load performance by loading resources only when needed."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Debounce, Throttle o Lazy Loading?",
        en: "📌 When NOT to use Debounce, Throttle, or Lazy Loading?"
      },
      content: {
        es: [
          "❌ Si los eventos son infrecuentes y no afectan significativamente el rendimiento.",
          "❌ Si prefieres una implementación simple sin optimizaciones avanzadas.",
          "❌ Si lazy loading podría afectar negativamente la experiencia del usuario (por ejemplo, retrasos visibles)."
        ],
        en: [
          "❌ If events are infrequent and do not significantly impact performance.",
          "❌ If you prefer a simple implementation without advanced optimizations.",
          "❌ If lazy loading could negatively affect the user experience (e.g., visible delays)."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Debounce y throttle son ideales para optimizar eventos frecuentes como scroll o búsqueda.",
      "✅ Lazy loading mejora el rendimiento inicial al cargar recursos solo cuando son necesarios.",
      "✅ No deben usarse si las optimizaciones no son necesarias o podrían afectar negativamente la experiencia del usuario."
    ],
    en: [
      "✅ Debounce and throttle are ideal for optimizing frequent events like scrolling or searching.",
      "✅ Lazy loading improves initial performance by loading resources only when needed.",
      "✅ They should not be used if optimizations are unnecessary or could negatively impact the user experience."
    ]
  }
};

export default concept;