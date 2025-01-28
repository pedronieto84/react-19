// Uso de useMemo
import {  useMemo, useState } from "react";

const FunctionalComponent = () => {

  const [number, setNumber] = useState(1);

  // Estructura y sintaxis similar a useEffect
  const squaredNumber = useMemo(() => {
    console.log('Calculando el cuadrado...');
    return number * number; // Debe tener un return
  }, [number]); // Solo recalcula si `number` cambia

  return (
    <div>
      <h1>Número: {number} </h1>
      <h2>Cuadrado: {squaredNumber} </h2>
      <button onClick={() => setNumber(number + 1)}> Incrementar </button>
    </div>
  );
}


export default FunctionalComponent;