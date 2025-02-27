const concept = {
    title: "Manejo de estado",
    slug: "manejo-de-estado",
    description: "Explicación sobre Context API, Zustand y Redux...",
    code: `
      import { create } from 'zustand';
  
      const useStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }));
  
      function Counter() {
        const { count, increment } = useStore();
        return <button onClick={increment}>Count: {count}</button>;
      }
    `,
    conclusion: "Zustand es una alternativa ligera a Redux y fácil de usar.",
};

export default concept;
