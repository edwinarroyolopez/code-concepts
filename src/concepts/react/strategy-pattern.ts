import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Patrón Strategy en React",
    en: "Strategy Pattern in React"
  },
  slug: "strategy-pattern",
  description: {
    es: "El Patrón Strategy es un patrón de diseño que define una familia de algoritmos o comportamientos, encapsula cada uno de ellos y los hace intercambiables. En React, este patrón es útil para implementar diferentes estrategias de renderizado, validación o lógica de negocio sin modificar la estructura principal del componente.",
    en: "The Strategy Pattern is a design pattern that defines a family of algorithms or behaviors, encapsulates each of them, and makes them interchangeable. In React, this pattern is useful for implementing different rendering, validation, or business logic strategies without modifying the main component structure."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es el Patrón Strategy?",
        en: "🔹What is the Strategy Pattern?"
      },
      code: `const strategy = new ConcreteStrategy();`,
      content: {
        es: "El Patrón Strategy encapsula diferentes algoritmos o comportamientos en objetos separados, permitiendo que un componente utilice diferentes estrategias en tiempo de ejecución. Esto mejora la flexibilidad y reutilización del código.",
        en: "The Strategy Pattern encapsulates different algorithms or behaviors into separate objects, allowing a component to use different strategies at runtime. This improves flexibility and code reuse."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar el Patrón Strategy?",
        en: "🔹When to use the Strategy Pattern?"
      },
      content: {
        es: [
          "Cuando necesitas cambiar dinámicamente la lógica o comportamiento de un componente.",
          "Cuando quieres evitar condicionales complejos (`if/else` o `switch`) dentro de un componente.",
          "Cuando deseas encapsular diferentes algoritmos o comportamientos para mejorar la mantenibilidad."
        ],
        en: [
          "When you need to dynamically change the logic or behavior of a component.",
          "When you want to avoid complex conditionals (`if/else` or `switch`) inside a component.",
          "When you want to encapsulate different algorithms or behaviors to improve maintainability."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Patrón Strategy y Condicionales Directos",
        en: "🔹Comparison between Strategy Pattern and Direct Conditionals"
      },
      headers: {
        es: ["Característica", "Patrón Strategy", "Condicionales Directos"],
        en: ["Feature", "Strategy Pattern", "Direct Conditionals"]
      },
      rows: [
        {
          es: ["Flexibilidad", "✅ Alta (intercambiable)", "❌ Baja (fijo)"],
          en: ["Flexibility", "✅ High (interchangeable)", "❌ Low (fixed)"]
        },
        {
          es: ["Mantenibilidad", "✅ Alta (encapsulado)", "❌ Baja (disperso)"],
          en: ["Maintainability", "✅ High (encapsulated)", "❌ Low (scattered)"]
        },
        {
          es: ["Escalabilidad", "✅ Escalable (modular)", "❌ Menos escalable (monolítico)"],
          en: ["Scalability", "✅ Scalable (modular)", "❌ Less scalable (monolithic)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico del Patrón Strategy",
        en: "1️⃣ Practical example of the Strategy Pattern"
      },
      caseTitle: {
        es: "Uso básico con funciones de estrategia",
        en: "Basic usage with strategy functions"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el Patrón Strategy para implementar diferentes estrategias de validación en un formulario.",
        en: "This example demonstrates how to use the Strategy Pattern to implement different validation strategies in a form."
      },
      code: `import React, { useState } from 'react';

// Estrategias de validación
const emailValidationStrategy = (value) => {
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
  return isValid ? null : 'Correo electrónico no válido';
};

const passwordValidationStrategy = (value) => {
  const isValid = value.length >= 6;
  return isValid ? null : 'La contraseña debe tener al menos 6 caracteres';
};

// Componente Formulario
function Form({ validationStrategy }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setError(validationStrategy(inputValue));
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

// Uso en la aplicación
function App() {
  return (
    <div>
      <h1>Validación de Correo Electrónico</h1>
      <Form validationStrategy={emailValidationStrategy} />
      <h1>Validación de Contraseña</h1>
      <Form validationStrategy={passwordValidationStrategy} />
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Las estrategias de validación son intercambiables y encapsulan la lógica específica, mejorando la flexibilidad y mantenibilidad.",
        en: "🔥 Benefit: Validation strategies are interchangeable and encapsulate specific logic, improving flexibility and maintainability."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico del Patrón Strategy",
        en: "2️⃣ Practical example of the Strategy Pattern"
      },
      caseTitle: {
        es: "Estrategias de renderizado",
        en: "Rendering strategies"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el Patrón Strategy para implementar diferentes estrategias de renderizado basadas en una configuración.",
        en: "This example demonstrates how to use the Strategy Pattern to implement different rendering strategies based on a configuration."
      },
      code: `import React from 'react';

// Estrategias de renderizado
const textRenderStrategy = (content) => <p>{content}</p>;
const buttonRenderStrategy = (content) => <button>{content}</button>;

// Componente Renderizador
function Renderer({ renderStrategy, content }) {
  return renderStrategy(content);
}

// Uso en la aplicación
function App() {
  return (
    <div>
      <h1>Estrategia de Texto</h1>
      <Renderer renderStrategy={textRenderStrategy} content="Esto es un párrafo." />
      <h1>Estrategia de Botón</h1>
      <Renderer renderStrategy={buttonRenderStrategy} content="Haz clic aquí" />
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Las estrategias de renderizado permiten cambiar dinámicamente cómo se muestra el contenido sin modificar el componente base.",
        en: "🔥 Benefit: Rendering strategies allow dynamically changing how content is displayed without modifying the base component."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico del Patrón Strategy",
        en: "3️⃣ Practical example of the Strategy Pattern"
      },
      caseTitle: {
        es: "Estrategias de cálculo",
        en: "Calculation strategies"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar el Patrón Strategy para implementar diferentes estrategias de cálculo en una aplicación financiera.",
        en: "This example demonstrates how to use the Strategy Pattern to implement different calculation strategies in a financial application."
      },
      code: `import React, { useState } from 'react';

// Estrategias de cálculo
const simpleInterestStrategy = (principal, rate, time) => principal * rate * time;
const compoundInterestStrategy = (principal, rate, time) =>
  principal * Math.pow(1 + rate, time) - principal;

// Componente Calculadora
function InterestCalculator({ calculationStrategy }) {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);

  const calculateInterest = () => {
    return calculationStrategy(principal, rate, time).toFixed(2);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Principal"
        value={principal}
        onChange={(e) => setPrincipal(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Tasa de interés"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Tiempo"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />
      <p>Interés calculado: {calculateInterest()}</p>
    </div>
  );
}

// Uso en la aplicación
function App() {
  return (
    <div>
      <h1>Cálculo de Interés Simple</h1>
      <InterestCalculator calculationStrategy={simpleInterestStrategy} />
      <h1>Cálculo de Interés Compuesto</h1>
      <InterestCalculator calculationStrategy={compoundInterestStrategy} />
    </div>
  );
}

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Las estrategias de cálculo encapsulan la lógica específica, permitiendo cambiar fácilmente entre diferentes métodos de cálculo.",
        en: "🔥 Benefit: Calculation strategies encapsulate specific logic, allowing easy switching between different calculation methods."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar el Patrón Strategy?",
        en: "📌 When NOT to use the Strategy Pattern?"
      },
      content: {
        es: [
          "❌ Si solo hay un único comportamiento o algoritmo y no se espera que cambie.",
          "❌ Si prefieres mantener la lógica directamente en el componente para simplificar el flujo.",
          "❌ Si el uso del patrón introduce complejidad innecesaria en aplicaciones pequeñas."
        ],
        en: [
          "❌ If there is only one behavior or algorithm and it is not expected to change.",
          "❌ If you prefer keeping the logic directly in the component to simplify the flow.",
          "❌ If using the pattern introduces unnecessary complexity in small applications."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ El Patrón Strategy es ideal para encapsular diferentes comportamientos o algoritmos y hacerlos intercambiables.",
      "✅ Permite mejorar la flexibilidad y mantenibilidad del código al evitar condicionales complejos.",
      "✅ No debe usarse en exceso, ya que puede complicar la estructura si no se gestiona adecuadamente."
    ],
    en: [
      "✅ The Strategy Pattern is ideal for encapsulating different behaviors or algorithms and making them interchangeable.",
      "✅ It improves code flexibility and maintainability by avoiding complex conditionals.",
      "✅ It should not be overused, as it can complicate the structure if not managed properly."
    ]
  }
};

export default concept;