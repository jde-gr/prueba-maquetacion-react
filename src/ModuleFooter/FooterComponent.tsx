import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMeasure } from 'react-use';
import LogoComponent from '../ModuleMenu/components/LogoComponent/LogoComponent';
import styles from './FooterComponent.module.css';

interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

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
          <div style={{ width: '100%', overflowX: 'hidden', marginBottom: 32 }}>
            <img
              src="/images/partnerships.png"
              alt="Partnerships"
              width={imgSMWidth}
              height={imgSMHeight}
            />
          </div>
          <div className={styles.menuSMWrapper}>
            <a href="/">Inicio</a>
            <a href="/">Nuestro modelo</a>
            <a href="/">¿Cómo lo hacemos?</a>
            <a href="/">Herramientas tecnológicas</a>
            <a href="/">Casos de éxito</a>
            <a href="/">¿Quiénes somos?</a>
          </div>
          <div className={styles.logoSMWrapper}>
            <div className={styles.logoSMDiv}>
              <a href="/">
                <img
                  src="/images/Logo_BW_Small.svg"
                  alt="global sales partnership®"
                  style={{ width: 111, height: 28 }}
                />
              </a>
              <div className={styles.privacyPolicyDiv}>
                <a href="/">Términos y privacidad</a>
                <a href="/">Política de cookies</a>
              </div>
            </div>
          </div>
          <div
            className={`${styles.copyRightDiv} ${styles.copyRightSMPadding}`}
          >
            <p className={styles.address}>
              GSP® | Cristóbal Bordiú, 13, Madrid
            </p>
            <div className={styles.langContainer}>
              <p>
                <a href="/">ENG</a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.footer} style={{ backgroundColor: 'white' }}>
          <Row className={styles.row}>
            {/* <Col
            xs={12}
            md={open ? { span: 8 } : { span: 8, offset: 1 }}
            lg={open ? { span: 8 } : { span: 8, offset: 2 }}
            className={open ? styles.containerForm : styles.container}
          > */}
            <Col
              xs={12}
              className={styles.container}
              style={{
                paddingTop: 64,
                paddingBottom: 12,
              }}
            >
              <Row>
                <Col>
                  <div
                    style={{
                      width: '100%',
                      overflowX: 'hidden',
                      marginBottom: 40,
                    }}
                  >
                    <img
                      src="/images/partnerships.png"
                      alt="Partnerships"
                      width={imgMDWidth}
                      height={imgMDHeight}
                    />
                  </div>
                  <div className={styles.menuWrapper}>
                    <div className={styles.menuDiv}>
                      <div className={styles.menuColumn}>
                        <a href="/">Inicio</a>
                        <a href="/">Nuestro modelo</a>
                      </div>
                      <div className={styles.menuColumn}>
                        <a href="/">¿Cómo lo hacemos?</a>
                        <a href="/">Herramientas tecnológicas</a>
                      </div>
                      <div className={styles.menuColumn}>
                        <a href="/">Casos de éxito</a>
                        <a href="/">¿Quiénes somos?</a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerBottomWrapper}>
                    <div className={styles.footerLogoWrapper}>
                      <div className={styles.footerLogoDiv}>
                        <a href="/">
                          <LogoComponent whiteText={false} />
                        </a>
                        <div className={styles.privacyPolicyDiv}>
                          <a href="/">Términos y privacidad</a>
                          <a href="/">Política de cookies</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.copyRightDiv}>
                      <p className={styles.address}>
                        GSP® | Cristóbal Bordiú, 13, Madrid
                      </p>
                      <div className={styles.langContainer}>
                        <p>
                          <a href="/">ENG</a>
                        </p>
                      </div>
                    </div>
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
