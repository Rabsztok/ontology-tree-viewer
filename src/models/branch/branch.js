import { types } from 'mobx-state-tree'

const inheritanceWarning = {
  type: 'InheritanceError',
  message:
    'Model branch is abstractive. Inherit from it and override `children` getter'
}

/** Abstractive class other branch-based models inherits from it */
const Branch = types
  .model('Branch', {
    id: types.identifierNumber,
    name: types.string
  })
  .views(self => ({
    get active () {
      return self.children.some(child => child.active)
    },
    get children () {
      throw inheritanceWarning
    }
  }))

export default Branch
