import React, { FC } from 'react';
import styles from './LTTitleComponent.module.css';

interface LTTitleComponentProps {}

const LTTitleComponent: FC<LTTitleComponentProps> = () => (
  <div className={styles.headers}>
    <h4 className={styles.h4}>¡Hablemos!</h4>
    <h6 className={styles.h6}>
      <span style={{ fontWeight: 'bold' }}>¿Tienes un reto</span> en el que
      quieres que te acompañemos?
    </h6>
  </div>
);

export default LTTitleComponent;
