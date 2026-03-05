import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/todo/todoSlice'; // Assuming your rootReducer is exported from './reducers/index.ts'

export const store = configureStore({
      reducer: rootReducer, // Pass the single root reducer function
    });