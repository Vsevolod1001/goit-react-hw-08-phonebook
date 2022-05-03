import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteTodo } from 'redux/contacts/contactSlice';
import s from './ContactList.module.css';
export const ContactList = ({ setContacts }) => {
  const hendleDelete = e => {
    dispatch(deleteTodo(e.currentTarget.id));
  };
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visible = contacts.filter(us =>
    us.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {visible.map(({ id, name, number }) => (
        <li key={id} className={s.listCounterCircle}>
          <p className={s.listCircle}>
            {name}: {number}
          </p>

          <button
            type="button"
            className={s.BtnInput}
            id={id}
            onClick={hendleDelete}
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
