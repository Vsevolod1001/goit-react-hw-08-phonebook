import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterContacts } from 'redux/contacts/contact-selectors';
import {
  removeContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.listCounterCircle}>
          <p className={s.listCircle}>
            {name}: {number}
          </p>

          <button
            type="button"
            className={s.BtnInput}
            id={id}
            onClick={() => dispatch(removeContact(id))}
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
};
