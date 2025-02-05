import CardComponent from "./../components/CardComponent"
import { useState, useEffect } from "react";
import axios from "axios";
import { FlexibleObjectTable } from "../types/types";
import { Container, Row, Col } from "react-bootstrap";
function FormsPage(){

    // Data state donde almacenaré la response de la api
    const [data, setData] = useState<FlexibleObjectTable[]>([]);

     // Para gestionar el estado de loading y error
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the Pokémon API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        setData(response.data.results); // Store the list of Pokémon
        setLoading(false); // Set loading to false
      } catch (error) {
        const errorString = new Error(String(error)); // Convertir el error a un objeto `Error`
        console.error(error);
        setError(errorString.message); // Handle errors
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div className="card">Cargando...</div>;
  if (error) return <div className="card">{error}</div>;

    return(
        <>
        <h1 className='card'>Cards</h1>
        <Container className="mt-4">
      <Row>
        {data.map((user) => (
          <Col key={user.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <CardComponent user={user}/>
          </Col>
        ))}
      </Row>
    </Container>

        
        </>
    )
}

export default FormsPage