import React, { lazy, Suspense } from 'react';

const LazyFrontPageContentComponent = lazy(
  () => import('./FrontPageContentComponent')
);

const FrontPageContentComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFrontPageContentComponent
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
      {...props}
    />
  </Suspense>
);

export default FrontPageContentComponent;
