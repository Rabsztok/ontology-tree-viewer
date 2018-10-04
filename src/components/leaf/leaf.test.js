import React from 'react'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import { Leaf } from './leaf'

const noop = () => {}

describe('Leaf', () => {
  it('renders without errors', () => {
    const component = shallow(<Leaf id={1} name='total' active={false} />)
    expect(component).toMatchSnapshot()
  })

  it('toggles state on click', () => {
    const indicator = { id: 1, name: 'total', active: false, toggle: spy() }
    const component = shallow(
      <Leaf
        id={1}
        {...indicator}
        history={{ push: noop }}
        location={{ search: '' }}
      />
    )
    component.simulate('click')

    expect(indicator.toggle.calledOnce).toBe(true)
  })

  it('appends indicator id to location if toggled to active', () => {
    const indicator = { id: 1, name: 'total', active: false, toggle: noop }
    const history = { push: spy() }
    const component = shallow(
      <Leaf id={1} {...indicator} history={history} location={{ search: '' }} />
    )
    component.simulate('click')

    expect(history.push.calledOnce).toBe(true)
    expect(history.push.calledWith({ search: 'indicators[]=1' })).toBe(true)
  })

  it('removes indicator id from location if toggled to inactive', () => {
    const indicator = { id: 1, name: 'total', active: true, toggle: noop }
    const history = { push: spy() }
    const component = shallow(
      <Leaf
        id={1}
        {...indicator}
        history={history}
        location={{ search: 'indicators[]=1' }}
      />
    )
    component.simulate('click')

    expect(history.push.calledOnce).toBe(true)
    expect(history.push.calledWith({ search: '' })).toBe(true)
  })
})
