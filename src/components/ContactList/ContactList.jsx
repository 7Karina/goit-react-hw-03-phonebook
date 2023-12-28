import React from 'react';
import { List, Item, Button } from './ContactList.styled';

//Компонент списку контактів
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка видалення контакта
            <Button
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
