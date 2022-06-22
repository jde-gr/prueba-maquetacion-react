import React, { lazy, Suspense } from 'react';

const LazyLTTitleComponent = lazy(() => import('./LTTitleComponent'));

const LTTitleComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLTTitleComponent {...props} />
  </Suspense>
);

export default LTTitleComponent;
