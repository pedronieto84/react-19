import GraphsComponent from "../components/GraphsComponent"
import {useState, useEffect} from "react";
import { FlexibleObjectTable } from "./../types/types";
import axios from "axios";

function GraphsPage() {
 
  // Data state donde almacenaré la response de la api
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  // Para gestionar el estado de loading y error
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Creo un estado para forcar un reload de la api
  const[ reload, setReload] = useState<number>(0);

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
        const response = await axios.get<UserFromBeeceptor[]>(
          "https://fake-json-api.mock.beeceptor.com/users?limit=10"
        ); // AxiosResponse devuele una interfaz donde en la propiedad data captura el genérico que le hemos pasado
        console.log('response.data.results', response.data);
        const results = response.data
        const labels: string[] = results.map((user) => user.id.toString());
        const data: number[] = results.map((user) => user.email.length);
        console.log('labels y data', labels, data);
        setData(data); 
        setLabels(labels)
        setLoading(false); // Set loading to false
      } catch (error) {
        const errorString = new Error(String(error)); // Convertir el error a un objeto `Error`
        console.error(error);
        setError(errorString.message); // Handle errors
        setLoading(false);
      } finally {
        console.log('finally');
        // Creo una lógica para forzar un reload de la api
        setTimeout(() => {

        }, 5000);
        setReload(reload + 1);
      }
    };

    fetchData();
  }, [reload]);

  if (loading) return <div className='card'>Cargando...</div>;
  if (error) return <div className='card'>{error}</div>;

    return (
      <>
      
       <h1 className='card'>Gráficos</h1>
       <GraphsComponent dataProps={data} labelsProps={labels}/>
      </>
    )
  }
  
  export default GraphsPage