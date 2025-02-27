import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useTransition en React",
  slug: "use-transition",
  description:
    "useTransition es un hook de React que permite diferenciar entre actualizaciones de estado urgentes y no urgentes, evitando bloqueos en la UI cuando se realizan tareas costosas.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const [isPending, startTransition] = useTransition();`,
      content:
        "useTransition devuelve un booleano (`isPending`) que indica si la actualización está en curso y una función (`startTransition`) que envuelve el código a ejecutar de manera no bloqueante.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useTransition?",
      content: [
        "Cuando una actualización de estado es costosa y ralentiza la UI.",
        "Cuando se necesita mantener la UI responsiva mientras se carga contenido pesado.",
        "Cuando hay listas grandes, filtrados o cambios de vista con cálculos complejos.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre actualizaciones normales y useTransition",
      headers: ["Característica", "Actualización normal", "useTransition"],
      rows: [
        ["Bloquea la UI", "⚠️ Sí, si la tarea es costosa", "✅ No, mantiene la UI responsiva"],
        ["Prioridad de la actualización", "🔴 Siempre urgente", "🟢 Diferencia entre urgente y no urgente"],
        ["Uso recomendado", "🚀 Estados simples y rápidos", "📊 Cálculos costosos o listas grandes"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useTransition",
      caseTitle: "Filtrar una lista grande sin bloquear la UI",
      caseDescription:
        "Este ejemplo muestra cómo filtrar una lista extensa sin que la interfaz se congele.",
      code: `
        import { useState, useTransition } from "react";

        const LargeListFilter = ({ items }) => {
          const [query, setQuery] = useState("");
          const [filteredItems, setFilteredItems] = useState(items);
          const [isPending, startTransition] = useTransition();

          const handleSearch = (e) => {
            setQuery(e.target.value);
            startTransition(() => {
              setFilteredItems(items.filter(item => item.includes(e.target.value)));
            });
          };

          return (
            <div>
              <input type="text" value={query} onChange={handleSearch} placeholder="Buscar..." />
              {isPending && <p>Cargando resultados...</p>}
              <ul>
                {filteredItems.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          );
        };

        export default LargeListFilter;
      `,
      conclusion:
        "🔥 Beneficio: La UI sigue siendo interactiva mientras se filtran los datos, mejorando la experiencia del usuario.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useTransition",
      caseTitle: "Cambio de vista con renderizado costoso",
      caseDescription:
        "Este ejemplo muestra cómo evitar bloqueos cuando se cambia entre vistas con contenido complejo.",
      code: `
        import { useState, useTransition } from "react";

        const HeavyComponent = () => {
          let items = Array.from({ length: 5000 }, (_, i) => <p key={i}>Elemento {i}</p>);
          return <div>{items}</div>;
        };

        const ViewSwitcher = () => {
          const [show, setShow] = useState(false);
          const [isPending, startTransition] = useTransition();

          const toggleView = () => {
            startTransition(() => setShow(prev => !prev));
          };

          return (
            <div>
              <button onClick={toggleView}>Cambiar Vista</button>
              {isPending && <p>Cargando vista...</p>}
              {show && <HeavyComponent />}
            </div>
          );
        };

        export default ViewSwitcher;
      `,
      conclusion:
        "🔥 Beneficio: La UI no se congela cuando se renderiza un componente pesado.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useTransition",
      caseTitle: "Cargar datos sin afectar la interacción",
      caseDescription:
        "Este ejemplo usa useTransition para evitar bloqueos mientras se recuperan datos simulados.",
      code: `
        import { useState, useTransition } from "react";

        const FetchSimulation = () => {
          const [data, setData] = useState([]);
          const [isPending, startTransition] = useTransition();

          const fetchData = () => {
            startTransition(() => {
              setTimeout(() => {
                setData(["Dato 1", "Dato 2", "Dato 3"]);
              }, 2000);
            });
          };

          return (
            <div>
              <button onClick={fetchData}>Cargar Datos</button>
              {isPending && <p>Cargando datos...</p>}
              <ul>{data.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </div>
          );
        };

        export default FetchSimulation;
      `,
      conclusion:
        "🔥 Beneficio: La aplicación sigue respondiendo mientras se simula la carga de datos.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useTransition?",
      content: [
        "❌ Si el estado es simple y no afecta el rendimiento.",
        "❌ Si la actualización es instantánea y no bloquea la UI.",
        "❌ Si la lógica no requiere diferenciar entre tareas urgentes y no urgentes.",
      ],
    },
  ],
  conclusion: [
    "✅ useTransition es útil cuando un cambio de estado es costoso y puede bloquear la UI.",
    "✅ Se usa en listas grandes, filtrados y cambios de vista complejos.",
    "✅ Mejora la experiencia del usuario manteniendo la UI responsiva.",
  ],
};

export default concept;
