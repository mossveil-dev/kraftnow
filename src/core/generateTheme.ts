import { formatHex, parse, converter } from 'culori'

const toHsl = converter('hsl')

export function generateTheme(baseColor: string, mode: 'light' | 'dark' = 'light') {
  const hsl = toHsl(parse(baseColor))

  if (!hsl) throw new Error('Invalid color')

  const isDark = mode === 'dark'

  return {
    mode,
    colors: {
      base: baseColor,
      light: formatHex({ ...hsl, l: Math.min(hsl.l + 0.2, 1) }),
      dark: formatHex({ ...hsl, l: Math.max(hsl.l - 0.2, 0) }),
      background: isDark
        ? formatHex({ ...hsl, l: 0.12, s: hsl.s * 0.3 })
        : formatHex({ ...hsl, l: 0.98, s: hsl.s * 0.3 }),
      text: isDark
        ? formatHex({ ...hsl, l: 0.92, s: hsl.s * 0.3 })
        : formatHex({ ...hsl, l: 0.15, s: hsl.s * 0.3 }),
    },
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
    },
    radius: {
      sm: '4px',
      md: '8px',
      lg: '16px',
    },
    shadow: {
      sm: '0 1px 2px rgba(0,0,0,0.1)',
      md: '0 4px 6px rgba(0,0,0,0.1)',
    },
  }
}