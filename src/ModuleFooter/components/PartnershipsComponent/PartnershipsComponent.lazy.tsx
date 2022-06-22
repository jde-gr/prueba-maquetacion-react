import React, { lazy, Suspense } from 'react';

const LazyPartnershipsComponent = lazy(() => import('./PartnershipsComponent'));

const PartnershipsComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyPartnershipsComponent
      marginBottom={0}
      imgWidth={0}
      imgHeight={0}
      {...props}
    />
  </Suspense>
);

export default PartnershipsComponent;
