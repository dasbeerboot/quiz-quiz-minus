import React from 'react'
import { RouteConfig } from 'react-router-config'
import MainLayout from './layouts/main/index'
import MainPage from './pages/main/index'

const routes: RouteConfig[] = [
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: MainPage,
      },
      // {
      //   path: '/first',
      //   exact: true,
      //   component: First,
      // },
      // {
      //   path: '/second',
      //   exact: true,
      //   component: Second,
      // },
      // {
      //   path: '/third',
      //   exact: true,
      //   component: Third,
      // },
      // {
      //   path: '/fourth',
      //   exact: true,
      //   component: Fourth,
      // },
      // {
      //   path: '/fifth',
      //   exact: true,
      //   component: Fifth,
      // },
    ],
  },
]

export default routes
