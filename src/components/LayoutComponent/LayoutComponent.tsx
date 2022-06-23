import React, { FC } from 'react';
import NavComponent from '../../ModuleMenu/components/NavComponent/NavComponent';

interface LayoutComponentProps {}

const LayoutComponent: FC<LayoutComponentProps> = (props) => (
  <>
    <NavComponent />
    <main>{props.children}</main>
  </>
);

export default LayoutComponent;
