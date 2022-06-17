import React, { FC } from 'react';
import styles from './LogoComponent.module.css';

interface LogoComponentProps {
  whiteText: boolean;
}

const LogoComponent: FC<LogoComponentProps> = (props) => {
  const { whiteText } = props;
  return (
    <img
      className={styles.headerLogoImage}
      src={
        whiteText
          ? '/images/Logo_Color_White_Small.svg'
          : '/images/Logo_Color_Small.svg'
      }
      alt="global sales partnership®"
    />
  );
};

export default LogoComponent;
