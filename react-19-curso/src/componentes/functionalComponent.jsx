// Uso de useState y useEffect
import { useState, useEffect } from "react";

const FunctionalComponent = () => {

    const [count, setCount] = useState(0)
    // Usamos el use Effect
    useEffect(() => {
        console.log('useEffect', count)
    })

    
    return (
        <>
            <h1>Use Effect</h1>
            <h2>Contador: {count}</h2>
           
           {
            count %2 === 0 ? <h3>El número es par</h3> : <h3>El número es impar</h3>
           }
            <button onClick={()=> setCount( count + 1)}>
                Aumentar contador
            </button>
      
        </>
    )
}

export default FunctionalComponent;