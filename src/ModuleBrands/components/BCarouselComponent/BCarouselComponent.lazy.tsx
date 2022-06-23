import React, { lazy, Suspense } from 'react';

const LazyBCarouselComponent = lazy(() => import('./BCarouselComponent'));

const BCarouselComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyBCarouselComponent imgWidth={0} imgHeight={0} {...props} />
  </Suspense>
);

export default BCarouselComponent;
