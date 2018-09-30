import { types, flow } from 'mobx-state-tree'
import SubTheme from 'models/sub_theme/sub_theme'
import { camelizeKeys } from 'humps'
import track from 'arboris/lib/track'
import axios from 'axios'

const OntologyStore = types
  .model('OntologyStore', {
    tree: types.optional(types.array(SubTheme), [])
  })
  .actions(() => ({
    fetchData: flow(function * fetchData (path) {
      try {
        const response = yield axios.get(path, {
          baseUrl: process.env.RAZZLE_API_URL
        })
        self.tree = response.data.map(camelizeKeys)
      } catch (e) {
        throw e
      }
    })
  }))

export default track(OntologyStore, {
  fetchData: track.async()
})
