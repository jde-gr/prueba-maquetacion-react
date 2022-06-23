import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import ImgButtonComponent, {
  ImgIcon,
} from '../ModuleCommon/components/ImgButtonComponent/ImgButtonComponent';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import ITMessageComponent from './components/ITMessageComponent/ITMessageComponent';
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
          id="intelligent-tech"
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
          <ITMessageComponent />
          <ImgButtonComponent
            color="#1f0742"
            icon={ImgIcon.Arrow}
            text="Conócela"
          />
        </div>
      ) : (
        <div id="intelligent-tech">
          <MDWrapperComponent
            paddingBottom={104}
            paddingTop={104}
            wrappedModule={WrappedModule.None}
            backgroundColor={'#00eac5'}
          >
            <Col style={{ paddingTop: 8.5, paddingBottom: 8.5 }}>
              <ITMessageComponent />
              <ImgButtonComponent
                color="#1f0742"
                icon={ImgIcon.Arrow}
                text="Conócelas"
              />
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
        </div>
      )}
    </>
  );
};

export default IntelligentTechComponent;
