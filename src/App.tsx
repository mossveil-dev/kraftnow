import { useState } from 'react'
import { KraftNowProvider } from './core/KraftNowProvider'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Badge } from './components/Badge'
import { Modal } from './components/Modal'
import { Checkbox } from './components/Checkbox'
import { Alert } from './components/Alert'
import { Avatar } from './components/Avatar'

const PRESETS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']

export function App() {
  const [color, setColor] = useState('#3b82f6')
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [open, setOpen] = useState(false)

  return (
    <KraftNowProvider baseColor={color} mode={mode}>
      <div
        style={{
          minHeight: '100vh',
          background: mode === 'dark' ? '#0a0a0a' : '#f5f5f7',
          padding: '3rem 1.5rem',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>KraftNow</h1>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
            One color, a full design system.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: c,
                  border: color === c ? '3px solid #000' : '1px solid #ccc',
                  cursor: 'pointer',
                }}
              />
            ))}
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
            </Button>
          </div>

          <Alert>Pick a color above — every component updates instantly.</Alert>

          <div style={{ marginTop: '1.5rem' }}>
            <Card>
              <Badge>New</Badge>
              <h2>Welcome</h2>
              <p>This is a KraftNow card.</p>
              <Input label="Your name" placeholder="Type something..." />
              <Checkbox label="I agree" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Avatar name="John Doe" />
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
              </div>
            </Card>
          </div>

          <Modal open={open} onClose={() => setOpen(false)}>
            <h3>Hello from Modal!</h3>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Modal>
        </div>
      </div>
    </KraftNowProvider>
  )
}