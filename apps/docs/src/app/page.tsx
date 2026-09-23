'use client'

import { KraftNowProvider, Button, Card } from 'kraftnow'

export default function Home() {
  return (
    <KraftNowProvider baseColor="#3b82f6">
      <div style={{ padding: '2rem' }}>
        <Card>
          <h1>KraftNow Docs</h1>
          <Button>Get Started</Button>
        </Card>
      </div>
    </KraftNowProvider>
  )
}