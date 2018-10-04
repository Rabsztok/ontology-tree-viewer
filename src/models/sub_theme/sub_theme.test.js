import React from 'react'
import SubTheme from './sub_theme'
import { stub } from 'sinon'

describe('SubTheme', () => {
  it('is inactive if all children are inactive too', () => {
    const categories = [{ id: 2, name: 'category' }]
    const subTheme = SubTheme.create({
      id: 1,
      name: 'SubTheme',
      categories: categories
    })
    stub(subTheme.categories[0], 'active').get(() => false)

    expect(subTheme.active).toBe(false)
  })

  it('is active if at least one of children is active', () => {
    const categories = [
      { id: 2, name: 'category' },
      { id: 3, name: 'category 2' }
    ]
    const subTheme = SubTheme.create({
      id: 1,
      name: 'SubTheme',
      categories: categories
    })
    stub(subTheme.categories[0], 'active').get(() => false)
    stub(subTheme.categories[1], 'active').get(() => true)

    expect(subTheme.active).toBe(true)
  })
})
