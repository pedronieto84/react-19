
import './App.css'
import Counter from './components/Counter'
import PostList from './components/PostsList'
import { Provider } from "react-redux";
import store from './store/store';
import React from "react";

function App() {


  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <Counter />
          <PostList />
        </Provider>
      </React.StrictMode>
    </>
  )
}

export default App
