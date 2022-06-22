import React, { lazy, Suspense } from 'react';

const LazyBMessageComponent = lazy(() => import('./BMessageComponent'));

const BMessageComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBMessageComponent {...props} />
  </Suspense>
);

export default BMessageComponent;
