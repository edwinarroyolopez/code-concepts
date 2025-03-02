import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Manipulación del DOM",
    en: "DOM Manipulation"
  },
  slug: "dom-manipulation",
  description: {
    es: "La manipulación del DOM en JavaScript permite modificar dinámicamente el contenido, estructura y estilo de una página web. Es fundamental para crear interacciones y experiencias interactivas en aplicaciones web.",
    en: "DOM manipulation in JavaScript allows dynamically modifying the content, structure, and style of a web page. It is essential for creating interactions and interactive experiences in web applications."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es la Manipulación del DOM?",
        en: "🔹What is DOM Manipulation?"
      },
      code: `// Seleccionar un elemento por su ID
const element = document.getElementById('myElement');

// Cambiar el contenido del elemento
element.textContent = '¡Hola, mundo!';

// Agregar una clase CSS
element.classList.add('highlight');`,
      content: {
        es: "El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML que permite interactuar con los elementos de una página web mediante JavaScript. La manipulación del DOM incluye seleccionar, modificar, agregar o eliminar elementos, así como cambiar estilos y manejar eventos.",
        en: "The DOM (Document Object Model) is a structured representation of an HTML or XML document that allows interacting with the elements of a web page using JavaScript. DOM manipulation includes selecting, modifying, adding, or removing elements, as well as changing styles and handling events."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar la Manipulación del DOM?",
        en: "🔹When to use DOM Manipulation?"
      },
      content: {
        es: [
          "Cuando necesitas actualizar dinámicamente el contenido de una página web sin recargarla.",
          "Cuando deseas agregar interactividad, como mostrar/ocultar elementos o responder a eventos del usuario.",
          "Cuando trabajas con formularios para validar datos o mostrar mensajes de error.",
          "Cuando necesitas modificar estilos o clases CSS para mejorar la experiencia visual."
        ],
        en: [
          "When you need to dynamically update the content of a web page without reloading it.",
          "When you want to add interactivity, such as showing/hiding elements or responding to user events.",
          "When working with forms to validate data or display error messages.",
          "When you need to modify styles or CSS classes to enhance the visual experience."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Métodos Comunes de Manipulación del DOM",
        en: "🔹Common DOM Manipulation Methods"
      },
      headers: {
        es: ["Método", "Descripción", "Ejemplo"],
        en: ["Method", "Description", "Example"]
      },
      rows: [
        {
          es: ["`getElementById`", "Selecciona un elemento por su ID", "`document.getElementById('header')`"],
          en: ["`getElementById`", "Selects an element by its ID", "`document.getElementById('header')`"]
        },
        {
          es: ["`querySelector`", "Selecciona el primer elemento que coincida con un selector CSS", "`document.querySelector('.button')`"],
          en: ["`querySelector`", "Selects the first element matching a CSS selector", "`document.querySelector('.button')`"]
        },
        {
          es: ["`innerHTML`", "Obtiene o establece el contenido HTML de un elemento", "`element.innerHTML = '<p>Nuevo texto</p>'`"],
          en: ["`innerHTML`", "Gets or sets the HTML content of an element", "`element.innerHTML = '<p>New text</p>'`"]
        },
        {
          es: ["`appendChild`", "Agrega un nuevo nodo hijo a un elemento", "`parent.appendChild(child)`"],
          en: ["`appendChild`", "Adds a new child node to an element", "`parent.appendChild(child)`"]
        },
        {
          es: ["`removeChild`", "Elimina un nodo hijo de un elemento", "`parent.removeChild(child)`"],
          en: ["`removeChild`", "Removes a child node from an element", "`parent.removeChild(child)`"]
        },
        {
          es: ["`addEventListener`", "Asigna un controlador de eventos a un elemento", "`button.addEventListener('click', handleClick)`"],
          en: ["`addEventListener`", "Assigns an event listener to an element", "`button.addEventListener('click', handleClick)`"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Manipulación del DOM",
        en: "1️⃣ Practical example of DOM Manipulation"
      },
      caseTitle: {
        es: "Cambiar el Contenido de un Elemento",
        en: "Changing the Content of an Element"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo seleccionar un elemento del DOM y cambiar su contenido dinámicamente.",
        en: "This example demonstrates how to select a DOM element and dynamically change its content."
      },
      code: `// HTML inicial
<div id="message">Texto original</div>

// JavaScript
const messageElement = document.getElementById('message');
messageElement.textContent = '¡El texto ha sido actualizado!';`,
      conclusion: {
        es: "🔥 Beneficio: La manipulación del DOM permite actualizar dinámicamente el contenido de una página sin recargarla.",
        en: "🔥 Benefit: DOM manipulation allows dynamically updating the content of a page without reloading it."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Manipulación del DOM",
        en: "2️⃣ Practical example of DOM Manipulation"
      },
      caseTitle: {
        es: "Agregar un Nuevo Elemento al DOM",
        en: "Adding a New Element to the DOM"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear un nuevo elemento y agregarlo al DOM.",
        en: "This example demonstrates how to create a new element and add it to the DOM."
      },
      code: `// Crear un nuevo elemento
const newElement = document.createElement('p');
newElement.textContent = 'Este es un nuevo párrafo.';

// Agregarlo al cuerpo del documento
document.body.appendChild(newElement);`,
      conclusion: {
        es: "🔥 Beneficio: La creación y adición dinámica de elementos permite construir interfaces interactivas y personalizadas.",
        en: "🔥 Benefit: Dynamically creating and adding elements allows building interactive and customized interfaces."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Manipulación del DOM",
        en: "3️⃣ Practical example of DOM Manipulation"
      },
      caseTitle: {
        es: "Manejo de Eventos con addEventListener",
        en: "Handling Events with addEventListener"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `addEventListener` para manejar eventos del usuario, como clics.",
        en: "This example demonstrates how to use `addEventListener` to handle user events, such as clicks."
      },
      code: `// HTML inicial
<button id="myButton">Haz clic aquí</button>

// JavaScript
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('¡Botón clicado!');
});`,
      conclusion: {
        es: "🔥 Beneficio: El manejo de eventos permite crear interacciones dinámicas y responder a las acciones del usuario.",
        en: "🔥 Benefit: Event handling allows creating dynamic interactions and responding to user actions."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar la Manipulación del DOM?",
        en: "📌 When NOT to use DOM Manipulation?"
      },
      content: {
        es: [
          "❌ Si puedes lograr el mismo resultado usando frameworks modernos como React, Angular o Vue, que optimizan la manipulación del DOM.",
          "❌ Si la manipulación excesiva del DOM afecta negativamente el rendimiento de la página.",
          "❌ Si prefieres evitar la complejidad de escribir código manual para manipular el DOM en proyectos pequeños."
        ],
        en: [
          "❌ If you can achieve the same result using modern frameworks like React, Angular, or Vue, which optimize DOM manipulation.",
          "❌ If excessive DOM manipulation negatively impacts page performance.",
          "❌ If you prefer to avoid the complexity of writing manual code to manipulate the DOM in small projects."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ La manipulación del DOM es esencial para crear interacciones dinámicas en aplicaciones web.",
      "✅ Facilita la actualización del contenido, estructura y estilo de una página sin recargarla.",
      "✅ No debe usarse en exceso si frameworks modernos pueden manejar la manipulación del DOM de manera más eficiente."
    ],
    en: [
      "✅ DOM manipulation is essential for creating dynamic interactions in web applications.",
      "✅ It facilitates updating the content, structure, and style of a page without reloading it.",
      "✅ It should not be overused if modern frameworks can handle DOM manipulation more efficiently."
    ]
  }
};

export default concept;