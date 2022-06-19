import React, { FC, useEffect, useState } from 'react';
import { ChevronRight } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import styles from './ModuleDigitalSales.module.css';
import DSListItemComponent from './components/DSListItemComponent/DSListItemComponent';
import { Col, Row } from 'react-bootstrap';
import { useMeasure } from 'react-use';

interface ModuleDigitalSalesProps {}

const ModuleDigitalSales: FC<ModuleDigitalSalesProps> = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const wrapperHeight = `${height + 104 + 104}px`;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {width < breakPoint ? (
        <div className={styles.moduleDigitalSales}>
          <Col className={styles.container}>
            <div>
              <h2 className={styles.h2}>
                Un modelo de Ventas Digitales 100% a éxito
              </h2>
              <p className={styles.p}>
                Creemos tanto en nuestra forma de trabajar que nuestra
                remuneración es{' '}
                <span style={{ fontWeight: 'bold' }}>100% variable</span>{' '}
                poniendo a tu disposición un proceso de adquisición completo:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  desde la captación hasta el cierre de la venta
                </span>
                .
              </p>
            </div>
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
          </Col>
        </div>
      ) : (
        <div
          className={styles.moduleDigitalSales}
          style={{ height: wrapperHeight }}
        >
          <Row className={styles.row}>
            {/* <Col
            xs={12}
            md={open ? { span: 8 } : { span: 8, offset: 1 }}
            lg={open ? { span: 8 } : { span: 8, offset: 2 }}
            className={open ? styles.containerForm : styles.container}
          > */}
            <Col
              xs={12}
              md={{ span: 9, offset: 1 }}
              lg={{ span: 8, offset: 2 }}
              className={styles.container}
              ref={ref}
            >
              <Row>
                <Col>
                  <h2 className={styles.h2}>
                    Un modelo de Ventas Digitales 100% a éxito
                  </h2>
                  <p className={styles.p}>
                    Creemos tanto en nuestra forma de trabajar que nuestra
                    remuneración es{' '}
                    <span style={{ fontWeight: 'bold' }}>100% variable</span>{' '}
                    poniendo a tu disposición un proceso de adquisición
                    completo:{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      desde la captación hasta el cierre de la venta
                    </span>
                    .
                  </p>
                </Col>
                <Col>
                  <h2 className={styles.h2}>Algunas ventajas:</h2>
                  <div className={styles.ul}>
                    <DSListItemComponent message="Un único proveedor, todos los servicios." />
                    <DSListItemComponent message="Posibilidad de convivencia con tus actuales estrategias de tráfico y adquisición." />
                    <DSListItemComponent message="Paga solamente por los objetivos conseguidos." />
                  </div>
                  <div className={styles.ctaRow}>
                    {/* <Row style={{ width: '100%' }}>
                      <Col
                        md={7}
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          flexWrap: 'wrap',
                        }}
                      >
                        <p className={styles.ctaButton}>
                          Ver todas las ventajas
                        </p>
                        <ChevronRight
                          className={`${styles.ctaButton} ${styles.ctaIcon}`}
                        />
                      </Col>
                      <Col
                        md={5}
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          flexWrap: 'wrap',
                        }}
                      >
                        <p className={styles.ctaButton}>¿Hablamos?</p>
                        <ChevronRight
                          className={`${styles.ctaButton} ${styles.ctaIcon}`}
                        />
                      </Col>
                    </Row> */}
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
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ModuleDigitalSales;