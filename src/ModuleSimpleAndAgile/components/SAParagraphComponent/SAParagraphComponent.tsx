import React, { FC } from 'react';
import styles from './SAParagraphComponent.module.css';

interface SAParagraphComponentProps {}

const SAParagraphComponent: FC<SAParagraphComponentProps> = () => (
  <p className={styles.p}>
    Recuerda,{' '}
    <span style={{ fontWeight: 'bold' }}>
      nuestra facturación se va realizando a medida que vamos logrando las
      ventas.
    </span>{' '}
    Si no vendemos, no cobramos.
  </p>
);

export default SAParagraphComponent;
