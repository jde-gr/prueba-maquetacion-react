import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './PartnerComponent.module.css';
import FrontPageContentComponent from './components/FrontPageContentComponent/FrontPageContentComponent';
import ChallengeFormSMComponent from '../ModuleForm/components/ChallengeFormSMComponent/ChallengeFormSMComponent';
import ChallengeFormComponent from '../ModuleForm/components/ChallengeFormComponent/ChallengeFormComponent';
import FormContainerComponent from '../ModuleForm/components/FormContainerComponent/FormContainerComponent';
import { Close } from '@mui/icons-material';

interface PartnerComponentProps {
  onFormOpen: () => void;
  onFormClose: () => void;
}

const PartnerComponent: FC<PartnerComponentProps> = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768; // md

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    props.onFormOpen();
  };

  const handleClose = () => {
    setOpen(false);
    props.onFormClose();
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const formButtonContentWidth = width - 32 * 2;

  return (
    <Row className={styles.partnerComponent}>
      {width < breakPoint ? (
        <>
          <Col className={styles.container}>
            <FrontPageContentComponent onClick={handleClickOpen} />
            <ChallengeFormSMComponent
              containerWidth={`${width}px`}
              contentWidth={`${formButtonContentWidth}px`}
            />
          </Col>
        </>
      ) : (
        <>
          <Col
            xs={12}
            md={open ? { span: 9 } : { span: 10, offset: 1 }}
            lg={open ? { span: 9 } : { span: 9, offset: 2 }}
            className={open ? styles.containerForm : styles.container}
          >
            <FrontPageContentComponent
              showFormButton={!open}
              onClick={handleClickOpen}
            />
          </Col>
          {open && (
            <Col md="3" className={styles.formContainerWrapper}>
              <FormContainerComponent>
                <div className={styles.buttonContent}>
                  <p className={styles.modalButtonText}>??Cu??ntanos tu reto!</p>
                  <Close
                    onClick={handleClose}
                    className={styles.modalButtonIcon}
                  />
                </div>
                <ChallengeFormComponent onConfirm={handleClose} />
              </FormContainerComponent>
            </Col>
          )}
        </>
      )}
    </Row>
  );
};

export default PartnerComponent;
