import React, { lazy, Suspense } from 'react';

const LazySATitleComponent = lazy(() => import('./SATitleComponent'));

const SATitleComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySATitleComponent {...props} />
  </Suspense>
);

export default SATitleComponent;
