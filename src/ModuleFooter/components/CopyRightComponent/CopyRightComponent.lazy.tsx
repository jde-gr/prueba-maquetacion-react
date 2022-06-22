import React, { lazy, Suspense } from 'react';

const LazyCopyRightComponent = lazy(() => import('./CopyRightComponent'));

const CopyRightComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCopyRightComponent {...props} />
  </Suspense>
);

export default CopyRightComponent;
