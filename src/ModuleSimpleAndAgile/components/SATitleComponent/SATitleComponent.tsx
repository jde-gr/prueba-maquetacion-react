import React, { FC } from 'react';
import styles from './SATitleComponent.module.css';

interface SATitleComponentProps {}

const SATitleComponent: FC<SATitleComponentProps> = () => (
  <div className={styles.descContainer}>
    <h2 className={styles.h2}>Comenzar es sencillo y ágil:</h2>
  </div>
);

export default SATitleComponent;
