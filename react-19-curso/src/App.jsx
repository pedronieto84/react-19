
import './App.css'
import ClassComponent from './componentes/classComponent';
import { useState } from 'react';

function App() {

const [value, setValue] = useState(1);

setTimeout(() => {
  setValue(4)
}, 4000);


  return (
   <>
   <ClassComponent value= { value } />
   </>
  )
}

export default App
