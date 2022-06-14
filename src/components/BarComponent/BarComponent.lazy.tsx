import React, { lazy, Suspense } from 'react';

const LazyBarComponent = lazy(() => import('./BarComponent'));

const BarComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBarComponent {...props} />
  </Suspense>
);

export default BarComponent;
