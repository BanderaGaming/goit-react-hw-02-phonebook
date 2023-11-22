import css from './ContactList.module.css';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactList({ contacts }) {
  return (
    <div>
      <ul className={css.contactBox}>
        <ContactListItem contacts={contacts} />
      </ul>
    </div>
  );
}
