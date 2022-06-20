import React, { lazy, Suspense } from 'react';

const LazyLetUsTalkComponent = lazy(() => import('./LetUsTalkComponent'));

const LetUsTalkComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLetUsTalkComponent {...props} />
  </Suspense>
);

export default LetUsTalkComponent;
