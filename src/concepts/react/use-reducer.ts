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
      code: `const [state, dispatch] = useReducer(reducer, initialState);`,
      content:
        "useReducer toma una función reducer y un estado inicial. Devuelve el estado actual y una función dispatch para actualizarlo.",
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
      title: "🔹Comparación entre useState y useReducer",
      headers: ["Característica", "useState", "useReducer"],
      rows: [
        ["Simplicidad", "✅ Fácil de usar", "🚀 Mejor para lógica compleja"],
        ["Múltiples valores", "❌ Requiere varios estados", "✅ Manejo centralizado"],
        ["Dependencia del estado previo", "⚠️ Puede ser problemático", "✅ Reducer maneja cambios secuenciales"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useReducer",
      caseTitle: "Contador avanzado con useReducer",
      caseDescription:
        "Este ejemplo muestra cómo usar useReducer para manejar un contador con múltiples acciones.",
      code: `
        import { useReducer } from "react";

        const counterReducer = (state, action) => {
          switch (action.type) {
            case "INCREMENT":
              return { count: state.count + 1 };
            case "DECREMENT":
              return { count: state.count - 1 };
            case "RESET":
              return { count: 0 };
            default:
              return state;
          }
        };

        const Counter = () => {
          const [state, dispatch] = useReducer(counterReducer, { count: 0 });

          return (
            <div>
              <p>Contador: {state.count}</p>
              <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
              <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
              <button onClick={() => dispatch({ type: "RESET" })}>🔄 Reset</button>
            </div>
          );
        };

        export default Counter;
      `,
      conclusion:
        "🔥 Beneficio: Con useReducer, la lógica de actualización del contador está centralizada y organizada.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useReducer",
      caseTitle: "Manejo de formulario con useReducer",
      caseDescription:
        "Este ejemplo muestra cómo manejar el estado de un formulario con useReducer, manteniendo toda la lógica centralizada.",
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
        "🔥 Beneficio: Con useReducer, la actualización del formulario está centralizada en una sola función, evitando múltiples llamadas a useState.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useReducer",
      caseTitle: "Gestión de carrito de compras con useReducer",
      caseDescription:
        "Un ejemplo de cómo manejar un carrito de compras con useReducer para agregar, eliminar y vaciar productos.",
      code: `
        import { useReducer } from "react";

        const cartReducer = (state, action) => {
          switch (action.type) {
            case "ADD_ITEM":
              return [...state, action.payload];
            case "REMOVE_ITEM":
              return state.filter((item) => item.id !== action.payload.id);
            case "CLEAR_CART":
              return [];
            default:
              return state;
          }
        };

        const ShoppingCart = () => {
          const [cart, dispatch] = useReducer(cartReducer, []);

          return (
            <div>
              <button onClick={() => dispatch({ type: "ADD_ITEM", payload: { id: 1, name: "Producto 1" } })}>
                🛒 Agregar Producto 1
              </button>
              <button onClick={() => dispatch({ type: "CLEAR_CART" })}>🗑 Vaciar Carrito</button>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name}{" "}
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>❌</button>
                  </li>
                ))}
              </ul>
            </div>
          );
        };

        export default ShoppingCart;
      `,
      conclusion:
        "🔥 Beneficio: useReducer facilita la gestión de estados complejos como un carrito de compras, agrupando toda la lógica en un solo reducer.",
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
