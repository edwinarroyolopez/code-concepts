import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useState en React",
  slug: "use-state",
  description:
    "useState es un hook de React que permite gestionar el estado dentro de un componente funcional. Es ideal para estados simples y locales.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const [state, setState] = useState(initialValue);`,
      content:
        "useState devuelve un array con dos elementos: el estado actual y una función para actualizarlo. Al llamar setState, React re-renderiza el componente.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useState?",
      content: [
        "Cuando el estado es local a un componente y no necesita compartirse.",
        "Cuando el estado es simple y no requiere lógica avanzada de actualización.",
        "Cuando se necesita un estado reactivo que cause un re-render al cambiar.",
      ],
    },
    {
      type: "table",
      title: "🔹Diferencias entre useState y useReducer",
      headers: ["Característica", "useState", "useReducer"],
      rows: [
        ["Simplicidad", "✅ Fácil de usar", "🚀 Mejor para lógica compleja"],
        ["Múltiples valores", "❌ Requiere varios estados", "✅ Manejo centralizado"],
        ["Dependencia del estado previo", "⚠️ Potencialmente problemático", "✅ Reducer maneja cambios secuenciales"],
      ],
    },
    {
      type: "example",
      title: "🔹Ejemplo práctico de useState",
      caseTitle: "Contador simple con useState",
      caseDescription:
        "Este ejemplo muestra cómo usar useState para manejar un contador.",
      code: `
        import { useState } from "react";

        const Counter = () => {
          const [count, setCount] = useState(0);

          return (
            <div>
              <p>Contador: {count}</p>
              <button onClick={() => setCount(count + 1)}>Incrementar</button>
            </div>
          );
        };

        export default Counter;
      `,
      conclusion:
        "🔥 Beneficio: useState es ideal para estados simples como contadores, booleanos y cadenas de texto.",
    },
    {
      type: "example",
      title: "🔹Ejemplo práctico de useState",
      caseTitle: "Formulario controlado con useState",
      caseDescription:
        "Manejar el estado de inputs de formularios con useState para actualización en tiempo real.",
      code: `
        import { useState } from "react";

        const FormExample = () => {
          const [name, setName] = useState("");

          return (
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
              />
              <p>Hola, {name}!</p>
            </div>
          );
        };

        export default FormExample;
      `,
      conclusion:
        "🔥 Beneficio: useState permite gestionar formularios sin necesidad de una librería externa como Formik o React Hook Form.",
    },
    {
      type: "example",
      title: "🔹Ejemplo práctico de useState",
      caseTitle: "Mostrar/Ocultar contenido con useState",
      caseDescription:
        "Usar useState para alternar la visibilidad de un componente o texto.",
      code: `
        import { useState } from "react";

        const ToggleExample = () => {
          const [isVisible, setIsVisible] = useState(false);

          return (
            <div>
              <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Ocultar" : "Mostrar"} Mensaje
              </button>
              {isVisible && <p>¡Hola, mundo!</p>}
            </div>
          );
        };

        export default ToggleExample;
      `,
      conclusion:
        "🔥 Beneficio: useState es perfecto para cambios de UI como mostrar/ocultar elementos sin afectar el rendimiento.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useState?",
      content: [
        "❌ Si el estado es complejo y requiere múltiples subvalores, usa useReducer.",
        "❌ Si el estado debe ser compartido entre múltiples componentes, usa un contexto o Redux.",
        "❌ Si necesitas un estado derivado de una consulta externa, usa React Query.",
      ],
    },
  ],
  conclusion:
    "useState es la mejor opción cuando se necesita manejar estados simples y locales dentro de un componente. Es fácil de usar y eficiente para actualizaciones rápidas en la UI.",
};

export default concept;