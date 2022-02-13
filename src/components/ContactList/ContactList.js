import ContactListItem from "./ContactsIListItem/ContactsIListItem";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem
          contact={contact}
          deleteContact={deleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
}
