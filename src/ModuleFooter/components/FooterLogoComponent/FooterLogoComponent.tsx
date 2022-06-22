import React, { FC, useState, useEffect } from 'react';
import LogoComponent from '../../../ModuleMenu/components/LogoComponent/LogoComponent';
import styles from './FooterLogoComponent.module.css';

interface FooterLogoComponentProps {}

const FooterLogoComponent: FC<FooterLogoComponentProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <>
      {windowWidth < breakPoint ? (
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
      ) : (
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
      )}
    </>
  );
};

export default FooterLogoComponent;
