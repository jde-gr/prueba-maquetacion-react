import React, { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './ModulePartner.module.css';
import Arrow from '../ModuleCommon/components/Arrow/Arrow';
import FrontPageContentComponent from './components/FrontPageContentComponent/FrontPageContentComponent';

interface ModulePartnerProps {}

const ModulePartner: FC<ModulePartnerProps> = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Row className={styles.modulePartner}>
      {width < breakPoint ? (
        <>
          <FrontPageContentComponent />
          <div className={styles.arrowScroll}>
            <Arrow />
          </div>
          )
        </>
      ) : (
        <Col xs={12} md={{ span: 9, offset: 2 }} className={styles.container}>
          <FrontPageContentComponent />
          <div className={styles.arrowScroll}>
            <Arrow />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default ModulePartner;
