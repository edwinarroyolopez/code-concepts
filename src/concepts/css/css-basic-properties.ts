import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Propiedades Básicas en CSS",
    en: "Basic Properties in CSS"
  },
  slug: "css-basic-properties",
  description: {
    es: "Las propiedades básicas en CSS son fundamentales para aplicar estilos simples a elementos HTML. Estas incluyen propiedades como colores, fuentes, márgenes, rellenos, bordes y más, que permiten controlar la apariencia visual de una página web.",
    en: "Basic properties in CSS are fundamental for applying simple styles to HTML elements. These include properties like colors, fonts, margins, padding, borders, and more, which allow controlling the visual appearance of a web page."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Propiedades Básicas?",
        en: "🔹What are Basic Properties?"
      },
      code: `/* Ejemplo básico de propiedades */
body {
  background-color: #f0f0f0; /* Color de fondo */
  font-family: Arial, sans-serif; /* Fuente del texto */
}

h1 {
  color: blue; /* Color del texto */
  text-align: center; /* Alineación del texto */
}

p {
  margin: 20px; /* Espaciado externo */
  padding: 10px; /* Espaciado interno */
  border: 1px solid black; /* Borde alrededor del elemento */
}`,
      content: {
        es: "Las **propiedades básicas en CSS** son las herramientas fundamentales que permiten aplicar estilos simples y directos a los elementos HTML. Estas propiedades controlan aspectos visuales como colores, fuentes, espaciado (márgenes y rellenos), bordes y alineación. Comprender y dominar estas propiedades es esencial para crear diseños limpios y funcionales en cualquier proyecto web.",
        en: "Basic properties in CSS are the fundamental tools that allow applying simple and direct styles to HTML elements. These properties control visual aspects such as colors, fonts, spacing (margins and padding), borders, and alignment. Understanding and mastering these properties is essential for creating clean and functional designs in any web project."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Propiedades Básicas?",
        en: "🔹When to use Basic Properties?"
      },
      content: {
        es: [
          "Cuando necesitas aplicar estilos simples a elementos HTML, como cambiar colores o fuentes.",
          "Cuando deseas mejorar la legibilidad y organización del contenido mediante márgenes y rellenos.",
          "Cuando trabajas en proyectos pequeños o prototipos que no requieren estilos complejos.",
          "Cuando necesitas definir bordes o fondos para destacar elementos específicos."
        ],
        en: [
          "When you need to apply simple styles to HTML elements, such as changing colors or fonts.",
          "When you want to improve the readability and organization of content using margins and padding.",
          "When working on small projects or prototypes that do not require complex styles.",
          "When you need to define borders or backgrounds to highlight specific elements."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Propiedades Básicas Comunes",
        en: "🔹Common Basic Properties"
      },
      headers: {
        es: ["Propiedad", "Descripción", "Ejemplo"],
        en: ["Property", "Description", "Example"]
      },
      rows: [
        {
          es: ["`color`", "Define el color del texto", "`color: red;`"],
          en: ["`color`", "Defines the text color", "`color: red;`"]
        },
        {
          es: ["`background-color`", "Define el color de fondo", "`background-color: #f0f0f0;`"],
          en: ["`background-color`", "Defines the background color", "`background-color: #f0f0f0;`"]
        },
        {
          es: ["`font-family`", "Define la fuente del texto", "`font-family: Arial, sans-serif;`"],
          en: ["`font-family`", "Defines the text font", "`font-family: Arial, sans-serif;`"]
        },
        {
          es: ["`margin`", "Define el espaciado externo", "`margin: 20px;`"],
          en: ["`margin`", "Defines external spacing", "`margin: 20px;`"]
        },
        {
          es: ["`padding`", "Define el espaciado interno", "`padding: 10px;`"],
          en: ["`padding`", "Defines internal spacing", "`padding: 10px;`"]
        },
        {
          es: ["`border`", "Define un borde alrededor del elemento", "`border: 1px solid black;`"],
          en: ["`border`", "Defines a border around the element", "`border: 1px solid black;`"]
        },
        {
          es: ["`text-align`", "Define la alineación del texto", "`text-align: center;`"],
          en: ["`text-align`", "Defines text alignment", "`text-align: center;`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Colores y Fuentes",
        en: "1️⃣ Practical example of Colors and Fonts"
      },
      caseTitle: {
        es: "Aplicar Colores y Fuentes a un Encabezado",
        en: "Apply Colors and Fonts to a Heading"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar las propiedades `color` y `font-family` para aplicar estilos a un encabezado.",
        en: "This example demonstrates how to use the `color` and `font-family` properties to style a heading."
      },
      code: `h1 {
  color: navy; /* Color del texto */
  font-family: 'Georgia', serif; /* Fuente del texto */
}

<!-- HTML -->
<h1>Título con estilo</h1>`,
      conclusion: {
        es: "🔥 Beneficio: Las propiedades de color y fuente permiten personalizar la apariencia del texto de manera sencilla y efectiva.",
        en: "🔥 Benefit: Color and font properties allow for simple and effective customization of text appearance."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Márgenes y Relleno",
        en: "2️⃣ Practical example of Margins and Padding"
      },
      caseTitle: {
        es: "Controlar el Espaciado Usando Márgenes y Relleno",
        en: "Control Spacing Using Margins and Padding"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar las propiedades `margin` y `padding` para controlar el espaciado alrededor y dentro de un elemento.",
        en: "This example demonstrates how to use the `margin` and `padding` properties to control spacing around and inside an element."
      },
      code: `.box {
  background-color: lightblue;
  margin: 20px; /* Espaciado externo */
  padding: 15px; /* Espaciado interno */
}

<!-- HTML -->
<div class="box">Contenido con espaciado</div>`,
      conclusion: {
        es: "🔥 Beneficio: Las propiedades de margen y relleno mejoran la legibilidad y organización del diseño al controlar el espaciado.",
        en: "🔥 Benefit: Margin and padding properties improve readability and design organization by controlling spacing."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Bordes",
        en: "3️⃣ Practical example of Borders"
      },
      caseTitle: {
        es: "Agregar un Borde a un Elemento",
        en: "Add a Border to an Element"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la propiedad `border` para agregar un borde alrededor de un elemento.",
        en: "This example demonstrates how to use the `border` property to add a border around an element."
      },
      code: `.highlight {
  border: 2px dashed red; /* Borde discontinuo rojo */
  padding: 10px;
}

<!-- HTML -->
<div class="highlight">Texto resaltado con borde</div>`,
      conclusion: {
        es: "🔥 Beneficio: Los bordes permiten destacar elementos específicos y mejorar la estructura visual del diseño.",
        en: "🔥 Benefit: Borders allow highlighting specific elements and enhancing the visual structure of the design."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Propiedades Básicas?",
        en: "📌 When NOT to use Basic Properties?"
      },
      content: {
        es: [
          "❌ Si necesitas estilos avanzados que requieren propiedades complejas, como animaciones o layouts flexibles.",
          "❌ Si prefieres evitar la repetición de estilos al trabajar en proyectos grandes con múltiples componentes.",
          "❌ Si las propiedades básicas no son suficientes para lograr el diseño deseado, como en layouts responsivos."
        ],
        en: [
          "❌ If you need advanced styles that require complex properties, such as animations or flexible layouts.",
          "❌ If you prefer to avoid style repetition when working on large projects with multiple components.",
          "❌ If basic properties are not sufficient to achieve the desired design, such as in responsive layouts."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las propiedades básicas son ideales para aplicar estilos simples y directos a elementos HTML.",
      "✅ Permiten controlar aspectos visuales clave como colores, fuentes, espaciado y bordes.",
      "✅ No deben usarse si generan repetición innecesaria o si no cumplen con los requisitos de diseño avanzado."
    ],
    en: [
      "✅ Basic properties are ideal for applying simple and direct styles to HTML elements.",
      "✅ They allow controlling key visual aspects such as colors, fonts, spacing, and borders.",
      "✅ They should not be used if they generate unnecessary repetition or fail to meet advanced design requirements."
    ]
  }
};

export default concept;