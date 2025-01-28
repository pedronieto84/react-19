// Uso de useReducer
import { useReducer } from "react";

const FunctionalComponent = () => {
 

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>

        <button onClick={() => dispatch("decrement")}>Increment</button>
   
      </div>
    );
}

export default FunctionalComponent;