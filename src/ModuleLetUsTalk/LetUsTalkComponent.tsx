import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';

import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import PillButtonComponent, {
  PillIcon,
} from '../ModuleCommon/components/PillButtonComponent/PillButtonComponent';
import styles from './LetUsTalkComponent.module.css';

interface LetUsTalkComponentProps {}

const LetUsTalkComponent: FC<LetUsTalkComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const smPT = 64;
  const smPR = 20;
  const smPB = 48;
  const smPL = 25;

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const containerWidth =
    windowWidth < breakPoint
      ? (windowWidth - smPR - smPL) * 0.82
      : width * 0.82;
  const contentWidth = containerWidth - 32.0;

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
            backgroundColor: '#370087',
          }}
          className={`${styles.container} ${styles.letUsTalkComponent}`}
        >
          <img
            src="/images/envelope.png"
            alt="correo"
            width="65px"
            height="65px"
          />
          <div className={styles.headers}>
            <h4 className={styles.h4}>¡Hablemos!</h4>
            <h6 className={styles.h6}>
              <span style={{ fontWeight: 'bold' }}>¿Tienes un reto</span> en el
              que quieres que te acompañemos?
            </h6>
          </div>
          <PillButtonComponent
            containerWidth={`${containerWidth}px`}
            contentWidth={`${contentWidth}px`}
            buttonText="Cuéntanos más"
            hasIcon={true}
            centerText={true}
            icon={PillIcon.Send}
          />
          <div className={styles.textsWrapper}>
            <p className={styles.p}>
              O si prefieres,{' '}
              <span style={{ fontWeight: 'bold' }}>envíanos un mail</span> y te
              contestaremos lo antes posible.
            </p>
            <p className={styles.email}>
              <a href="mailto:business@globalsalespartnership.com">
                business@globalsalespartnership.com
              </a>
            </p>
          </div>
        </div>
      ) : (
        <MDWrapperComponent
          paddingTop={96}
          paddingBottom={104}
          wrappedModule={WrappedModule.ModuleLetUsTalk}
          backgroundColor={'#370087'}
        >
          <Col
            md={{ span: 4, offset: 4 }}
            ref={ref}
            className={styles.container}
          >
            <img
              src="/images/envelope.png"
              alt="correo"
              width="65px"
              height="65px"
            />
            <div className={styles.headers}>
              <h4 className={styles.h4}>¡Hablemos!</h4>
              <h6 className={styles.h6}>
                <span style={{ fontWeight: 'bold' }}>¿Tienes un reto</span> en
                el que quieres que te acompañemos?
              </h6>
            </div>
            <PillButtonComponent
              containerWidth={`${containerWidth}px`}
              contentWidth={`${contentWidth}px`}
              buttonText="Cuéntanos más"
              hasIcon={true}
              centerText={true}
              icon={PillIcon.Send}
            />
            <div className={styles.textsWrapper}>
              <p className={styles.p}>
                O si prefieres,{' '}
                <span style={{ fontWeight: 'bold' }}>envíanos un mail</span>y te
                contestaremos lo antes posible.
              </p>
              <p className={styles.email}>
                <a href="mailto:business@globalsalespartnership.com">
                  business@globalsalespartnership.com
                </a>
              </p>
            </div>
          </Col>
        </MDWrapperComponent>
      )}
    </>
  );
};

export default LetUsTalkComponent;
