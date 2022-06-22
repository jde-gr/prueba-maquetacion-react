import React, { FC } from 'react';
import styles from './DSMessageComponent.module.css';

interface DSMessageComponentProps {}

const DSMessageComponent: FC<DSMessageComponentProps> = () => {
  return (
    <div>
      <h2 className={styles.h2}>Un modelo de Ventas Digitales 100% a éxito</h2>
      <p className={styles.p}>
        Creemos tanto en nuestra forma de trabajar que nuestra remuneración es{' '}
        <span style={{ fontWeight: 'bold' }}>100% variable</span> poniendo a tu
        disposición un proceso de adquisición completo:{' '}
        <span style={{ fontWeight: 'bold' }}>
          desde la captación hasta el cierre de la venta
        </span>
        .
      </p>
    </div>
  );
};

export default DSMessageComponent;
