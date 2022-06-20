import React, { lazy, Suspense } from 'react';

const LazyModuleMDWrapperComponent = lazy(
  () => import('./ModuleMDWrapperComponent')
);

const ModuleMDWrapperComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyModuleMDWrapperComponent paddingBottom={0} paddingTop={0} {...props} />
  </Suspense>
);

export default ModuleMDWrapperComponent;
