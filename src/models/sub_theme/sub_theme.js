import { types } from 'mobx-state-tree'
import Category from 'models/category/category'

const SubTheme = types.model('SubTheme', {
  id: types.identifierNumber,
  name: types.string,
  categories: types.optional(types.array(Category), [])
})
.views(self => ({
  get active() {
    return self.categories.some(category => category.active)
  }
}))

export default SubTheme
