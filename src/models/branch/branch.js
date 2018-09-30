import { types } from 'mobx-state-tree'

const Branch = types.model('Branch', {
  id: types.identifier,
  name: types.string
})

export default Branch
