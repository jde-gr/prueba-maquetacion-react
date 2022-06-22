import React, { FC } from 'react';
import styles from './CopyRightComponent.module.css';

interface CopyRightComponentProps {}

const CopyRightComponent: FC<CopyRightComponentProps> = () => {
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
