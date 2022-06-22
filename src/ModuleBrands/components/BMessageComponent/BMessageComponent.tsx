import React, { FC, useState, useEffect } from 'react';
import styles from './BMessageComponent.module.css';

interface BMessageComponentProps {}

const BMessageComponent: FC<BMessageComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <div>
        <h3 className={styles.h3}>
          Las marcas más destacadas confían en{' '}
          {windowWidth < breakPoint ? 'Global Sales Partnership' : 'nosotros'}
        </h3>
      </div>
      <p className={styles.p}>
        <span style={{ fontWeight: 'bold' }}>
          Llevamos años ayudando a grandes empresas
        </span>{' '}
        a maximizar su impacto gracias a este modelo de Digital Marketing basado
        en performance.
      </p>
    </>
  );
};

export default BMessageComponent;
