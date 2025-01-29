import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/homePage'
import DetailPage from './pages/cardDetailPage'
import './App.css'

function App() {
 
  const id = 1

  return (
    <>
      <Router>
        <nav>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/detail/${id}`}>Detalle</Link>
            </li>
           
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
