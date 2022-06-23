import React, { FC } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import styles from './NavBarComponent.module.css';

interface NavBarComponentProps {
  isNavExpanded: boolean;
}

const NavBarComponent: FC<NavBarComponentProps> = (props) => {
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
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/#digital-sales">Nuestro modelo</Link>
        </li>
        <li>
          <Link to="/#intelligent-tech">Tecnologías</Link>
        </li>
        <li>
          <Link to="/#brands">Casos de éxito</Link>
        </li>
        <li>
          <Link to="/#simple-and-agile">¿Cómo lo hacemos?</Link>
        </li>
        <li>
          <Link to="/#trust-the-experience">¿Quiénes somos?</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponent;
