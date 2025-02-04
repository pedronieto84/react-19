import { useParams } from "react-router-dom"

function Dinamica() {
  const { userId, postId } = useParams();
    
    return (
      <>
           <div>
        <h1>Post del Usuario</h1>
        <p>ID del usuario: {userId}</p>
        <p>ID del post: {postId}</p>
    </div>
      </>
    )
  }
  
  export default Dinamica