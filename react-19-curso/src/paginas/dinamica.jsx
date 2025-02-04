import { useParams, useSearchParams } from "react-router-dom";

function Dinamica() {

  const {userId} = useParams();
  // Obtén los parámetros de la URL
  const [searchParams] = useSearchParams();
  // Esto me devuelve la string de query id=4&filter=3
  console.log(searchParams);

  // Si quiero obtener los valores de los query params (id y filter)
  const idParams = searchParams.get("id"); 
  const filter = searchParams.get("filter");

  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Filter: {filter}</p>
      <p>Id param: {idParams}</p>
    </div>
  );
}

export default Dinamica;
