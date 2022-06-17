import React, { lazy, Suspense } from 'react';

const LazyDSListItemComponent = lazy(() => import('./DSListItemComponent'));

const DSListItemComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyDSListItemComponent message={''} {...props} />
  </Suspense>
);

export default DSListItemComponent;
