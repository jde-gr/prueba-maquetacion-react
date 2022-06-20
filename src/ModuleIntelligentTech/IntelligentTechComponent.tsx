import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import MDWrapperComponent, {
  WrappedModule,
} from '../ModuleCommon/components/ModuleMDWrapperComponent/MDWrapperComponent';
import styles from './IntelligentTechComponent.module.css';

interface IntelligentTechComponentProps {}

const IntelligentTechComponent: FC<IntelligentTechComponentProps> = () => {
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
          backgroundColor={'#00eac5'}
        >
          <Col></Col>
          <Col></Col>
        </MDWrapperComponent>
      )}
    </>
  );
};

export default IntelligentTechComponent;
