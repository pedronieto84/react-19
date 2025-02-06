import './App.css'
import Counter from './components/Counter'
import PostList from './components/PostsList'
import { Provider } from "react-redux";
import store from './store/store';
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {


  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </Router>
        </Provider>
      </React.StrictMode>
    </>
  )
}

export default App
