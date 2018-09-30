import { types, flow } from 'mobx-state-tree'
import SubTheme from 'models/sub_theme/sub_theme'
import { camelizeKeys } from 'humps'
import track from 'arboris/lib/track'
import apiClient from 'utils/api_client'

const OntologyStore = types
.model('OntologyStore', {
  subThemes: types.optional(types.array(SubTheme), []),
  status: types.optional(types.enumeration(['initial', 'loaded', 'error']), 'initial')
})
.actions(self => ({
  fetchData: flow(function* fetchData(path) {
    try {
      const response = yield apiClient.get(path)
      self.subThemes = response.data.map(entry => camelizeKeys(entry))
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
