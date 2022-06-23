import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import ImgButtonComponent, {
  ImgIcon,
} from '../ModuleCommon/components/ImgButtonComponent/ImgButtonComponent';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import TEImageComponent from './components/TEImageComponent/TEImageComponent';
import TEMessageComponent from './components/TEMessageComponent/TEMessageComponent';
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
          id="trust-the-experience"
          style={{
            paddingTop: smPT,
            paddingRight: smPR,
            paddingBottom: smPB,
            paddingLeft: smPL,
            backgroundColor: '#f5f3ff',
          }}
        >
          <TEImageComponent imgWidth={imgWidth} imgHeight={imgHeight} />
          <TEMessageComponent />
          <ImgButtonComponent
            color="#1f0742"
            icon={ImgIcon.Arrow}
            text="Descubre quiénes somos"
          />
        </div>
      ) : (
        <div id="trust-the-experience">
          <MDWrapperComponent
            paddingBottom={104}
            paddingTop={104}
            wrappedModule={WrappedModule.None}
            backgroundColor={'#f5f3ff'}
          >
            <Col style={{ paddingTop: 8.5, paddingBottom: 8.5 }}>
              <TEMessageComponent />
              <ImgButtonComponent
                color="#1f0742"
                icon={ImgIcon.Arrow}
                text="Descubre quiénes somos"
              />
            </Col>
            <Col className={styles.imgCol} ref={ref}>
              <TEImageComponent imgWidth={imgWidth} imgHeight={imgHeight} />
            </Col>
          </MDWrapperComponent>
        </div>
      )}
    </>
  );
};

export default TrustTheExperienceComponent;
