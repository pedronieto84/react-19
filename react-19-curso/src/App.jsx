import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Dinamica from "./paginas/dinamica";

function App() {
  // Array de números del 1 al 10 aquí podríamos poner todas las rutas que a las que queremos navegar
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <nav>
        <ul>
          {/* Generar enlaces dinámicamente */} 
          {numbers.map((number) => (
            <li key={number}>
              <Link to={`/dinamica/${number}`}>Número {number}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        {/* Ruta dinámica para mostrar el número seleccionado */}
        <Route path="/dinamica/:id" element={<Dinamica />} />
      </Routes>
    </>
  );
}

export default App;
