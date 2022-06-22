import React, { FC } from 'react';
import styles from './ITMessageComponent.module.css';

interface ITMessageComponentProps {}

const ITMessageComponent: FC<ITMessageComponentProps> = () => (
  <>
    <div className={styles.descContainer}>
      <h2 className={styles.h2}>Tecnología inteligente a tu servicio</h2>
    </div>
    <p className={styles.p}>
      Inteligencia artificial aplicada a la conversión y a la venta. Somos los
      creadores de la tecnología más implementada y avanzada en la gestión de
      Leads y cierre de ventas.
    </p>
  </>
);

export default ITMessageComponent;
