// Uso de useLayoutEffect
import { useLayoutEffect, useState, useRef } from "react";

const FunctionalComponent = () => {


  const [width, setWidth] = useState(0);
  const ref = useRef(null); // Usamos useRef porque interactuamos con el DOM
  
  useLayoutEffect(() => {
    console.log(ref);
    if (ref.current) {
      // Medimos el ancho del elemento referenciado
      const measuredWidth = ref.current.getBoundingClientRect().width;
      setWidth(measuredWidth);
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez, después del montaje

  return (
    <div>
      <div ref={ref} style={{ border: '1px solid black', padding: '10px' }}>
        Este es un elemento de ejemplo
      </div>
      <p>El ancho del elemento es: {width}px</p>
    </div>
  );
}


export default FunctionalComponent;