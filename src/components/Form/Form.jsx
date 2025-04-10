import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../../redux/todoSlice';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.search.value.trim();
    if (!text) {
      return;
    }
    const newTodo = {
      id: nanoid(),
      text: text,
      createdAt: new Date().toISOString(),
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
