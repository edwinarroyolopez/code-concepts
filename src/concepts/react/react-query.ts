import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "React Query en React",
    en: "React Query in React"
  },
  slug: "react-query",
  description: {
    es: "React Query es una biblioteca para manejar datos asíncronos y caching en aplicaciones React. Simplifica la obtención, sincronización y actualización de datos, ofreciendo herramientas poderosas como `useQuery` y `useMutation`. Es ideal para aplicaciones que necesitan manejar datos de APIs de manera eficiente.",
    en: "React Query is a library for handling asynchronous data and caching in React applications. It simplifies fetching, synchronizing, and updating data, providing powerful tools like `useQuery` and `useMutation`. It is ideal for applications that need to efficiently manage data from APIs."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué es React Query?",
        en: "🔹What is React Query?"
      },
      code: "import { useQuery, useMutation } from 'react-query';",
      content: {
        es: "React Query es una biblioteca que maneja el estado de datos asíncronos, como los obtenidos de APIs. Proporciona hooks como `useQuery` para obtener datos y `useMutation` para realizar actualizaciones, además de funcionalidades avanzadas como caching, revalidación automática y manejo de errores.",
        en: "React Query is a library that manages the state of asynchronous data, such as data fetched from APIs. It provides hooks like `useQuery` for fetching data and `useMutation` for performing updates, along with advanced features like caching, automatic revalidation, and error handling."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar React Query?",
        en: "🔹When to use React Query?"
      },
      content: {
        es: [
          "Cuando necesitas obtener y manejar datos de APIs de manera eficiente.",
          "Cuando quieres simplificar el manejo de caching y sincronización de datos.",
          "Cuando buscas una solución robusta para manejar estados de carga, errores y actualizaciones."
        ],
        en: [
          "When you need to fetch and manage data from APIs efficiently.",
          "When you want to simplify caching and data synchronization.",
          "When you are looking for a robust solution to handle loading states, errors, and updates."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre React Query y manejo manual de datos",
        en: "🔹Comparison between React Query and manual data handling"
      },
      headers: {
        es: ["Característica", "Manejo manual", "React Query"],
        en: ["Feature", "Manual handling", "React Query"]
      },
      rows: [
        {
          es: ["Caching", "❌ Manual (complejo y propenso a errores)", "✅ Automático y configurable"],
          en: ["Caching", "❌ Manual (complex and error-prone)", "✅ Automatic and configurable"]
        },
        {
          es: ["Sincronización", "❌ Requiere lógica adicional", "✅ Revalidación automática"],
          en: ["Synchronization", "❌ Requires additional logic", "✅ Automatic revalidation"]
        },
        {
          es: ["Manejo de errores", "❌ Manual (try/catch)", "✅ Integrado y fácil de usar"],
          en: ["Error handling", "❌ Manual (try/catch)", "✅ Built-in and easy to use"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de React Query",
        en: "1️⃣ Practical example of React Query"
      },
      caseTitle: {
        es: "Obtener datos de una API",
        en: "Fetch data from an API"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `useQuery` para obtener datos de una API y manejar estados de carga y errores.",
        en: "This example demonstrates how to use `useQuery` to fetch data from an API and handle loading and error states."
      },
      code: `import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

const UsersList = () => {
  const { data, isLoading, error } = useQuery('users', fetchUsers);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;`,
      conclusion: {
        es: "🔥 Beneficio: La obtención de datos es sencilla, con manejo automático de estados de carga y errores.",
        en: "🔥 Benefit: Data fetching is straightforward, with automatic handling of loading and error states."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de React Query",
        en: "2️⃣ Practical example of React Query"
      },
      caseTitle: {
        es: "Actualizar datos con una mutación",
        en: "Update data with a mutation"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar `useMutation` para actualizar datos en una API.",
        en: "This example demonstrates how to use `useMutation` to update data in an API."
      },
      code: `import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const updateUser = async (user) => {
  const response = await axios.put(
    \`https://jsonplaceholder.typicode.com/users/\${user.id}\`,
    user
  );
  return response.data;
};

const UpdateUserForm = ({ user }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users'); // Revalidar la lista de usuarios
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ ...user, name: 'Nuevo Nombre' });
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Actualizando...' : 'Actualizar usuario'}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Usuario actualizado!</p>}
    </div>
  );
};

export default UpdateUserForm;`,
      conclusion: {
        es: "🔥 Beneficio: Las mutaciones son fáciles de manejar, con soporte para revalidación automática de datos.",
        en: "🔥 Benefit: Mutations are easy to handle, with support for automatic data revalidation."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de React Query",
        en: "3️⃣ Practical example of React Query"
      },
      caseTitle: {
        es: "Paginación y revalidación automática",
        en: "Pagination and automatic revalidation"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo usar React Query para manejar paginación y revalidación automática de datos.",
        en: "This example demonstrates how to use React Query to handle pagination and automatic data revalidation."
      },
      code: `import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async ({ queryKey }) => {
  const [, page] = queryKey;
  const response = await axios.get(
    \`https://jsonplaceholder.typicode.com/users?_page=\${page}&_limit=10\`
  );
  return response.data;
};

const UsersList = ({ page }) => {
  const { data, isLoading, error } = useQuery(['users', page], fetchUsers, {
    keepPreviousData: true, // Mantener datos anteriores mientras se cargan los nuevos
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;`,
      conclusion: {
        es: "🔥 Beneficio: La paginación y la revalidación automática mejoran la experiencia del usuario.",
        en: "🔥 Benefit: Pagination and automatic revalidation enhance the user experience."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar React Query?",
        en: "📌 When NOT to use React Query?"
      },
      content: {
        es: [
          "❌ Si tu aplicación no necesita manejar datos asíncronos o APIs.",
          "❌ Si prefieres soluciones más simples como `fetch` o `axios` sin caching.",
          "❌ Si no necesitas funcionalidades avanzadas como revalidación automática o paginación."
        ],
        en: [
          "❌ If your application does not need to handle asynchronous data or APIs.",
          "❌ If you prefer simpler solutions like `fetch` or `axios` without caching.",
          "❌ If you don't need advanced features like automatic revalidation or pagination."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ React Query es ideal para aplicaciones que necesitan manejar datos de APIs de manera eficiente.",
      "✅ Simplifica el caching, la sincronización y el manejo de errores.",
      "✅ No es necesario para aplicaciones que no dependen de datos asíncronos o APIs."
    ],
    en: [
      "✅ React Query is ideal for applications that need to efficiently manage data from APIs.",
      "✅ It simplifies caching, synchronization, and error handling.",
      "✅ It is not necessary for applications that do not rely on asynchronous data or APIs."
    ]
  }
};

export default concept;