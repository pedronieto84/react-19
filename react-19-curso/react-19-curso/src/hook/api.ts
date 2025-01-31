import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // URL base de la API
});

// Función para obtener los posts
export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Funcion para postear un post
export const postPost = async (post: { title: string; body: string }) => {
  try {
    const response = await api.post('/posts', post);
    return response.data;
  } catch (error) {
    console.error('Error posting post:', error);
    throw error;
  }
}

// Función para borrar un post
export const deletePost = async (id: number) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}

// Funcion para updatear un post
export const putPost = async (id: number, post: { title: string; body: string }) => {
  try {
    const response = await api.put(`/posts/${id}`, post);
    return response.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
}