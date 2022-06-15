import React, { lazy, Suspense } from 'react';

const LazyModulePartner = lazy(() => import('./ModulePartner'));

const ModulePartner = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyModulePartner {...props} />
  </Suspense>
);

export default ModulePartner;
