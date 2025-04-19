import { useDispatch, useSelector } from 'react-redux';
import Text from '../Text/Text';
import css from './Todo.module.css';
import {
  deleteTodo,
  selectFilteredTodo,
  selectTodos,
  setCurrentTodo,
} from '../../redux/todoSlice';
import Todo from '../Todo/Todo';
import Grid from '../Grid/Grid';
import Filter from '../Filter/Filter';
selectFilteredTodo;
const TodoList = () => {
  // const todos = useSelector(selectTodos);
  const visibleTodoWithFilter = useSelector(selectFilteredTodo);
  const dispatch = useDispatch();
  const delTodo = id => {
    dispatch(deleteTodo(id));
  };
  const onEditTodo = todo => {
    dispatch(setCurrentTodo(todo));
  };
  return (
    <>
      {/* {visibleTodoWithFilter > 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
      {visibleTodoWithFilter > 0 ?(
        <Text textAlign="center">We did not find any todo😯</Text>
      )} */}
      <Filter />
      <Grid>
        {visibleTodoWithFilter.length > 0 ? (
          visibleTodoWithFilter.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                counter={index + 1}
                delTodo={delTodo}
                onEditTodo={onEditTodo}
              />
            );
          })
        ) : (
          <Text textAlign="center">We did not find any todo😯</Text>
        )}
      </Grid>
    </>
  );
};

export default TodoList;
