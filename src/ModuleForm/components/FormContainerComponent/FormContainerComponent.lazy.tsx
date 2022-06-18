import React, { lazy, Suspense } from 'react';

const LazyFormContainerComponent = lazy(() => import('./FormContainerComponent'));

const FormContainerComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFormContainerComponent {...props} />
  </Suspense>
);

export default FormContainerComponent;
