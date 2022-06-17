import React, { FC, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Close, Menu } from '@material-ui/icons';
// import AppBar from '@material-ui/core/AppBar';

import NavBarComponent from '../NavBarComponent/NavBarComponent';
import NavBarExpandedComponent from '../NavBarExpandedComponent/NavBarExpandedComponent';
import styles from './NavComponent.module.css';
import LogoComponent from '../LogoComponent/LogoComponent';

interface NavComponentProps {}

const NavComponent: FC<NavComponentProps> = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return isNavExpanded ? (
    <nav className={styles.navigationExpanded}>
      <a href="/">
        <LogoComponent whiteText={true} />
      </a>

      <div className={styles.toggleIconPosition}>
        <IconButton
          aria-label="collapse nav"
          className={styles.toggleIcon}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Close />
        </IconButton>
      </div>
      <NavBarExpandedComponent />
    </nav>
  ) : (
    <nav className={styles.navigation}>
      <a href="/">
        <LogoComponent whiteText={false} />
      </a>

      <div className={styles.toggleIconPosition}>
        <IconButton
          aria-label="toggle expand nav"
          className={styles.toggleIcon}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Menu />
        </IconButton>
        {/* <Menu
          className={styles.toggleIcon}
        /> */}
      </div>

      <NavBarComponent isNavExpanded={false} />
      <div className={styles.langContainer}>
        <p>
          <a href="/">ENG</a>
        </p>
      </div>
    </nav>
  );
};

export default NavComponent;
