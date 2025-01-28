// Uso de useDeferredValue
import {  useState, useDeferredValue } from "react";

const FunctionalComponent = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm); // Diferir el valor del término de búsqueda



  const generateRandomString = (length) => {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  const items = Array.from({ length: 900 }, () => generateRandomString(2500));



  // Filtrar la lista usando el valor diferido
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Filtrar lista</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FunctionalComponent;

