import React, { lazy, Suspense } from 'react';

const LazyChallengeFormComponent = lazy(
  () => import('./ChallengeFormComponent')
);

const ChallengeFormComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyChallengeFormComponent
      onConfirm={function (): void {
        throw new Error('Function not implemented.');
      }}
      {...props}
    />
  </Suspense>
);

export default ChallengeFormComponent;
