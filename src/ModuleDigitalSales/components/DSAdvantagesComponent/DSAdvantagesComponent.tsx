import { ChevronRight } from '@material-ui/icons';
import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import DSListItemComponent from '../DSListItemComponent/DSListItemComponent';
import styles from './DSAdvantagesComponent.module.css';

interface DSAdvantagesComponentProps {}

const DSAdvantagesComponent: FC<DSAdvantagesComponentProps> = () => {
  return (
    <div>
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
  );
};

export default DSAdvantagesComponent;
