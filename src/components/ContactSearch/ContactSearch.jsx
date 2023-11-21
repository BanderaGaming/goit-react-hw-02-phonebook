import css from './ContactSearch.module.css';

export function ContactSearch({ onSearch }) {
  return (
    <div className={css.searchBox}>
      <label>Find contact by name</label>
      <input onChange={onSearch} name="search" type="text"></input>
    </div>
  );
}
