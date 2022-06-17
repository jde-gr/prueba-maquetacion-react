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
  icon?: PillIcon;
}

const defaultProps: PillButtonComponentProps = {
  buttonText: '',
  containerWidth: '274px',
  contentWidth: '226px',
  hasIcon: false,
  icon: PillIcon.KeyboardArrowUp,
};

const PillButtonComponent: FC<PillButtonComponentProps> = (props) => {
  const { buttonText, containerWidth, contentWidth, hasIcon, icon } = props;
  return (
    <div className={styles.container} style={{ width: containerWidth }}>
      <div className={styles.buttonContent} style={{ width: contentWidth }}>
        <p
          className={styles.buttonText}
          style={!hasIcon ? { textAlign: 'center' } : {}}
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

PillButtonComponent.defaultProps = defaultProps;

export default PillButtonComponent;
