// src/store/store.js

import { applyMiddleware, createStore, compose  } from "redux";
import counterReducer from "./reducers";
import { thunk } from "redux-thunk";


// Enable Redux DevTools Extension if available
const composeEnhancers =
  (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Combine middleware and enhancers
const enhancer = composeEnhancers(applyMiddleware(thunk)); // Add other middleware if needed

// Create the store
const store = createStore(counterReducer, enhancer);

export default store;
