// src/components/PostList.tsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState, Post } from '../interfaces/interfaces'; // Importamos la interfaz Post
import { getPostsActionSuccess } from '../store/actions'; // Importamos la acción asíncrona
import { postsObservable } from './../observables/postsObservables';

const PostList = () => {
  const dispatch = useDispatch(); // Obtenemos `dispatch`
  const posts = useSelector((state: IState) => state.posts); // Obtenemos los posts del estado

  // useEffect para despachar la acción al montar el componente
  useEffect(() => {
    const subscription = postsObservable.subscribe((posts: Post[]) => {
      console.log('observable', posts);
      dispatch(getPostsActionSuccess(posts));
    });
  
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? ( // Si hay posts, los mostramos en una lista
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p> // Muestra un mensaje de carga si no hay posts
      )}
    </div>
  );
};

export default PostList;