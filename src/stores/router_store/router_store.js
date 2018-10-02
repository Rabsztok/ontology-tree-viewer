import { types, flow } from 'mobx-state-tree'
import { camelizeKeys } from 'humps'
import track from 'arboris/lib/track'
import apiClient from 'utils/api_client'

const OntologyStore = types
.model('OntologyStore')
.views(self => ({}))
.actions(self => ({
  setStatus(status) {
    self.status = status
  },
  fetchData: flow(function* fetchData(path) {
    try {
      self.setStatus('loading')
      const response = yield apiClient.get(path)
      self.themes = response.data.map(entry => camelizeKeys(entry))
      self.setStatus('loaded')
    } catch (e) {
      self.setStatus('error')
      throw e
    }
  })
}))

export default track(OntologyStore, {
  fetchData: track.async()
})
