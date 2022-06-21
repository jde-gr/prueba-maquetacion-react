import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import Arrow from '../ModuleCommon/components/Arrow/Arrow';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import styles from './IntelligentTechComponent.module.css';

interface IntelligentTechComponentProps {}

const IntelligentTechComponent: FC<IntelligentTechComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const smPT = 64;
  const smPR = 20;
  const smPB = 48;
  const smPL = 25;

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const imgWidth =
    windowWidth < breakPoint
      ? windowWidth - smPR - smPL
      : Math.min(width * 0.75, 365.89);
  const imgHeight = (imgWidth * 360) / 365.89;

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {windowWidth < breakPoint ? (
        <div
          style={{
            paddingTop: smPT,
            paddingRight: smPR,
            paddingBottom: smPB,
            paddingLeft: smPL,
            backgroundColor: '#00eac5',
          }}
        >
          <img
            src="/images/ilustracion_tecnologia_global_sales@2x.png"
            alt="Tecnología Inteligente"
            width={imgWidth}
            height={imgHeight}
            style={{ marginBottom: 32 }}
          />
          <div className={styles.descContainer}>
            <h2 className={styles.h2}>Tecnología inteligente a tu servicio</h2>
          </div>
          <p className={styles.p}>
            Inteligencia artificial aplicada a la conversión y a la venta. Somos
            los creadores de la tecnología más implementada y avanzada en la
            gestión de Leads y cierre de ventas.
          </p>
          <div className={styles.buttonContent}>
            <p className={styles.buttonText}>Conócela</p>
            <Arrow />
          </div>
        </div>
      ) : (
        <MDWrapperComponent
          paddingBottom={104}
          paddingTop={104}
          wrappedModule={WrappedModule.none}
          backgroundColor={'#00eac5'}
        >
          <Col style={{ paddingTop: 8.5, paddingBottom: 8.5 }}>
            <div className={styles.descContainer}>
              <h2 className={styles.h2}>
                Tecnología inteligente a tu servicio
              </h2>
            </div>
            <p className={styles.p}>
              Inteligencia artificial aplicada a la conversión y a la venta.
              Somos los creadores de la tecnología más implementada y avanzada
              en la gestión de Leads y cierre de ventas.
            </p>
            <div className={styles.buttonContent}>
              <p className={styles.buttonText}>Conócelas</p>
              <Arrow />
            </div>
          </Col>
          <Col className={styles.imgCol} ref={ref}>
            <img
              src="/images/ilustracion_tecnologia_inteligente.png"
              alt="Tecnología Inteligente"
              width={imgWidth}
              height={imgHeight}
            />
          </Col>
        </MDWrapperComponent>
      )}
    </>
  );
};

export default IntelligentTechComponent;
