import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React, { FC, useState } from 'react';
import ModalComponent from '../../../core/components/ModalComponent/ModalComponent';
import ChallengeFormComponent from '../ChallengeFormComponent/ChallengeFormComponent';
import styles from './ChallengeFormSMComponent.module.css';

interface ChallengeFormSMComponentProps {
  containerWidth?: string;
  contentWidth?: string;
}

const ChallengeFormSMComponent: FC<ChallengeFormSMComponentProps> = ({
  containerWidth = '360px',
  contentWidth = '296px',
}: ChallengeFormSMComponentProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        {open && (
          <ModalComponent onClose={handleClose}>
            <div
              className={styles.buttonContent}
              style={{ width: contentWidth }}
            >
              <p className={styles.modalButtonText}>¡Cuéntanos tu reto!</p>
              <KeyboardArrowDown
                onClick={handleClose}
                className={styles.modalButtonIcon}
              />
            </div>
            <ChallengeFormComponent onConfirm={handleClose} />
          </ModalComponent>
        )}
      </div>

      <div className={styles.challengeFormButtonSm}>
        <div
          className={styles.container}
          style={{ width: containerWidth }}
          onClick={handleClickOpen}
        >
          <div className={styles.buttonContent} style={{ width: contentWidth }}>
            <p className={styles.buttonText}>¿Tienes un reto?</p>
            <KeyboardArrowUp className={styles.buttonIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeFormSMComponent;
