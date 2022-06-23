import React, { FC } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import PillButtonComponent, {
  PillIcon,
} from '../../../ModuleCommon/components/PillButtonComponent/PillButtonComponent';
import styles from './NavBarExpandedComponent.module.css';

interface NavBarExpandedComponentProps {}

const NavBarExpandedComponent: FC<NavBarExpandedComponentProps> = () => {
  return (
    <div className={styles.navigationMenu}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/#digital-sales">Nuestro modelo</Link>
          <span>Descubre las ventajas de Global Sales Partnership</span>
        </li>
        <li>
          <Link to="/#simple-and-agile">¿Cómo lo hacemos?</Link>
          <span>Recursos y metodología adaptada a tus objetivos</span>
        </li>
        <li>
          <Link to="/#intelligent-tech">Tecnologías</Link>
          <span>Inteligencia de negocio a tu servicio</span>
        </li>
        <li>
          <Link to="/#brands">Casos de éxito</Link>
          <span>Así hemos ayudado a otras empresas</span>
        </li>
        <li>
          <Link to="/#trust-the-experience">¿Quiénes somos?</Link>
          <span>HABITANT y Walmeric. La experiencia nos avala</span>
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <PillButtonComponent
          buttonText="Contáctanos"
          containerWidth="244px"
          contentWidth="198px"
          hasIcon={false}
          icon={PillIcon.KeyboardArrowUp}
        />
      </div>
      <div className={styles.emailContainer}>
        <p className={styles.pThin}>¿Prefieres escribirnos directamente?</p>
        <p className={styles.pBold}>
          <a href="mailto:business@globalsalespartnership.com">
            business@globalsalespartnership.com
          </a>
        </p>
      </div>
      <div className={styles.langContainer}>
        <p className={styles.active}>
          <Link to="/">ESP</Link>
        </p>
        <p>
          <Link to="/">ENG</Link>
        </p>
      </div>
    </div>
  );
};

export default NavBarExpandedComponent;
