// src/store/store.js

import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import counterReducer from "./reducers";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";

// Enable Redux DevTools Extension if available
const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

// Combine middleware and enhancers
const enhancer = composeEnhancers(applyMiddleware(thunk)); // Add other middleware if needed

// Create the store
const store = createStore(rootReducer, enhancer);

export default store;
