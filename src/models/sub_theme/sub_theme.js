import { types } from 'mobx-state-tree'
import Branch from 'models/branch/branch'
import Category from 'models/category/category'

const SubTheme = types
  .model('SubTheme', {
    categories: types.optional(types.array(Category), [])
  })
  .views(self => ({
    get children () {
      return self.categories
    }
  }))

export default types.compose(Branch, SubTheme).named('SubTheme')
