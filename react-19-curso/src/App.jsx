
import './App.css'



function App() {

  const functionClick = () => {
    console.log('onClick');
  }

  const functionOnMouseOver = () => {
    console.log('onMouseOver');
  }
  
  return (
    <>
      <h1 >React 19 Curso</h1>
      <button onClick= { functionClick } >CLICK</button>
      <button onMouseOver= {functionOnMouseOver}>MOUSE OVER</button>

    </>
  )
}

export default App
