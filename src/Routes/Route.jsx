import React from 'react'
import { createBrowserRouter } from "react-router"
import { MainLayout } from '../Layouts/MainLayout';
import { Login } from '../Pages/AccountInteractions/Login';
import { PrivateRoute } from '../Components/PrivateRoute';
import { Register } from '../Pages/AccountInteractions/Register';
import { UpdateProfile } from '../Pages/AccountInteractions/UpdateProfile';
import { AdventureDetails } from '../Layouts/AdventureDetails';

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
    path: '/register',
    Component: Register
  },
  {
    path: '/update',
    Component: UpdateProfile
  },
  {
    path: '/adventureDetails',
    Component: AdventureDetails,
    children: [{

    path: ':id',
    element: <div>This ia an example of default Page</div>

    }
  ]
  },
  {
    path: '/test',
    element: <PrivateRoute>
      <div>working</div>
    </PrivateRoute> 
  }
]);
