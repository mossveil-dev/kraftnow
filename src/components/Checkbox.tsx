import { useTheme } from '../core/KraftNowProvider'

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const theme = useTheme()

  return (
    <input
      type="checkbox"
      {...props}
      style={{
        width: '18px',
        height: '18px',
        accentColor: theme.colors.base,
        cursor: 'pointer',
      }}
    />
  )
}