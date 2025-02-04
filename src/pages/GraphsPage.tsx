import GraphsComponent from "../components/GraphsComponent"
import {useState, useEffect} from "react";
import { FlexibleObjectTable } from "./../types/types";

function GraphsPage() {
 
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

    return (
      <>
      
       <h1 className='card'>Gráficos</h1>
       <GraphsComponent />
      </>
    )
  }
  
  export default GraphsPage