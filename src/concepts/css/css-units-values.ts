import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Unidades y Valores en CSS",
    en: "Units and Values in CSS"
  },
  slug: "css-units-values",
  description: {
    es: "Las unidades y valores en CSS permiten definir dimensiones, colores, espaciado y otros estilos. Comprender las diferentes unidades y cómo usarlas es esencial para crear diseños precisos y responsivos.",
    en: "Units and values in CSS allow defining dimensions, colors, spacing, and other styles. Understanding the different units and how to use them is essential for creating precise and responsive designs."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son las Unidades y Valores en CSS?",
        en: "🔹What are Units and Values in CSS?"
      },
      code: `/* Ejemplo básico de unidades y valores */
div {
  width: 50%; /* Porcentaje relativo al contenedor padre */
  height: 200px; /* Píxeles fijos */
  margin: 1em; /* Tamaño relativo al tamaño de fuente del elemento */
  background-color: #ff5733; /* Color hexadecimal */
}`,
      content: {
        es: "Las **unidades y valores en CSS** definen cómo se aplican los estilos a los elementos HTML. Las unidades pueden ser absolutas (como píxeles) o relativas (como porcentajes o ems), y los valores incluyen números, colores, funciones como `rgb()` o `calc()`, y más. Comprender estas opciones permite crear diseños flexibles, responsivos y precisos.",
        en: "Units and values in CSS define how styles are applied to HTML elements. Units can be absolute (like pixels) or relative (like percentages or ems), and values include numbers, colors, functions like `rgb()` or `calc()`, and more. Understanding these options allows for creating flexible, responsive, and precise designs."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Unidades y Valores?",
        en: "🔹When to use Units and Values?"
      },
      content: {
        es: [
          "Cuando necesitas definir dimensiones precisas para elementos, como anchos, alturas o márgenes.",
          "Cuando deseas crear diseños responsivos utilizando unidades relativas como porcentajes o `vw`/`vh`.",
          "Cuando trabajas con colores y necesitas especificarlos en formatos como hexadecimal, RGB o HSL.",
          "Cuando necesitas realizar cálculos dinámicos usando funciones como `calc()` o `var()`."
        ],
        en: [
          "When you need to define precise dimensions for elements, such as widths, heights, or margins.",
          "When you want to create responsive designs using relative units like percentages or `vw`/`vh`.",
          "When working with colors and need to specify them in formats like hexadecimal, RGB, or HSL.",
          "When you need to perform dynamic calculations using functions like `calc()` or `var()`."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos de Unidades y Valores en CSS",
        en: "🔹Types of Units and Values in CSS"
      },
      headers: {
        es: ["Tipo", "Descripción", "Ejemplo"],
        en: ["Type", "Description", "Example"]
      },
      rows: [
        {
          es: ["Unidades absolutas", "Medidas fijas que no cambian según el contexto", "`px`, `cm`, `in`"],
          en: ["Absolute units", "Fixed measurements that do not change based on context", "`px`, `cm`, `in`"]
        },
        {
          es: ["Unidades relativas", "Medidas que dependen del contexto del elemento", "`%`, `em`, `rem`, `vw`, `vh`"],
          en: ["Relative units", "Measurements that depend on the element's context", "`%`, `em`, `rem`, `vw`, `vh`"]
        },
        {
          es: ["Colores", "Valores que representan colores", "`#ff5733`, `rgb(255, 87, 51)`, `hsl(9, 100%, 60%)`"],
          en: ["Colors", "Values that represent colors", "`#ff5733`, `rgb(255, 87, 51)`, `hsl(9, 100%, 60%)`"]
        },
        {
          es: ["Funciones", "Expresiones que calculan valores dinámicamente", "`calc(100% - 20px)`, `var(--main-color)`"],
          en: ["Functions", "Expressions that calculate values dynamically", "`calc(100% - 20px)`, `var(--main-color)`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Unidades Relativas",
        en: "1️⃣ Practical example of Relative Units"
      },
      caseTitle: {
        es: "Crear un Diseño Responsivo Usando `vw` y `vh`",
        en: "Create a Responsive Design Using `vw` and `vh`"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar unidades relativas como `vw` (viewport width) y `vh` (viewport height) para crear un diseño responsivo.",
        en: "This example demonstrates how to use relative units like `vw` (viewport width) and `vh` (viewport height) to create a responsive design."
      },
      code: `div {
  width: 50vw; /* 50% del ancho de la ventana */
  height: 50vh; /* 50% del alto de la ventana */
  background-color: lightblue;
}

<!-- HTML -->
<div></div>`,
      conclusion: {
        es: "🔥 Beneficio: Las unidades relativas como `vw` y `vh` permiten crear diseños que se adaptan automáticamente al tamaño de la ventana del navegador.",
        en: "🔥 Benefit: Relative units like `vw` and `vh` allow creating designs that automatically adapt to the browser window size."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Colores",
        en: "2️⃣ Practical example of Colors"
      },
      caseTitle: {
        es: "Definir Colores Usando Diferentes Formatos",
        en: "Define Colors Using Different Formats"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo definir colores en CSS utilizando diferentes formatos como hexadecimal, RGB y HSL.",
        en: "This example demonstrates how to define colors in CSS using different formats like hexadecimal, RGB, and HSL."
      },
      code: `.box1 {
  background-color: #ff5733; /* Hexadecimal */
}

.box2 {
  background-color: rgb(255, 87, 51); /* RGB */
}

.box3 {
  background-color: hsl(9, 100%, 60%); /* HSL */
}

<!-- HTML -->
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>`,
      conclusion: {
        es: "🔥 Beneficio: Los diferentes formatos de color ofrecen flexibilidad para definir y ajustar colores según las necesidades del diseño.",
        en: "🔥 Benefit: The different color formats offer flexibility to define and adjust colors according to design needs."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Funciones Dinámicas",
        en: "3️⃣ Practical example of Dynamic Functions"
      },
      caseTitle: {
        es: "Usar `calc()` para Calcular Dimensiones Dinámicamente",
        en: "Use `calc()` to Dynamically Calculate Dimensions"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la función `calc()` para calcular dimensiones dinámicamente basadas en otras propiedades.",
        en: "This example demonstrates how to use the `calc()` function to dynamically calculate dimensions based on other properties."
      },
      code: `div {
  width: calc(100% - 40px); /* Ancho total menos 40px */
  padding: 20px;
  background-color: lightgreen;
}

<!-- HTML -->
<div>Contenido</div>`,
      conclusion: {
        es: "🔥 Beneficio: La función `calc()` permite realizar cálculos dinámicos, lo que facilita la creación de diseños flexibles y precisos.",
        en: "🔥 Benefit: The `calc()` function allows dynamic calculations, making it easier to create flexible and precise designs."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Unidades y Valores Específicos?",
        en: "📌 When NOT to use Specific Units and Values?"
      },
      content: {
        es: [
          "❌ Si prefieres evitar unidades fijas como `px` en diseños responsivos, ya que no se adaptan bien a diferentes tamaños de pantalla.",
          "❌ Si usas valores absolutos en lugar de variables (`var()`) para estilos reutilizables, lo que puede complicar el mantenimiento.",
          "❌ Si seleccionas colores directamente sin considerar accesibilidad o consistencia en el diseño."
        ],
        en: [
          "❌ If you prefer to avoid fixed units like `px` in responsive designs, as they do not adapt well to different screen sizes.",
          "❌ If you use absolute values instead of variables (`var()`) for reusable styles, which can complicate maintenance.",
          "❌ If you select colors directly without considering accessibility or design consistency."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Las unidades y valores en CSS son esenciales para definir dimensiones, colores y otros estilos.",
      "✅ Permiten crear diseños precisos, responsivos y dinámicos.",
      "✅ No deben usarse si complican el diseño o si existen alternativas más eficientes, como variables o unidades relativas."
    ],
    en: [
      "✅ Units and values in CSS are essential for defining dimensions, colors, and other styles.",
      "✅ They allow creating precise, responsive, and dynamic designs.",
      "✅ They should not be used if they complicate the design or if more efficient alternatives, like variables or relative units, exist."
    ]
  }
};

export default concept;