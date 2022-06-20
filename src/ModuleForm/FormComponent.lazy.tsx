import React, { lazy, Suspense } from 'react';

const LazyFormComponent = lazy(() => import('./FormComponent'));

const FormComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFormComponent
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
      {...props}
    />
  </Suspense>
);

export default FormComponent;
