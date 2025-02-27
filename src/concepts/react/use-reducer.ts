import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useReducer en React",
  slug: "use-reducer",
  description:
    "useReducer es un hook de React que se usa para manejar estados más complejos y lógicos que dependen del estado previo. Es una alternativa a useState cuando la gestión del estado requiere múltiples subvalores o lógica avanzada.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      content:
        "useReducer toma un reducer (una función que determina cómo cambia el estado) y un estado inicial. Devuelve el estado actual y una función dispatch para actualizarlo.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useReducer en lugar de useState?",
      content: [
        "Cuando el estado tiene múltiples subvalores que cambian juntos.",
        "Cuando las actualizaciones del estado dependen del estado anterior.",
        "Cuando quieres centralizar la lógica de actualización en un solo lugar.",
      ],
    },
    {
      type: "table",
      title: "🔹Tabla comparativa entre useState y useReducer",
      headers: ["Característica", "useState", "useReducer"],
      rows: [
        ["Simplicidad", "✅ Fácil de usar", "🚀 Mejor para lógica compleja"],
        ["Múltiples valores", "❌ Requiere varios estados", "✅ Manejo centralizado"],
        ["Dependencia del estado previo", "⚠️ Potencialmente problemático", "✅ Reducer maneja cambios secuenciales"],
      ],
    },
    {
      type: "list",
      title: "🔹Casos de uso de useReducer",
      content: [
        "Manejo de formularios complejos.",
        "Contadores avanzados con múltiples acciones.",
        "Gestión de carritos de compras en e-commerce.",
      ],
    },
    {
      type: "example",
      title: "🔹Ejemplo práctico de useReducer",
      caseTitle: "Manejo de formulario con useReducer",
      caseDescription:
        "Este ejemplo muestra cómo manejar el estado de un formulario usando useReducer, centralizando la lógica de actualización.",
      code: `
        import { useReducer } from "react";

        const formReducer = (state, action) => {
          switch (action.type) {
            case "SET_NAME":
              return { ...state, name: action.payload };
            case "SET_EMAIL":
              return { ...state, email: action.payload };
            case "RESET":
              return { name: "", email: "" };
            default:
              return state;
          }
        };

        const FormExample = () => {
          const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

          return (
            <div>
              <input
                type="text"
                value={state.name}
                onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                placeholder="Nombre"
              />
              <input
                type="email"
                value={state.email}
                onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                placeholder="Correo"
              />
              <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
          );
        };

        export default FormExample;
      `,
      conclusion:
        "Con useReducer, todas las actualizaciones están en una sola función (formReducer), en lugar de manejar múltiples useState.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useReducer?",
      content: [
        "❌ Si el estado es simple (booleanos, strings, números). Usa useState mejor.",
        "❌ Si las actualizaciones del estado no dependen del estado anterior.",
        "❌ Si el estado no es lo suficientemente complejo como para justificar su uso.",
      ],
    },
  ],
  conclusion:
    "useReducer es una gran opción cuando el estado es complejo o tiene múltiples valores interdependientes. Es útil cuando se necesita una lógica de actualización estructurada y centralizada.",
};

export default concept;
