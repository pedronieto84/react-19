
import './App.css'
//import ClassComponent from './componentes/classComponent';
import FunctionalComponent from './componentes/functionalComponent';

function App() {

  const texto = 'Texto'
  const objeto = {
    nombre: 'Nombre',
    apellido: 'Apellido'
  }

  return (
    <>
      <h1 >React 19 Curso</h1>
      
      <FunctionalComponent 
      propsFunctional1={texto}
      propsFunctional2String = 'String a pelo'
      propsFunctional3Number = {3}
      propsFunctional4Object = {objeto}
      />
    </>
  )
}

export default App
