import React from 'react'
import Branch from './branch'
import { stub } from 'sinon'

describe('Branch', () => {
  it('is inactive if all children are inactive too', () => {
    const children = [{ id: 2, name: 'child', active: false }]
    const branch = Branch.create({
      id: 1,
      name: 'branch'
    })
    stub(branch, 'children').get(() => children)

    expect(branch.active).toBe(false)
  })

  it('is active if at least one of children is active', () => {
    const children = [
      { id: 2, name: 'child', active: false },
      { id: 3, name: 'child 2', active: true }
    ]
    const branch = Branch.create({
      id: 1,
      name: 'branch'
    })
    stub(branch, 'children').get(() => children)

    expect(branch.active).toBe(true)
  })
})
