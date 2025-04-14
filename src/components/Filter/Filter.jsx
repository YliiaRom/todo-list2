import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/todoSlice';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      onChange={e => dispatch(changeFilter(e.target.value))}
      className={style.input}
      placeholder="filter..."
      name="filter"
    />
  );
};

export default Filter;
