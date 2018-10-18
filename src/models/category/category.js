import { types } from 'mobx-state-tree'
import Branch from 'models/branch/branch'
import Indicator from 'models/indicator/indicator'

const Category = types
  .model('Category', {
    indicators: types.optional(types.array(Indicator), []),
    unit: types.maybe(types.string)
  })
  .views(self => ({
    get children () {
      return self.indicators
    }
  }))

export default types.compose(Branch, Category).named('Category')
