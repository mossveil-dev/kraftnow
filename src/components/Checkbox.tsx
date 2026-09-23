import { useTheme } from '../core/KraftNowProvider'

export function Checkbox({
  label,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  const theme = useTheme()
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <label
      htmlFor={inputId}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
    >
      <input
        type="checkbox"
        id={inputId}
        {...props}
        style={{
          width: '18px',
          height: '18px',
          accentColor: theme.colors.base,
          cursor: 'pointer',
        }}
      />
      {label}
    </label>
  )
}