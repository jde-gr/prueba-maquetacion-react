import React, { FC, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import styles from './MDWrapperComponent.module.css';
import backgroundDigitalSales from '../../../components/backgrounds/background_gsp_01.svg';
import backgroundSimpleAndAgile from '../../../components/backgrounds/shutterstock_52496590.png';
import backgroundLetUsTalk from '../../../components/backgrounds/shutterstock_524965909.png';
import FormContext from '../../../store/FormContext';

export enum WrappedModule {
  ModuleDigitalSales,
  ModuleSimpleAndAgile,
  ModuleLetUsTalk,
  None,
}

interface MDWrapperComponentProps {
  paddingBottom: number;
  paddingTop: number;
  wrappedModule?: WrappedModule;
  backgroundColor?: string;
}

const MDWrapperComponent: FC<MDWrapperComponentProps> = (props) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const ctx = useContext(FormContext);

  const wrapperHeight = `${height + props.paddingBottom + props.paddingTop}px`;

  let background = undefined;
  if (props.wrappedModule === WrappedModule.ModuleDigitalSales) {
    background = backgroundDigitalSales;
  }
  if (props.wrappedModule === WrappedModule.ModuleSimpleAndAgile) {
    background = backgroundSimpleAndAgile;
  }
  if (props.wrappedModule === WrappedModule.ModuleLetUsTalk) {
    background = backgroundLetUsTalk;
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
        <Col
          xs={12}
          md={ctx.isOpen ? { span: 8 } : { span: 8, offset: 1 }}
          lg={ctx.isOpen ? { span: 8 } : { span: 8, offset: 2 }}
          className={ctx.isOpen ? styles.containerForm : styles.container}
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
