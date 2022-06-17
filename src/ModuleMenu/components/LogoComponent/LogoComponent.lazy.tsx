import React, { lazy, Suspense } from 'react';

const LazyLogoComponent = lazy(() => import('./LogoComponent'));

const LogoComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyLogoComponent whiteText={false} {...props} />
  </Suspense>
);

export default LogoComponent;
