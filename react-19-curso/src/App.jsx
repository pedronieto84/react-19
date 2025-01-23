
import './App.css'


// Creamos un objeto que intenta simular css, pero veamos que
// en vez de 'font-size' lo tenemos que poner en camelCase
const inlineStyle = {
  color:'blue',
  fontSize: "50px"
}

function App() {
  return (
    <>
      <h1 style={inlineStyle}>React 19 Curso</h1>
    </>
  )
}

export default App
