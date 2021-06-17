import React from 'react'
import { RouteConfig } from 'react-router-config'
import MainLayout from './layouts/main/index'
import MainPage from './pages/main/index'
import ResultPage from './pages/result/result'

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
      {
        path: '/:index',
        exact: true,
        component: MainPage,
      },
    ],
  },
]

export default routes
