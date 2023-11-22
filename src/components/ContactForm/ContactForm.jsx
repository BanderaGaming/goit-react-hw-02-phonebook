import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSub = evt => {
    evt.preventDefault();

    this.props.onAdd(this.state.name, this.state.number);

    this.setState({ name: ``, number: `` });
  };
  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSub} className={css.formBox}>
        <label>Name</label>
        <input
          onChange={this.onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={this.state.name}
          required
          placeholder="Type a name"
        />
        <label>Number</label>
        <input
          onChange={this.onChange}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          placeholder="Type a number"
        />
        <button className={css.subBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
