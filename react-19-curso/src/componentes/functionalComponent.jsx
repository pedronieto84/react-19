// Uso de useState y useEffect
import { useState, useEffect } from "react";

const FunctionalComponent = () => {
 
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Función para obtener los datos de Pikachu con un retraso de 3 segundos
      const fetchPikachu = async () => {
        try {
          console.log('inicio fetch');
          // Simulamos un retraso de 3 segundos
          await new Promise((resolve) => setTimeout(resolve, 3000));
  
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
          if (!response.ok) {
            throw new Error('No se pudo obtener la información de Pikachu');
          }
          const data = await response.json();
          setPokemon(data); // Guardamos los datos en el estado
        } catch (error) {
          setError(error.message); // Guardamos el error en el estado
        } finally {
          setLoading(false); // Indicamos que la carga ha terminado
        }
      };
  
      fetchPikachu(); // Llamamos a la función
    },[]); // El array vacío [] asegura que solo se ejecute una vez al montar el componente
  
    if (loading) return <p>Cargando información de Pikachu...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h1>Información del Pokemon</h1>
        {pokemon && (
          <div>
            <p>Nombre: {pokemon.name}</p>
            <p>Altura: {pokemon.height / 10} m</p>
       
            <img src={pokemon.sprites.front_default} alt="Pikachu" />
          </div>
        )}
      </div>
    );
}

export default FunctionalComponent;