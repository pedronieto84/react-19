
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import ClassComponent from './componentes/classComponent';
import FunctionalComponent from './componentes/functionalComponent';

function App() {




  return (
   
   <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Class Component</Link>
        </li>
        <li>
          <Link to="/functional">Functional Component</Link>
        </li>
      </ul>
    </nav>
   

    <Routes>
      <Route path="/" element={<ClassComponent />} /> 
      <Route path="/functional" element={<FunctionalComponent />} /> 
    </Routes>

   </Router>
  )
}

export default App
