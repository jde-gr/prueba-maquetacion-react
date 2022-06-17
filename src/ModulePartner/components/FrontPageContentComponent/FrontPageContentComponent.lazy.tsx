import React, { lazy, Suspense } from 'react';

const LazyFrontPageContentComponent = lazy(() => import('./FrontPageContentComponent'));

const FrontPageContentComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFrontPageContentComponent {...props} />
  </Suspense>
);

export default FrontPageContentComponent;
