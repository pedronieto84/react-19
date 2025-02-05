
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";


const CardComponent = ({user}) => {

  console.log('props user', user);

  // Este componente va a ser un componente con estado
  // Tengo el problema que no tengo la url de la imagen

     // Data state donde almacenaré la response de la api
      const [data, setData] = useState(null);
  
       // Para gestionar el estado de loading y error
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchPoke = async () => {
        try {
          console.log('inicio fetch');
          // Simulamos un retraso de 3 segundos
          await new Promise((resolve) => setTimeout(resolve, 3000));
  
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${user.name}`);
          if (!response.ok) {
            throw new Error('No se pudo obtener la información de Pikachu');
          }
          const data = await response.json();
          setData(data); // Guardamos los datos en el estado
        } catch (error) {
          setError(error.message); // Guardamos el error en el estado
        } finally {
          setLoading(false); // Indicamos que la carga ha terminado
        }
      };
  
      fetchPoke(); // Llamamos a la función
    },[]); //

 
  console.log('user', user)
  if (loading) return <div className="card">Cargando...</div>;
  if (error) return <div className="card">{error}</div>;
  return (
    <Card className="h-100 shadow-sm">
      {/* <Card.Img variant="top" src={user.sprites.front_default}  /> */}
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        
      </Card.Body>
    </Card>
  );
}

export default CardComponent;