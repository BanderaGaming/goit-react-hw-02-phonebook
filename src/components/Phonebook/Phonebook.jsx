import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, num) => {
    const isNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert(`The contact ${name} already exists in the phonebook.`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, { name: name, id: nanoid(), number: num }],
    }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div className={css.mainBox}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter fvalue={filter} onSearch={this.handleFilterChange} />

        <ContactList
          contacts={this.getFilteredContacts()}
          onDel={this.deleteContact}
        />
      </div>
    );
  }
}
