import css from './ContactForm.module.css';

export function ContactForm({ onSub, onChange, nameValue, numValue }) {
  return (
    <form onSubmit={onSub} className={css.formBox}>
      <label>Name</label>
      <input
        onChange={onChange}
        type="text"
        name="name"
        value={nameValue}
        required
        placeholder="Type a name"
      />
      <label>Number</label>
      <input
        onChange={onChange}
        type="tel"
        name="number"
        value={numValue}
        required
        placeholder="Type a number"
      />
      <button className={css.subBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
