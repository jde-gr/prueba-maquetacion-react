import React, { FC } from 'react';
import styles from './TEMessageComponent.module.css';

interface TEMessageComponentProps {}

const TEMessageComponent: FC<TEMessageComponentProps> = () => (
  <>
    <div className={styles.descContainer}>
      <h2 className={styles.h2}>Confía en la experiencia</h2>
    </div>
    <p className={styles.p}>
      Detrás de Global Sales Partnership se encuentran{' '}
      <span style={{ fontWeight: 'bold' }}>HABITANT y Walmeric</span>, dos de
      las empresas más innovadoras en Performance y Ventas Digitales.
    </p>
    <img
      src="/images/Frame.png"
      alt="HABITANT & walmeric"
      width="229px"
      height="20px"
      style={{ marginBottom: 32 }}
    />
  </>
);

export default TEMessageComponent;
