import React from 'react'
import Category from './category'

describe('Category', () => {
  it('is inactive if all children are inactive too', () => {
    const indicators = [{ id: 2, name: 'indicator', active: false }]
    const category = Category.create({
      id: 1,
      name: 'category',
      indicators: indicators
    })

    expect(category.active).toBe(false)
  })

  it('is active if at least one of children is active', () => {
    const indicators = [
      { id: 2, name: 'indicator', active: false },
      { id: 3, name: 'indicator 2', active: true }
    ]
    const category = Category.create({
      id: 1,
      name: 'category',
      indicators: indicators
    })

    expect(category.active).toBe(true)
  })
})
