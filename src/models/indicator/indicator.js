import { types } from 'mobx-state-tree'
import Branch from 'models/branch/branch'

const Indicator = Branch.named('Indicator', {
  active: types.optional(types.boolean, false)
})

export default Indicator
