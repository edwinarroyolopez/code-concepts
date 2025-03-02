import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Repaints y Reflows",
    en: "Repaints and Reflows"
  },
  slug: "repaints-reflows",
  description: {
    es: "Los repaints y reflows son procesos internos del navegador que ocurren cuando se realizan cambios en el DOM o los estilos CSS. Los repaints afectan la apariencia visual sin cambiar el diseño, mientras que los reflows recalculan el diseño completo, lo que puede ser costoso en términos de rendimiento.",
    en: "Repaints and reflows are internal browser processes that occur when changes are made to the DOM or CSS styles. Repaints affect the visual appearance without changing the layout, while reflows recalculate the entire layout, which can be costly in terms of performance."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los Repaints y Reflows?",
        en: "🔹What are Repaints and Reflows?"
      },
      code: `// Ejemplo que causa un reflow
const element = document.getElementById('myElement');
element.style.width = '200px'; // Cambio de estilo que afecta el diseño

// Ejemplo que causa un repaint
element.style.backgroundColor = 'red'; // Cambio de estilo que no afecta el diseño`,
      content: {
        es: "Un **repaint** ocurre cuando se cambia un estilo visual que no afecta el diseño de la página, como el color de fondo o la opacidad. Un **reflow**, también conocido como **layout**, ocurre cuando se realizan cambios que afectan la estructura del documento, como modificar dimensiones, posición o agregar/eliminar elementos. Los reflows son más costosos en términos de rendimiento porque requieren recalculaciones completas del diseño.",
        en: "A **repaint** occurs when a visual style is changed without affecting the page layout, such as background color or opacity. A **reflow**, also known as **layout**, occurs when changes are made that affect the document structure, such as modifying dimensions, position, or adding/removing elements. Reflows are more expensive in terms of performance because they require complete layout recalculations."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo ocurren Repaints y Reflows?",
        en: "🔹When do Repaints and Reflows occur?"
      },
      content: {
        es: [
          "Cambios en propiedades CSS que afectan el diseño, como `width`, `height`, `margin` o `position` (reflow).",
          "Cambios en propiedades visuales como `color`, `background-color` o `visibility` (repaint).",
          "Agregar, eliminar o mover elementos en el DOM.",
          "Acceder a propiedades de diseño como `offsetWidth`, `offsetHeight` o `getComputedStyle` (forzando un reflow)."
        ],
        en: [
          "Changes to CSS properties that affect layout, such as `width`, `height`, `margin`, or `position` (reflow).",
          "Changes to visual properties like `color`, `background-color`, or `visibility` (repaint).",
          "Adding, removing, or moving elements in the DOM.",
          "Accessing layout properties like `offsetWidth`, `offsetHeight`, or `getComputedStyle` (forcing a reflow)."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Repaints y Reflows",
        en: "🔹Comparison between Repaints and Reflows"
      },
      headers: {
        es: ["Característica", "Repaint", "Reflow"],
        en: ["Feature", "Repaint", "Reflow"]
      },
      rows: [
        {
          es: ["Impacto visual", "✅ Solo apariencia", "✅ Estructura y apariencia"],
          en: ["Visual impact", "✅ Only appearance", "✅ Structure and appearance"]
        },
        {
          es: ["Costo de rendimiento", "✅ Bajo", "🔥 Alto"],
          en: ["Performance cost", "✅ Low", "🔥 High"]
        },
        {
          es: ["Ejemplos", "`color`, `background-color`", "`width`, `height`, `position`"],
          en: ["Examples", "`color`, `background-color`", "`width`, `height`, `position`"]
        },
        {
          es: ["Recalculación", "❌ No", "✅ Sí"],
          en: ["Recalculation", "❌ No", "✅ Yes"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Reflow",
        en: "1️⃣ Practical example of Reflow"
      },
      caseTitle: {
        es: "Cambio de Dimensiones que Provoca un Reflow",
        en: "Dimension Change Causing a Reflow"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo un cambio en las dimensiones de un elemento provoca un reflow.",
        en: "This example demonstrates how a change in an element's dimensions causes a reflow."
      },
      code: `// HTML inicial
<div id="box" style="width: 100px; height: 100px; background-color: blue;"></div>

// JavaScript
const box = document.getElementById('box');
box.style.width = '200px'; // Cambio que afecta el diseño (reflow)`,
      conclusion: {
        es: "🔥 Beneficio: Entender qué cambios provocan reflows ayuda a optimizar el rendimiento de la página.",
        en: "🔥 Benefit: Understanding what changes cause reflows helps optimize page performance."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Repaint",
        en: "2️⃣ Practical example of Repaint"
      },
      caseTitle: {
        es: "Cambio de Color que Provoca un Repaint",
        en: "Color Change Causing a Repaint"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo un cambio en el color de fondo de un elemento provoca un repaint.",
        en: "This example demonstrates how a change in an element's background color causes a repaint."
      },
      code: `// HTML inicial
<div id="box" style="width: 100px; height: 100px; background-color: blue;"></div>

// JavaScript
const box = document.getElementById('box');
box.style.backgroundColor = 'red'; // Cambio que no afecta el diseño (repaint)`,
      conclusion: {
        es: "🔥 Beneficio: Los cambios que solo afectan la apariencia visual son menos costosos en términos de rendimiento.",
        en: "🔥 Benefit: Changes that only affect visual appearance are less costly in terms of performance."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Optimización",
        en: "3️⃣ Practical example of Optimization"
      },
      caseTitle: {
        es: "Minimizar Reflows con Batch Updates",
        en: "Minimizing Reflows with Batch Updates"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo minimizar reflows agrupando cambios en el DOM.",
        en: "This example demonstrates how to minimize reflows by batching DOM changes."
      },
      code: `// Sin optimización (múltiples reflows)
const box = document.getElementById('box');
box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'green';

// Con optimización (un solo reflow)
const box = document.getElementById('box');
box.style.cssText = 'width: 200px; height: 200px; background-color: green;';`,
      conclusion: {
        es: "🔥 Beneficio: Agrupar cambios en el DOM reduce el número de reflows y mejora el rendimiento.",
        en: "🔥 Benefit: Batching DOM changes reduces the number of reflows and improves performance."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cómo evitar Reflows innecesarios?",
        en: "📌 How to avoid unnecessary Reflows?"
      },
      content: {
        es: [
          "Usa `cssText` para aplicar múltiples cambios de estilo a la vez.",
          "Evita acceder repetidamente a propiedades de diseño como `offsetWidth` o `offsetHeight` dentro de bucles.",
          "Usa fragmentos de documentos (`DocumentFragment`) para realizar múltiples cambios en el DOM antes de adjuntarlos al árbol principal.",
          "Minimiza el uso de animaciones que afecten propiedades de diseño, como `width` o `height`."
        ],
        en: [
          "Use `cssText` to apply multiple style changes at once.",
          "Avoid repeatedly accessing layout properties like `offsetWidth` or `offsetHeight` within loops.",
          "Use document fragments (`DocumentFragment`) to make multiple DOM changes before attaching them to the main tree.",
          "Minimize the use of animations that affect layout properties, such as `width` or `height`."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Los repaints afectan la apariencia visual sin cambiar el diseño, mientras que los reflows recalculan el diseño completo.",
      "✅ Minimizar reflows es crucial para mejorar el rendimiento de una página web.",
      "✅ Usar técnicas de optimización como batch updates y fragmentos de documentos puede reducir significativamente los reflows."
    ],
    en: [
      "✅ Repaints affect visual appearance without changing the layout, while reflows recalculate the entire layout.",
      "✅ Minimizing reflows is crucial for improving web page performance.",
      "✅ Using optimization techniques like batch updates and document fragments can significantly reduce reflows."
    ]
  }
};

export default concept;