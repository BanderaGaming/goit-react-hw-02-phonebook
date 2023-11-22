export function ContactListItem({ contacts, onDel }) {
  return contacts.map(contact => {
    return (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button onClick={() => onDel(contact.id)}>Delete</button>
      </li>
    );
  });
}
