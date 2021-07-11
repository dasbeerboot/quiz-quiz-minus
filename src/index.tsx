import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import { HashRouter as BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </>,
  document.getElementById('root'),
)
