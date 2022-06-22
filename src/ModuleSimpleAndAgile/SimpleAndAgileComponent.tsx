import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import ImgButtonComponent, {
  ImgIcon,
} from '../ModuleCommon/components/ImgButtonComponent/ImgButtonComponent';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import SAImageComponent from './components/SAImageComponent/SAImageComponent';
import SAParagraphComponent from './components/SAParagraphComponent/SAParagraphComponent';
import SATitleComponent from './components/SATitleComponent/SATitleComponent';
import styles from './SimpleAndAgileComponent.module.css';

interface SimpleAndAgileComponentProps {}

const SimpleAndAgileComponent: FC<SimpleAndAgileComponentProps> = () => {
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
      : Math.min(width * 0.75, 390);
  const imgHeight =
    windowWidth < breakPoint ? (imgWidth * 412) / 328 : (imgWidth * 527) / 390;

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
        >
          <SATitleComponent />
          <SAImageComponent imgWidth={imgWidth} imgHeight={imgHeight} />
          <SAParagraphComponent />
          <ImgButtonComponent
            color="#ffffff"
            icon={ImgIcon.Arrow}
            text="¿Nos cuentas tu proyecto?"
          />
        </div>
      ) : (
        <MDWrapperComponent
          paddingBottom={104}
          paddingTop={104}
          wrappedModule={WrappedModule.ModuleSimpleAndAgile}
          backgroundColor={'#6c30eb'}
        >
          <Col style={{ paddingTop: 8.5, paddingBottom: 8.5 }}>
            <SATitleComponent />
            <SAParagraphComponent />
            <ImgButtonComponent
              color="#ffffff"
              icon={ImgIcon.Arrow}
              text="¿Nos cuentas tu proyecto?"
            />
          </Col>
          <Col className={styles.imgCol} ref={ref}>
            <SAImageComponent imgWidth={imgWidth} imgHeight={imgHeight} />
          </Col>
        </MDWrapperComponent>
      )}
    </>
  );
};

export default SimpleAndAgileComponent;
