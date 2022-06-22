import React, { lazy, Suspense } from 'react';

const LazySAImageComponent = lazy(() => import('./SAImageComponent'));

const SAImageComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazySAImageComponent imgWidth={0} imgHeight={0} {...props} />
  </Suspense>
);

export default SAImageComponent;
