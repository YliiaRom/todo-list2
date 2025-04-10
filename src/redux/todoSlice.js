import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
    currentTodo: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload);
      state.items.splice(index, 1);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    editTodo: (state, action) => {
      const index = state.items.findIndex(el => el.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1, action.payload);
      }
    },
  },
});
export default todoSlice.reducer;

export const selectTodos = state => state.todos.items;
export const selectLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const { addTodo, deleteTodo, setCurrentTodo, editTodo } =
  todoSlice.actions;
