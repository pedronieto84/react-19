// Uso de useRef
import {  useRef } from "react";

const FunctionalComponent = () => {

  const renderCount = useRef(0); // Contador de renders
  const inputRef = useRef(null); // Crear una referencia para el input

  
  // Controlamos el evento con una función
  const manejarClick = () => {
    renderCount.current += 1 // Es mutable, puedo modificarlo directamente
    inputRef.current.value = renderCount.current
    inputRef.current.focus(); // Hacemos focus en el input (interactuamos con DOM sin renderizar)
  };

  return (
    <div>
      <p>Número de renders: {renderCount.current}</p>
      <button onClick={manejarClick}>Incrementar</button>

      <input ref={inputRef} type="text" placeholder="Escribe algo..." />

    </div>

    
  );
}


export default FunctionalComponent;