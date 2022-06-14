import React, { FC } from 'react';
import styles from './ModulePartner.module.css';

interface ModulePartnerProps {}

const ModulePartner: FC<ModulePartnerProps> = () => (
  <div className={styles.ModulePartner}>
    ModulePartner Component
  </div>
);

export default ModulePartner;
