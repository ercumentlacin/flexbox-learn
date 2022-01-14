import styles from './main.module.css';

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
