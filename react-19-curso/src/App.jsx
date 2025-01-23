
import './App.css'
import ClassComponent from './componentes/classComponent';
//import FunctionalComponent from './componentes/functionalComponent';

function App() {

  const texto = 'Texto'
  const objeto = {
    nombre: 'Nombre',
    apellido: 'Apellido'
  }

  return (
    <>
      <h1 >React 19 Curso</h1>
      
      <ClassComponent 
      propsClass1={texto}
      propsClass2String = 'String a pelo'
      propsClass3Number = {3}
      propsClass4Object = {objeto}
      />
    </>
  )
}

export default App
