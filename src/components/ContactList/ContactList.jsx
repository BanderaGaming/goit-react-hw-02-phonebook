import { ContactSearch } from 'components/ContactSearch/ContactSearch';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactList({ contacts, onSearch }) {
  return (
    <div>
      <ContactSearch onSearch={onSearch} />
      <ul className={css.contactBox}>
        <ContactListItem contacts={contacts} />
      </ul>
    </div>
  );
}
