import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import styles from './TrustTheExperienceComponent.module.css';

interface TrustTheExperienceComponentProps {}

const TrustTheExperienceComponent: FC<
  TrustTheExperienceComponentProps
> = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {width < breakPoint ? (
        <div className={styles.moduleDigitalSales}></div>
      ) : (
        <MDWrapperComponent
          paddingBottom={104}
          paddingTop={104}
          wrappedModule={WrappedModule.none}
          backgroundColor={'#F5F3FF'}
        >
          <Col></Col>
          <Col></Col>
        </MDWrapperComponent>
      )}
    </>
  );
};

export default TrustTheExperienceComponent;
