import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useSyncExternalStore en React",
  slug: "use-sync-external-store",
  description:
    "useSyncExternalStore es un hook de React diseñado para suscribirse a fuentes de estado externas, garantizando actualizaciones sincronizadas con el renderizado.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const state = useSyncExternalStore(subscribe, getSnapshot);`,
      content:
        "Este hook permite que los componentes se suscriban a un estado externo y se mantengan sincronizados con sus cambios. Es útil cuando el estado proviene de fuentes externas como Redux, stores personalizados o APIs en tiempo real.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useSyncExternalStore?",
      content: [
        "Cuando se necesita sincronizar el estado de un store externo con React.",
        "Cuando se trabaja con estados globales que deben actualizarse eficientemente.",
        "Cuando se integran fuentes de datos externas como WebSockets o almacenamiento compartido.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre useState, useEffect y useSyncExternalStore",
      headers: ["Característica", "useState + useEffect", "useSyncExternalStore"],
      rows: [
        ["Manejo de estado externo", "⚠️ Manual, con useEffect", "✅ Automático"],
        ["Optimización de renders", "⚠️ Puede causar renders innecesarios", "✅ Sincronización eficiente"],
        ["Facilidad de uso con stores", "❌ No es ideal", "✅ Diseñado para stores externos"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useSyncExternalStore",
      caseTitle: "Suscripción a un store de configuración",
      caseDescription:
        "Este ejemplo muestra cómo usar `useSyncExternalStore` para suscribirse a un store externo.",
      code: `
        import { useSyncExternalStore } from "react";

        const configStore = {
          _listeners: new Set(),
          _config: { theme: "light" },
          subscribe(callback) {
            this._listeners.add(callback);
            return () => this._listeners.delete(callback);
          },
          getSnapshot() {
            return this._config;
          },
          setConfig(newConfig) {
            this._config = newConfig;
            this._listeners.forEach(callback => callback());
          },
        };

        const ConfigComponent = () => {
          const config = useSyncExternalStore(
            configStore.subscribe.bind(configStore),
            configStore.getSnapshot.bind(configStore)
          );

          return <p>Tema actual: {config.theme}</p>;
        };

        export default ConfigComponent;
      `,
      conclusion:
        "🔥 Beneficio: Permite que los componentes escuchen cambios de un store externo sin necesidad de `useEffect`.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useSyncExternalStore",
      caseTitle: "Integración con WebSockets",
      caseDescription:
        "Suscribirse a datos en tiempo real desde un WebSocket usando `useSyncExternalStore`.",
      code: `
        import { useSyncExternalStore } from "react";

        const socketStore = {
          _listeners: new Set(),
          _message: "",
          subscribe(callback) {
            this._listeners.add(callback);
            return () => this._listeners.delete(callback);
          },
          getSnapshot() {
            return this._message;
          },
          setMessage(newMessage) {
            this._message = newMessage;
            this._listeners.forEach(callback => callback());
          },
        };

        // Simulación de un WebSocket
        setInterval(() => {
          socketStore.setMessage(\`Mensaje en tiempo real: \${new Date().toLocaleTimeString()}\`);
        }, 3000);

        const LiveMessages = () => {
          const message = useSyncExternalStore(
            socketStore.subscribe.bind(socketStore),
            socketStore.getSnapshot.bind(socketStore)
          );

          return <p>{message}</p>;
        };

        export default LiveMessages;
      `,
      conclusion:
        "🔥 Beneficio: Permite actualizar la UI en tiempo real con datos externos sin dependencia de `useEffect`.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useSyncExternalStore",
      caseTitle: "Suscripción a cambios en el almacenamiento local",
      caseDescription:
        "Escuchar cambios en el `localStorage` y actualizar la UI automáticamente.",
      code: `
        import { useSyncExternalStore } from "react";

        const localStorageStore = {
          _listeners: new Set(),
          subscribe(callback) {
            window.addEventListener("storage", callback);
            this._listeners.add(callback);
            return () => {
              window.removeEventListener("storage", callback);
              this._listeners.delete(callback);
            };
          },
          getSnapshot() {
            return localStorage.getItem("theme") || "light";
          },
        };

        const ThemeDisplay = () => {
          const theme = useSyncExternalStore(
            localStorageStore.subscribe.bind(localStorageStore),
            localStorageStore.getSnapshot.bind(localStorageStore)
          );

          return <p>Tema guardado: {theme}</p>;
        };

        export default ThemeDisplay;
      `,
      conclusion:
        "🔥 Beneficio: Permite sincronizar la UI con datos almacenados en el `localStorage` en tiempo real.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useSyncExternalStore?",
      content: [
        "❌ Si el estado es interno al componente, usa `useState` en su lugar.",
        "❌ Si el estado no necesita sincronización con fuentes externas, es innecesario.",
        "❌ Si la fuente externa ya tiene su propio sistema de suscripción eficiente.",
      ],
    },
  ],
  conclusion: [
    "✅ `useSyncExternalStore` es ideal para sincronizar la UI con estados externos en tiempo real.",
    "✅ Se usa para trabajar con stores globales, WebSockets y almacenamiento compartido.",
    "✅ Mejora el rendimiento al evitar renders innecesarios al suscribirse eficientemente.",
  ],
};

export default concept;
