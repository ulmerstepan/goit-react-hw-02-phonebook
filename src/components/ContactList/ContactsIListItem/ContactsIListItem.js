export default function ContactListItem({ contact, deleteContact }) {
  return (
    <li>
      <span>{contact.name}</span>
      <a href={`tel:${contact.number}`}>{contact.number}</a>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
}
