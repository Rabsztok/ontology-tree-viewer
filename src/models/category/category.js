import { types } from 'mobx-state-tree'
import Indicator from 'models/indicator/indicator'

const Category = types
  .model('Category', {
    id: types.identifierNumber,
    name: types.string,
    indicators: types.optional(types.array(Indicator), []),
    unit: types.maybe(types.string)
  })
  .views(self => ({
    get active () {
      return self.indicators.some(indicator => indicator.active)
    },
    get children () {
      return self.indicators
    }
  }))

export default Category
