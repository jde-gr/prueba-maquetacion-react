import React, { FC } from 'react';
import styles from './FormContainerComponent.module.css';

interface FormContainerComponentProps {
  children?: any;
}

const FormContainerComponent: FC<FormContainerComponentProps> = (props) => (
  <div className={styles.formContainer}>{props.children}</div>
);

export default FormContainerComponent;
