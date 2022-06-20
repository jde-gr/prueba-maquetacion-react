import React, { lazy, Suspense } from 'react';

const LazyBrandsComponent = lazy(() => import('./BrandsComponent'));

const BrandsComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBrandsComponent {...props} />
  </Suspense>
);

export default BrandsComponent;
