
import getData from './../hooks/getData.js'


const FunctionalComponent = () => {
  const data = getData()
  console.log(data);
  
  return (
    <>
        <h1>Usuarios</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>
                    {user.nombre} - {user.edad}
                </li>
            ))} 
        </ul>
    </>
  )
}

export default FunctionalComponent;

