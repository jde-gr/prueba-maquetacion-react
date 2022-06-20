import React, { lazy, Suspense } from 'react';

const LazyParagraphComponent = lazy(() => import('./ParagraphComponent'));

const ParagraphComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyParagraphComponent {...props} />
  </Suspense>
);

export default ParagraphComponent;
