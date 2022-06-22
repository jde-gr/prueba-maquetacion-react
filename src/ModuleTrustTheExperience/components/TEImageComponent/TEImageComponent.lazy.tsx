import React, { lazy, Suspense } from 'react';

const LazyTEImageComponent = lazy(() => import('./TEImageComponent'));

const TEImageComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTEImageComponent imgWidth={0} imgHeight={0} {...props} />
  </Suspense>
);

export default TEImageComponent;
