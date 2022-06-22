import React, { FC, useEffect, useState } from 'react';
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
          <a href="/">Inicio</a>
          <a href="/">Nuestro modelo</a>
          <a href="/">¿Cómo lo hacemos?</a>
          <a href="/">Herramientas tecnológicas</a>
          <a href="/">Casos de éxito</a>
          <a href="/">¿Quiénes somos?</a>
        </div>
      ) : (
        <div className={styles.menuWrapper}>
          <div className={styles.menuDiv}>
            <div className={styles.menuColumn}>
              <a href="/">Inicio</a>
              <a href="/">Nuestro modelo</a>
            </div>
            <div className={styles.menuColumn}>
              <a href="/">¿Cómo lo hacemos?</a>
              <a href="/">Herramientas tecnológicas</a>
            </div>
            <div className={styles.menuColumn}>
              <a href="/">Casos de éxito</a>
              <a href="/">¿Quiénes somos?</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterMenuComponent;
