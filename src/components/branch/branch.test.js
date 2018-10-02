import React from 'react'
import { shallow } from 'enzyme'
import { Branch } from './branch'

describe('Branch', () => {
  it('renders without errors', () => {
    const component = shallow(
      <Branch name="Branch" active={false}/>
    )
    expect(component).toMatchSnapshot()
  })
})