import React, { lazy, Suspense } from 'react';

const LazyLTContactComponent = lazy(() => import('./LTContactComponent'));

const LTContactComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLTContactComponent {...props} />
  </Suspense>
);

export default LTContactComponent;
