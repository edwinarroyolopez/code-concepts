import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "Redux Toolkit en React",
    en: "Redux Toolkit in React"
  },
  slug: "redux-toolkit",
  description: {
    es: "Redux Toolkit es una biblioteca oficial de Redux que simplifica la configuración y el manejo del estado global en aplicaciones React. Proporciona herramientas como `createSlice` y `configureStore` para reducir la cantidad de código repetitivo y mejorar la legibilidad.",
    en: "Redux Toolkit is an official Redux library that simplifies the setup and management of global state in React applications. It provides tools like `createSlice` and `configureStore` to reduce boilerplate code and improve readability."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es Redux Toolkit?",
        en: "🔹What is Redux Toolkit?"
      },
      code: "import { configureStore, createSlice } from '@reduxjs/toolkit';",
      content: {
        es: "Redux Toolkit es una capa de abstracción sobre Redux que incluye utilidades para simplificar la creación de stores, slices, y acciones. Está diseñado para hacer que Redux sea más accesible y menos propenso a errores.",
        en: "Redux Toolkit is an abstraction layer over Redux that includes utilities to simplify the creation of stores, slices, and actions. It is designed to make Redux more accessible and less error-prone."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar Redux Toolkit?",
        en: "🔹When to use Redux Toolkit?"
      },
      content: {
        es: [
          "Cuando necesitas un manejo de estado global robusto y escalable en aplicaciones grandes.",
          "Cuando quieres reducir el código repetitivo asociado con Redux tradicional.",
          "Cuando buscas una solución oficial y bien mantenida para la gestión de estado."
        ],
        en: [
          "When you need robust and scalable global state management in large applications.",
          "When you want to reduce boilerplate code associated with traditional Redux.",
          "When you are looking for an official and well-maintained state management solution."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre Redux Toolkit y Redux tradicional",
        en: "🔹Comparison between Redux Toolkit and traditional Redux"
      },
      headers: {
        es: ["Característica", "Redux tradicional", "Redux Toolkit"],
        en: ["Feature", "Traditional Redux", "Redux Toolkit"]
      },
      rows: [
        {
          es: ["Configuración inicial", "✅ Compleja (reductores, acciones, store manual)", "✅ Simplificada (configureStore, createSlice)"],
          en: ["Initial setup", "✅ Complex (reducers, actions, manual store)", "✅ Simplified (configureStore, createSlice)"]
        },
        {
          es: ["Código repetitivo", "✅ Alto (mucho boilerplate)", "✅ Reducido (utilidades integradas)"],
          en: ["Boilerplate code", "✅ High (lots of boilerplate)", "✅ Reduced (built-in utilities)"]
        },
        {
          es: ["Legibilidad", "✅ Menos legible (código disperso)", "✅ Más legible (código organizado)"],
          en: ["Readability", "✅ Less readable (scattered code)", "✅ More readable (organized code)"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de Redux Toolkit",
        en: "1️⃣ Practical example of Redux Toolkit"
      },
      caseTitle: {
        es: "Crear un store básico",
        en: "Create a basic store"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear un store básico con Redux Toolkit y usarlo en un componente.",
        en: "This example demonstrates how to create a basic store with Redux Toolkit and use it in a component."
      },
      code: `import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Crear un slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Configurar el store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Componente que usa el store
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        Incrementar
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        Decrementar
      </button>
    </div>
  );
};

// Aplicación principal
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El store se configura de manera sencilla y el código es más legible y mantenible.",
        en: "🔥 Benefit: The store is set up easily, and the code is more readable and maintainable."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de Redux Toolkit",
        en: "2️⃣ Practical example of Redux Toolkit"
      },
      caseTitle: {
        es: "Manejo de estado complejo",
        en: "Handling complex state"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo manejar un estado más complejo con Redux Toolkit, incluyendo acciones asíncronas.",
        en: "This example demonstrates how to handle more complex state with Redux Toolkit, including asynchronous actions."
      },
      code: `import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// Acción asíncrona para obtener datos
const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return response.data;
});

// Crear un slice
const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Configurar el store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Componente que usa el store
const UserProfile = () => {
  const { user, status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={() => dispatch(fetchUser())}>Obtener usuario</button>
    </div>
  );
};

// Aplicación principal
const App = () => (
  <Provider store={store}>
    <UserProfile />
  </Provider>
);

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: Las acciones asíncronas y el estado complejo se manejan de manera eficiente.",
        en: "🔥 Benefit: Asynchronous actions and complex state are handled efficiently."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de Redux Toolkit",
        en: "3️⃣ Practical example of Redux Toolkit"
      },
      caseTitle: {
        es: "Persistencia del estado",
        en: "State persistence"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar Redux Toolkit con persistencia de estado (por ejemplo, en localStorage).",
        en: "This example demonstrates how to use Redux Toolkit with state persistence (e.g., in localStorage)."
      },
      code: `import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

// Configuración de persistencia
const persistConfig = {
  key: 'root',
  storage,
};

// Crear un slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

// Persistir el reducer
const persistedReducer = persistReducer(persistConfig, themeSlice.reducer);

// Configurar el store
const store = configureStore({
  reducer: {
    theme: persistedReducer,
  },
});

const persistor = persistStore(store);

// Componente que usa el store
const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={() => dispatch(themeSlice.actions.toggleTheme())}>
        Cambiar tema
      </button>
    </div>
  );
};

// Aplicación principal
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeSwitcher />
    </PersistGate>
  </Provider>
);

export default App;`,
      conclusion: {
        es: "🔥 Beneficio: El estado persiste incluso después de recargar la página, mejorando la experiencia del usuario.",
        en: "🔥 Benefit: The state persists even after page reload, enhancing user experience."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar Redux Toolkit?",
        en: "📌 When NOT to use Redux Toolkit?"
      },
      content: {
        es: [
          "❌ Si tu aplicación es pequeña y no necesita un estado global complejo.",
          "❌ Si prefieres soluciones más ligeras como Zustand o Context API.",
          "❌ Si no estás familiarizado con Redux y prefieres evitar su curva de aprendizaje."
        ],
        en: [
          "❌ If your application is small and does not need complex global state.",
          "❌ If you prefer lighter solutions like Zustand or Context API.",
          "❌ If you are not familiar with Redux and prefer to avoid its learning curve."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ Redux Toolkit es ideal para aplicaciones grandes que necesitan un manejo de estado robusto y escalable.",
      "✅ Simplifica la configuración y el uso de Redux, reduciendo el código repetitivo.",
      "✅ No es necesario para aplicaciones pequeñas o simples que no requieren un estado global complejo."
    ],
    en: [
      "✅ Redux Toolkit is ideal for large applications that need robust and scalable state management.",
      "✅ It simplifies the setup and use of Redux, reducing boilerplate code.",
      "✅ It is not necessary for small or simple applications that do not require complex global state."
    ]
  }
};

export default concept;