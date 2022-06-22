import React, { FC } from 'react';
import img from '../../../components/backgrounds/background_gsp_01.svg';

import styles from './PartnershipsComponent.module.css';

interface PartnershipsComponentProps {
  marginBottom: number;
  imgWidth: number;
  imgHeight: number;
}

const PartnershipsComponent: FC<PartnershipsComponentProps> = (props) => (
  <div
    style={{
      width: '100%',
      overflowX: 'hidden',
      marginBottom: props.marginBottom,
    }}
  >
    <img
      src="/images/partnerships.png"
      alt="Partnerships"
      width={props.imgWidth}
      height={props.imgHeight}
    />
  </div>
);

export default PartnershipsComponent;
