import React, { lazy, Suspense } from 'react';

const LazyPillButtonComponent = lazy(() => import('./PillButtonComponent'));

const PillButtonComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyPillButtonComponent hasIcon={false} {...props} />
  </Suspense>
);

export default PillButtonComponent;
