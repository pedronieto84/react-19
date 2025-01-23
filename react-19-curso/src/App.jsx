
import './App.css'
//import ClassComponent from './componentes/classComponent';
import FunctionalComponent from './componentes/functionalComponent';
import {useState} from 'react'

function App() {

  // Esto son hooks, lo veremos más adelante
  const [data, setData] = useState('')

  const childToParent = (dataFromChild)=>{
    console.log('data del hijo al padre', dataFromChild)
    setData(dataFromChild)
  }

  return (
    <>
      <h1 >React 19 Curso</h1>
      
      <FunctionalComponent childToParent = {childToParent} />
      
      <div className="card">{data}</div>
     
    </>
  )
}

export default App
