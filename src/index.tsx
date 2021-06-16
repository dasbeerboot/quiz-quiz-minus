import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
