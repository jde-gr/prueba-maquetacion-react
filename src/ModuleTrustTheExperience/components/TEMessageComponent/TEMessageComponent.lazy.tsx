import React, { lazy, Suspense } from 'react';

const LazyTEMessageComponent = lazy(() => import('./TEMessageComponent'));

const TEMessageComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTEMessageComponent {...props} />
  </Suspense>
);

export default TEMessageComponent;
