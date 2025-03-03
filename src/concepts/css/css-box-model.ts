import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Box Model en CSS",
    en: "Box Model in CSS"
  },
  slug: "css-box-model",
  description: {
    es: "El Box Model en CSS describe cómo los elementos HTML son representados como cajas rectangulares, compuestas por contenido, padding, border y margin. Comprender el Box Model es esencial para controlar el diseño y el espaciado de los elementos en una página web.",
    en: "The Box Model in CSS describes how HTML elements are represented as rectangular boxes, composed of content, padding, border, and margin. Understanding the Box Model is essential for controlling the layout and spacing of elements on a web page."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Box Model?",
        en: "🔹What is the Box Model?"
      },
      code: `/* Ejemplo básico del Box Model */
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`,
      content: {
        es: "El **Box Model** en CSS describe cómo cada elemento HTML es tratado como una caja rectangular que consta de cuatro partes principales: **contenido (content)**, **relleno (padding)**, **borde (border)** y **margen (margin)**. Estas capas afectan el tamaño total del elemento y su relación con otros elementos en la página. Comprender el Box Model es crucial para diseñar layouts precisos y controlar el espaciado entre elementos.",
        en: "The **Box Model** in CSS describes how each HTML element is treated as a rectangular box consisting of four main parts: **content**, **padding**, **border**, and **margin**. These layers affect the total size of the element and its relationship with other elements on the page. Understanding the Box Model is crucial for designing precise layouts and controlling spacing between elements."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Box Model?",
        en: "🔹When to use the Box Model?"
      },
      content: {
        es: [
          "Cuando necesitas controlar el tamaño total de un elemento, incluyendo su contenido, padding, border y margin.",
          "Cuando deseas ajustar el espaciado entre elementos en una página web.",
          "Cuando trabajas en diseños responsivos y necesitas calcular correctamente el ancho y alto de los elementos.",
          "Cuando necesitas aplicar estilos específicos a las diferentes capas del Box Model, como bordes o rellenos."
        ],
        en: [
          "When you need to control the total size of an element, including its content, padding, border, and margin.",
          "When you want to adjust the spacing between elements on a web page.",
          "When working on responsive designs and need to calculate the width and height of elements correctly.",
          "When you need to apply specific styles to different layers of the Box Model, such as borders or padding."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Componentes del Box Model",
        en: "🔹Components of the Box Model"
      },
      headers: {
        es: ["Componente", "Descripción", "Ejemplo"],
        en: ["Component", "Description", "Example"]
      },
      rows: [
        {
          es: ["Contenido (Content)", "Área donde se muestra el texto o imagen", "`width: 200px; height: 100px;`"],
          en: ["Content", "Area where text or image is displayed", "`width: 200px; height: 100px;`"]
        },
        {
          es: ["Relleno (Padding)", "Espacio entre el contenido y el borde", "`padding: 20px;`"],
          en: ["Padding", "Space between content and border", "`padding: 20px;`"]
        },
        {
          es: ["Borde (Border)", "Línea que rodea el padding y el contenido", "`border: 5px solid black;`"],
          en: ["Border", "Line surrounding padding and content", "`border: 5px solid black;`"]
        },
        {
          es: ["Margen (Margin)", "Espacio externo alrededor del borde", "`margin: 10px;`"],
          en: ["Margin", "External space around the border", "`margin: 10px;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Cálculo del Tamaño Total",
        en: "1️⃣ Practical example of Total Size Calculation"
      },
      caseTitle: {
        es: "Calcular el Tamaño Total de un Elemento Usando el Box Model",
        en: "Calculate the Total Size of an Element Using the Box Model"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo calcular el tamaño total de un elemento considerando su contenido, padding, border y margin.",
        en: "This example demonstrates how to calculate the total size of an element considering its content, padding, border, and margin."
      },
      code: `div {
  width: 200px; /* Contenido */
  padding: 20px; /* Relleno */
  border: 5px solid black; /* Borde */
  margin: 10px; /* Margen */
}

<!-- Resultado -->
<!-- Ancho total = 200px (contenido) + 40px (padding izq + der) + 10px (borde izq + der) = 250px -->
<!-- Alto total = 100px (contenido) + 40px (padding sup + inf) + 10px (borde sup + inf) = 150px -->`,
      conclusion: {
        es: "🔥 Beneficio: Entender el Box Model permite calcular correctamente el tamaño total de un elemento, evitando errores de diseño.",
        en: "🔥 Benefit: Understanding the Box Model allows you to correctly calculate the total size of an element, avoiding design errors."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Uso de `box-sizing`",
        en: "2️⃣ Practical example of Using `box-sizing`"
      },
      caseTitle: {
        es: "Cambiar el Modelo de Caja con `box-sizing`",
        en: "Change the Box Model with `box-sizing`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la propiedad `box-sizing` para cambiar el modelo de caja y simplificar el diseño.",
        en: "This example demonstrates how to use the `box-sizing` property to change the box model and simplify the design."
      },
      code: `/* Cambiar el modelo de caja */
div {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

<!-- Resultado -->
<!-- Ancho total = 200px (incluye contenido, padding y borde) -->`,
      conclusion: {
        es: "🔥 Beneficio: La propiedad `box-sizing: border-box` simplifica el diseño al incluir el padding y el borde dentro del ancho declarado.",
        en: "🔥 Benefit: The `box-sizing: border-box` property simplifies design by including padding and border within the declared width."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Espaciado con Margen",
        en: "3️⃣ Practical example of Spacing with Margin"
      },
      caseTitle: {
        es: "Controlar el Espaciado Entre Elementos Usando Margen",
        en: "Control Spacing Between Elements Using Margin"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el margen para controlar el espaciado entre elementos en una página web.",
        en: "This example demonstrates how to use margin to control spacing between elements on a web page."
      },
      code: `.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 20px; /* Espaciado externo */
}

<!-- HTML -->
<div class="box"></div>
<div class="box"></div>`,
      conclusion: {
        es: "🔥 Beneficio: El margen permite controlar el espaciado entre elementos, mejorando la legibilidad y organización del diseño.",
        en: "🔥 Benefit: Margin allows controlling spacing between elements, improving readability and organization of the design."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar el Box Model?",
        en: "📌 When NOT to use the Box Model?"
      },
      content: {
        es: [
          "❌ Si trabajas con elementos no visuales, como `<meta>` o `<script>`, que no tienen representación visual.",
          "❌ Si prefieres evitar cálculos manuales del tamaño total al usar herramientas como frameworks CSS modernos.",
          "❌ Si el diseño requiere un enfoque diferente, como layouts basados en grid o flexbox sin necesidad de ajustes explícitos de padding o margin."
        ],
        en: [
          "❌ If you work with non-visual elements like `<meta>` or `<script>`, which have no visual representation.",
          "❌ If you prefer to avoid manual calculations of the total size when using modern CSS frameworks.",
          "❌ If the design requires a different approach, such as grid or flexbox-based layouts without the need for explicit padding or margin adjustments."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Box Model es esencial para entender cómo se estructuran y dimensionan los elementos en CSS.",
      "✅ Permite controlar el diseño y el espaciado de los elementos en una página web.",
      "✅ No debe usarse si los cálculos manuales complican el diseño o si se utilizan herramientas que lo abstraen."
    ],
    en: [
      "✅ The Box Model is essential for understanding how elements are structured and sized in CSS.",
      "✅ It allows controlling the layout and spacing of elements on a web page.",
      "✅ It should not be used if manual calculations complicate the design or if tools that abstract it are used."
    ]
  }
};

export default concept;