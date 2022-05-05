import { getFilter } from 'redux/contacts/contact-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.FilterDiv}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={s.Inpfilter}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          value={filter}
          placeholder="Search.."
        />
      </label>
    </div>
  );
};
