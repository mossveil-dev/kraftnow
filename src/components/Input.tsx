import { useTheme } from '../core/KraftNowProvider'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const theme = useTheme()

  return (
    <input
      {...props}
      style={{
        padding: theme.spacing.sm,
        borderRadius: theme.radius.sm,
        border: `1px solid ${theme.colors.light}`,
        color: theme.colors.text,
        outline: 'none',
      }}
    />
  )
}