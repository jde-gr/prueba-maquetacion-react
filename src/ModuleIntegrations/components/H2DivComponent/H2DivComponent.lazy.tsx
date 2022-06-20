import React, { lazy, Suspense } from 'react';

const LazyH2DivComponent = lazy(() => import('./H2DivComponent'));

const H2DivComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyH2DivComponent {...props} />
  </Suspense>
);

export default H2DivComponent;
