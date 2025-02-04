import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(0);

  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>Consultas 04-02</h1>
      <h2>Lista de tareas</h2>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
