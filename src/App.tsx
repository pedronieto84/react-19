
import { Navbar, Nav, Container } from "react-bootstrap";
import {  BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "./pages/loginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import HallPage from "./pages/HallPage";
import ChatRoomPage from "./pages/ChatRoomPage";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxfdjAqbcw7rZ-2uXEilAB9r-T1ghZjbY",
  authDomain: "curso-sincrotron.firebaseapp.com",
  projectId: "curso-sincrotron",
  storageBucket: "curso-sincrotron.firebasestorage.app",
  messagingSenderId: "778999318384",
  appId: "1:778999318384:web:3a5902baa5cc390e62f1b5",
  measurementId: "G-MBHC62KWWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

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
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="mt-3">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccountPage />} />
            <Route path="/hall" element={<HallPage />} />
            <Route path="/chat-room" element={<ChatRoomPage />} />
            <Route path="/" element={<h2>Escoge una opción</h2>} />
          </Routes>
        </div>
      </Container>
    </Router>
 
    </>
  )
}

export default App
