import { useState } from 'react'
import { KraftNowProvider } from './core/KraftNowProvider'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Badge } from './components/Badge'
import { Modal } from './components/Modal'

export function App() {
  const [open, setOpen] = useState(false)

  return (
    <KraftNowProvider baseColor="#3b82f6">
      <Card>
        <Badge>Baru</Badge>
        <h2>Selamat datang</h2>
        <p>Ini contoh Card dari KraftNow.</p>
        <Input placeholder="Ketik sesuatu..." />
        <Button onClick={() => setOpen(true)}>Buka Modal</Button>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>Halo dari Modal!</h3>
        <Button onClick={() => setOpen(false)}>Tutup</Button>
      </Modal>
    </KraftNowProvider>
  )
}