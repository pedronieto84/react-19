
import './App.css'

function App() {

  const functionWithParameters = ( parameter) => {
    console.log(`Función llamada desde ${parameter}`);
  }



  return (
    <>
      <h1 >React 19 Curso</h1>
      <button onClick={() => functionWithParameters('Click')}>Click</button>
      <button onMouseOver={() => functionWithParameters('MouseOver')}>Mouse Over</button>


    </>
  )
}

export default App
