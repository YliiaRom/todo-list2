import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import {
  editTodo,
  selectCurrentTodo,
  setCurrentTodo,
} from '../../redux/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
setCurrentTodo;
const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const closeUpdate = () => {
    dispatch(setCurrentTodo(null));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value.trim();
    if (!text) {
      return;
    }
    const updatedTodo = {
      ...currentTodo,
      text,
    };
    console.log(updatedTodo);
    dispatch(editTodo(updatedTodo));
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={closeUpdate} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;

// const Form = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const text = e.target.search.value.trim();
//     if (!text) {
//       return;
//     }
//     const newTodo = {
//       id: nanoid(),
//       text: text,
//       createdAt: new Date().toISOString(),
//     };
//     dispatch(addTodo(newTodo));
//     e.target.reset();
//   };
//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <button className={style.button} type="submit">
//         <FiSearch size="16px" />
//       </button>

//       <input
//         className={style.input}
//         placeholder="What do you want to write?"
//         name="search"
//         required
//         autoFocus
//       />
//     </form>
//   );
// };
