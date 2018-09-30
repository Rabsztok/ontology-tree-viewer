import React from 'react'
import { createSandbox } from 'sinon'
import OntologyStore from './ontology_store'
import inputData from '__mocks__/api/input.json'
import axios from 'axios'

describe('OntologyStore', () => {
  const sandbox = createSandbox()
  let store

  beforeEach(() => {
    store = OntologyStore.create()
    sandbox.restore()
  })

  describe('fetchData', () => {
    it('fills tree with data on success', async () => {
      sandbox.stub(axios, 'get').resolves(inputData)
      await store.fetchData('input')

      expect(store.tree).toHaveLength(1)
    })

    it('retries 5 times until it fails', async () => {
      sandbox.stub(axios, 'get').rejects()

      expect(axios.get.callCount).toBe(5)
      expect(store.tree).toHaveLength(0)
      expect(store.status).toBe('error')
    })

    it('sets state to error if fetched data is corrupt', () => {})
  })
})
