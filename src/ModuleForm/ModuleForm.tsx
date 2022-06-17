import React, { FC } from 'react';

import styles from './ModuleForm.module.css';
import PillButtonComponent, {
  PillIcon,
} from '../ModuleCommon/components/PillButtonComponent/PillButtonComponent';

interface ModuleFormProps {}

const ModuleForm: FC<ModuleFormProps> = () => (
  <div className={styles.moduleForm}>
    <PillButtonComponent
      buttonText="¡Cuéntanos tu reto!"
      hasIcon={true}
      icon={PillIcon.KeyboardArrowUp}
    />
  </div>
);

export default ModuleForm;
