import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const divRef = useRef(null);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Función para actualizar el ancho del viewport
  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {

        // Agregar el event listener al montar el componente
        window.addEventListener('resize', updateViewportWidth);
        fetchApi()
        // Limpiar el event listener al desmontar el componente equivalente al 
        // ComponentWillUnmount aqui limpiaremos el event listener, timers...
        return () => {
          window.removeEventListener('resize', updateViewportWidth);
        };
    //fetchApi();
  }, [viewportWidth]);

  return (
    <>
      <div ref={divRef}>
        <h1>Consultas 04-02</h1>
        <h2>{viewportWidth}</h2>
        <ul>
          {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App;
