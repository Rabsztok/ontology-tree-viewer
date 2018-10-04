import React from 'react'
import Theme from './theme'
import { stub } from 'sinon'

describe('Theme', () => {
  it('is inactive if all children are inactive too', () => {
    const subThemes = [{ id: 2, name: 'subTheme' }]
    const theme = Theme.create({ id: 1, name: 'Theme', subThemes: subThemes })
    stub(theme.subThemes[0], 'active').get(() => false)

    expect(theme.active).toBe(false)
  })

  it('is active if at least one of children is active', () => {
    const subThemes = [
      { id: 2, name: 'subTheme' },
      { id: 3, name: 'subTheme 2' }
    ]
    const theme = Theme.create({ id: 1, name: 'Theme', subThemes: subThemes })
    stub(theme.subThemes[0], 'active').get(() => false)
    stub(theme.subThemes[1], 'active').get(() => true)

    expect(theme.active).toBe(true)
  })
})
