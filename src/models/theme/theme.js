import { types } from 'mobx-state-tree'
import Branch from 'models/branch/branch'
import SubTheme from 'models/sub_theme/sub_theme'

const Theme = types
  .model('Theme', {
    subThemes: types.optional(types.array(SubTheme), [])
  })
  .views(self => ({
    get children () {
      return self.subThemes
    }
  }))

export default types.compose(Branch, Theme).named('Theme')
