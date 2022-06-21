import React, { lazy, Suspense } from 'react';

const LazyPartnerComponent = lazy(() => import('./PartnerComponent'));

const PartnerComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyPartnerComponent
      onFormOpen={function (): void {
        throw new Error('Function not implemented.');
      }}
      onFormClose={function (): void {
        throw new Error('Function not implemented.');
      }}
      {...props}
    />
  </Suspense>
);

export default PartnerComponent;
