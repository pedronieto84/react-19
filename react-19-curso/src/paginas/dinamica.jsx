import { useParams, useSearchParams } from "react-router-dom";

function Dinamica() {

  const {id} = useParams();


  return (
    <div>
      <p>User ID: {id}</p>
 
    </div>
  );
}

export default Dinamica;
