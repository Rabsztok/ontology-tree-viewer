import React from 'react'
import { shallow } from 'enzyme'
import { Tree } from './tree'
import store from '__mocks__/store.json'

describe('Tree', () => {
  it('renders without errors', () => {
    const component = shallow(
      <Tree branches={store.themes}/>
    )
    expect(component).toMatchSnapshot()
  })
})