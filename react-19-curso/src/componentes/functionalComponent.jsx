// Uso de useDebugValue
import {  useDebugValue, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  useDebugValue(`Count desde useDebugValue: ${count}`); // Muestra el valor en React DevTools
  return [count, setCount];
}

const FunctionalComponent = () => {
  
  const [count, setCount] = useCounter();
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;

}

export default FunctionalComponent;

