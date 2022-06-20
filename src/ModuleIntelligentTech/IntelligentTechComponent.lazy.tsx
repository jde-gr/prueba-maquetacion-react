import React, { lazy, Suspense } from 'react';

const LazyIntelligentTechComponent = lazy(
  () => import('./IntelligentTechComponent')
);

const IntelligentTechComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyIntelligentTechComponent {...props} />
  </Suspense>
);

export default IntelligentTechComponent;
