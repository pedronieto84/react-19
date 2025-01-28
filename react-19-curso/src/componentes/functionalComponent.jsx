// Uso de useTransition
import {  useTransition , useState } from "react";

const FunctionalComponent = () => {
  
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  const handleChange = (e) => {
    
    startTransition(() => {
      // Actualización no urgente
      const items = [];

      // Hago esto para forzar una operación muy pesada
      for (let i = 0; i < 20000; i++) {
        items.push(e.target.value);
      }
      setList(items);
    });
  };
  
  return (
    <div>
    <input type="text"  onChange={handleChange} />
    {isPending ? (
      <p>Cargando...</p>
    ) : (
      list.map((item, index) => <div key={index}>{item}</div>)
    )}
  </div>
);
}

export default FunctionalComponent;

