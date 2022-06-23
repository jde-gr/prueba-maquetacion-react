import React, { lazy, Suspense } from 'react';

const LazyLayoutComponent = lazy(() => import('./LayoutComponent'));

const LayoutComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutComponent {...props} />
  </Suspense>
);

export default LayoutComponent;
