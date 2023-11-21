import css from './Section.module.css';

export function Section({ title, children }) {
  return (
    <div className={css.section}>
      <p className={css.title}>{title}</p>
      {children}
    </div>
  );
}
