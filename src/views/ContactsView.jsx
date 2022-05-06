import { AddContact } from 'components/AddContact/AddContact';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const ContactsView = () => {
  return (
    <>
      <div style={{ width: 400 }}>
        <h1>Phonebook</h1>
        <AddContact />
        <Section name="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </>
  );
};
