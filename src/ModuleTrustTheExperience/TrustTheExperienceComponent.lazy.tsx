import React, { lazy, Suspense } from 'react';

const LazyTrustTheExperienceComponent = lazy(
  () => import('./TrustTheExperienceComponent')
);

const TrustTheExperienceComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTrustTheExperienceComponent {...props} />
  </Suspense>
);

export default TrustTheExperienceComponent;
