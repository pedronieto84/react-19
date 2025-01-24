
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pagina1 from './paginas/pagina1';
import Pagina2 from './paginas/pagina2';
import Dinamica from './paginas/dinamica';

function App() {

  let id = 1

  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/pagina1">Inicio</Link>
        </li>
        <li>
          <Link to="/pagina2">Acerca de</Link>
        </li>
        <li>
          <Link to={`/dinamica/${id}`}>Dinámica</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/pagina1" element={<Pagina1 />} />
      <Route path="/pagina2" element={<Pagina2 />} />
      <Route path="/dinamica/:id" element={<Dinamica />} />
    </Routes>
  </Router>
  )
}

export default App
