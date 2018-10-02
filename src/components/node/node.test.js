import React from 'react'
import { shallow } from 'enzyme'
import { Node } from './node'

describe('Node', () => {
  it('renders branch without errors', () => {
    const element = {
      name: 'branch',
      active: false,
      children: [{ id: 2, name: 'child' }]
    }
    const component = shallow(<Node element={element} />)
    expect(component).toMatchSnapshot()
  })

  it('renders leaf without errors', () => {
    const element = { name: 'branch', active: false, toggle: () => {} }
    const component = shallow(<Node element={element} />)
    expect(component).toMatchSnapshot()
  })
})
