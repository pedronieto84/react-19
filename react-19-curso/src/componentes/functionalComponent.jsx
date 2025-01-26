// Uso de USEState
import { useState } from "react";

const FunctionalComponent = () => {

    const [count, setCount] = useState(0)
    
    return (
        <>
            <h1>Use State</h1>
            <h2>Contador: {count}</h2>
            <button onClick={()=> setCount( count + 1)}>
                Aumentar contador
            </button>
      
        </>
    )
}

export default FunctionalComponent;