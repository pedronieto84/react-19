
import './App.css'
import FormsPage from './pages/FormsComponent';
import GraphsPage from './pages/GraphsPage'
import TablePage from './pages/TablePage'
import { Navbar, Nav, Container } from "react-bootstrap";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
 

  return (
   
    <Router>
      <Container className="mt-3">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/table">Tablas</Nav.Link>
              <Nav.Link as={Link} to="/graphs">Gráficos</Nav.Link>
              <Nav.Link as={Link} to="/forms">Formularios</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-3">
          <Routes>
            <Route path="/table" element={<TablePage />} />
            <Route path="/graphs" element={<GraphsPage />} />
            <Route path="/graphs" element={<FormsPage />} />
            <Route path="/" element={<h2>Escoge una opción</h2>} />
          </Routes>
        </div>
      </Container>
    </Router>
  )
}

export default App
