import React, { FC } from 'react';
import styles from './LTContactComponent.module.css';

interface LTContactComponentProps {}

const LTContactComponent: FC<LTContactComponentProps> = () => (
  <div className={styles.textsWrapper}>
    <p className={styles.p}>
      O si prefieres,{' '}
      <span style={{ fontWeight: 'bold' }}>envíanos un mail</span> y te
      contestaremos lo antes posible.
    </p>
    <p className={styles.email}>
      <a href="mailto:business@globalsalespartnership.com">
        business@globalsalespartnership.com
      </a>
    </p>
  </div>
);

export default LTContactComponent;
