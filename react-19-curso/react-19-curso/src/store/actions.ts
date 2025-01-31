import { getPosts } from './../hook/api'
import { Post } from './../interfaces/interfaces'
import { dispatch } from 'redux-thunk';


// Esto será el texto de la acción que veré en react-devtools
export const INCREMENT = 'Incrementar' 
export const DECREMENT = "Decrementar";

// Actions HTTP
export const GET_POSTS = 'GET_POSTS'




export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});


/// Actions HTTP

export const getPostsAction = (posts: Post[]) => ({
  type: 'GET_POSTS',
  payload: posts,
});

// Acción asíncrona para obtener los posts desde la API
export const getPostsActionSuccess = () => {
  return async (dispatch) => { // `dispatch` es proporcionado por redux-thunk
    try {
      const posts = await getPosts(); // Llamamos al hook de la API
      dispatch(getPostsAction(posts)); // Despachamos la acción con los posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
};