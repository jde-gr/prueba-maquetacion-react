import React, { FC } from 'react';
import styles from './BrandsComponent.module.css';

interface BrandsComponentProps {}

const BrandsComponent: FC<BrandsComponentProps> = () => (
  <div className={styles.BrandsComponent}>
    BrandsComponent Component
  </div>
);

export default BrandsComponent;
