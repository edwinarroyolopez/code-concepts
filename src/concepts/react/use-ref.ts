import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useRef en React",
  slug: "use-ref",
  description:
    "useRef es un hook de React que permite crear referencias persistentes entre renders, útil para acceder a elementos del DOM o mantener valores sin provocar re-renderizados.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const myRef = useRef(initialValue);`,
      content:
        "useRef devuelve un objeto mutable cuya propiedad `.current` puede almacenar valores sin causar re-renderizados del componente.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useRef?",
      content: [
        "Cuando necesitas acceder directamente a un elemento del DOM.",
        "Cuando quieres almacenar valores sin provocar re-renderizados.",
        "Cuando necesitas manejar referencias entre renders sin afectar el estado.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre useRef y useState",
      headers: ["Característica", "useRef", "useState"],
      rows: [
        ["Provoca re-render", "❌ No", "✅ Sí"],
        ["Referencia a DOM", "✅ Sí", "❌ No"],
        ["Mantiene valor entre renders", "✅ Sí", "✅ Sí"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useRef",
      caseTitle: "Acceder a un input sin re-render",
      caseDescription:
        "Este ejemplo usa `useRef` para enfocar un input sin re-renderizar el componente.",
      code: `
        import { useRef } from "react";

        const FocusInput = () => {
          const inputRef = useRef(null);

          const handleClick = () => {
            inputRef.current.focus();
          };

          return (
            <div>
              <input ref={inputRef} type="text" placeholder="Escribe algo..." />
              <button onClick={handleClick}>Enfocar</button>
            </div>
          );
        };

        export default FocusInput;
      `,
      conclusion:
        "🔥 Beneficio: Permite manipular el DOM directamente sin afectar el rendimiento.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useRef",
      caseTitle: "Contador sin re-renderizado",
      caseDescription:
        "Usar `useRef` para almacenar un valor que no provoca re-render.",
      code: `
        import { useRef, useState } from "react";

        const CounterExample = () => {
          const countRef = useRef(0);
          const [, forceRender] = useState(0);

          const increment = () => {
            countRef.current += 1;
            console.log("Valor actual:", countRef.current);
          };

          return (
            <div>
              <p>El contador no re-renderiza: {countRef.current}</p>
              <button onClick={increment}>Incrementar</button>
              <button onClick={() => forceRender((prev) => prev + 1)}>Forzar Render</button>
            </div>
          );
        };

        export default CounterExample;
      `,
      conclusion:
        "🔥 Beneficio: Almacenar valores sin afectar la renderización del componente.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useRef",
      caseTitle: "Persistencia de valores entre renders",
      caseDescription:
        "Se usa `useRef` para guardar valores entre renders sin afectar la UI.",
      code: `
        import { useRef, useEffect } from "react";

        const TimerExample = () => {
          const renderCount = useRef(0);

          useEffect(() => {
            renderCount.current += 1;
          });

          return <p>El componente se ha renderizado {renderCount.current} veces.</p>;
        };

        export default TimerExample;
      `,
      conclusion:
        "🔥 Beneficio: Permite contar renders sin alterar la UI o el estado.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useRef?",
      content: [
        "❌ Si necesitas que un cambio de valor provoque una actualización en la UI, usa `useState`.",
        "❌ Si la referencia es para manejar lógica de estado compleja, `useReducer` es una mejor opción.",
        "❌ Si necesitas compartir estado entre componentes, `useContext` o un estado global son mejores opciones.",
      ],
    },
  ],
  conclusion: [
    "✅ `useRef` es útil para acceder a elementos del DOM sin causar re-render.",
    "✅ Permite almacenar valores entre renders sin afectar el estado del componente.",
    "✅ Se usa para contar renders, manejar timers y referencias directas en el DOM.",
  ],
};

export default concept;
