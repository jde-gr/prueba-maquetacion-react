import React, { lazy, Suspense } from 'react';

const LazyPartnerComponent = lazy(() => import('./PartnerComponent'));

const PartnerComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyPartnerComponent {...props} />
  </Suspense>
);

export default PartnerComponent;
