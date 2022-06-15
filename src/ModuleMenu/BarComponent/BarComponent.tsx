import React, { FC } from 'react';
import styles from './BarComponent.module.css';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './components/NavBar/NavBar';

interface BarComponentProps {}

const BarComponent: FC<BarComponentProps> = () => (
  <AppBar position="fixed" className={styles.barComponent}>
    <div>
      <img
        className={styles.headerLogoImage}
        src="/images/Logo_Color_Small.svg"
        alt="global sales partnership®"
      />
    </div>
    <div className={styles.headerSpace} />

    <NavBar />
  </AppBar>
);

export default BarComponent;
