import React, { lazy, Suspense } from 'react';

const LazyFooterMenuComponent = lazy(() => import('./FooterMenuComponent'));

const FooterMenuComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooterMenuComponent {...props} />
  </Suspense>
);

export default FooterMenuComponent;
