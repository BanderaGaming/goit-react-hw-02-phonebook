export function ContactListItem({ contacts }) {
  return contacts.map(contact => {
    return (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
      </li>
    );
  });
}
