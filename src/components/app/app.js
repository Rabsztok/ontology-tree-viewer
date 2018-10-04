import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Tree from 'pages/index_page/index_page'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from 'theme'

injectGlobal`
  * { box-sizing: border-box; }
`

/** Main container of the app, evaluated both on server and client run */
const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path='/' component={Tree} />
    </Switch>
  </ThemeProvider>
)

export { App }
export default App
