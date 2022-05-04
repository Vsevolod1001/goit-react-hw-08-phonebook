import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { useDeleteContactMutation } from 'redux/contacts/contactSlice';
import s from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const visible = contacts?.filter(us =>
    us.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {contacts &&
        visible.map(({ id, name, number }) => (
          <li key={id} className={s.listCounterCircle}>
            <p className={s.listCircle}>
              {name}: {number}
            </p>

            <button
              type="button"
              className={s.BtnInput}
              id={id}
              onClick={() => deleteContact(id)}
            >
              delete
            </button>
          </li>
        ))}
    </div>
  );
};
