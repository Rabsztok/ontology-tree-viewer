import React from 'react'
import { inject, observer } from 'mobx-react'
import Branch from 'components/branch/branch'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #ddd;  
`

class Home extends React.Component {
  componentDidMount() {
    this.props.store.fetchData('input')
    if (typeof(window) !== 'undefined') window.store = this.props.store
  }

  render() {
    const {status, themes} = this.props.store

    if (status === 'error') return <div>Could not load resource</div>
    if (status !== 'loaded') return null

    return (
      <Wrapper>
        {themes.map(({id, subThemes, active, ...theme}) =>
          <Branch key={id} active={active} {...theme}>
            {subThemes.map(({id, categories, active, ...subTheme}) =>
              <Branch key={id} active={active} {...subTheme}>
                {categories.map(({id, indicators, active, ...category}) =>
                  <Branch key={id} active={active} {...category}>
                    {indicators.map(({id, toggle, ...indicator}) =>
                      <Branch leaf key={id} onClick={toggle} {...indicator}/>
                    )}
                  </Branch>
                )}
              </Branch>
            )}
          </Branch>
        )}
      </Wrapper>
    )
  }
}

export { Home }
export default inject('store')(observer(Home))
