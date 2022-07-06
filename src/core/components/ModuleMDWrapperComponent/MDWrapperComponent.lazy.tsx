import React, { lazy, Suspense } from 'react';

const LazyMDWrapperComponent = lazy(() => import('./MDWrapperComponent'));

const MDWrapperComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyMDWrapperComponent paddingBottom={0} paddingTop={0} {...props} />
  </Suspense>
);

export default MDWrapperComponent;
