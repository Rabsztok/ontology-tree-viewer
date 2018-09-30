import { types } from 'mobx-state-tree'
import Branch from 'models/branch/branch'
import Category from 'models/category/category'

const SubTheme = Branch.named('SubTheme', {
  categories: types.optional(types.array(Category), [])
})

export default SubTheme
