import { Concept } from "@/types/concept";

const concept: Concept = {
  title: {
    es: "WebSockets",
    en: "WebSockets"
  },
  slug: "websockets",
  description: {
    es: "WebSockets es una tecnología que permite la comunicación bidireccional en tiempo real entre un cliente y un servidor. A diferencia de HTTP, WebSockets mantiene una conexión abierta, lo que facilita la transmisión de datos en ambas direcciones sin necesidad de realizar solicitudes repetidas.",
    en: "WebSockets is a technology that enables real-time, bidirectional communication between a client and a server. Unlike HTTP, WebSockets maintains an open connection, facilitating data transmission in both directions without the need for repeated requests."
  },
  sections: [
    {
      type: "text",
      title: {
        es: "🔹¿Qué son los WebSockets?",
        en: "🔹What are WebSockets?"
      },
      code: `// Crear una conexión WebSocket
const socket = new WebSocket('ws://example.com/socket');

// Manejar eventos del WebSocket
socket.onopen = () => console.log('Conexión establecida');
socket.onmessage = (event) => console.log('Mensaje recibido:', event.data);
socket.onclose = () => console.log('Conexión cerrada');
socket.onerror = (error) => console.error('Error:', error);`,
      content: {
        es: "WebSockets es un protocolo de comunicación que permite una conexión persistente entre un cliente y un servidor. A diferencia de HTTP, que sigue un modelo de solicitud-respuesta, WebSockets mantiene una conexión abierta, lo que permite enviar y recibir datos en tiempo real sin necesidad de realizar nuevas solicitudes. Esto lo hace ideal para aplicaciones interactivas como chats, juegos en línea o notificaciones en tiempo real.",
        en: "WebSockets is a communication protocol that allows a persistent connection between a client and a server. Unlike HTTP, which follows a request-response model, WebSockets maintains an open connection, enabling real-time data transmission without the need for new requests. This makes it ideal for interactive applications like chats, online games, or real-time notifications."
      }
    },
    {
      type: "list",
      title: {
        es: "🔹¿Cuándo usar WebSockets?",
        en: "🔹When to use WebSockets?"
      },
      content: {
        es: [
          "Cuando necesitas actualizaciones en tiempo real, como en aplicaciones de chat o notificaciones.",
          "Cuando deseas reducir la latencia y evitar solicitudes HTTP repetidas.",
          "Cuando trabajas con aplicaciones que requieren comunicación bidireccional, como juegos en línea.",
          "Cuando prefieres una conexión persistente en lugar de un modelo de solicitud-respuesta."
        ],
        en: [
          "When you need real-time updates, such as in chat applications or notifications.",
          "When you want to reduce latency and avoid repeated HTTP requests.",
          "When working with applications that require bidirectional communication, such as online games.",
          "When you prefer a persistent connection over a request-response model."
        ]
      }
    },
    {
      type: "table",
      title: {
        es: "🔹Comparación entre WebSockets y HTTP",
        en: "🔹Comparison between WebSockets and HTTP"
      },
      headers: {
        es: ["Característica", "WebSockets", "HTTP"],
        en: ["Feature", "WebSockets", "HTTP"]
      },
      rows: [
        {
          es: ["Modelo de comunicación", "Bidireccional", "Solicitud-respuesta"],
          en: ["Communication model", "Bidirectional", "Request-response"]
        },
        {
          es: ["Latencia", "✅ Baja", "❌ Alta (requiere nuevas solicitudes)"],
          en: ["Latency", "✅ Low", "❌ High (requires new requests)"]
        },
        {
          es: ["Persistencia", "✅ Conexión abierta", "❌ Conexión cerrada tras cada solicitud"],
          en: ["Persistence", "✅ Open connection", "❌ Closed connection after each request"]
        },
        {
          es: ["Uso común", "Chats, notificaciones, juegos en línea", "APIs REST, páginas web estáticas"],
          en: ["Common use", "Chats, notifications, online games", "REST APIs, static web pages"]
        }
      ]
    },
    {
      type: "example",
      title: {
        es: "1️⃣ Ejemplo práctico de WebSockets",
        en: "1️⃣ Practical example of WebSockets"
      },
      caseTitle: {
        es: "Crear una Conexión WebSocket",
        en: "Creating a WebSocket Connection"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo crear una conexión WebSocket y manejar eventos básicos como conexión, mensajes y cierre.",
        en: "This example demonstrates how to create a WebSocket connection and handle basic events like connection, messages, and closure."
      },
      code: `// Crear una conexión WebSocket
const socket = new WebSocket('ws://example.com/socket');

// Evento cuando la conexión se establece
socket.onopen = () => {
  console.log('Conexión WebSocket establecida');
  socket.send('Hola, servidor!');
};

// Evento cuando se recibe un mensaje del servidor
socket.onmessage = (event) => {
  console.log('Mensaje del servidor:', event.data);
};

// Evento cuando la conexión se cierra
socket.onclose = () => {
  console.log('Conexión WebSocket cerrada');
};

// Evento cuando ocurre un error
socket.onerror = (error) => {
  console.error('Error en WebSocket:', error);
};`,
      conclusion: {
        es: "🔥 Beneficio: WebSockets permite una comunicación en tiempo real y bidireccional, ideal para aplicaciones interactivas.",
        en: "🔥 Benefit: WebSockets enables real-time, bidirectional communication, ideal for interactive applications."
      }
    },
    {
      type: "example",
      title: {
        es: "2️⃣ Ejemplo práctico de WebSockets",
        en: "2️⃣ Practical example of WebSockets"
      },
      caseTitle: {
        es: "Enviar y Recibir Datos en Tiempo Real",
        en: "Sending and Receiving Data in Real-Time"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo enviar datos desde el cliente al servidor y recibir respuestas en tiempo real.",
        en: "This example demonstrates how to send data from the client to the server and receive responses in real-time."
      },
      code: `// Cliente: Enviar un mensaje al servidor
socket.send(JSON.stringify({ action: 'sendMessage', message: '¡Hola desde el cliente!' }));

// Servidor: Respuesta simulada
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.action === 'sendMessage') {
    console.log('Mensaje recibido:', data.message);
    // Simular respuesta del servidor
    socket.send(JSON.stringify({ response: '¡Hola desde el servidor!' }));
  }
};`,
      conclusion: {
        es: "🔥 Beneficio: WebSockets facilita la transmisión de datos estructurados en tiempo real, mejorando la interactividad.",
        en: "🔥 Benefit: WebSockets facilitates the transmission of structured data in real-time, enhancing interactivity."
      }
    },
    {
      type: "example",
      title: {
        es: "3️⃣ Ejemplo práctico de WebSockets",
        en: "3️⃣ Practical example of WebSockets"
      },
      caseTitle: {
        es: "Cerrar una Conexión WebSocket",
        en: "Closing a WebSocket Connection"
      },
      caseDescription: {
        es: "Este ejemplo muestra cómo cerrar una conexión WebSocket de manera controlada.",
        en: "This example demonstrates how to close a WebSocket connection in a controlled manner."
      },
      code: `// Cerrar la conexión WebSocket
socket.close(1000, 'Cierre normal');

// Manejar el evento de cierre
socket.onclose = (event) => {
  console.log('Código de cierre:', event.code);
  console.log('Razón de cierre:', event.reason);
};`,
      conclusion: {
        es: "🔥 Beneficio: Cerrar conexiones WebSocket de manera controlada asegura una desconexión limpia y evita problemas de recursos.",
        en: "🔥 Benefit: Closing WebSocket connections in a controlled manner ensures a clean disconnection and avoids resource issues."
      }
    },
    {
      type: "list",
      title: {
        es: "📌 ¿Cuándo NO usar WebSockets?",
        en: "📌 When NOT to use WebSockets?"
      },
      content: {
        es: [
          "❌ Si no necesitas comunicación en tiempo real y las solicitudes HTTP son suficientes.",
          "❌ Si el proyecto tiene limitaciones de compatibilidad con navegadores antiguos.",
          "❌ Si prefieres una solución más simple para transferir datos pequeños o poco frecuentes."
        ],
        en: [
          "❌ If you don't need real-time communication and HTTP requests are sufficient.",
          "❌ If the project has compatibility limitations with older browsers.",
          "❌ If you prefer a simpler solution for transferring small or infrequent data."
        ]
      }
    }
  ],
  conclusion: {
    es: [
      "✅ WebSockets es ideal para aplicaciones que requieren comunicación en tiempo real y bidireccional.",
      "✅ Facilita la transmisión de datos en tiempo real sin necesidad de solicitudes repetidas.",
      "✅ No debe usarse si las solicitudes HTTP tradicionales son suficientes para el caso de uso."
    ],
    en: [
      "✅ WebSockets is ideal for applications that require real-time, bidirectional communication.",
      "✅ It facilitates real-time data transmission without the need for repeated requests.",
      "✅ It should not be used if traditional HTTP requests are sufficient for the use case."
    ]
  }
};

export default concept;