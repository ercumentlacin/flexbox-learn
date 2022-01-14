import { NavLink } from 'react-router-dom';
import navigationPaths from './navigationPaths';

import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center space-x-6">
        {
          navigationPaths.map(({ to, name }) => (
            <li key={name}>
              <NavLink
                to={to}
                className={({ isActive }) => (
                  isActive
                    ? [styles.activeNav, styles.nav].join(' ')
                    : styles.nav
                )}
              >
                {name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
