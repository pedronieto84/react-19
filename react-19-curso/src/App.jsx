import  { Component } from "react";
import axios from "axios"; // npm install axios, también podríamos usar fetch

const API_URL = "https://pokeapi.co/api/v2/pokemon"; // o https://pokeapi.co/api/v2/pokemon/ si la de typicode no funciona

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: "",
    };
  }

  componentDidMount() {
    // Get de los pokemons en el componentDidMount
    this.fetchPosts();
  }

  fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log(res.data);
      // Metodo proporcionado al extender Component para actualizar el estado
      this.setState({ posts: res.data.results }); 
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  createPost = async () => {
    try {
      console.log("title", this.state.title);
      // Al no tener control del backend, aquí solo puedo simularlo.
      // const res = await axios.post(API_URL, { name });
      this.setState((prevState) => ({
        posts: [{ name: prevState.title }, ...prevState.posts],
        title: "", // Limpiar el input después de crear el post
      }));
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  deletePost = async (name) => {
    try {
      // Al no tener control del backend, aquí solo puedo simularlo.
      // await axios.delete(`${API_URL}/${id}`);
      this.setState((prevState) => ({
        posts: prevState.posts.filter((post) => post.name !== name),
      }));
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  // updatePost = async (name) => {
  //   try {
  //     // Al no tener control del backend, aquí solo puedo simularlo.
  //     // await axios.put(`${API_URL}/${id}`,  { name });
  //     this.setState((prevState) => ({
  //       posts: prevState.posts.filter((post) => post.name !== name),
  //     }));
  //   } catch (error) {
  //     console.error("Error deleting post", error);
  //   }
  // };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Simple React CRUD</h2>
        <input
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
          placeholder="New Post Title"
        />
        <button onClick={this.createPost}>Add Post</button>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.name}>
              {post.name}{" "}
              <button onClick={() => this.deletePost(post.name)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;