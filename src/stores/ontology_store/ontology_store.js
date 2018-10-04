import { types, flow, resolveIdentifier } from 'mobx-state-tree'
import Theme from 'models/theme/theme'
import { camelizeKeys } from 'humps'
import track from 'arboris/lib/track'
import apiClient from 'utils/api_client'
import Indicator from 'models/indicator/indicator'

/** Holds reference to themes and is the root of the data tree fetched from API. */
const OntologyStore = types
  .model('OntologyStore', {
    themes: types.optional(types.array(Theme), []),
    status: types.optional(
      types.enumeration(['initial', 'loading', 'loaded', 'empty', 'error']),
      'initial'
    )
  })
  .actions(self => ({
    setStatus (status) {
      self.status = status
    },
    toggleIdentifiers (ids) {
      ids.forEach(id => {
        const identifier = resolveIdentifier(Indicator, self, id)
        if (identifier) identifier.toggle()
      })
    },
    fetchData: flow(function * fetchData (path, activeIds = []) {
      try {
        self.setStatus('loading')

        const response = yield apiClient.get(path)

        self.themes = response.data.map(entry => camelizeKeys(entry))
        self.toggleIdentifiers(activeIds)
        self.setStatus('loaded')
      } catch (e) {
        if (e.response && e.response.status === 404) self.setStatus('empty')
        else self.setStatus('error')
        throw e
      }
    })
  }))

export default track(OntologyStore, {
  fetchData: track.async()
})
