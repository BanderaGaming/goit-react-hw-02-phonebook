import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './Phonebook.module.css';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onSub = evt => {
    const ts = this.state;
    evt.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: ts.name, id: nanoid(), number: ts.number },
      ],
    });

    console.log(this.state.contacts);
    this.setState({ name: ``, number: `` });
  };

  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleFilterChange = e => {
    this.setState({ ...this.state, filter: e.target.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div className={css.mainBox}>
        <h1>Phonebook</h1>
        <ContactForm
          onSub={this.onSub}
          onChange={this.onChange}
          nameValue={name}
          numValue={number}
        />
        <h2>Contacts</h2>
        <Filter fvalue={filter} onSearch={this.handleFilterChange} />

        <ContactList
          contacts={this.getFilteredContacts()}
          fvalue={filter}
          onSearch={this.onSearch}
        />
      </div>
    );
  }
}
