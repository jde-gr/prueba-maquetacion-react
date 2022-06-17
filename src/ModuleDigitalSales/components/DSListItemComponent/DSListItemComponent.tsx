import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './DSListItemComponent.module.css';

interface DSListItemComponentProps {
  message: string;
}

const DSListItemComponent: FC<DSListItemComponentProps> = (props) => (
  <Row className={styles.li}>
    <Col xs="auto">
      <img className={styles.checkIcon} src="/images/Check.svg" alt="·" />
    </Col>
    <Col>
      <p className={styles.liText}>{props.message}</p>
    </Col>
  </Row>
);

export default DSListItemComponent;
