import React, { lazy, Suspense } from 'react';

const LazyNavBarComponent = lazy(() => import('./NavBarComponent'));

const NavBar = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyNavBarComponent isNavExpanded={false} {...props} />
  </Suspense>
);

export default NavBar;
