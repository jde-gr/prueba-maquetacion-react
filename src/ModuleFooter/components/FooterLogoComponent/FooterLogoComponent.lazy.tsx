import React, { lazy, Suspense } from 'react';

const LazyFooterLogoComponent = lazy(() => import('./FooterLogoComponent'));

const FooterLogoComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterLogoComponent {...props} />
  </Suspense>
);

export default FooterLogoComponent;
