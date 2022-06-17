import React, { FC } from 'react';

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
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Nuestro modelo</a>
          <span>Descubre las ventajas de Global Sales Partnership</span>
        </li>
        <li>
          <a href="/">¿Cómo lo hacemos?</a>
          <span>Recursos y metodología adaptada a tus objetivos</span>
        </li>
        <li>
          <a href="/">Tecnologías</a>
          <span>Inteligencia de negocio a tu servicio</span>
        </li>
        <li>
          <a href="/">Casos de éxito</a>
          <span>Así hemos ayudado a otras empresas</span>
        </li>
        <li>
          <a href="/">¿Quiénes somos?</a>
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
          <a href="business@globalsalespartnership.com">
            business@globalsalespartnership.com
          </a>
        </p>
      </div>
      <div className={styles.langContainer}>
        <p className={styles.active}>
          <a href="/">ESP</a>
        </p>
        <p>
          <a href="/">ENG</a>
        </p>
      </div>
    </div>
  );
};

export default NavBarExpandedComponent;
