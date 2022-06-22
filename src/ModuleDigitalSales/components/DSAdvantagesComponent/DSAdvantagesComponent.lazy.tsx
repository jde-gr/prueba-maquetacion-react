import React, { lazy, Suspense } from 'react';

const LazyDSAdvantagesComponent = lazy(() => import('./DSAdvantagesComponent'));

const DSAdvantagesComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDSAdvantagesComponent {...props} />
  </Suspense>
);

export default DSAdvantagesComponent;
