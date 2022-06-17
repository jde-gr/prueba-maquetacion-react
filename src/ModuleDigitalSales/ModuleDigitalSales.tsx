import React, { FC } from 'react';
import { ChevronRight } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import styles from './ModuleDigitalSales.module.css';
import DSListItemComponent from './components/DSListItemComponent/DSListItemComponent';

interface ModuleDigitalSalesProps {}

const ModuleDigitalSales: FC<ModuleDigitalSalesProps> = () => (
  <div className={styles.moduleDigitalSales}>
    <div className={styles.row}>
      <div className={styles.column1}>
        <h2 className={styles.h2}>
          Un modelo de Ventas Digitales 100% a éxito
        </h2>
        <p className={styles.p}>
          Creemos tanto en nuestra forma de trabajar que nuestra remuneración es
          100% variable poniendo a tu disposición un proceso de adquisición
          completo: desde la captación hasta el cierre de la venta.
        </p>
      </div>
      <div className={styles.column2}>
        <h2 className={styles.h2}>Algunas ventajas:</h2>
        <div className={styles.ul}>
          <DSListItemComponent message="Un único proveedor, todos los servicios." />
          <DSListItemComponent message="Posibilidad de convivencia con tus actuales estrategias de tráfico y adquisición." />
          <DSListItemComponent message="Paga solamente por los objetivos conseguidos." />
        </div>
        <div className={styles.ctaRow}>
          <Button
            variant="text"
            endIcon={<ChevronRight />}
            className={styles.ctaButton}
          >
            Ver todas las ventajas
          </Button>
          <Button
            variant="text"
            endIcon={<ChevronRight />}
            className={styles.ctaButton}
          >
            ¿Hablamos?
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default ModuleDigitalSales;
