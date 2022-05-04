import { AddContact } from 'components/AddContact/AddContact';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';

export const ContactsView = () => {
  const { data } = useFetchContactsQuery();
  return (
    <div style={{ width: 400 }}>
      <h1>Phonebook</h1>
      <AddContact contacts={data} />
      <Section name="Contacts">
        <Filter />
        <ContactList contacts={data} />
      </Section>
    </div>
  );
};
