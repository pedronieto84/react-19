import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dinamica from './paginas/dinamica';

function App() {
  const navigate = useNavigate();
  
  // Como esta función está fuera del "Browser"
  const goToUserProfile = () => {
    navigate('/dinamica/1');
  };

  return (
    <div>
      
      <nav>
        <ul>
          <li>
            <Link to="/dinamica/1/post/1">Usuario 1 - Post 1</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/dinamica/:userId/post/:postId" element={<Dinamica />} />
      </Routes>
      
    </div>
  );
}

export default App;