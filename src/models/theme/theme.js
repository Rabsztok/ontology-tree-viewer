import { types } from 'mobx-state-tree'
import SubTheme from 'models/sub_theme/sub_theme'

const Theme = types
  .model('Theme', {
    id: types.identifierNumber,
    name: types.string,
    subThemes: types.optional(types.array(SubTheme), [])
  })
  .views(self => ({
    get active () {
      return self.subThemes.some(subTheme => subTheme.active)
    },
    get children () {
      return self.subThemes
    }
  }))

export default Theme
