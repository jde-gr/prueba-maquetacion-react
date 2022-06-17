import React, { lazy, Suspense } from 'react';

const LazyArrow = lazy(() => import('./Arrow'));

const Arrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyArrow {...props} />
  </Suspense>
);

export default Arrow;
