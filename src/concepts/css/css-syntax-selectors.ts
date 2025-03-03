import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Sintaxis y Selectores Básicos en CSS",
    en: "Syntax and Basic Selectors in CSS"
  },
  slug: "css-syntax-selectors",
  description: {
    es: "La sintaxis y los selectores básicos en CSS son fundamentales para aplicar estilos a elementos HTML. La sintaxis define cómo se estructuran las reglas de estilo, mientras que los selectores determinan qué elementos serán afectados por dichas reglas.",
    en: "Syntax and basic selectors in CSS are fundamental for applying styles to HTML elements. The syntax defines how style rules are structured, while selectors determine which elements will be affected by those rules."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son la Sintaxis y los Selectores Básicos en CSS?",
        en: "🔹What are Syntax and Basic Selectors in CSS?"
      },
      code: `/* Ejemplo básico de sintaxis CSS */
selector {
  propiedad: valor;
}

/* Ejemplo de selectores básicos */
h1 {
  color: blue;
}

p {
  font-size: 16px;
}

a:hover {
  text-decoration: underline;
}`,
      content: {
        es: "La **sintaxis en CSS** define cómo se escriben las reglas de estilo, que consisten en un selector seguido de una declaración entre llaves `{}`. Dentro de las llaves, se especifican propiedades y valores que determinan el estilo del elemento seleccionado. Los **selectores básicos** son patrones que identifican elementos HTML específicos, como etiquetas, clases, IDs o pseudo-clases. Estos selectores permiten aplicar estilos de manera precisa y eficiente.",
        en: "The **syntax in CSS** defines how style rules are written, consisting of a selector followed by a declaration enclosed in braces `{}`. Inside the braces, properties and values are specified to determine the style of the selected element. **Basic selectors** are patterns that identify specific HTML elements, such as tags, classes, IDs, or pseudo-classes. These selectors allow styles to be applied precisely and efficiently."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Sintaxis y Selectores Básicos?",
        en: "🔹When to use Syntax and Basic Selectors?"
      },
      content: {
        es: [
          "Cuando necesitas aplicar estilos simples a elementos HTML.",
          "Cuando deseas aprender los fundamentos de CSS antes de avanzar a conceptos más complejos.",
          "Cuando trabajas en proyectos pequeños o prototipos que no requieren selectores avanzados.",
          "Cuando necesitas aplicar estilos globales, como tipografía o colores, a todo el documento."
        ],
        en: [
          "When you need to apply simple styles to HTML elements.",
          "When you want to learn the fundamentals of CSS before advancing to more complex concepts.",
          "When working on small projects or prototypes that do not require advanced selectors.",
          "When you need to apply global styles, such as typography or colors, to the entire document."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Tipos de Selectores Básicos en CSS",
        en: "🔹Types of Basic Selectors in CSS"
      },
      headers: {
        es: ["Selector", "Descripción", "Ejemplo"],
        en: ["Selector", "Description", "Example"]
      },
      rows: [
        {
          es: ["Selector de tipo", "Selecciona elementos por su nombre de etiqueta", "`h1 { color: red; }`"],
          en: ["Type selector", "Selects elements by their tag name", "`h1 { color: red; }`"]
        },
        {
          es: ["Selector de clase", "Selecciona elementos por su atributo `class`", "`.highlight { background-color: yellow; }`"],
          en: ["Class selector", "Selects elements by their `class` attribute", "`.highlight { background-color: yellow; }`"]
        },
        {
          es: ["Selector de ID", "Selecciona un elemento único por su atributo `id`", "`#header { font-size: 24px; }`"],
          en: ["ID selector", "Selects a unique element by its `id` attribute", "`#header { font-size: 24px; }`"]
        },
        {
          es: ["Selector universal", "Selecciona todos los elementos", "`* { margin: 0; padding: 0; }`"],
          en: ["Universal selector", "Selects all elements", "`* { margin: 0; padding: 0; }`"]
        },
        {
          es: ["Pseudo-clase", "Selecciona elementos en un estado específico", "`a:hover { color: green; }`"],
          en: ["Pseudo-class", "Selects elements in a specific state", "`a:hover { color: green; }`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Selector de Tipo",
        en: "1️⃣ Practical example of Type Selector"
      },
      caseTitle: {
        es: "Aplicar Estilos a Todos los Encabezados `<h1>`",
        en: "Apply Styles to All `<h1>` Headings"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un selector de tipo para aplicar estilos a todos los encabezados `<h1>`.",
        en: "This example demonstrates how to use a type selector to apply styles to all `<h1>` headings."
      },
      code: `h1 {
  color: navy;
  text-align: center;
}

<!-- HTML -->
<h1>Título Principal</h1>
<h1>Otro Título</h1>`,
      conclusion: {
        es: "🔥 Beneficio: Los selectores de tipo son útiles para aplicar estilos globales a elementos específicos sin necesidad de clases o IDs adicionales.",
        en: "🔥 Benefit: Type selectors are useful for applying global styles to specific elements without the need for additional classes or IDs."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Selector de Clase",
        en: "2️⃣ Practical example of Class Selector"
      },
      caseTitle: {
        es: "Aplicar Estilos a Elementos con una Clase Específica",
        en: "Apply Styles to Elements with a Specific Class"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar un selector de clase para aplicar estilos a elementos con una clase específica.",
        en: "This example demonstrates how to use a class selector to apply styles to elements with a specific class."
      },
      code: `.highlight {
  background-color: yellow;
  font-weight: bold;
}

<!-- HTML -->
<p>Este es un párrafo normal.</p>
<p class="highlight">Este párrafo está resaltado.</p>`,
      conclusion: {
        es: "🔥 Beneficio: Los selectores de clase permiten aplicar estilos reutilizables a múltiples elementos sin afectar otros elementos del mismo tipo.",
        en: "🔥 Benefit: Class selectors allow reusable styles to be applied to multiple elements without affecting other elements of the same type."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Pseudo-clase",
        en: "3️⃣ Practical example of Pseudo-class"
      },
      caseTitle: {
        es: "Cambiar el Color de un Enlace al Pasar el Ratón",
        en: "Change the Color of a Link on Hover"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar una pseudo-clase para cambiar el estilo de un enlace cuando el usuario pasa el ratón sobre él.",
        en: "This example demonstrates how to use a pseudo-class to change the style of a link when the user hovers over it."
      },
      code: `a:hover {
  color: green;
  text-decoration: underline;
}

<!-- HTML -->
<a href="#">Enlace de ejemplo</a>`,
      conclusion: {
        es: "🔥 Beneficio: Las pseudo-clases permiten aplicar estilos dinámicos basados en el estado o interacción del usuario.",
        en: "🔥 Benefit: Pseudo-classes allow dynamic styles to be applied based on the state or interaction of the user."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Sintaxis y Selectores Básicos?",
        en: "📌 When NOT to use Syntax and Basic Selectors?"
      },
      content: {
        es: [
          "❌ Si necesitas aplicar estilos complejos que requieren selectores avanzados como combinadores o pseudo-elementos.",
          "❌ Si prefieres evitar la repetición de estilos al trabajar en proyectos grandes con múltiples componentes.",
          "❌ Si los selectores básicos no son suficientes para lograr la especificidad requerida."
        ],
        en: [
          "❌ If you need to apply complex styles that require advanced selectors like combinators or pseudo-elements.",
          "❌ If you prefer to avoid style repetition when working on large projects with multiple components.",
          "❌ If basic selectors are not sufficient to achieve the required specificity."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La sintaxis y los selectores básicos son ideales para aplicar estilos simples y globales a elementos HTML.",
      "✅ Permiten aprender los fundamentos de CSS antes de avanzar a conceptos más complejos.",
      "✅ No deben usarse si generan repetición innecesaria o no cumplen con los requisitos de especificidad."
    ],
    en: [
      "✅ Syntax and basic selectors are ideal for applying simple and global styles to HTML elements.",
      "✅ They allow learning the fundamentals of CSS before advancing to more complex concepts.",
      "✅ They should not be used if they generate unnecessary repetition or fail to meet specificity requirements."
    ]
  }
};

export default concept;