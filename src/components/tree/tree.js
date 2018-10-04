import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import Node from 'components/node/node'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 3px 3px 1px #eee;
`

/** Renders ontology tree using recursive Node components */
const Tree = ({ branches }) => (
  <Wrapper>
    {branches.map(branch => <Node key={branch.id} element={branch} />)}
  </Wrapper>
)

Tree.propTypes = {
  branches: PropTypes.array.isRequired
}

export { Tree }
export default inject('store')(withRouter(observer(Tree)))
