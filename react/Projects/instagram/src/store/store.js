import { combineReducers, createStore } from "@reduxjs/toolkit";
import reducer from "./auth";
const rootReducer = combineReducers({ // Use combineReducers to create a single root reducer function
    auth: reducer,
  
  // Add other reducers here
});

const store = createStore(rootReducer);
export default store;