
import './App.css'
import FormsPage from './pages/FormsPage';
import GraphsPage from './pages/GraphsPage'
import TablePage from './pages/TablePage'
import { Navbar, Nav, Container } from "react-bootstrap";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CardsPage from './pages/CardsPage';
import ChatPage from './pages/ChatPage';
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
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/cards">Cards</Nav.Link>
              <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-3">
          <Routes>
            <Route path="/table" element={<TablePage />} />
            <Route path="/graphs" element={<GraphsPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/" element={<h2>Escoge una opción</h2>} />
          </Routes>
        </div>
      </Container>
    </Router>
  )
}

export default App
