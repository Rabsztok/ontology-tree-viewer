import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import queryString from 'query-string'
import pull from 'lodash/pull'

const Wrapper = styled.div`
  padding: ${props => props.theme.cellPadding};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 0;
  background: ${props => props.active ? props.theme.activeColor : 'none'};
  width: 100%;
  cursor: pointer;
  transition: background .4s;
  
  &:hover {
    background: ${props => props.active ? props.theme.activeHoverColor : props.theme.hoverColor}
    transition: background .1s;
  }
`

const Leaf = ({store: {activeIndicators}, data, history, location, toggle, active, id, name}) => {
  const onClick = () => {
    const query = queryString.parse(location.search, {arrayFormat: 'bracket'})
    if (typeof(query.indicators) === 'undefined') query.indicators = []

    if (active) {
      pull(query.indicators, id.toString())
    } else {
      query.indicators.push(id.toString())
    }

    toggle()

    history.push({
      ...history.location,
      search: queryString.stringify(query, {arrayFormat: 'bracket'})
    })
  }
  return (<Wrapper onClick={onClick} active={active}>{name}</Wrapper>)
}

Leaf.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  toggle: PropTypes.func
}


export { Leaf }
export default inject('store')(withRouter(observer(Leaf)))