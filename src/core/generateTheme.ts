import { formatHex, parse, converter } from 'culori'

const toHsl = converter('hsl')

export function generateTheme(baseColor: string) {
  const hsl = toHsl(parse(baseColor))

  if (!hsl) throw new Error('Invalid color')

  return {
    colors: {
      base: baseColor,
      light: formatHex({ ...hsl, l: Math.min(hsl.l + 0.2, 1) }),
      dark: formatHex({ ...hsl, l: Math.max(hsl.l - 0.2, 0) }),
      background: formatHex({ ...hsl, l: 0.98, s: hsl.s * 0.3 }),
      text: formatHex({ ...hsl, l: 0.15, s: hsl.s * 0.3 }),
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