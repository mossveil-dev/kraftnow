# KraftNow

**One color, a full design system.**

KraftNow is a React component library that automatically generates a complete, harmonious design system from a single base color — no design skills required.

## Why KraftNow?

Most component libraries give you the building blocks, but you still need design skills to make them look polished. KraftNow generates colors, spacing, radius, and shadows automatically from one color, so your UI looks professional by default.

## Installation

```bash
npm install kraftnow
```

## Usage

```tsx
import { KraftNowProvider } from 'kraftnow'
import { Button, Card } from 'kraftnow'

function App() {
  return (
    <KraftNowProvider baseColor="#3b82f6">
      <Card>
        <h1>Welcome</h1>
        <Button>Click me</Button>
      </Card>
    </KraftNowProvider>
  )
}
```

Change `baseColor` and the entire UI updates automatically.

## Components

- `Button`
- `Card`
- `Input`
- `Badge`
- `Modal`

## Status

🚧 Early development (MVP). API may change.

## License

MIT