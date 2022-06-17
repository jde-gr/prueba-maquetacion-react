import React, { FC } from 'react';
import { KeyboardArrowUp } from '@material-ui/icons';
import styles from './ModuleForm.module.css';

interface ModuleFormProps {}

const ModuleForm: FC<ModuleFormProps> = () => (
  <div className={styles.moduleForm}>
    <div className={styles.container}>
      {/* <Button
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowUp />}
      >
        ¡Cuéntanos tu reto!
      </Button> */}
      <div className={styles.buttonContent}>
        <p className={styles.buttonText}>¡Cuéntanos tu reto!</p>
        <KeyboardArrowUp className={styles.buttonIcon} />
      </div>
    </div>
  </div>
);

export default ModuleForm;
