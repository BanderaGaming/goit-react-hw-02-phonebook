import css from './ContactList.module.css';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactList({ contacts, onDel }) {
  return (
    <div>
      <ul className={css.contactBox}>
        <ContactListItem contacts={contacts} onDel={onDel} />
      </ul>
    </div>
  );
}
