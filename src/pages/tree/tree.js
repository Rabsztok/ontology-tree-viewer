import React from 'react'
import { inject, observer } from 'mobx-react'
import Branch from 'components/branch/branch'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 3px 3px 1px #eee
`

const Message = styled.div`
  position: fixed;
  font-size: 5vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

class Tree extends React.Component {
  UNSAFE_componentWillMount() {
    const { status, fetchData } = this.props.store
    if (status === 'initial') fetchData('input')
    if (typeof(window) !== 'undefined') window.store = this.props.store
  }

  render() {
    const {status, themes} = this.props.store

    return ({
      initial: null,
      error: <Message>Could not load resource.</Message>,
      loading: <Message>Loading data...</Message>,
      loaded:
        <Wrapper>
          {themes.map(({id, subThemes, active, ...theme}) =>
            <Branch active={active} key={id} {...theme}>
              {subThemes.map(({id, categories, active, ...subTheme}) =>
                <Branch active={active} key={id} {...subTheme}>
                  {categories.map(({id, indicators, active, ...category}) =>
                    <Branch active={active} key={id} {...category}>
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
    })[status]
  }
}

Tree.propTypes = {
  store: PropTypes.object.isRequired
}

export { Tree }
export default inject('store')(observer(Tree))
