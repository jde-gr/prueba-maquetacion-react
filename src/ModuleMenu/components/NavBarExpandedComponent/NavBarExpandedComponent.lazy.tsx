import React, { lazy, Suspense } from 'react';

const LazyNavBarExpandedComponent = lazy(() => import('./NavBarExpandedComponent'));

const NavBarExpandedComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavBarExpandedComponent {...props} />
  </Suspense>
);

export default NavBarExpandedComponent;
