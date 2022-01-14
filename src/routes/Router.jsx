import { Route, Routes } from 'react-router-dom';
import publicRoutes from './routeObj';
import WrappedSuspense from './WrappedSuspense';

export default function Router() {
  return (
    <Routes>
      {
        publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={WrappedSuspense(route.component)()}
          />
        ))
      }
    </Routes>
  );
}
