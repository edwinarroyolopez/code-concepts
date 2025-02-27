import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useImperativeHandle en React",
  slug: "use-imperative-handle",
  description:
    "useImperativeHandle es un hook de React que permite personalizar los métodos expuestos por un componente cuando se usa con `forwardRef`. Se usa principalmente para interactuar con componentes controlados desde el padre.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `useImperativeHandle(ref, () => ({ customMethod() { ... } }));`,
      content:
        "useImperativeHandle permite exponer métodos o valores específicos desde un componente hijo para que el padre los pueda invocar a través de una referencia (`ref`). Se usa junto con `forwardRef`.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useImperativeHandle?",
      content: [
        "Cuando se necesita que un componente hijo exponga métodos específicos al padre.",
        "Cuando se requiere manipular un componente sin exponer toda su implementación.",
        "Cuando se trabaja con componentes controlados como inputs o modales personalizados.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre refs normales y useImperativeHandle",
      headers: ["Característica", "Refs normales", "useImperativeHandle"],
      rows: [
        ["Accede a nodos del DOM", "✅ Sí", "✅ Sí"],
        ["Expone métodos personalizados", "❌ No", "✅ Sí"],
        ["Encapsula lógica interna", "❌ No", "✅ Sí, evita exponer detalles innecesarios"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useImperativeHandle",
      caseTitle: "Manipulación de un input desde el padre",
      caseDescription:
        "Este ejemplo muestra cómo exponer un método `focus` desde un componente hijo para ser llamado desde el padre.",
      code: `
        import { useRef, forwardRef, useImperativeHandle } from "react";

        const CustomInput = forwardRef((props, ref) => {
          const inputRef = useRef();

          useImperativeHandle(ref, () => ({
            focus: () => {
              inputRef.current.focus();
            },
          }));

          return <input ref={inputRef} {...props} />;
        });

        const ParentComponent = () => {
          const inputRef = useRef();

          return (
            <div>
              <CustomInput ref={inputRef} placeholder="Escribe algo..." />
              <button onClick={() => inputRef.current.focus()}>Enfocar input</button>
            </div>
          );
        };

        export default ParentComponent;
      `,
      conclusion:
        "🔥 Beneficio: Permite controlar el input desde el padre sin exponer su implementación interna.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useImperativeHandle",
      caseTitle: "Control de un modal desde el componente padre",
      caseDescription:
        "Este ejemplo muestra cómo exponer métodos `open` y `close` para controlar un modal desde el padre.",
      code: `
        import { useState, useRef, forwardRef, useImperativeHandle } from "react";

        const Modal = forwardRef((_, ref) => {
          const [isOpen, setIsOpen] = useState(false);

          useImperativeHandle(ref, () => ({
            open: () => setIsOpen(true),
            close: () => setIsOpen(false),
          }));

          if (!isOpen) return null;

          return (
            <div className="modal">
              <p>Este es un modal</p>
              <button onClick={() => setIsOpen(false)}>Cerrar</button>
            </div>
          );
        });

        const App = () => {
          const modalRef = useRef();

          return (
            <div>
              <button onClick={() => modalRef.current.open()}>Abrir Modal</button>
              <Modal ref={modalRef} />
            </div>
          );
        };

        export default App;
      `,
      conclusion:
        "🔥 Beneficio: Permite controlar el modal desde el padre sin necesidad de pasar estado como props.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useImperativeHandle",
      caseTitle: "Componente de lista con métodos expuestos",
      caseDescription:
        "Este ejemplo permite agregar y limpiar elementos de una lista desde el componente padre.",
      code: `
        import { useState, useRef, forwardRef, useImperativeHandle } from "react";

        const List = forwardRef((_, ref) => {
          const [items, setItems] = useState([]);

          useImperativeHandle(ref, () => ({
            addItem: (item) => setItems((prev) => [...prev, item]),
            clearItems: () => setItems([]),
          }));

          return (
            <div>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        });

        const ParentComponent = () => {
          const listRef = useRef();

          return (
            <div>
              <button onClick={() => listRef.current.addItem("Nuevo ítem")}>
                Agregar Ítem
              </button>
              <button onClick={() => listRef.current.clearItems()}>
                Limpiar Lista
              </button>
              <List ref={listRef} />
            </div>
          );
        };

        export default ParentComponent;
      `,
      conclusion:
        "🔥 Beneficio: Permite manipular la lista desde el padre sin manejar estado adicional.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useImperativeHandle?",
      content: [
        "❌ Si el componente no necesita exponer métodos específicos al padre.",
        "❌ Si se puede lograr el mismo efecto con props o estado global.",
        "❌ Si se usa innecesariamente, puede aumentar la complejidad sin beneficios reales.",
      ],
    },
  ],
  conclusion: [
    "✅ useImperativeHandle permite exponer métodos específicos desde un componente hijo al padre.",
    "✅ Se usa junto con `forwardRef` para controlar inputs, modales y otros componentes personalizados.",
    "✅ Es útil para encapsular lógica y evitar exponer detalles internos innecesarios.",
  ],
};

export default concept;
