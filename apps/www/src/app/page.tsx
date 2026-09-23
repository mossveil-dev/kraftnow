'use client'

import { motion } from 'motion/react'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '0.8rem',
          fontFamily: 'monospace',
          color: '#3b82f6',
          border: '1px solid rgba(59,130,246,0.4)',
          padding: '4px 14px',
          borderRadius: '999px',
          marginBottom: '1.5rem',
        }}
      >
        v0.1.0 — early preview
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          textAlign: 'center',
          margin: 0,
          background: 'linear-gradient(180deg, #fff 0%, #a1a1aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        KraftNow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: '1.2rem',
          color: '#a1a1aa',
          margin: '1rem 0 2rem',
          textAlign: 'center',
        }}
      >
        One color, a full design system.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ display: 'flex', gap: '0.75rem' }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: '#fff',
            color: '#0a0a0a',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid #333',
            padding: '12px 28px',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          GitHub →
        </motion.button>
      </motion.div>
    </main>
  )
}