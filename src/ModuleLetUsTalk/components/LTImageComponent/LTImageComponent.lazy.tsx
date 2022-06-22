import React, { lazy, Suspense } from 'react';

const LazyLTImageComponent = lazy(() => import('./LTImageComponent'));

const LTImageComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLTImageComponent {...props} />
  </Suspense>
);

export default LTImageComponent;
