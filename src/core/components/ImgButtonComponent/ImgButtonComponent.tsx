import React, { FC } from 'react';
import Arrow from '../Arrow/Arrow';
import styles from './ImgButtonComponent.module.css';

export enum ImgIcon {
  Arrow,
}

interface ImgButtonComponentProps {
  color?: string;
  icon?: ImgIcon;
  text: string;
}

const ImgButtonComponent: FC<ImgButtonComponentProps> = ({
  color = '#1f0742',
  icon = ImgIcon.Arrow,
  text = 'Descubre más',
}) => {
  return (
    <div className={styles.buttonContent}>
      <p className={styles.buttonText} style={{ color: color }}>
        {text}
      </p>
      {icon === ImgIcon.Arrow && <Arrow />}
    </div>
  );
};

export default ImgButtonComponent;
