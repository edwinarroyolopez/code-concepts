import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "useMemo en React",
    en: "useMemo in React"
  },
  slug: "use-memo",
  description: {
    es: "useMemo es un hook de React que memoriza valores computados para evitar cálculos innecesarios en cada renderización.",
    en: "useMemo is a React hook that memoizes computed values to prevent unnecessary calculations on each render."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Cómo funciona?",
        en: "🔹How does it work?"
      },
      code: "const memoizedValue = useMemo(() => computeValue(param), [param]);",
      content: {
        es: "useMemo devuelve un valor memorizado que solo se recalcula si las dependencias cambian.",
        en: "useMemo returns a memoized value that only recalculates if dependencies change."
      }
    },
    {
      type: "table",
      title: {
        es:"🔹Comparación entre cálculos normales y useMemo",
        en:"🔹Comparison between normal calculations and useMemo"
      },
      headers: {
        es: ["Característica", "Cálculo normal", "useMemo"],
        en: ["Feature", "Normal Calculation", "useMemo"]
      },
      rows: [
        {
          es: ["Repetición en cada render", "⚠️ Sí", "✅ No, si las dependencias no cambian"],
          en: ["Recalculation on each render", "⚠️ Yes", "✅ No, if dependencies don't change"]
        },
        {
          es: ["Optimización de rendimiento", "❌ No optimiza cálculos", "✅ Reduce cálculos innecesarios"],
          en: ["Performance optimization", "❌ Does not optimize calculations", "✅ Reduces unnecessary computations"]
        },
        {
          es: ["Uso en listas grandes", "⚠️ Puede ser lento", "✅ Mejora la eficiencia"],
          en: ["Usage in large lists", "⚠️ Can be slow", "✅ Improves efficiency"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de useMemo",
        en: "1️⃣ Practical example of useMemo"
      },
      caseTitle: {
        es: "Evitar cálculos costosos innecesarios",
        en: "Avoid unnecessary expensive calculations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo evitar cálculos innecesarios en cada render usando useMemo.",
        en: "This example demonstrates how to avoid unnecessary calculations on each render using useMemo."
      },
      code: `import { useState, useMemo } from "react";

const ExpensiveCalculation = ({ count }) => {
  const computedValue = useMemo(() => {
    console.log("Calculando...");
    return count * 2;
  }, [count]);

  return <p>Valor calculado: {computedValue}</p>;
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <ExpensiveCalculation count={count} />
    </div>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Solo recalcula cuando cambia la dependencia, evitando recomputaciones innecesarias.",
        en: "🔥 Benefit: It only recalculates when dependencies change, avoiding unnecessary recomputations."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de useMemo",
        en: "2️⃣ Practical example of useMemo"
      },
      caseTitle: {
        es: "Filtrar una lista sin recomputaciones",
        en: "Filter a list without unnecessary recomputations"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo evitar que una lista filtrada se recalcule en cada render innecesariamente.",
        en: "This example demonstrates how to prevent a filtered list from recalculating unnecessarily on each render."
      },
      code: `import { useState, useMemo } from "react";

const List = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    console.log("Filtrando...");
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return <ul>{filteredItems.map((item, i) => <li key={i}>{item}</li>)}</ul>;
};

const App = () => {
  const [filter, setFilter] = useState("");
  const items = ["apple", "banana", "cherry", "date", "grape"];

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filtrar..." />
      <List items={items} filter={filter} />
    </div>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Evita que la lista filtrada se recalcule en cada render innecesariamente.",
        en: "🔥 Benefit: Prevents the filtered list from recalculating unnecessarily on each render."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de useMemo",
        en: "3️⃣ Practical example of useMemo"
      },
      caseTitle: {
        es: "Evitar recreaciones innecesarias de objetos",
        en: "Avoid unnecessary object recreations"
      },
      caseDescription: {
        es: "Este ejemplo demuestra cómo evitar que un objeto se recree innecesariamente en cada render.",
        en: "This example demonstrates how to prevent an object from being unnecessarily recreated on each render."
      },
      code: `import { useState, useMemo } from "react";

const Component = ({ config }) => {
  return <p>Configuración: {JSON.stringify(config)}</p>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const config = useMemo(() => ({ theme: "dark", size: count }), [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Component config={config} />
    </div>
  );
};

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Evita recreaciones innecesarias de objetos, mejorando la optimización.",
        en: "🔥 Benefit: Prevents unnecessary object recreations, improving optimization."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo tener cuidado con useMemo?",
        en: "📌 When to be careful with useMemo?"
      },
      content: {
        es: [
          "⚠️ No usar en cálculos ligeros que no afectan el rendimiento.",
          "⚠️ Evitar su uso excesivo, ya que puede hacer que el código sea más complejo sin beneficio real.",
          "⚠️ No reemplaza el uso de optimización en estructuras de datos grandes, como indexación eficiente."
        ],
        en: [
          "⚠️ Do not use for lightweight calculations that do not impact performance.",
          "⚠️ Avoid excessive use, as it can make code more complex without real benefit.",
          "⚠️ It does not replace proper optimization in large data structures, such as efficient indexing."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ useMemo ayuda a reducir cálculos costosos innecesarios en cada render.",
      "✅ Es útil cuando se trabaja con listas filtradas, cálculos pesados o dependencias de efectos.",
      "✅ Se debe usar con moderación, ya que su uso excesivo puede afectar el rendimiento."
    ],
    en: [
      "✅ useMemo helps reduce unnecessary expensive calculations on each render.",
      "✅ It is useful when working with filtered lists, heavy computations, or effect dependencies.",
      "✅ It should be used with moderation, as excessive use can affect performance."
    ]
  }
};

export default concept;
