import React, { lazy, Suspense } from 'react';

const LazyIntegrationsComponent = lazy(() => import('./IntegrationsComponent'));

const IntegrationsComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyIntegrationsComponent {...props} />
  </Suspense>
);

export default IntegrationsComponent;
