import React, { FC } from 'react';
import styles from './LoadingSpinnerComponent.module.css';

interface LoadingSpinnerComponentProps {}

const LoadingSpinnerComponent: FC<LoadingSpinnerComponentProps> = () => (
  <div className={styles.spinner}></div>
);

export default LoadingSpinnerComponent;
