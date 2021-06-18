import { RouteConfig } from 'react-router-config'
import MainLayout from './layouts/main/index'
import MainPage from './pages/main/index'

const routes: RouteConfig[] = [
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/quiz-quiz-minus',
        exact: true,
        component: MainPage,
      },
      {
        path: '/quiz-quiz-minus/:index',
        exact: true,
        component: MainPage,
      },
    ],
  },
]

export default routes
