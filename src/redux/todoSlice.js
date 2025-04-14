import { createSelector, createSlice } from '@reduxjs/toolkit';
// import { updateTodosMockapi } from './todosOps';
// import { deleteTodosMockapi } from './todosOps';
// import { addTodosMockapi } from './todosOps';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
    currentTodo: null,
    filterTodo: '',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.unshift(action.payload);
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
      state.currentTodo = null;
    },
    changeFilter: (state, action) => {
      state.filterTodo = action.payload;
    },
  },
  // extraReducers: bundler => {
  //   bundler

  //pending
  //     .addCase(addTodosMockapi.pending, handlePending)
  //.addCase(updateTodosMockapi.pending, handlePending)
  //     .addCase(deleteTodosMockapi.pending, handlePending)

  //rej
  //     .addCase(addTodosMockapi.rejected, handleRejected);
  //     .addCase(updateTodosMockapi.rejected,handleRejected);
  //     .addCase(deleteTodosMockapii.rejected, handleRejected);

  //ful
  //     .addCase(addTodosMockapi.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.items = action.payload;
  //     })
  //     .addCase(updateTodosMockapi.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //        const index = state.items.findIndex(el => el.id === action.payload.id)
  //       state.items.splice(index, 1, action.payload);
  //
  //     })
  //     .addCase(deleteTodosMockapi.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.items = action.payload.id;
  //     })
  //-----------Оптимизация 02
  //      .addMatcher(action  => action.type.endsWith("/pending"), handlePending)
  //      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected )
  //      .addMather(action => action.type.endsWith('/fulfilled'), handleFulfilled)
  // },

  //const handleFulfilled = (state) => {
  //   state.isLoading = false;
  //  }
  // const handlePending = (state) => {
  //      state.isLoading = true;
  //       state.error = false;
  //}

  // const handleRejected =(state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //}
});
export default todoSlice.reducer;

export const selectTodos = state => state.todos.items;
export const selectLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;
export const selectCurrentTodo = state => state.todos.currentTodo;

export const selectFilter = state => state.todos.filterTodo;
export const selectFilteredTodo = createSelector(
  [selectTodos, selectFilter],
  (todos, filterValue) => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filterValue.toLowerCase()),
    );
  },
);

export const { addTodo, deleteTodo, setCurrentTodo, editTodo, changeFilter } =
  todoSlice.actions;
