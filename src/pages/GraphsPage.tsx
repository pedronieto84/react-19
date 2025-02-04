import GraphsComponent from "../components/GraphsComponent"
import {useState, useEffect} from "react";
import { FlexibleObjectTable } from "./../types/types";
import axios from "axios";

function GraphsPage() {
 
  // Data state donde almacenaré la response de la api
  const [data, setData] = useState<FlexibleObjectTable[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  // Para gestionar el estado de loading y error
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  interface UserFromBeeceptor {
    id: number;
    name: string;
    company: string;
    username: string;
    email: string;
    address: string;
    zip: string;
    state: string;
    country: string;
    phone: string;
    photo: string;
  }

   // Fetch data 
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fake-json-api.mock.beeceptor.com/users?limit=10"
        );
        const results: UserFromBeeceptor[] = response.data.results;
        const labels: string[] = results.map((user) => user.id.toString());
        const data: number[] = results.map((user) => user.email.length);
        setData(data); 
        setData(labels)
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

  if (loading) return <div className='card'>Cargando...</div>;
  if (error) return <div className='card'>{error}</div>;

    return (
      <>
      
       <h1 className='card'>Gráficos</h1>
       <GraphsComponent data={data} labels={labels}/>
      </>
    )
  }
  
  export default GraphsPage