import App from 'components/app/app'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { Provider, useStaticRendering } from 'mobx-react'
import { getSnapshot, addMiddleware } from 'mobx-state-tree'
import OntologyStore from 'stores/ontology_store/ontology_store'
import Arboris from 'arboris'
import template from 'lodash/template'
// eslint-disable-next-line
import indexFile from '!!raw-loader!./index.html'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
const renderTemplate = template(indexFile)
const server = express()

useStaticRendering(true)

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const store = OntologyStore.create()
    const arboris = Arboris()
    addMiddleware(store, arboris.middleware)
    const context = {}

    const markup = await arboris.render(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    )

    const snapshot = getSnapshot(store)

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(renderTemplate({ assets, markup, snapshot }))
    }
  })

export default server
