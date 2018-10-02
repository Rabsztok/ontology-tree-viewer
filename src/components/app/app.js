import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Tree from 'pages/tree/tree'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from 'theme'

injectGlobal`
  * { box-sizing: border-box; }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path='/' component={Tree} />
    </Switch>
  </ThemeProvider>
)

export default App
