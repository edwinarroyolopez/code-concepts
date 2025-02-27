const concept = {
    title: "Promises y Async/Await",
    slug: "promises-y-async-await",
    description: "Aprenderemos cómo manejar asincronismo en JavaScript.",
    code: `
      function fetchData() {
        return new Promise((resolve) => {
          setTimeout(() => resolve("Datos recibidos"), 2000);
        });
      }
  
      async function getData() {
        const data = await fetchData();
        console.log(data);
      }
  
      getData();
    `,
    conclusion: "Las Promises y Async/Await simplifican el manejo del asincronismo.",
  };
  
  export default concept;
  