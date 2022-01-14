import Navigation from '../../Navigation';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
