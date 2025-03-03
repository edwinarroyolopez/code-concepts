import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Herencia y Cascada en CSS",
    en: "Inheritance and Cascade in CSS"
  },
  slug: "css-inheritance-cascade",
  description: {
    es: "La herencia y la cascada en CSS son mecanismos fundamentales que determinan cómo se aplican los estilos a los elementos HTML. La herencia permite que ciertas propiedades se transmitan de padres a hijos, mientras que la cascada resuelve conflictos entre reglas de estilo.",
    en: "Inheritance and cascade in CSS are fundamental mechanisms that determine how styles are applied to HTML elements. Inheritance allows certain properties to be passed from parents to children, while the cascade resolves conflicts between style rules."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son la Herencia y la Cascada?",
        en: "🔹What are Inheritance and Cascade?"
      },
      code: `/* Ejemplo básico de herencia */
body {
  font-family: Arial, sans-serif;
}

p {
  color: blue;
}

/* Ejemplo básico de cascada */
h1 {
  color: red;
}

h1 {
  color: green; /* Esta regla tiene prioridad debido a la cascada */
}`,
      content: {
        es: "La **herencia** en CSS permite que ciertas propiedades (como `font-family` o `color`) se transmitan automáticamente de un elemento padre a sus elementos hijos. Esto facilita la aplicación consistente de estilos en una página web. Por otro lado, la **cascada** es el mecanismo que resuelve conflictos entre múltiples reglas de estilo que afectan al mismo elemento. La cascada considera factores como la especificidad, el orden de las reglas y la importancia (`!important`) para determinar qué estilo prevalece.",
        en: "Inheritance in CSS allows certain properties (such as `font-family` or `color`) to be automatically passed from a parent element to its child elements. This facilitates the consistent application of styles across a web page. On the other hand, the **cascade** is the mechanism that resolves conflicts between multiple style rules affecting the same element. The cascade considers factors such as specificity, rule order, and importance (`!important`) to determine which style takes precedence."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Herencia y Cascada?",
        en: "🔹When to use Inheritance and Cascade?"
      },
      content: {
        es: [
          "Cuando necesitas aplicar estilos globales que se hereden automáticamente en elementos secundarios.",
          "Cuando deseas resolver conflictos entre reglas de estilo usando la cascada.",
          "Cuando trabajas en proyectos donde la consistencia visual es clave, aprovechando la herencia.",
          "Cuando necesitas controlar la prioridad de los estilos mediante especificidad o `!important`."
        ],
        en: [
          "When you need to apply global styles that are automatically inherited by child elements.",
          "When you want to resolve conflicts between style rules using the cascade.",
          "When working on projects where visual consistency is key, leveraging inheritance.",
          "When you need to control the priority of styles using specificity or `!important`."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Factores que Afectan la Cascada",
        en: "🔹Factors Affecting the Cascade"
      },
      headers: {
        es: ["Factor", "Descripción", "Ejemplo"],
        en: ["Factor", "Description", "Example"]
      },
      rows: [
        {
          es: ["Especificidad", "Determina qué regla tiene más peso", "`#id > .class > p`"],
          en: ["Specificity", "Determines which rule has more weight", "`#id > .class > p`"]
        },
        {
          es: ["Orden de las Reglas", "Las reglas posteriores sobrescriben las anteriores", "`h1 { color: green; }`"],
          en: ["Rule Order", "Later rules override earlier ones", "`h1 { color: green; }`"]
        },
        {
          es: ["Importancia", "La declaración con `!important` tiene prioridad", "`color: red !important;`"],
          en: ["Importance", "Declarations with `!important` take precedence", "`color: red !important;`"]
        },
        {
          es: ['Origen del Estilo", "Los estilos en línea tienen mayor prioridad que los externos", "`<p style="color: blue;">`'],
          en: ['Style Origin", "Inline styles have higher priority than external styles", "`<p style="color: blue;">`']
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Herencia",
        en: "1️⃣ Practical example of Inheritance"
      },
      caseTitle: {
        es: "Aplicar una Fuente Global Usando Herencia",
        en: "Apply a Global Font Using Inheritance"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar la herencia para aplicar una fuente global a todos los elementos de texto en una página.",
        en: "This example demonstrates how to use inheritance to apply a global font to all text elements on a page."
      },
      code: `body {
  font-family: 'Arial', sans-serif;
}

<!-- HTML -->
<p>Este párrafo hereda la fuente del body.</p>
<h1>Este encabezado también hereda la fuente.</h1>`,
      conclusion: {
        es: "🔥 Beneficio: La herencia simplifica la aplicación de estilos globales, asegurando consistencia en todo el documento.",
        en: "🔥 Benefit: Inheritance simplifies the application of global styles, ensuring consistency throughout the document."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Cascada",
        en: "2️⃣ Practical example of Cascade"
      },
      caseTitle: {
        es: "Resolver Conflictos de Estilo Usando la Cascada",
        en: "Resolve Style Conflicts Using the Cascade"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo la cascada resuelve conflictos entre múltiples reglas de estilo que afectan al mismo elemento.",
        en: "This example demonstrates how the cascade resolves conflicts between multiple style rules affecting the same element."
      },
      code: `h1 {
  color: red; /* Primera regla */
}

h1 {
  color: green; /* Segunda regla (prevalece) */
}

<!-- HTML -->
<h1>Este texto será verde debido a la cascada.</h1>`,
      conclusion: {
        es: "🔥 Beneficio: La cascada permite resolver conflictos de manera predecible, asegurando que los estilos se apliquen correctamente.",
        en: "🔥 Benefit: The cascade allows conflicts to be resolved predictably, ensuring styles are applied correctly."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Especificidad",
        en: "3️⃣ Practical example of Specificity"
      },
      caseTitle: {
        es: "Controlar la Prioridad de Estilos Usando Especificidad",
        en: "Control Style Priority Using Specificity"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo la especificidad determina qué regla de estilo tiene prioridad.",
        en: "This example demonstrates how specificity determines which style rule takes priority."
      },
      code: `/* Regla menos específica */
p {
  color: blue;
}

/* Regla más específica */
body p {
  color: red; /* Esta regla prevalece debido a la especificidad */
}

<!-- HTML -->
<p>Este texto será rojo debido a la especificidad.</p>`,
      conclusion: {
        es: "🔥 Beneficio: La especificidad permite controlar la prioridad de los estilos, asegurando que las reglas más importantes se apliquen correctamente.",
        en: "🔥 Benefit: Specificity allows controlling the priority of styles, ensuring the most important rules are applied correctly."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Herencia y Cascada?",
        en: "📌 When NOT to use Inheritance and Cascade?"
      },
      content: {
        es: [
          "❌ Si prefieres evitar la herencia en propiedades que no deben ser compartidas, como márgenes o bordes.",
          "❌ Si la cascada genera conflictos difíciles de depurar debido a reglas mal organizadas.",
          "❌ Si usas `!important` excesivamente, lo que puede complicar el mantenimiento del código."
        ],
        en: [
          "❌ If you prefer to avoid inheritance for properties that should not be shared, such as margins or borders.",
          "❌ If the cascade generates difficult-to-debug conflicts due to poorly organized rules.",
          "❌ If you use `!important` excessively, which can complicate code maintenance."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La herencia y la cascada son esenciales para aplicar estilos de manera consistente y resolver conflictos.",
      "✅ Permiten crear diseños visuales coherentes y controlar la prioridad de los estilos.",
      "✅ No deben usarse si generan conflictos innecesarios o si existen alternativas más claras, como clases específicas."
    ],
    en: [
      "✅ Inheritance and cascade are essential for applying styles consistently and resolving conflicts.",
      "✅ They allow creating coherent visual designs and controlling the priority of styles.",
      "✅ They should not be used if they generate unnecessary conflicts or if clearer alternatives, like specific classes, exist."
    ]
  }
};

export default concept;