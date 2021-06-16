import React, { Suspense } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import './index.scss'

function MainLayout({ route }: RouteConfig): JSX.Element {
  return (
    <div className="main-layout-container">
      <div className="main-top-bar">
        <Suspense fallback={<div>히히</div>}>{renderRoutes(route.routes)}</Suspense>
      </div>
      <div className="main-contents"></div>
    </div>
  )
}

export default MainLayout
