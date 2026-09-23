import { useTheme } from '../core/KraftNowProvider'

export function Badge({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  return (
    <span
      style={{
        backgroundColor: theme.colors.light,
        color: theme.colors.dark,
        padding: `2px ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontSize: '0.85rem',
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  )
}