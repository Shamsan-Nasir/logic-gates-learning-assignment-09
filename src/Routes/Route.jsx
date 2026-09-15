import React from 'react'
import { createBrowserRouter } from "react-router"
import { MainLayout } from '../Layouts/MainLayout';
import { Login } from '../Pages/AccountInteractions/Login';
import { PrivateRoute } from '../Components/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    loader: () => fetch('./data.json').then(res => res.json())
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/test',
    element: <PrivateRoute>
      <div>working</div>
    </PrivateRoute> 
  }
]);
