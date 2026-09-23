import { useTheme } from '../core/KraftNowProvider'

export function Button({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}) {
  const theme = useTheme()

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? theme.colors.light : theme.colors.base,
        color: theme.colors.background,
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,
        border: 'none',
        boxShadow: theme.shadow.sm,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  )
}