import TableComponent from "../components/TableComponent";
import { FlexibleObjectTable } from "./../types/types";
import { getKeysFromArrayOfObjects } from "../hooks/getKeysFromArrayOfObjects";
import { useState, useEffect } from "react";
import axios from "axios";

function TablePage() {


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

  const columns: string[] = getKeysFromArrayOfObjects(data);

  return (
    <>
      <h1 className="card">Tablas</h1>
      <TableComponent data={data} columns={columns} />
    </>
  );
}

export default TablePage;
