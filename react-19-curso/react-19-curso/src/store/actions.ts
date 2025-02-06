import { Post } from './../interfaces/interfaces'
import { Dispatch } from 'redux';
import { postsObservable } from './../observables/postsObservables';

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
export const fetchPostsObservable = () => {
  return (dispatch: Dispatch) => {
    const subscription = postsObservable.subscribe((posts: Post[]) => {
      console.log('dispatch', posts);
      dispatch(getPostsAction(posts));
    });

    return () => subscription.unsubscribe();
  };
};