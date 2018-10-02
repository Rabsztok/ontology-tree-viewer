import React from 'react'
import { createSandbox } from 'sinon'
import OntologyStore from './ontology_store'
import response from '__mocks__/api/input.json'
import apiClient from 'utils/api_client'
import MockAdapter from 'axios-mock-adapter'
import Indicator from 'models/indicator/indicator'
import * as mst from 'mobx-state-tree'

describe('OntologyStore', () => {
  const sandbox = createSandbox()
  const mock = new MockAdapter(apiClient)
  let store

  beforeEach(() => {
    store = OntologyStore.create()
    sandbox.restore()
    mock.reset()
  })

  describe('fetchData', () => {
    it('fills themes with data on success', async () => {
      mock.onGet('input').reply(200, response.data)
      sandbox.spy(apiClient, 'get')

      await store.fetchData('input')

      expect(store.status).toBe('loaded')
      expect(store.themes).toHaveLength(12)
    })

    it('sets indicators from params as active', async () => {
      mock.onGet('input').reply(200, response.data)
      sandbox.spy(mst, 'resolveIdentifier')

      await store.fetchData('input', ['299'])

      expect(store.status).toBe('loaded')
      expect(mst.resolveIdentifier.calledOnce).toBe(true)
      expect(mst.resolveIdentifier(Indicator, store, 299).active).toBe(true)
    })

    it('ignores incorrect indicators from params', async () => {
      mock.onGet('input').reply(200, response.data)
      sandbox.spy(mst, 'resolveIdentifier')

      await store.fetchData('input', ['29993993'])

      expect(store.status).toBe('loaded')
      expect(mst.resolveIdentifier.calledOnce).toBe(true)
      expect(mst.resolveIdentifier(Indicator, store, 29993993)).toBe(undefined)
    })

    it('retries until it fails', async () => {
      mock.onGet('input').networkError()
      sandbox.spy(apiClient, 'get')

      await expect(store.fetchData('input')).rejects.toThrow()

      expect(store.status).toBe('error')
      expect(store.themes).toHaveLength(0)
    })

    it('retries until it succeeds', async () => {
      mock.onGet('input').replyOnce(500)
      mock.onGet('input').replyOnce(200, response.data)

      await store.fetchData('input')

      expect(store.status).toBe('loaded')
      expect(store.themes).toHaveLength(12)
    })

    it('sets state to error if fetched data is corrupt', async () => {
      mock.onGet('input').reply(200, { data: { error: 'Something is wrong' } })
      sandbox.spy(apiClient, 'get')

      await expect(store.fetchData('input')).rejects.toThrow()

      expect(store.status).toBe('error')
      expect(store.themes).toHaveLength(0)
    })
  })
})
