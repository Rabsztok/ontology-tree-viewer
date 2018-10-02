import React from 'react'
import { shallow } from 'enzyme'
import { IndexPage } from './index_page'
import loadedStore from '__mocks__/store.json'
import { spy } from 'sinon'
import Tree from 'components/tree/tree'

describe('IndexPage', () => {
  it('fetches data and renders null for initial status', () => {
    const store = { status: 'initial', themes: [], fetchData: spy() }
    const component = shallow(
      <IndexPage location={{ pathname: '/input' }} store={store} />
    )
    expect(store.fetchData.calledOnce).toBe(true)
    expect(component.getElement()).toBe(null)
    expect(component.find(Tree).exists()).toBe(false)
  })

  it('renders message for error status', () => {
    const store = { status: 'error', themes: [], fetchData: spy() }
    const component = shallow(
      <IndexPage location={{ pathname: '/input' }} store={store} />
    )
    expect(component).toMatchSnapshot()
    expect(component.find(Tree).exists()).toBe(false)
    expect(store.fetchData.called).toBe(false)
  })

  it('renders message for loading status', () => {
    const store = { status: 'loading', themes: [], fetchData: spy() }
    const component = shallow(
      <IndexPage location={{ pathname: '/input' }} store={store} />
    )
    expect(component).toMatchSnapshot()
    expect(component.find(Tree).exists()).toBe(false)
    expect(store.fetchData.called).toBe(false)
  })

  it('renders loaded component without errors', () => {
    const store = { ...loadedStore, fetchData: spy() }
    const component = shallow(
      <IndexPage location={{ pathname: '/input' }} store={store} />
    )
    expect(component).toMatchSnapshot()
    expect(component.find(Tree).exists()).toBe(true)
    expect(store.fetchData.called).toBe(false)
  })
})
