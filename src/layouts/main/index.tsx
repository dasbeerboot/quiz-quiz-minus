import React, { Suspense } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import './index.scss'
import Header from './Header'
import Footer from './Footer'

function MainLayout({ route }: RouteConfig): JSX.Element {
  return (
    <main className="main-layout-container">
      <Header />
      <section className="main-contents-container">
        <Suspense fallback={<div>loading</div>}>{renderRoutes(route.routes)}</Suspense>
      </section>
      <Footer />
    </main>
  )
}

export default MainLayout
