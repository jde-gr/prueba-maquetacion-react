import React, { lazy, Suspense } from 'react';

const LazyITMessageComponent = lazy(() => import('./ITMessageComponent'));

const ITMessageComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyITMessageComponent {...props} />
  </Suspense>
);

export default ITMessageComponent;
