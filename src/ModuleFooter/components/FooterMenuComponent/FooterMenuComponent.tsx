import React, { FC, useEffect, useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import styles from './FooterMenuComponent.module.css';

interface FooterMenuComponentProps {}

const FooterMenuComponent: FC<FooterMenuComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <>
      {windowWidth < breakPoint ? (
        <div className={styles.menuSMWrapper}>
          <Link to="/">Inicio</Link>
          <Link to="/#digital-sales">Nuestro modelo</Link>
          <Link to="/#simple-and-agile">¿Cómo lo hacemos?</Link>
          <Link to="/#integrations">Herramientas tecnológicas</Link>
          <Link to="/#brands">Casos de éxito</Link>
          <Link to="/#trust-the-experience">¿Quiénes somos?</Link>
        </div>
      ) : (
        <div className={styles.menuWrapper}>
          <div className={styles.menuDiv}>
            <div className={styles.menuColumn}>
              <Link to="#top">Inicio</Link>
              <Link to="/#digital-sales">Nuestro modelo</Link>
            </div>
            <div className={styles.menuColumn}>
              <Link to="/#simple-and-agile">¿Cómo lo hacemos?</Link>
              <Link to="/#integrations">Herramientas tecnológicas</Link>
            </div>
            <div className={styles.menuColumn}>
              <Link to="/#brands">Casos de éxito</Link>
              <Link to="/#trust-the-experience">¿Quiénes somos?</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterMenuComponent;
