import React, { FC } from 'react';
import styles from './Arrow.module.css';

interface ArrowProps {
  down?: boolean;
}

const Arrow: FC<ArrowProps> = ({ down = false }) => (
  <img
    src="/images/Arrow.svg"
    alt=""
    className={down ? styles.arrowDown : styles.arrow}
  />
);

export default Arrow;
