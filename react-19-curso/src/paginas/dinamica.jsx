import { useParams } from "react-router-dom"

function Dinamica() {
    const { id } = useParams()
    return (
      <>
        <h1>Dinámica</h1>
        <p>Esta es una página dinámica {id}</p>
      </>
    )
  }
  
  export default Dinamica