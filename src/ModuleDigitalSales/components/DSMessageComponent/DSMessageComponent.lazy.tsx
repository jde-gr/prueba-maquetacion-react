import React, { lazy, Suspense } from 'react';

const LazyDSMessageComponent = lazy(() => import('./DSMessageComponent'));

const DSMessageComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDSMessageComponent {...props} />
  </Suspense>
);

export default DSMessageComponent;
