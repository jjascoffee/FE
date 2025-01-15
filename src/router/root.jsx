// src/router/root.js

import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';  // 최상위 레이아웃(아래에서 만듦)

const Loading = <div>Loading....</div>;

// User Pages
const LoginPage = lazy(() => import('../pages/user/LoginPage'));
const SignupPage = lazy(() => import('../pages/user/SignupPage'));
const ProductPage = lazy(() => import('../pages/product/ProductPage'))

const root = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // 루트 레이아웃
    children: [
      {
        // "/" 접속 시(index 라우트) -> 로그인 페이지
        index: true,
        element: (
          <Suspense fallback={Loading}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={Loading}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={Loading}>
            <SignupPage />
          </Suspense>
        ),
      },
      {
        path: 'product',
        element: (
          <Suspense fallback={Loading}>
            <ProductPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
