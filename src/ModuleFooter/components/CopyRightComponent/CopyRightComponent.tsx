import React, { FC, useState, useEffect } from 'react';
import styles from './CopyRightComponent.module.css';

interface CopyRightComponentProps {}

const CopyRightComponent: FC<CopyRightComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div
      className={`${styles.copyRightDiv} {windowWidth < breakPoint && ${styles.copyRightSMPadding}}`}
    >
      <p className={styles.address}>GSP® | Cristóbal Bordiú, 13, Madrid</p>
      <div className={styles.langContainer}>
        <p>
          <a href="/">ENG</a>
        </p>
      </div>
    </div>
  );
};

export default CopyRightComponent;
