import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';

import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import PillButtonComponent, {
  PillIcon,
} from '../ModuleCommon/components/PillButtonComponent/PillButtonComponent';
import LTContactComponent from './components/LTContactComponent/LTContactComponent';
import LTImageComponent from './components/LTImageComponent/LTImageComponent';
import LTTitleComponent from './components/LTTitleComponent/LTTitleComponent';
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
      ? Math.max((windowWidth - smPR - smPL) * 0.82, 244)
      : Math.max(width * 0.82, 244);
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
          <LTImageComponent />
          <LTTitleComponent />
          <PillButtonComponent
            containerWidth={`${containerWidth}px`}
            contentWidth={`${contentWidth}px`}
            buttonText="Cuéntanos más"
            hasIcon={true}
            centerText={true}
            icon={PillIcon.Send}
          />
          <LTContactComponent />
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
            <LTImageComponent />
            <LTTitleComponent />
            <PillButtonComponent
              containerWidth={`${containerWidth}px`}
              contentWidth={`${contentWidth}px`}
              buttonText="Cuéntanos más"
              hasIcon={true}
              centerText={true}
              icon={PillIcon.Send}
            />
            <LTContactComponent />
          </Col>
        </MDWrapperComponent>
      )}
    </>
  );
};

export default LetUsTalkComponent;
