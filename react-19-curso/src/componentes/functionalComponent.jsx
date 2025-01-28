// Uso de useContext
import {  createContext, useContext } from "react";


// 1. Crear un contexto
const ThemeContext = createContext();
// No lo hemos visto aún pero es una forma de compartir datos entre componentes sin tener que pasar props manualmente a través de cada nivel de la jerarquía de componentes.
// Es util si tengo un componente que tiene muchos hijos y quiero pasarle una prop a todos los hijos, en lugar de pasarla manualmente a cada uno de los hijos, puedo usar un contexto para pasarla a todos los hijos de una vez.


const FunctionalComponent = () => {

  return (
    // 2. Proveer el valor del contexto
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}


export default FunctionalComponent;

function ChildComponent() {
  // 3. Consumir el valor del contexto
  const theme = useContext(ThemeContext);

  return <p>El tema actual es: {theme}</p>;

}
