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

export function App() {
  const [color, setColor] = useState('#3b82f6')
  const [open, setOpen] = useState(false)

  return (
    <KraftNowProvider baseColor={color}>
      <div style={{ padding: '2rem' }}>
        <label>
          Pick a color:{' '}
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>

        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert>This is an alert message.</Alert>

          <Card>
            <Badge>New</Badge>
            <h2>Welcome</h2>
            <p>This is a KraftNow card.</p>
            <Input placeholder="Type something..." />
            <label>
              <Checkbox /> I agree
            </label>
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
    </KraftNowProvider>
  )
}