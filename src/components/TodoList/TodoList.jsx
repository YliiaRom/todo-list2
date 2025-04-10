import { useDispatch, useSelector } from 'react-redux';
import Text from '../Text/Text';
import { deleteTodo, selectTodos, setCurrentTodo } from '../../redux/todoSlice';
import Todo from '../Todo/Todo';
import Grid from '../Grid/Grid';
setCurrentTodo;
const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const delTodo = id => {
    dispatch(deleteTodo(id));
  };
  const onEditTodo = todo => {
    dispatch(setCurrentTodo(todo));
  };
  return (
    <>
      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                counter={index + 1}
                delTodo={delTodo}
                onEditTodo={onEditTodo}
              />
            );
          })}

        <Text textAlign="center">We did not find any todo😯</Text>
      </Grid>
    </>
  );
};

export default TodoList;
