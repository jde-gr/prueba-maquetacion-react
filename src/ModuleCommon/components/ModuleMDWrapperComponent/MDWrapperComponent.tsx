import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import styles from './MDWrapperComponent.module.css';
import backgroundDigitalSales from '../../../components/backgrounds/background_gsp_01.svg';
import backgroundSencilloYAgil from '../../../components/backgrounds/shutterstock_52496590.png';
import backgroundHablemos from '../../../components/backgrounds/shutterstock_524965909.png';

export enum WrappedModule {
  ModuleDigitalSales,
  ModuleSimpleAndAgile,
  ModuleLetUsTalk,
  none,
}

interface MDWrapperComponentProps {
  paddingBottom: number;
  paddingTop: number;
  wrappedModule?: WrappedModule;
  backgroundColor?: string;
}

const MDWrapperComponent: FC<MDWrapperComponentProps> = (props) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const wrapperHeight = `${height + props.paddingBottom + props.paddingTop}px`;

  let background = undefined;
  if (props.wrappedModule === WrappedModule.ModuleDigitalSales) {
    background = backgroundDigitalSales;
  }
  if (props.wrappedModule === WrappedModule.ModuleSimpleAndAgile) {
    background = backgroundSencilloYAgil;
  }
  if (props.wrappedModule === WrappedModule.ModuleLetUsTalk) {
    background = backgroundHablemos;
  }

  return (
    <div
      className={styles.MDWrapperComponent}
      style={{
        height: wrapperHeight,
        backgroundColor: props.backgroundColor ?? '#ffffff',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <Row className={styles.row}>
        {/* <Col
            xs={12}
            md={open ? { span: 8 } : { span: 8, offset: 1 }}
            lg={open ? { span: 8 } : { span: 8, offset: 2 }}
            className={open ? styles.containerForm : styles.container}
          > */}
        <Col
          xs={12}
          md={{ span: 9, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
          className={styles.container}
          style={{
            paddingBottom: props.paddingBottom,
            paddingTop: props.paddingTop,
          }}
          ref={ref}
        >
          <Row>{props.children}</Row>
        </Col>
      </Row>
    </div>
  );
};

export default MDWrapperComponent;
