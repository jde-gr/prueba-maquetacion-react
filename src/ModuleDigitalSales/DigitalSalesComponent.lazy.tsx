import React, { lazy, Suspense } from 'react';

const LazyDigitalSalesComponent = lazy(() => import('./DigitalSalesComponent'));

const DigitalSalesComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyDigitalSalesComponent {...props} />
  </Suspense>
);

export default DigitalSalesComponent;
