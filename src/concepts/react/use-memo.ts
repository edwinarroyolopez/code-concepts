import { Concept } from "@/types/concept";

const concept: Concept = {
  title: "useMemo en React",
  slug: "use-memo",
  description:
    "useMemo es un hook de React que memoriza el resultado de una función costosa para evitar cálculos innecesarios en cada render. Se usa cuando un valor derivado es computacionalmente costoso de recalcular.",
  sections: [
    {
      type: "text",
      title: "🔹¿Cómo funciona?",
      code: `const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);`,
      content:
        "useMemo devuelve un valor memorizado que solo se recalcula si las dependencias cambian. Esto evita recomputaciones innecesarias en cada renderización.",
    },
    {
      type: "list",
      title: "🔹¿Cuándo usar useMemo?",
      content: [
        "Cuando una operación costosa (cálculos, filtrados, transformaciones) debe evitarse en cada render.",
        "Cuando se necesita mejorar el rendimiento en listas grandes o cálculos intensivos.",
        "Cuando un valor derivado afecta el renderizado de componentes hijos memorizados.",
      ],
    },
    {
      type: "table",
      title: "🔹Comparación entre cálculos normales y useMemo",
      headers: ["Característica", "Cálculo normal", "useMemo"],
      rows: [
        ["Repetición en cada render", "⚠️ Sí", "✅ No, si las dependencias no cambian"],
        ["Optimización de rendimiento", "❌ No optimiza cálculos", "✅ Reduce cálculos innecesarios"],
        ["Uso en listas grandes", "⚠️ Puede ser lento", "✅ Mejora la eficiencia"],
      ],
    },
    {
      type: "example",
      title: "1️⃣ Ejemplo práctico de useMemo",
      caseTitle: "Evitar cálculos innecesarios en listas grandes",
      caseDescription:
        "Este ejemplo muestra cómo evitar que una lista filtrada se recalcule en cada render.",
      code: `
        import { useState, useMemo } from "react";

        const numbers = Array.from({ length: 10000 }, (_, i) => i);

        const FilteredList = ({ query }) => {
          const filteredNumbers = useMemo(() => {
            return numbers.filter(num => num.toString().includes(query));
          }, [query]);

          return <p>Números encontrados: {filteredNumbers.length}</p>;
        };

        const App = () => {
          const [query, setQuery] = useState("");

          return (
            <div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filtrar números"
              />
              <FilteredList query={query} />
            </div>
          );
        };

        export default App;
      `,
      conclusion:
        "🔥 Beneficio: La lista solo se recalcula cuando `query` cambia, mejorando el rendimiento.",
    },
    {
      type: "example",
      title: "2️⃣ Ejemplo práctico de useMemo",
      caseTitle: "Cálculo de valores costosos",
      caseDescription:
        "Este ejemplo optimiza el cálculo de un factorial usando useMemo.",
      code: `
        import { useState, useMemo } from "react";

        const factorial = (n) => {
          console.log("Calculando factorial...");
          return n <= 1 ? 1 : n * factorial(n - 1);
        };

        const FactorialComponent = () => {
          const [number, setNumber] = useState(5);

          const result = useMemo(() => factorial(number), [number]);

          return (
            <div>
              <p>Factorial de {number}: {result}</p>
              <button onClick={() => setNumber(number + 1)}>Incrementar</button>
            </div>
          );
        };

        export default FactorialComponent;
      `,
      conclusion:
        "🔥 Beneficio: `factorial` solo se recalcula cuando `number` cambia, evitando cálculos innecesarios.",
    },
    {
      type: "example",
      title: "3️⃣ Ejemplo práctico de useMemo",
      caseTitle: "Optimización en componentes hijos",
      caseDescription:
        "Este ejemplo muestra cómo evitar renders innecesarios cuando un valor derivado es constante.",
      code: `
        import { useState, useMemo, memo } from "react";

        const ChildComponent = memo(({ computedValue }) => {
          console.log("ChildComponent renderizado");
          return <p>Valor computado: {computedValue}</p>;
        });

        const ParentComponent = () => {
          const [count, setCount] = useState(0);

          const computedValue = useMemo(() => count * 2, [count]);

          return (
            <div>
              <p>Contador: {count}</p>
              <button onClick={() => setCount(count + 1)}>Incrementar</button>
              <ChildComponent computedValue={computedValue} />
            </div>
          );
        };

        export default ParentComponent;
      `,
      conclusion:
        "🔥 Beneficio: `ChildComponent` solo se renderiza cuando `computedValue` cambia, reduciendo renders innecesarios.",
    },
    {
      type: "list",
      title: "📌 ¿Cuándo NO usar useMemo?",
      content: [
        "❌ Si el cálculo es rápido, el overhead de useMemo puede ser mayor que su beneficio.",
        "❌ Si la memorización no aporta mejoras de rendimiento significativas.",
        "❌ Si el valor calculado cambia en cada render sin necesidad de optimización.",
      ],
    },
  ],
  conclusion: [
    "✅ useMemo evita recomputaciones innecesarias y mejora el rendimiento.",
    "✅ Se usa cuando un cálculo costoso debe mantenerse memorizado entre renders.",
    "✅ Es útil en listas grandes, cálculos pesados y optimización de componentes.",
  ],
};

export default concept;
