import { getFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactFilter } from 'redux/contacts/contactSlice';
import s from './Filter.module.css';

export const Filter = ({ setFilter }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.FilterDiv}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={s.Inpfilter}
          onChange={e => dispatch(contactFilter(e.currentTarget.value))}
          value={filter}
          placeholder="Search.."
        />
      </label>
    </div>
  );
};
