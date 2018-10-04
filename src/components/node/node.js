import React from 'react'
import Branch from 'components/branch/branch'
import Leaf from 'components/leaf/leaf'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

/** Renders branch or leaf of the tree, depending on given props */
const Node = observer(({ element: { children, active, toggle, ...props } }) => {
  if (children) {
    return (
      <Branch active={active} {...props}>
        {children.map(child => <Node key={child.id} element={child} />)}
      </Branch>
    )
  } else return <Leaf active={active} toggle={toggle} {...props} />
})

Node.proptypes = {
  element: PropTypes.array.isRequired
}

export { Node }
export default Node
