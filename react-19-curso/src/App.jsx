
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import FunctionalComponent from './componentes/functionalComponent';

function App() {

  return (
   
   <Router>
    <nav>
      <ul>
        <li>
          <Link to="/use-state">Use State</Link>
        </li>
      </ul>
    </nav>
   

    <Routes>
    
      <Route path="/use-state" element={<FunctionalComponent />} /> 
    </Routes>

   </Router>
  )
}

export default App
