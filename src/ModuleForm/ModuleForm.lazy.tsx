import React, { lazy, Suspense } from 'react';

const LazyModuleForm = lazy(() => import('./ModuleForm'));

const ModuleForm = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyModuleForm
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
      {...props}
    />
  </Suspense>
);

export default ModuleForm;
