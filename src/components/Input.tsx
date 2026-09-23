import { useTheme } from '../core/KraftNowProvider'

export function Input({
  label,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const theme = useTheme()
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div>
      {label && (
        <label htmlFor={inputId} style={{ display: 'block', marginBottom: '4px', fontSize: '0.9rem' }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        style={{
          padding: theme.spacing.sm,
          borderRadius: theme.radius.sm,
          border: `1px solid ${theme.colors.light}`,
          color: theme.colors.text,
          outline: 'none',
        }}
      />
    </div>
  )
}