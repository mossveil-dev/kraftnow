import { useState } from 'react'
import { KraftNowProvider } from './core/KraftNowProvider'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Badge } from './components/Badge'
import { Modal } from './components/Modal'

export function App() {
  const [color, setColor] = useState('#3b82f6')
  const [open, setOpen] = useState(false)

  return (
    <KraftNowProvider baseColor={color}>
      <div style={{ padding: '2rem' }}>
        <label>
          Pick a color:{' '}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <div style={{ marginTop: '1rem' }}>
          <Card>
            <Badge>New</Badge>
            <h2>Welcome</h2>
            <p>This is a KraftNow card.</p>
            <Input placeholder="Type something..." />
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
          </Card>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <h3>Hello from Modal!</h3>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal>
      </div>
    </KraftNowProvider>
  )
}