import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Tree from 'components/tree/tree'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import queryString from 'query-string'

const Message = styled.div`
  position: fixed;
  font-size: 5vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

/** Loads data from API and renders ontology tree inside on success. */
class IndexPage extends React.Component {
  /** When React 17 will be released, fetching from API will be done with use of Suspense API. */
  UNSAFE_componentWillMount () {
    const { store: { status, fetchData }, location } = this.props
    const activeIds = queryString.parse(location.search, {
      arrayFormat: 'bracket'
    }).indicators

    if (status === 'initial') fetchData(location.pathname, activeIds)
    if (typeof window !== 'undefined') window.store = this.props.store
  }

  render () {
    const { status, themes } = this.props.store

    return {
      initial: null,
      empty: <Message>Resource not found.</Message>,
      error: <Message>Could not load resource.</Message>,
      loading: <Message>Loading data...</Message>,
      loaded: <Tree branches={themes} />
    }[status]
  }
}

IndexPage.propTypes = {
  store: PropTypes.object.isRequired
}

export { IndexPage }
export default inject('store')(withRouter(observer(IndexPage)))
