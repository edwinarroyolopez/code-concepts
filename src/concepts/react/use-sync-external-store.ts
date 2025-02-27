import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useSyncExternalStore en React",
    en: "useSyncExternalStore in React"
  },
  slug: "use-sync-external-store",
  description: {
    es: "useSyncExternalStore es un hook de React que permite suscribirse a un almacenamiento externo y sincronizar su estado con el componente. Es útil para integrar estados externos, como bibliotecas de gestión de estado o APIs de suscripción.",
    en: "useSyncExternalStore is a React hook that allows you to subscribe to an external store and synchronize its state with the component. It is useful for integrating external states, such as state management libraries or subscription APIs."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const state = useSyncExternalStore(subscribe, getSnapshot);",
      content: {
        es: "useSyncExternalStore toma dos funciones: `subscribe` para suscribirse a cambios en el almacenamiento externo y `getSnapshot` para obtener el estado actual. Devuelve el estado sincronizado con el almacenamiento externo.",
        en: "useSyncExternalStore takes two functions: `subscribe` to subscribe to changes in the external store and `getSnapshot` to get the current state. It returns the state synchronized with the external store."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar useSyncExternalStore?",
        en: "🔹When to use useSyncExternalStore?"
      },
      content: {
        es: [
          "Cuando necesitas integrar un almacenamiento externo, como una biblioteca de gestión de estado (por ejemplo, Redux o Zustand).",
          "Cuando trabajas con APIs de suscripción que no están diseñadas específicamente para React.",
          "Cuando necesitas sincronizar el estado de un componente con un almacenamiento externo de manera eficiente."
        ],
        en: [
          "When you need to integrate an external store, such as a state management library (e.g., Redux or Zustand).",
          "When working with subscription APIs that are not specifically designed for React.",
          "When you need to efficiently synchronize a component's state with an external store."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre useSyncExternalStore y useState",
        en: "🔹Comparison between useSyncExternalStore and useState"
      },
      headers: {
        es: ["Característica", "useState", "useSyncExternalStore"],
        en: ["Feature", "useState", "useSyncExternalStore"]
      },
      rows: [
        {
          es: ["Origen del estado", "Interno al componente", "Externo al componente"],
          en: ["State origin", "Internal to the component", "External to the component"]
        },
        {
          es: ["Suscripción a cambios", "❌ No", "✅ Sí"],
          en: ["Subscription to changes", "❌ No", "✅ Yes"]
        },
        {
          es: ["Uso con almacenamiento externo", "❌ No", "✅ Sí"],
          en: ["Usage with external store", "❌ No", "✅ Yes"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useSyncExternalStore",
        en: "1️⃣ Practical example of useSyncExternalStore"
      },
      caseTitle: {
        es: "Integración con un almacenamiento externo",
        en: "Integration with an external store"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useSyncExternalStore para sincronizar un componente con un almacenamiento externo simple.",
        en: "This example demonstrates how to use useSyncExternalStore to synchronize a component with a simple external store."
      },
      code: `import { useSyncExternalStore } from "react";

// Almacenamiento externo simple
let externalState = { count: 0 };
const listeners = new Set();

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => {
  return externalState.count;
};

const updateStore = (newState) => {
  externalState = { ...externalState, ...newState };
  listeners.forEach((listener) => listener());
};

const CounterComponent = () => {
  const count = useSyncExternalStore(subscribe, getSnapshot);

  const handleClick = () => {
    updateStore({ count: externalState.count + 1 });
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default CounterComponent;`,
      conclusion: {
        es: "🔥 Beneficio: El componente se sincroniza con el almacenamiento externo sin necesidad de gestionar manualmente las suscripciones.",
        en: "🔥 Benefit: The component synchronizes with the external store without manually managing subscriptions."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useSyncExternalStore",
        en: "2️⃣ Practical example of useSyncExternalStore"
      },
      caseTitle: {
        es: "Uso con una API de suscripción",
        en: "Usage with a subscription API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useSyncExternalStore para suscribirse a una API de suscripción externa, como un WebSocket.",
        en: "This example demonstrates how to use useSyncExternalStore to subscribe to an external subscription API, such as a WebSocket."
      },
      code: `import { useSyncExternalStore } from "react";

// Simulación de una API de suscripción
const createWebSocketConnection = (url) => {
  let socket = new WebSocket(url);
  let message = null;
  const listeners = new Set();

  socket.onmessage = (event) => {
    message = event.data;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const getSnapshot = () => {
    return message;
  };

  return { subscribe, getSnapshot };
};

const { subscribe, getSnapshot } = createWebSocketConnection("ws://example.com");

const WebSocketComponent = () => {
  const message = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      <p>Mensaje recibido: {message}</p>
    </div>
  );
};

export default WebSocketComponent;`,
      conclusion: {
        es: "🔥 Beneficio: El componente se suscribe a una API externa y se sincroniza automáticamente con los cambios.",
        en: "🔥 Benefit: The component subscribes to an external API and automatically synchronizes with changes."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useSyncExternalStore",
        en: "3️⃣ Practical example of useSyncExternalStore"
      },
      caseTitle: {
        es: "Integración con una biblioteca de gestión de estado",
        en: "Integration with a state management library"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar useSyncExternalStore para integrar un componente con una biblioteca de gestión de estado como Redux.",
        en: "This example demonstrates how to use useSyncExternalStore to integrate a component with a state management library like Redux."
      },
      code: `import { useSyncExternalStore } from "react";
import { store } from "./reduxStore"; // Supongamos que ya existe un store de Redux

const ReduxComponent = () => {
  const state = useSyncExternalStore(
    (listener) => store.subscribe(listener),
    () => store.getState()
  );

  return (
    <div>
      <p>Estado de Redux: {JSON.stringify(state)}</p>
    </div>
  );
};

export default ReduxComponent;`,
      conclusion: {
        es: "🔥 Beneficio: El componente se sincroniza con el estado de Redux sin necesidad de usar conectores o hooks específicos de Redux.",
        en: "🔥 Benefit: The component synchronizes with Redux state without needing to use Redux-specific connectors or hooks."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar useSyncExternalStore?",
        en: "📌 When NOT to use useSyncExternalStore?"
      },
      content: {
        es: [
          "❌ Si el estado es interno al componente y no necesita sincronizarse con un almacenamiento externo.",
          "❌ Si no estás trabajando con un almacenamiento externo o una API de suscripción.",
          "❌ Si el almacenamiento externo no proporciona un mecanismo de suscripción."
        ],
        en: [
          "❌ If the state is internal to the component and does not need to sync with an external store.",
          "❌ If you are not working with an external store or subscription API.",
          "❌ If the external store does not provide a subscription mechanism."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useSyncExternalStore es ideal para integrar componentes con almacenamientos externos o APIs de suscripción.",
      "✅ Simplifica la sincronización del estado de un componente con fuentes externas.",
      "✅ No debe usarse para estados internos que no requieren sincronización externa."
    ],
    en: [
      "✅ useSyncExternalStore is ideal for integrating components with external stores or subscription APIs.",
      "✅ It simplifies synchronizing a component's state with external sources.",
      "✅ It should not be used for internal states that do not require external synchronization."
    ]
  }
};

export default concept;