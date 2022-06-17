import React, { lazy, Suspense } from 'react';

const LazyModuleDigitalSales = lazy(() => import('./ModuleDigitalSales'));

const ModuleDigitalSales = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyModuleDigitalSales {...props} />
  </Suspense>
);

export default ModuleDigitalSales;
