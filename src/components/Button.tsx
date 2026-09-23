import { useTheme } from "../core/KraftNowProvider"

export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    const theme = useTheme()

    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: theme.colors.base,
          color: theme.colors.background,
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          borderRadius: theme.radius.md,
          border: 'none',
          boxShadow: theme.shadow.sm,
          cursor: 'pointer',
        }}
      >
        {children}
      </button>
    )
}