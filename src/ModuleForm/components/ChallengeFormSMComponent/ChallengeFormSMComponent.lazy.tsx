import React, { lazy, Suspense } from 'react';

const LazyChallengeFormSMComponent = lazy(
  () => import('./ChallengeFormSMComponent')
);

const ChallengeFormSMComponent = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyChallengeFormSMComponent {...props} />
  </Suspense>
);

export default ChallengeFormSMComponent;
