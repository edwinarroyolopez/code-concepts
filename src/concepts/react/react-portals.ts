import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Portales para Renderizado Fuera de la Jerarquía DOM",
    en: "Portals for Rendering Outside the DOM Hierarchy"
  },
  slug: "react-portals",
  description: {
    es: "Los Portales en React permiten renderizar componentes fuera de la jerarquía del DOM principal. Esto es útil para elementos como modales, tooltips o menús desplegables que necesitan estar fuera del flujo normal del DOM sin romper la estructura lógica de los componentes.",
    en: "Portals in React allow rendering components outside the main DOM hierarchy. This is useful for elements like modals, tooltips, or dropdown menus that need to be outside the normal DOM flow without breaking the logical structure of the components."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Portales?",
        en: "🔹What are Portals?"
      },
      code: `ReactDOM.createPortal(child, container);`,
      content: {
        es: "Los Portales son una característica de React que permite renderizar un componente en un nodo del DOM que no forma parte de la jerarquía principal del árbol de componentes. Esto mantiene la lógica de React intacta mientras permite un control más preciso sobre el DOM.",
        en: "Portals are a feature of React that allows rendering a component into a DOM node that is not part of the main component tree hierarchy. This keeps React's logic intact while providing more precise control over the DOM."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Portales?",
        en: "🔹When to use Portals?"
      },
      content: {
        es: [
          "Cuando necesitas renderizar elementos como modales, tooltips o menús desplegables fuera del flujo normal del DOM.",
          "Cuando deseas evitar problemas de posicionamiento o estilos causados por la jerarquía del DOM.",
          "Cuando quieres mantener la lógica de React intacta mientras controlas explícitamente dónde se renderiza un componente."
        ],
        en: [
          "When you need to render elements like modals, tooltips, or dropdown menus outside the normal DOM flow.",
          "When you want to avoid positioning or styling issues caused by the DOM hierarchy.",
          "When you want to keep React's logic intact while explicitly controlling where a component is rendered."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Portales y Renderizado Normal",
        en: "🔹Comparison between Portals and Normal Rendering"
      },
      headers: {
        es: ["Característica", "Portales", "Renderizado Normal"],
        en: ["Feature", "Portals", "Normal Rendering"]
      },
      rows: [
        {
          es: ["Ubicación en el DOM", "✅ Fuera de la jerarquía principal", "❌ Dentro de la jerarquía principal"],
          en: ["Location in DOM", "✅ Outside the main hierarchy", "❌ Within the main hierarchy"]
        },
        {
          es: ["Control de posicionamiento", "✅ Mayor control", "❌ Menor control"],
          en: ["Positioning control", "✅ Greater control", "❌ Less control"]
        },
        {
          es: ["Mantenimiento de lógica", "✅ Intacta (React)", "✅ Intacta (React)"],
          en: ["Logic maintenance", "✅ Intact (React)", "✅ Intact (React)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Portales",
        en: "1️⃣ Practical example of Portals"
      },
      caseTitle: {
        es: "Uso básico de Portales",
        en: "Basic usage of Portals"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `ReactDOM.createPortal` para renderizar un modal fuera de la jerarquía principal del DOM.",
        en: "This example demonstrates how to use `ReactDOM.createPortal` to render a modal outside the main DOM hierarchy."
      },
      code: `import React from 'react';
import ReactDOM from 'react-dom';

// Componente Modal
function Modal({ children }) {
  // Nodo del DOM donde se renderizará el modal
  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid #ccc' }}>
      {children}
    </div>,
    modalRoot
  );
}

// Componente principal
function App() {
  return (
    <div>
      <h1>Contenido Principal</h1>
      <Modal>
        <p>Este es un modal renderizado fuera de la jerarquía principal.</p>
      </Modal>
    </div>
  );
}

export default App;

// En index.html:
// <div id="root"></div>
// <div id="modal-root"></div>`,
      conclusion: {
        es: "🔥 Beneficio: El modal se renderiza en un nodo separado (`modal-root`) fuera de la jerarquía principal, evitando problemas de posicionamiento y estilos.",
        en: "🔥 Benefit: The modal is rendered in a separate node (`modal-root`) outside the main hierarchy, avoiding positioning and styling issues."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Portales",
        en: "2️⃣ Practical example of Portals"
      },
      caseTitle: {
        es: "Tooltips con Portales",
        en: "Tooltips with Portals"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Portales para renderizar tooltips fuera de la jerarquía principal del DOM.",
        en: "This example demonstrates how to use Portals to render tooltips outside the main DOM hierarchy."
      },
      code: `import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Componente Tooltip
function Tooltip({ children, text }) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRoot = document.getElementById('tooltip-root');

  return (
    <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible &&
        ReactDOM.createPortal(
          <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'black', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>
            {text}
          </div>,
          tooltipRoot
        )}
    </div>
  );
}

// Componente principal
function App() {
  return (
    <div>
      <h1>Pasa el ratón sobre el botón:</h1>
      <Tooltip text="¡Soy un tooltip!">
        <button>Botón con Tooltip</button>
      </Tooltip>
    </div>
  );
}

export default App;

// En index.html:
// <div id="root"></div>
// <div id="tooltip-root"></div>`,
      conclusion: {
        es: "🔥 Beneficio: El tooltip se renderiza en un nodo separado (`tooltip-root`), lo que evita conflictos con el flujo normal del DOM.",
        en: "🔥 Benefit: The tooltip is rendered in a separate node (`tooltip-root`), avoiding conflicts with the normal DOM flow."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Portales",
        en: "3️⃣ Practical example of Portals"
      },
      caseTitle: {
        es: "Menú desplegable con Portales",
        en: "Dropdown Menu with Portals"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Portales para renderizar un menú desplegable fuera de la jerarquía principal del DOM.",
        en: "This example demonstrates how to use Portals to render a dropdown menu outside the main DOM hierarchy."
      },
      code: `import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Componente Dropdown
function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRoot = document.getElementById('dropdown-root');

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen &&
        ReactDOM.createPortal(
          <div style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: 'white', border: '1px solid #ccc', padding: '10px' }}>
            {children}
          </div>,
          dropdownRoot
        )}
    </div>
  );
}

// Componente principal
function App() {
  return (
    <div>
      <h1>Menú Desplegable con Portales</h1>
      <Dropdown>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default App;

// En index.html:
// <div id="root"></div>
// <div id="dropdown-root"></div>`,
      conclusion: {
        es: "🔥 Beneficio: El menú desplegable se renderiza en un nodo separado (`dropdown-root`), lo que mejora la flexibilidad y evita problemas de posicionamiento.",
        en: "🔥 Benefit: The dropdown menu is rendered in a separate node (`dropdown-root`), improving flexibility and avoiding positioning issues."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Portales?",
        en: "📌 When NOT to use Portales?"
      },
      content: {
        es: [
          "❌ Si el componente no necesita estar fuera del flujo normal del DOM.",
          "❌ Si prefieres mantener toda la lógica y estructura dentro de la jerarquía principal del DOM.",
          "❌ Si el uso de Portales introduce complejidad innecesaria en aplicaciones pequeñas."
        ],
        en: [
          "❌ If the component does not need to be outside the normal DOM flow.",
          "❌ If you prefer keeping all logic and structure within the main DOM hierarchy.",
          "❌ If using Portals introduces unnecessary complexity in small applications."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los Portales son ideales para renderizar elementos como modales, tooltips o menús desplegables fuera de la jerarquía principal del DOM.",
      "✅ Permiten evitar problemas de posicionamiento y estilos sin romper la lógica de React.",
      "✅ No deben usarse en exceso si no hay una necesidad clara de renderizado fuera del flujo normal del DOM."
    ],
    en: [
      "✅ Portals are ideal for rendering elements like modals, tooltips, or dropdown menus outside the main DOM hierarchy.",
      "✅ They help avoid positioning and styling issues without breaking React's logic.",
      "✅ They should not be overused if there is no clear need for rendering outside the normal DOM flow."
    ]
  }
};

export default concept;