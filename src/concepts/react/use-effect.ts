import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useEffect en React",
  slug: "use-effect",
  description:
    "useEffect es un hook de React que permite ejecutar efectos secundarios en los componentes funcionales, como llamadas a APIs, suscripciones o manipulación del DOM.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `useEffect(() => { /* efecto */ }, [dependencias]);`,
      content:
        "useEffect recibe una función de efecto y un array de dependencias. Se ejecuta tras el renderizado y nuevamente cuando cambian sus dependencias.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useEffect?",
      content: [
        "Cuando necesitas ejecutar código después del renderizado.",
        "Cuando trabajas con efectos secundarios como llamadas a APIs o suscripciones.",
        "Cuando quieres ejecutar código solo una vez al montar el componente.",
      ],
    },
    {
      type: "table",
      title: "🔹Variantes de uso de useEffect",
      headers: ["Caso", "Explicación"],
      rows: [
        ["Sin dependencias", "Se ejecuta en cada render."],
        ["Con un array vacío `[]`", "Solo se ejecuta una vez al montar el componente."],
        ["Con dependencias `[var]`", "Se ejecuta cuando `var` cambia."],
        ["Cleanup en return", "Se usa para limpiar suscripciones o efectos."],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useEffect",
      caseTitle: "Llamar a una API al montar el componente",
      caseDescription:
        "Este ejemplo usa `useEffect` para obtener datos de una API cuando el componente se monta.",
      code: `
        import { useState, useEffect } from "react";

        const FetchData = () => {
          const [data, setData] = useState(null);

          useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/1")
              .then(response => response.json())
              .then(json => setData(json));
          }, []);

          return <pre>{JSON.stringify(data, null, 2)}</pre>;
        };

        export default FetchData;
      `,
      conclusion:
        "🔥 Beneficio: Permite obtener datos de una API solo al montar el componente.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useEffect",
      caseTitle: "Actualizar el título del documento dinámicamente",
      caseDescription:
        "Este ejemplo cambia el título de la pestaña cada vez que el estado cambia.",
      code: `
        import { useState, useEffect } from "react";

        const DynamicTitle = () => {
          const [count, setCount] = useState(0);

          useEffect(() => {
            document.title = \`Contador: \${count}\`;
          }, [count]);

          return (
            <div>
              <p>Contador: {count}</p>
              <button onClick={() => setCount(count + 1)}>Incrementar</button>
            </div>
          );
        };

        export default DynamicTitle;
      `,
      conclusion:
        "🔥 Beneficio: Permite modificar el título de la página en respuesta a cambios de estado.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useEffect",
      caseTitle: "Limpiar un efecto al desmontar",
      caseDescription:
        "Este ejemplo muestra cómo limpiar un intervalo al desmontar el componente.",
      code: `
        import { useState, useEffect } from "react";

        const Timer = () => {
          const [seconds, setSeconds] = useState(0);

          useEffect(() => {
            const interval = setInterval(() => {
              setSeconds(prev => prev + 1);
            }, 1000);

            return () => clearInterval(interval);
          }, []);

          return <p>Tiempo: {seconds} segundos</p>;
        };

        export default Timer;
      `,
      conclusion:
        "🔥 Beneficio: Evita fugas de memoria limpiando efectos al desmontar el componente.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useEffect?",
      content: [
        "❌ Si puedes derivar el valor de un cálculo en el render, no uses `useEffect`.",
        "❌ Si solo quieres modificar el estado en respuesta a eventos, usa `useState`.",
        "❌ Si el efecto no tiene efectos secundarios, probablemente no necesites `useEffect`.",
      ],
    },
  ],
  conclusion: [
    "✅ `useEffect` permite manejar efectos secundarios en componentes funcionales.",
    "✅ Se usa para llamadas a APIs, suscripciones y manipulación del DOM.",
    "✅ Su cleanup evita fugas de memoria en eventos y suscripciones.",
  ],
};

export default concept;
