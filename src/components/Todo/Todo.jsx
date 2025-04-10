import Text from '../Text/Text';
// import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

const Todo = ({ todo, counter, delTodo, onEditTodo }) => {
  return (
    <>
      <GridItem>
        <div className={style.box}>
          <Text textAlign="center" marginBottom="20">
            #{counter}
          </Text>

          <Text>{todo.text}</Text>
          <button
            onClick={() => delTodo(todo.id)}
            className={style.deleteButton}
            type="button"
          >
            <RiDeleteBinLine size={24} />
          </button>
          <button
            onClick={() => onEditTodo(todo)}
            className={style.editButton}
            type="button"
          >
            <RiEdit2Line size={24} />
          </button>
        </div>
      </GridItem>
    </>
  );
};

export default Todo;
