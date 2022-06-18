import React, { FC } from 'react';

import styles from './ModuleForm.module.css';
import PillButtonComponent, {
  PillIcon,
} from '../ModuleCommon/components/PillButtonComponent/PillButtonComponent';

interface ModuleFormProps {
  onClick: () => void;
}

const ModuleForm: FC<ModuleFormProps> = (props) => {
  const confirmHandler = () => {
    props.onClick();
  };

  return (
    <div className={styles.moduleForm}>
      <div onClick={confirmHandler} className={styles.submitBtn}>
        <PillButtonComponent
          buttonText="¡Cuéntanos tu reto!"
          hasIcon={true}
          icon={PillIcon.KeyboardArrowUp}
        />
      </div>
    </div>
  );
};

export default ModuleForm;
