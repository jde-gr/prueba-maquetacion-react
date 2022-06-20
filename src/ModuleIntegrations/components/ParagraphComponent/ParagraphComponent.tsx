import React, { FC } from 'react';
import styles from './ParagraphComponent.module.css';

interface ParagraphComponentProps {}

const ParagraphComponent: FC<ParagraphComponentProps> = () => (
  <p className={styles.p}>
    Nuestra experiencia creando e integrando campañas, tecnología y activos
    digitales hace que{' '}
    <span style={{ fontWeight: 'bold' }}>
      seamos capaces de ofrecerte una estrategia óptima de captación end to end:
    </span>
  </p>
);

export default ParagraphComponent;
