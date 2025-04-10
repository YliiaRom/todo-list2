import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// 12:11
// https://637785ab81a568fc2518138f.mockapi.io/api
// /todos
