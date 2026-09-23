import { useTheme } from '../core/KraftNowProvider'

export function Alert({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  return (
    <div
      style={{
        backgroundColor: theme.colors.light,
        color: theme.colors.dark,
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        borderLeft: `4px solid ${theme.colors.dark}`,
      }}
    >
      {children}
    </div>
  )
}