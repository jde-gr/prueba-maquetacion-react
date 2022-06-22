import React, { lazy, Suspense } from 'react';

const LazySAParagraphComponent = lazy(() => import('./SAParagraphComponent'));

const SAParagraphComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySAParagraphComponent {...props} />
  </Suspense>
);

export default SAParagraphComponent;
