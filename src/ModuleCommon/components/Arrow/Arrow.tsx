import React, { FC } from 'react';
import styles from './Arrow.module.css';

interface ArrowProps {}

const Arrow: FC<ArrowProps> = () => (
  <img src="/images/Arrow.svg" alt="" className={styles.arrow} />
);

export default Arrow;
