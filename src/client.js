import App from 'components/app/app'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'mobx-react'
import OntologyStore from 'stores/ontology_store/ontology_store'

const store = OntologyStore.create(window.INITIAL_STATE || {})

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
