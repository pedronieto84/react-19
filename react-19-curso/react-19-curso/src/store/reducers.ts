import { INCREMENT, DECREMENT, GET_POSTS } from "./actions";
import { IState, Post } from "../interfaces/interfaces";


const initialState:IState = {
  count: 0,
  posts: [],
  loading: true,
  error: "",
};

const counterReducer = (state = initialState, action: { type: string, 
  payload: Post[] }): IState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case GET_POSTS:
      return { ...state, loading: false, posts: action.payload };

    default:
      return state;
  }
};

export default counterReducer;
