import { useTheme } from '../core/KraftNowProvider'

export function Card({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.md,
      }}
    >
      {children}
    </div>
  )
}