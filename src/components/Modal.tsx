import { useTheme } from '../core/KraftNowProvider'

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  const theme = useTheme()

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
          padding: theme.spacing.lg,
          borderRadius: theme.radius.lg,
          boxShadow: theme.shadow.md,
          minWidth: '300px',
        }}
      >
        {children}
      </div>
    </div>
  )
}