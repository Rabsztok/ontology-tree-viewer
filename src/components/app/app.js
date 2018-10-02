import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Home from 'pages/tree/tree'
import {injectGlobal} from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
`

const App = () => (
  <Switch>
    <Route path='/' component={Home} />
  </Switch>
)

export default App
