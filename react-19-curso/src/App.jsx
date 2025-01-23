
import './App.css'
import ClassComponent from './componentes/classComponent';
//import FunctionalComponent from './componentes/functionalComponent';

function App() {


  return (
    <>
      <h1 >React 19 Curso</h1>
      
      <ClassComponent 
        recibirDatosDeHijo={(data) => console.log('recibido desde padre', data)}
      />
    </>
  )
}

export default App
