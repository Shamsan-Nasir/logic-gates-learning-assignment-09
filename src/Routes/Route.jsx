import React from 'react'
import { createBrowserRouter } from "react-router"
import { MainLayout } from '../Layouts/MainLayout';
import { Login } from '../Pages/AccountInteractions/Login';
import { PrivateRoute } from '../Components/PrivateRoute';
import { Register } from '../Pages/AccountInteractions/Register';
import { UpdateProfile } from '../Pages/AccountInteractions/UpdateProfile';
import { AdventureDetails } from '../Layouts/AdventureDetails';
import { DetailsContainer } from '../Pages/adventureDetails/DetailsContainer';
import { ExploreLayout } from '../Layouts/ExploreLayout';
import { Loading } from '../Components/Loading';
import { Error } from '../Pages/Error/Error';
import { Profile } from '../Pages/AccountInteractions/Profile';

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
    element: <PrivateRoute>
      <AdventureDetails></AdventureDetails>
    </PrivateRoute>,
    children: [{

      path: ':id',
      Component: DetailsContainer,
      loader: () => fetch('/data.json').then(res => res.json())

    }
    ]
  },
  {
    path: '/explore',
    element: <PrivateRoute>
      <ExploreLayout></ExploreLayout>
    </PrivateRoute>,
    loader: () => fetch('/data.json').then(res => res.json())
  },

  {
    path: '/profile',
    element: <PrivateRoute>
      <Profile></Profile>
    </PrivateRoute>,
    loader: () => fetch('/data.json').then(res => res.json())
  },
 
  {
    path: '/updateProfile',
    element: <PrivateRoute>
      <UpdateProfile></UpdateProfile>
    </PrivateRoute>,
    loader: () => fetch('/data.json').then(res => res.json())
  },
  {
    path: '*',
    element: <Error></Error>
 
  }

]);
