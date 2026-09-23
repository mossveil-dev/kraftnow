import { useTheme } from '../core/KraftNowProvider'

export function Avatar({ name, src }: { name: string; src?: string }) {
  const theme = useTheme()

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    )
  }

  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: theme.colors.base,
        color: theme.colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        fontSize: '0.9rem',
      }}
    >
      {initials}
    </div>
  )
}