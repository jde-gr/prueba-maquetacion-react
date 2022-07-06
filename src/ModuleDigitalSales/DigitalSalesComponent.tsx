import React, { FC, useEffect, useState } from 'react';

import styles from './DigitalSalesComponent.module.css';
import { Col } from 'react-bootstrap';
import MDWrapperComponent, {
  WrappedModule,
} from '../core/components/ModuleMDWrapperComponent/MDWrapperComponent';
import DSMessageComponent from './components/DSMessageComponent/DSMessageComponent';
import DSAdvantagesComponent from './components/DSAdvantagesComponent/DSAdvantagesComponent';

interface DigitalSalesComponentProps {}

const DigitalSalesComponent: FC<DigitalSalesComponentProps> = () => {
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
        <div id="digital-sales" className={styles.moduleDigitalSales}>
          <Col className={styles.container}>
            <DSMessageComponent />
            <DSAdvantagesComponent />
          </Col>
        </div>
      ) : (
        <div id="digital-sales">
          <MDWrapperComponent
            paddingBottom={104}
            paddingTop={104}
            wrappedModule={WrappedModule.ModuleDigitalSales}
            backgroundColor={'#370087'}
          >
            <Col>
              <DSMessageComponent />
            </Col>
            <Col md={1} lg={2}></Col>
            <Col>
              <DSAdvantagesComponent />
            </Col>
          </MDWrapperComponent>
        </div>
      )}
    </>
  );
};

export default DigitalSalesComponent;
