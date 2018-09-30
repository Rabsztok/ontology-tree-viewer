import React from 'react'
import { inject, observer } from 'mobx-react'

const Home = ({store}) => {
  if (typeof(window) !== 'undefined') {
    window.store = store
    store.fetchData('input')
  }

  return (
    <div/>
  )
}

export { Home }
export default inject('store')(observer(Home))
