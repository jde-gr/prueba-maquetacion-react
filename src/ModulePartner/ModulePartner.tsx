import React, { FC, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './ModulePartner.module.css';
import FrontPageContentComponent from './components/FrontPageContentComponent/FrontPageContentComponent';
import ChallengeFormSMComponent from '../ModuleForm/components/ChallengeFormSMComponent/ChallengeFormSMComponent';

interface ModulePartnerProps {}

const ModulePartner: FC<ModulePartnerProps> = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const formButtonContentWidth = width - 32 * 2;

  return (
    <Row className={styles.modulePartner}>
      {width < breakPoint ? (
        <>
          <Col className={styles.container}>
            <FrontPageContentComponent />
            <ChallengeFormSMComponent
              containerWidth={`${width}px`}
              contentWidth={`${formButtonContentWidth}px`}
            />
          </Col>
        </>
      ) : (
        <Col
          xs={12}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 9, offset: 2 }}
          className={styles.container}
        >
          <FrontPageContentComponent />
        </Col>
      )}
    </Row>
  );
};

export default ModulePartner;
