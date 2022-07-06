import React, { FC, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import ImgButtonComponent, {
  ImgIcon,
} from '../core/components/ImgButtonComponent/ImgButtonComponent';

import MDWrapperComponent, {
  WrappedModule,
} from '../core/components/ModuleMDWrapperComponent/MDWrapperComponent';
import CardComponent from './components/CardComponent/CardComponent';
import H2DivComponent from './components/H2DivComponent/H2DivComponent';
import ParagraphComponent from './components/ParagraphComponent/ParagraphComponent';
import styles from './IntegrationsComponent.module.css';

interface IntegrationsComponentProps {}

const IntegrationsComponent: FC<IntegrationsComponentProps> = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const paddingBottom = width < breakPoint ? 32 : 40;
  const wrapperHeight = `${height + paddingBottom}px`;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {width < breakPoint ? (
        <Col id="integrations" className={styles.container}>
          <H2DivComponent />
          <div style={{ paddingBottom: paddingBottom }}>
            <ParagraphComponent />
          </div>
          <CardComponent
            iconSrc="/icons/icon_def_est.svg"
            title="Definición estratégica"
            paragraph="Establecemos de forma conjunta objetivos, necesidades y procesos."
          />
          <CardComponent
            iconSrc="/icons/icon_can_dig.svg"
            title="Canales digitales"
            paragraph="Sin intermediarios. Invertimos,  gestionamos y activamos las campañas."
          />
          <CardComponent
            iconSrc="/icons/icon_cre.svg"
            title="Creatividad"
            paragraph="Creamos conceptos y mensajes orientados a conversión."
          />
          <CardComponent
            iconSrc="/icons/icon_act_con.svg"
            title="Activos de conversión"
            paragraph="Diseñamos y desarrollamos los activos digitales necesarios para pasar del clic al lead/venta. "
          />
          <CardComponent
            iconSrc="/icons/icon_tec_lea_man.svg"
            title="Tecnología lead management"
            paragraph="Gestión completa del lead y trazabilidad del mismo hasta el cierre de la venta con una tecnología única."
          />
          <ImgButtonComponent
            color="#1f0742"
            icon={ImgIcon.Arrow}
            text="Descubre más"
          />
        </Col>
      ) : (
        <div id="integrations">
          <MDWrapperComponent
            paddingBottom={104}
            paddingTop={104}
            wrappedModule={WrappedModule.None}
            backgroundColor={'white'}
          >
            <Col md={6}>
              <H2DivComponent style={{ height: wrapperHeight }} />
              <CardComponent
                iconSrc="/icons/icon_def_est.svg"
                title="Definición estratégica"
                paragraph="Establecemos de forma conjunta objetivos, necesidades y procesos."
              />
              <CardComponent
                iconSrc="/icons/icon_cre.svg"
                title="Creatividad"
                paragraph="Creamos conceptos y mensajes orientados a conversión."
              />
              <CardComponent
                iconSrc="/icons/icon_tec_lea_man.svg"
                title="Tecnología lead management"
                paragraph="Gestión completa del lead y trazabilidad del mismo hasta el cierre de la venta con una tecnología única."
              />
            </Col>
            <Col md={6}>
              <div style={{ paddingBottom: paddingBottom }} ref={ref}>
                <ParagraphComponent />
              </div>
              <CardComponent
                iconSrc="/icons/icon_can_dig.svg"
                title="Canales digitales"
                paragraph="Sin intermediarios. Invertimos,  gestionamos y activamos las campañas."
              />
              <CardComponent
                iconSrc="/icons/icon_act_con.svg"
                title="Activos de conversión"
                paragraph="Diseñamos y desarrollamos los activos digitales necesarios para pasar del clic al lead/venta. "
              />
            </Col>
          </MDWrapperComponent>
        </div>
      )}
    </>
  );
};

export default IntegrationsComponent;
