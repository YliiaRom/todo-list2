import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/api';
//fetch
// export const fetchTodosMockapi = createAsyncThunk(
//   'todos/fetchTodosMockapi',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/todos');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
//add
// export const addTodosMockapi = createAsyncThunk(
//   'todos/addTodos',
//   async (value, thunkAPI) => {
//     try {
//       const response = await axios.post('/todos', value);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
//updated

export const updateTodosMockapi = createAsyncThunk(
  'todos/updateTodosMockapi',
  async (value, thunkAPI) => {
    try {
      const response = await axios.put('/todos/${value.id}', value);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
//
//del
// export const deleteTodosMockapi = createAsyncThunk(
//   'todos/deleteTodosMockapi',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete('/todos/${id}');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
