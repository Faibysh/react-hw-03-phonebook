import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={styles.form}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name:
      </label>
      <input
        className={styles.input}
        type="text"
        id="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Filter;
