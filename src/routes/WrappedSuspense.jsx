import { Suspense } from 'react';

export default function WrappedSuspense(Component) {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}
