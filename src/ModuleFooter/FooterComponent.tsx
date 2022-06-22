import React, { FC, useEffect, useState, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import LogoComponent from '../ModuleMenu/components/LogoComponent/LogoComponent';
import FormContext from '../store/FormContext';
import CopyRightComponent from './components/CopyRightComponent/CopyRightComponent';
import FooterLogoComponent from './components/FooterLogoComponent/FooterLogoComponent';
import FooterMenuComponent from './components/FooterMenuComponent/FooterMenuComponent';
import PartnershipsComponent from './components/PartnershipsComponent/PartnershipsComponent';
import styles from './FooterComponent.module.css';

interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const ctx = useContext(FormContext);

  const smPT = 40;
  const smPR = 20;
  const smPB = 0;
  const smPL = 25;

  const imgSMHeight = 72;
  const factor = 3960 / 318;
  const imgSMWidth = imgSMHeight * factor;

  const imgMDHeight = 106;
  const imgMDWidth = imgMDHeight * factor;

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      {windowWidth < breakPoint ? (
        <div
          style={{
            paddingTop: smPT,
            paddingRight: smPR,
            paddingBottom: smPB,
            paddingLeft: smPL,
            backgroundColor: 'white',
          }}
          className={`${styles.footer}`}
        >
          <PartnershipsComponent
            marginBottom={32}
            imgWidth={imgSMWidth}
            imgHeight={imgSMHeight}
          />
          <FooterMenuComponent />
          <FooterLogoComponent />
          <CopyRightComponent />
        </div>
      ) : (
        <div className={styles.footer} style={{ backgroundColor: 'white' }}>
          <Row className={styles.row}>
            <Col
              xs={12}
              md={ctx.isOpen ? { span: 9 } : { span: 12 }}
              className={ctx.isOpen ? styles.containerForm : styles.container}
              style={{
                paddingTop: 64,
                paddingBottom: 12,
              }}
            >
              <Row>
                <Col>
                  <PartnershipsComponent
                    marginBottom={40}
                    imgWidth={imgMDWidth}
                    imgHeight={imgMDHeight}
                  />
                  <FooterMenuComponent />
                  <div className={styles.footerBottomWrapper}>
                    <FooterLogoComponent />
                    <CopyRightComponent />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default FooterComponent;
