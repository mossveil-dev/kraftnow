'use client'

import { useState, useMemo } from 'react'
import { KraftNowProvider, Button } from 'kraftnow'
import { generateTheme } from 'kraftnow'
import { motion } from 'motion/react'

export default function Home() {
  const [color, setColor] = useState('#3b82f6')
  const [inputValue, setInputValue] = useState('#3b82f6')

  function handleColorChange(value: string) {
    setInputValue(value)
    if (/^#([0-9A-F]{3}){1,2}$/i.test(value)) {
      setColor(value)
    }
  }

  const theme = useMemo(() => generateTheme(color), [color])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <KraftNowProvider baseColor={color}>
      <main
        style={{
          minHeight: '100vh',
          background: '#FAFAFA',
          color: '#18181B',
          fontFamily: 'var(--font-display)',
        }}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '6rem 2rem',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <motion.div variants={fadeUp} transition={{ type: 'spring', stiffness: 100, damping: 20 }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: '0 0 1.25rem',
              }}
            >
              One color.
              <br />A full design system.
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#52525B',
                maxWidth: '420px',
                marginBottom: '2rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              KraftNow generates a complete, harmonious set of colors, spacing, and shadows
              from a single value — then hands it to ready-made React components.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                <Button>Get Started</Button>
              </motion.div>
              <a
                href="https://github.com/mossveil-dev/kraftnow"
                style={{ color: '#18181B', fontFamily: 'system-ui, sans-serif', fontSize: '0.95rem' }}
              >
                View on GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              background: '#fff',
              border: '1px solid #E4E4E7',
              borderRadius: '12px',
              padding: '1.5rem',
            }}
          >
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                color: '#71717A',
                marginBottom: '0.5rem',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Base color
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                style={{ width: '36px', height: '36px', border: 'none', background: 'none', cursor: 'pointer' }}
              />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleColorChange(e.target.value)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  border: '1px solid #E4E4E7',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  flex: 1,
                }}
              />
            </div>

            {Object.entries(theme.colors).map(([name, hex]) => (
              <motion.div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0',
                  borderTop: '1px solid #F4F4F5',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: hex as string,
                    border: '1px solid rgba(0,0,0,0.08)',
                    flexShrink: 0,
                    transition: 'background-color 0.3s ease',
                  }}
                />
                <span style={{ fontSize: '0.85rem', color: '#71717A', fontFamily: 'system-ui, sans-serif', width: '90px' }}>
                  {name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#18181B' }}>
                  {hex as string}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </KraftNowProvider>
  )
}