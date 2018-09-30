import { types } from 'mobx-state-tree'
import Branch from 'models/branch/branch'
import Indicator from 'models/indicator/indicator'

const Category = Branch.named('Category', {
  indicators: types.optional(types.array(Indicator), []),
  unit: types.string
})

export default Category
