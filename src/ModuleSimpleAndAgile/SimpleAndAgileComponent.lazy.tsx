import React, { lazy, Suspense } from 'react';

const LazySimpleAndAgileComponent = lazy(() => import('./SimpleAndAgileComponent'));

const SimpleAndAgileComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySimpleAndAgileComponent {...props} />
  </Suspense>
);

export default SimpleAndAgileComponent;
