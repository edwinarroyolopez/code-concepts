import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "CommonJS vs ESM",
    en: "CommonJS vs ESM"
  },
  slug: "commonjs-vs-esm",
  description: {
    es: "CommonJS y ESM (ECMAScript Modules) son dos sistemas de módulos en JavaScript. CommonJS es ampliamente utilizado en Node.js, mientras que ESM es el estándar moderno para módulos en JavaScript, compatible tanto en navegadores como en Node.js.",
    en: "CommonJS and ESM (ECMAScript Modules) are two module systems in JavaScript. CommonJS is widely used in Node.js, while ESM is the modern standard for JavaScript modules, compatible with both browsers and Node.js."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son CommonJS y ESM?",
        en: "🔹What are CommonJS and ESM?"
      },
      code: `// CommonJS
const module = require('./module');
module.exports = { key: 'value' };

// ESM
import module from './module.js';
export const key = 'value';`,
      content: {
        es: "CommonJS y ESM son dos sistemas de módulos en JavaScript. CommonJS utiliza `require` para importar módulos y `module.exports` para exportarlos, mientras que ESM utiliza `import` y `export`. CommonJS fue diseñado principalmente para entornos de servidor (Node.js), mientras que ESM es el estándar moderno para módulos en JavaScript, compatible tanto en navegadores como en Node.js.",
        en: "CommonJS and ESM are two module systems in JavaScript. CommonJS uses `require` to import modules and `module.exports` to export them, while ESM uses `import` and `export`. CommonJS was primarily designed for server environments (Node.js), while ESM is the modern standard for JavaScript modules, compatible with both browsers and Node.js."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar CommonJS o ESM?",
        en: "🔹When to use CommonJS or ESM?"
      },
      content: {
        es: [
          "Usa CommonJS si trabajas en proyectos antiguos o específicos de Node.js sin soporte nativo para ESM.",
          "Usa ESM si deseas adoptar el estándar moderno de módulos, especialmente en proyectos que funcionan tanto en el navegador como en Node.js.",
          "Usa ESM si necesitas características modernas como importaciones dinámicas (`import()`)."
        ],
        en: [
          "Use CommonJS if working on legacy projects or Node.js-specific projects without native ESM support.",
          "Use ESM if you want to adopt the modern module standard, especially in projects that run in both browsers and Node.js.",
          "Use ESM if you need modern features like dynamic imports (`import()`)."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre CommonJS y ESM",
        en: "🔹Comparison between CommonJS and ESM"
      },
      headers: {
        es: ["Característica", "CommonJS", "ESM"],
        en: ["Feature", "CommonJS", "ESM"]
      },
      rows: [
        {
          es: ["Sintaxis", "`require` / `module.exports`", "`import` / `export`"],
          en: ["Syntax", "`require` / `module.exports`", "`import` / `export`"]
        },
        {
          es: ["Entorno principal", "Node.js", "Navegadores y Node.js"],
          en: ["Main environment", "Node.js", "Browsers and Node.js"]
        },
        {
          es: ["Compatibilidad", "Amplia en Node.js", "Estándar moderno"],
          en: ["Compatibility", "Widespread in Node.js", "Modern standard"]
        },
        {
          es: ["Importaciones dinámicas", "No nativas", "Soportadas (`import()`)" ],
          en: ["Dynamic imports", "Not natively supported", "Supported (`import()`)" ]
        },
        {
          es: ["Ámbito", "Global", "Basado en archivos"],
          en: ["Scope", "Global", "File-based"]
        }
      ]
    },
    {
        "type": "example",
        "title": {
          "es": "1️⃣ Importación de módulos en CommonJS",
          "en": "1️⃣ Importing modules in CommonJS"
        },
        "caseTitle": {
          "es": "Uso de `require` en CommonJS",
          "en": "Using `require` in CommonJS"
        },
        "caseDescription": {
          "es": "CommonJS usa `require` para importar módulos.",
          "en": "CommonJS uses `require` to import modules."
        },
        "code": "const fs = require('fs');\nconsole.log(fs.existsSync('archivo.txt'));",
        "conclusion": {
          "es": "🔥 `require` carga módulos de manera síncrona y se usa en Node.js.",
          "en": "🔥 `require` loads modules synchronously and is used in Node.js."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "2️⃣ Importación de módulos en ESM",
          "en": "2️⃣ Importing modules in ESM"
        },
        "caseTitle": {
          "es": "Uso de `import` en ECMAScript Modules",
          "en": "Using `import` in ECMAScript Modules"
        },
        "caseDescription": {
          "es": "ESM usa `import` para cargar módulos de forma asíncrona.",
          "en": "ESM uses `import` to load modules asynchronously."
        },
        "code": "import fs from 'fs';\nconsole.log(fs.existsSync('archivo.txt'));",
        "conclusion": {
          "es": "🔥 `import` permite cargar módulos de forma asíncrona y es compatible con navegadores.",
          "en": "🔥 `import` allows loading modules asynchronously and is browser-compatible."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "3️⃣ Exportación en CommonJS",
          "en": "3️⃣ Exporting in CommonJS"
        },
        "caseTitle": {
          "es": "Uso de `module.exports` en CommonJS",
          "en": "Using `module.exports` in CommonJS"
        },
        "caseDescription": {
          "es": "CommonJS usa `module.exports` para exportar valores o funciones.",
          "en": "CommonJS uses `module.exports` to export values or functions."
        },
        "code": "module.exports = function saludar() {\n  return 'Hola Mundo';\n};",
        "conclusion": {
          "es": "🔥 CommonJS exporta objetos o funciones con `module.exports`.",
          "en": "🔥 CommonJS exports objects or functions using `module.exports`."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "4️⃣ Exportación en ESM",
          "en": "4️⃣ Exporting in ESM"
        },
        "caseTitle": {
          "es": "Uso de `export` en ECMAScript Modules",
          "en": "Using `export` in ECMAScript Modules"
        },
        "caseDescription": {
          "es": "ESM usa `export` para definir módulos reutilizables.",
          "en": "ESM uses `export` to define reusable modules."
        },
        "code": "export function saludar() {\n  return 'Hola Mundo';\n}",
        "conclusion": {
          "es": "🔥 ECMAScript Modules usa `export` para modularidad nativa.",
          "en": "🔥 ECMAScript Modules uses `export` for native modularity."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "5️⃣ Diferencia en la carga de módulos",
          "en": "5️⃣ Difference in module loading"
        },
        "caseTitle": {
          "es": "CommonJS vs ESM en rendimiento",
          "en": "CommonJS vs ESM in performance"
        },
        "caseDescription": {
          "es": "CommonJS carga módulos de forma síncrona, ESM los carga de forma asíncrona.",
          "en": "CommonJS loads modules synchronously, ESM loads them asynchronously."
        },
        "code": "// CommonJS (bloqueante)\nconst modulo = require('./modulo');\n\n// ESM (asíncrono)\nimport('./modulo.js').then((modulo) => {\n  console.log(modulo);\n});",
        "conclusion": {
          "es": "🔥 ESM permite carga asíncrona, mejorando el rendimiento en aplicaciones modernas.",
          "en": "🔥 ESM allows asynchronous loading, improving performance in modern applications."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "6️⃣ Soporte en navegadores",
          "en": "6️⃣ Browser support"
        },
        "caseTitle": {
          "es": "Uso de módulos en navegadores",
          "en": "Using modules in browsers"
        },
        "caseDescription": {
          "es": "ESM funciona de forma nativa en los navegadores modernos.",
          "en": "ESM works natively in modern browsers."
        },
        "code": "<script type='module'>\n  import { saludar } from './modulo.js';\n  console.log(saludar());\n</script>",
        "conclusion": {
          "es": "🔥 `type='module'` permite usar ESM directamente en navegadores.",
          "en": "🔥 `type='module'` allows using ESM directly in browsers."
        }
      },
      {
        "type": "example",
        "title": {
          "es": "7️⃣ Extensiones de archivos",
          "en": "7️⃣ File extensions"
        },
        "caseTitle": {
          "es": "Diferencias en las extensiones de archivos",
          "en": "Differences in file extensions"
        },
        "caseDescription": {
          "es": "CommonJS usa `.js` y ESM puede usar `.mjs`.",
          "en": "CommonJS uses `.js` and ESM can use `.mjs`."
        },
        "code": "// CommonJS\nrequire('./archivo.js');\n\n// ESM\nimport './archivo.mjs';",
        "conclusion": {
          "es": "🔥 ESM puede usar `.mjs` para diferenciación clara.",
          "en": "🔥 ESM can use `.mjs` for clear differentiation."
        }
      },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar CommonJS o ESM?",
        en: "📌 When NOT to use CommonJS or ESM?"
      },
      content: {
        es: [
          "❌ Si estás trabajando en un proyecto que no requiere modularización.",
          "❌ Si prefieres evitar la complejidad de configurar módulos en proyectos pequeños.",
          "❌ Si el rendimiento es crítico y las características avanzadas de ESM no son necesarias."
        ],
        en: [
          "❌ If working on a project that does not require modularization.",
          "❌ If you prefer to avoid the complexity of setting up modules in small projects.",
          "❌ If performance is critical and the advanced features of ESM are not necessary."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ CommonJS es ideal para proyectos antiguos o específicos de Node.js.",
      "✅ ESM es el estándar moderno y ofrece características avanzadas como importaciones dinámicas.",
      "✅ No debe usarse en exceso si el proyecto no requiere modularización o si la compatibilidad es un problema."
    ],
    en: [
      "✅ CommonJS is ideal for legacy or Node.js-specific projects.",
      "✅ ESM is the modern standard and offers advanced features like dynamic imports.",
      "✅ It should not be overused if the project does not require modularization or if compatibility is an issue."
    ]
  }
};

export default concept;