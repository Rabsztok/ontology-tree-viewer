import { types, flow } from 'mobx-state-tree'
import Theme from 'models/theme/theme'
import { camelizeKeys } from 'humps'
import track from 'arboris/lib/track'
import apiClient from 'utils/api_client'

const OntologyStore = types
.model('OntologyStore', {
  themes: types.optional(types.array(Theme), []),
  status: types.optional(types.enumeration(['initial', 'loaded', 'error']), 'initial')
})
.actions(self => ({
  fetchData: flow(function* fetchData(path) {
    try {
      const response = yield apiClient.get(path)
      self.themes = response.data.map(entry => camelizeKeys(entry))
      self.status = 'loaded'
    } catch (e) {
      self.status = 'error'
      throw e
    }
  })
}))

export default track(OntologyStore, {
  fetchData: track.async()
})
