
import { Navbar, Nav, Container } from "react-bootstrap";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "./pages/loginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import HallPage from "./pages/HallPage";
import ChatRoomPage from "./pages/ChatRoomPage";
import TablePage from "./pages/TablePage";
import ChartPage from "./pages/ChartPage";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {


  return (
    <>

       
    <Router>
      <Container className="mt-3">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Chat - sincrotron</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Create Account</Nav.Link>
              <Nav.Link as={Link} to="/hall">Hall</Nav.Link>
              <Nav.Link as={Link} to="/chat-room">Chat room</Nav.Link>
              <Nav.Link as={Link} to="/chart">Chart</Nav.Link>
              <Nav.Link as={Link} to="/table">Table</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-3">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccountPage />} />
            <Route path="/hall" element={<HallPage />} />
            <Route path="/chat-room/:id" element={<ChatRoomPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/" element={<LoginPage />}  />
          </Routes>
        </div>
      </Container>
    </Router>
 
    </>
  )
}

export default App
