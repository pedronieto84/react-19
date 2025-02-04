
import './App.css'
import GraphsPage from './pages/GraphsPage'
import TablePage from './pages/TablePage'

function App() {
 

  return (
    <div>
    {/* Navbar de Bootstrap */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mi App</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Graficos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tablas</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

    {/* Contenido principal */}
    <div className="container mt-4">
      <h1>Bienvenido a Mi App</h1>
      <p>Este es un ejemplo básico de una aplicación React con TypeScript y Bootstrap.</p>
    </div>
  </div>
  )
}

export default App
