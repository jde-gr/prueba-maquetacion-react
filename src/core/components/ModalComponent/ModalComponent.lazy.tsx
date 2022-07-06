import React, { lazy, Suspense } from 'react';

const LazyModalComponent = lazy(() => import('./ModalComponent'));

const ModalComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyModalComponent
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
      {...props}
    />
  </Suspense>
);

export default ModalComponent;
