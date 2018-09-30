import { types } from 'mobx-state-tree'

const Indicator = types.model('Indicator', {
  id: types.identifierNumber,
  name: types.string,
  active: types.optional(types.boolean, false)
})
.actions(self => ({
  toggle() {
    self.active = !self.active
  }
}))

export default Indicator
