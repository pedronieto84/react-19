/* eslint-disable no-constant-condition */
import './App.css'

// Puedo crear funciones como si fuera un archivo de javascript normal

function sumar(){
return 2+2
}

const nombre= 'Juan'

function App() {
  return (
    <>
      <h1 className='color'>React 19 Curso</h1>

      <h1>Funcion Sumar: { sumar() }</h1>
      <h1>Operaciones Matemáticas: {3+2}</h1>
      <h1>Trabajar con strings {`Hola ${nombre}`}</h1>
      <h1>Aplicar lógica { ( 3+6 ) >4 ? 'mayor': 'menor'}</h1>
    </>
  )
}

export default App
