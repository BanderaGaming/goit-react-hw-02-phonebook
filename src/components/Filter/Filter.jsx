import css from './Filter.module.css';

export function Filter({ onSearch, fvalue }) {
  return (
    <div className={css.searchBox}>
      <label>Find contact by name</label>
      <input
        onChange={onSearch}
        value={fvalue}
        name="search"
        type="text"
      ></input>
    </div>
  );
}
