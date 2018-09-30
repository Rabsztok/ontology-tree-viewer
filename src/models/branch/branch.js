import { types } from 'mobx-state-tree'

const Branch = types.model('Branch', {
  id: types.identifierNumber,
  name: types.string
})

export default Branch
