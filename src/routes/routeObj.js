import { lazy } from 'react';

const routeObj = [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
  },
  {
    path: '/learn',
    component: lazy(() => import('../pages/Learn')),
  },
  {
    path: '/contact',
    component: lazy(() => import('../pages/Contact')),
  },
];

export default routeObj;
