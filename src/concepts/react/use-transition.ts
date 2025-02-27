import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useTransition en React",
  slug: "use-transition",
  description:
    "useTransition es un hook de React que permite marcar actualizaciones de estado como transiciones, lo que ayuda a mejorar la experiencia del usuario al evitar bloqueos en la interfaz.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const [isPending, startTransition] = useTransition();`,
      content:
        "useTransition devuelve un estado de transición y una función para iniciar una actualización diferida. Las actualizaciones dentro de esta función no bloquean la interfaz.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useTransition?",
      content: [
        "Cuando tienes actualizaciones de estado costosas que afectan el rendimiento.",
        "Cuando quieres evitar bloqueos en la interfaz al cambiar el estado.",
        "Cuando una acción del usuario requiere feedback inmediato, pero también actualiza datos de manera secundaria.",
      ],
    },
    {
      type: "table",
      title: "🔹Diferencias entre actualizaciones normales y transiciones",
      headers: ["Característica", "Actualización normal", "useTransition"],
      rows: [
        ["Bloquea la interfaz", "✅ Sí", "🚀 No, mantiene la fluidez"],
        ["Prioridad", "⚠️ Inmediata", "✅ Diferida, no interrumpe"],
        ["Experiencia de usuario", "❌ Puede ser lenta", "✅ Más fluida"],
      ],
    },
    {
      type: "list",
      title: "🔹Casos de uso de useTransition",
      content: [
        "Filtrados o búsquedas en listas grandes sin afectar la interacción.",
        "Renderizado de grandes volúmenes de datos sin bloqueos.",
        "Evitar bloqueos al cambiar entre vistas en una aplicación compleja.",
      ],
    },
    {
      type: "example",
      title: "🔹Ejemplo práctico de useTransition",
      caseTitle: "Filtrado de una lista sin bloquear la interfaz",
      caseDescription:
        "Este ejemplo muestra cómo usar useTransition para evitar bloqueos al filtrar una lista grande de elementos.",
      code: `
        import { useState, useTransition } from "react";

        const items = Array.from({ length: 10000 }, (_, i) => Item ${"i" + 1});

        const ListFilter = () => {
          const [query, setQuery] = useState("");
          const [filteredItems, setFilteredItems] = useState(items);
          const [isPending, startTransition] = useTransition();

          const handleSearch = (e) => {
            setQuery(e.target.value);
            startTransition(() => {
              setFilteredItems(items.filter((item) => item.includes(e.target.value)));
            });
          };

          return (
            <div>
              <input type="text" value={query} onChange={handleSearch} placeholder="Buscar..." />
              {isPending && <p>Cargando resultados...</p>}
              <ul>
                {filteredItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        };

        export default ListFilter;
      `,
      conclusion:
        "🔥 Beneficio: Con useTransition, las búsquedas en la lista se ejecutan sin bloquear la interfaz, mejorando la experiencia del usuario.",
    },
    {
      type: "example",
      title: "🔹Ejemplo práctico de useTransition",
      caseTitle: "2️⃣ Cambio de vista con renderizado costoso",
      caseDescription:
        "Si cambiar de pestaña dispara un re-render complejo, la UI podría sentirse lenta. useTransition lo convierte en una transición suave.",
      code: `
          import { useState, useTransition } from 'react';

          export default function Tabs() {
            const [tab, setTab] = useState('A');
            const [isPending, startTransition] = useTransition();

            const handleTabChange = (newTab) => {
              startTransition(() => {
                setTab(newTab);
              });
            };

            return (
              <div>
                <button onClick={() => handleTabChange('A')}>Tab A</button>
                <button onClick={() => handleTabChange('B')}>Tab B</button>

                {isPending && <p>Cargando contenido...</p>}

                {tab === 'A' ? <HeavyComponentA /> : <HeavyComponentB />}
              </div>
            );
          }

          function HeavyComponentA() {
            return <div>Contenido pesado A</div>;
          }

          function HeavyComponentB() {
            return <div>Contenido pesado B</div>;
          }
      `,
      conclusion:
        "🔥 Beneficio: Sin useTransition, la UI puede congelarse al cambiar de pestaña. Con useTransition, la transición es fluida y React procesa los cambios sin afectar la interacción.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useTransition?",
      content: [
        "❌ Si las actualizaciones deben ser inmediatas sin retraso.",
        "❌ Si la actualización del estado no afecta el rendimiento.",
        "❌ Si la aplicación ya es fluida sin bloqueos en la UI.",
      ],
    },
  ],
  conclusion:
    [
      "✅ useTransition es útil cuando un cambio de estado es costoso y puede bloquear la UI.",
      "✅ Se usa en listas grandes, filtrados, y cambios de vista complejos.",
      "✅ Mejora la experiencia del usuario manteniendo la UI responsiva."
    ],
}

export default concept;
