import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './FrontPageContentComponent.module.css';

interface FrontPageContentComponentProps {}

const FrontPageContentComponent: FC<FrontPageContentComponentProps> = () => (
  <Row className={styles.row}>
    <Col xs={12} md={5} className={styles.textColumn}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1Header}>
          Tu partner para conseguir más leads, más ventas, más revenue
        </h1>
      </div>
      <div className={styles.msgContainer}>
        <p>
          Un modelo de trabajo end to end que integra
          <span style={{ fontWeight: 'bold' }}>
            tecnología, medios y creatividad.
          </span>
        </p>
      </div>
      <div className={styles.signatureContainer}>
        <img
          className={styles.signatureImage}
          src="/images/firma_powered_by.svg"
          alt="powered by HABITANT & walmeric"
        />
      </div>
    </Col>
    <Col xs={12} md={7} className={styles.imageColumn}>
      <div className={styles.imageContainer}>
        <img
          style={{ maxWidth: '100%', height: 'auto' }}
          src="/images/Keyvisual_GSP 3@2x.png"
          alt="Tu partner para conseguir más leads, más ventas, más revenue"
        />
      </div>
    </Col>
  </Row>
);

export default FrontPageContentComponent;
