import React from 'react'
import { shallow } from 'enzyme'
import { Leaf } from './leaf'

describe('Leaf', () => {
  it('renders without errors', () => {
    const component = shallow(
      <Leaf id={1} name="total" active={false} />
    )
    expect(component).toMatchSnapshot()
  })
})