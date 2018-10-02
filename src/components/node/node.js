import React from 'react'
import Branch from 'components/branch/branch'
import Leaf from 'components/leaf/leaf'
import { observer } from 'mobx-react'

const Node = observer(({ element: { children, active, toggle, ...props } }) => {
  if (children) {
    return (
      <Branch active={active} {...props}>
        {children.map(child => <Node key={child.id} element={child} />)}
      </Branch>
    )
  } else return <Leaf active={active} toggle={toggle} {...props} />
})

export { Node }
export default Node
