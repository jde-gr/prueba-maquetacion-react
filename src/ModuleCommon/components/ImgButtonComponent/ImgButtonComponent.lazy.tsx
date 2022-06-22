import React, { lazy, Suspense } from 'react';

const LazyImgButtonComponent = lazy(() => import('./ImgButtonComponent'));

const ImgButtonComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyImgButtonComponent text={''} {...props} />
  </Suspense>
);

export default ImgButtonComponent;
