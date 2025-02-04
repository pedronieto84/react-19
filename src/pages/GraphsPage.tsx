import GraphsComponent from "../components/GraphsComponent"
import {useState, useEffect} from "react";


function GraphsPage() {
 
  // Data state donde almacenaré la response de la api
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  // Para gestionar el estado de loading y error
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Creo un estado para forcar un reload de la api
  const[ reload, setReload] = useState<number>(10);

 


  function generarArrayIncremental(inicio:number, longitud = 10) {
    return Array.from({ length: longitud }, (_, index) => inicio + index);
  }

   // Fetch data 
   useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get<UserFromBeeceptor[]>(
        //   "https://fake-json-api.mock.beeceptor.com/users?limit=10"
        // ); 
        
        // Voy a ignorar el response ya que voy a forzar manualmente un array controlado por mi
       // const results = response.data
      
        const labels: string[] = generarArrayIncremental(1,reload).map((item) => item.toString());
        const data: number[] = generarArrayIncremental(1,reload)
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
          setReload(reload + 1);
        }, 5000);
        
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