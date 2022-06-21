import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import Arrow from '../ModuleCommon/components/Arrow/Arrow';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import styles from './TrustTheExperienceComponent.module.css';

interface TrustTheExperienceComponentProps {}

const TrustTheExperienceComponent: FC<
  TrustTheExperienceComponentProps
> = () => {
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
      : Math.min(width * 0.75, 366);
  const imgHeight =
    windowWidth < breakPoint ? (imgWidth * 506) / 589 : (imgWidth * 379) / 366;

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
            backgroundColor: '#f5f3ff',
          }}
        >
          <img
            src="/images/experiencia_ilustracion@2x.png"
            alt="Tecnología Inteligente"
            width={imgWidth}
            height={imgHeight}
            style={{ marginBottom: 32 }}
          />
          <div className={styles.descContainer}>
            <h2 className={styles.h2}>Confía en la experiencia</h2>
          </div>
          <p className={styles.p}>
            Detrás de Global Sales Partnership se encuentran{' '}
            <span style={{ fontWeight: 'bold' }}>HABITANT y Walmeric</span>, dos
            de las empresas más innovadoras en Performance y Ventas Digitales.
          </p>
          <img
            src="/images/Frame.png"
            alt="Tecnología Inteligente"
            width="229px"
            height="20px"
            style={{ marginBottom: 32 }}
          />
          <div className={styles.buttonContent}>
            <p className={styles.buttonText}>Descubre quiénes somos</p>
            <Arrow />
          </div>
        </div>
      ) : (
        <MDWrapperComponent
          paddingBottom={104}
          paddingTop={104}
          wrappedModule={WrappedModule.None}
          backgroundColor={'#f5f3ff'}
        >
          <Col style={{ paddingTop: 8.5, paddingBottom: 8.5 }}>
            <div className={styles.descContainer}>
              <h2 className={styles.h2}>Confía en la experiencia</h2>
            </div>
            <p className={styles.p}>
              Detrás de Global Sales Partnership se encuentran{' '}
              <span style={{ fontWeight: 'bold' }}>HABITANT y Walmeric</span>,
              dos de las empresas más innovadoras en Performance y Ventas
              Digitales.
            </p>
            <img
              src="/images/Frame.png"
              alt="Tecnología Inteligente"
              width="229px"
              height="20px"
              style={{ marginBottom: 32 }}
            />
            <div className={styles.buttonContent}>
              <p className={styles.buttonText}>Descubre quiénes somos</p>
              <Arrow />
            </div>
          </Col>
          <Col className={styles.imgCol} ref={ref}>
            <img
              src="/images/ilustracion_experiencia@2x.png"
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

export default TrustTheExperienceComponent;
