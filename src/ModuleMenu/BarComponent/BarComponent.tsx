import React, { FC, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
// import AppBar from '@material-ui/core/AppBar';

import NavBar from './components/NavBar/NavBar';
import styles from './BarComponent.module.css';

interface BarComponentProps {}

const BarComponent: FC<BarComponentProps> = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={styles.navigation}>
      <a href="/">
        <img
          className={styles.headerLogoImage}
          src="/images/Logo_Color_Small.svg"
          alt="global sales partnership®"
        />
      </a>

      <div className={styles.menuIconPosition}>
        <IconButton
          aria-label="fingerprint"
          className={styles.menuIcon}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Menu />
        </IconButton>
        {/* <Menu
          className={styles.menuIcon}
        /> */}
      </div>

      <NavBar isNavExpanded={isNavExpanded} />
    </nav>
  );
};

export default BarComponent;
