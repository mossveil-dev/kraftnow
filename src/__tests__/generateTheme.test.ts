import { describe, it, expect } from 'vitest'
import { generateTheme } from '../core/generateTheme'

describe('generateTheme', () => {
  it('generates a theme from a valid color', () => {
    const theme = generateTheme('#3b82f6')
    expect(theme.colors.base).toBe('#3b82f6')
    expect(theme.mode).toBe('light')
  })

  it('generates dark mode colors when mode is dark', () => {
    const theme = generateTheme('#3b82f6', 'dark')
    expect(theme.mode).toBe('dark')
  })

  it('throws an error for invalid color', () => {
    expect(() => generateTheme('not-a-color')).toThrow('Invalid color')
  })
})