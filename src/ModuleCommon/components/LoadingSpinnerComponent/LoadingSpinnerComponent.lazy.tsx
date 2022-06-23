import React, { lazy, Suspense } from 'react';

const LazyLoadingSpinnerComponent = lazy(() => import('./LoadingSpinnerComponent'));

const LoadingSpinnerComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLoadingSpinnerComponent {...props} />
  </Suspense>
);

export default LoadingSpinnerComponent;
