import { INCREMENT, DECREMENT } from "./actions";
import { IState } from "../interfaces/interfaces";


const initialState:IState = {
  count: 0,
};

const counterReducer = (state = initialState, action: { type: string }): IState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
