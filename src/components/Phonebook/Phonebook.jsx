import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

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
    evt.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, id: nanoid(), number: this.state.number },
      ],
    });

    console.log(this.state.contacts);
    this.setState({ name: ``, number: `` });
  };

  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(evt.target.name);
  };

  onSearch = evt => {};

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <Section
          title={`Phonebook`}
          children={
            <ContactForm
              onSub={this.onSub}
              onChange={this.onChange}
              nameValue={name}
              numValue={number}
            />
          }
        />
        <Section
          title={`Contacts`}
          children={<ContactList contacts={this.state.contacts} />}
        />
      </div>
    );
  }
}
