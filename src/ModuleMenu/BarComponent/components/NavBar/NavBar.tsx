import React, { FC } from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
  isNavExpanded: boolean;
}

const NavBar: FC<NavBarProps> = (props) => {
  const { isNavExpanded } = props;
  console.log(`isNavExpanded:  ${isNavExpanded}`);
  return (
    <div
      className={
        isNavExpanded
          ? `${styles.navigationMenu} ${styles.expanded}`
          : styles.navigationMenu
      }
    >
      <ul className={styles.navBar}>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Nuestro modelo</a>
        </li>
        <li>
          <a href="/">Tecnologías</a>
        </li>
        <li>
          <a href="/">Casos de éxito</a>
        </li>
        <li>
          <a href="/">¿Cómo lo hacemos?</a>
        </li>
        <li>
          <a href="/">¿Quiénes somos?</a>
        </li>
        <li>
          <a href="/">ENG</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
