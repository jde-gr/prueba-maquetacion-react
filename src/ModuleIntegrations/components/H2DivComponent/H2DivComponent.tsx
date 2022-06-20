import React, { FC } from 'react';
import styles from './H2DivComponent.module.css';

interface H2DivComponentProps {
  style?: React.CSSProperties;
}

const H2DivComponent: FC<H2DivComponentProps> = ({ style }) => {
  return (
    <div className={styles.descContainer} style={style}>
      <h2 className={styles.h2}>Integramos todo lo necesario</h2>
    </div>
  );
};

export default H2DivComponent;
