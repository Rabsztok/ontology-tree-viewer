import App from 'components/app/app'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
