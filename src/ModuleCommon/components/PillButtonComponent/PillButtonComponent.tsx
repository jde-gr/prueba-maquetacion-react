import { KeyboardArrowUp, Send } from '@material-ui/icons';
import React, { FC } from 'react';
import styles from './PillButtonComponent.module.css';

export enum PillIcon {
  KeyboardArrowUp,
  Send,
}

interface PillButtonComponentProps {
  buttonText?: string;
  containerWidth?: string;
  contentWidth?: string;
  hasIcon: boolean;
  centerText?: boolean;
  icon?: PillIcon;
}

const PillButtonComponent: FC<PillButtonComponentProps> = ({
  buttonText = '',
  containerWidth = '274px',
  contentWidth = '226px',
  hasIcon = false,
  centerText = false,
  icon = PillIcon.KeyboardArrowUp,
}) => {
  return (
    <div className={styles.container} style={{ width: containerWidth }}>
      <div className={styles.buttonContent} style={{ width: contentWidth }}>
        <p
          className={styles.buttonText}
          style={!hasIcon || centerText ? { textAlign: 'center' } : {}}
        >
          {buttonText}
        </p>
        {hasIcon && icon === PillIcon.KeyboardArrowUp && (
          <KeyboardArrowUp className={styles.buttonIcon} />
        )}
        {hasIcon && icon === PillIcon.Send && (
          <Send className={styles.buttonIcon} />
        )}
      </div>
    </div>
  );
};

export default PillButtonComponent;
