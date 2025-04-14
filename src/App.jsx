import { useDispatch, useSelector } from 'react-redux';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import {
  selectCurrentTodo,
  selectError,
  selectLoading,
  selectTodos,
} from './redux/todoSlice';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import EditForm from './components/EditForm/EditForm';
// import { fetchTodosMockapi } from './redux/todosOps';
import { useEffect } from 'react';

export const App = () => {
  // const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const error = useSelector(selectError);
  const loader = useSelector(selectLoading);
  const currentTodo = useSelector(selectCurrentTodo);
  // useEffect(() => {
  //   dispatch(fetchTodosMockapi());
  // }, [dispatch]);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {currentTodo ? <EditForm /> : <Form />}

          {loader && <p>Loading .....</p>}
          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <TodoList />
          )}
          {error && <p>Error.....</p>}
        </Container>
      </Section>
    </>
  );
};
