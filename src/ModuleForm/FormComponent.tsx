import React, { FC } from 'react';

import styles from './FormComponent.module.css';
import PillButtonComponent, {
  PillIcon,
} from '../core/components/PillButtonComponent/PillButtonComponent';

interface FormComponentProps {
  onClick: () => void;
}

const FormComponent: FC<FormComponentProps> = (props) => {
  const confirmHandler = () => {
    props.onClick();
  };

  return (
    <div className={styles.formComponent}>
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

export default FormComponent;
