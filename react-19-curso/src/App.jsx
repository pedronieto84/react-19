
import { useState, useEffect } from "react";
import axios from "axios"; // npm install axios, también podríamos usar fetch

const API_URL = "https://pokeapi.co/api/v2/pokemon"; // o https://pokeapi.co/api/v2/pokemon/ si la de typicode no funciona

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {

    // Get de los pokemons
    const fetchPosts = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log(res.data);
        setPosts(res.data.results); // Load first 5 posts
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    fetchPosts();
  }, []);

  const createPost = async () => {
    try {
      console.log('title', title);
      //const res = await axios.post(API_URL, { name }); // Al no tener control del backend, aquí solo puedo simularlo.
      setPosts([{name:title}, ...posts]);
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  const deletePost = async (name) => {
    try {
      // Al no tener control del backend, aquí solo puedo simularlo.
      // await axios.delete(`${API_URL}/${id}`); 
      setPosts(posts.filter((post) => post.name !== name));
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  // const updatePost = async (name) => {
  //   try {
  //     // Al no tener control del backend, aquí solo puedo simularlo.
  //     // await axios.put(`${API_URL}/${id}`,  { name }); 
  //     setPosts(posts.filter((post) => post.name !== name));
  //   } catch (error) {
  //     console.error("Error deleting post", error);
  //   }
  // }

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple React CRUD</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Post Title"
      />
      <button onClick={createPost}>Add Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.name}>
            {post.name} <button onClick={() => deletePost(post.name)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
