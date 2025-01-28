// Uso de useCallback
import {  useCallback, useState } from "react";

const FunctionalComponent = () => {

  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default FunctionalComponent;