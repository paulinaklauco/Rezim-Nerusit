'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const EMOJI_SRCS = [
  '/images/emojis/hvezdicka1 1.svg',
  '/images/emojis/kyticka 1.svg',
  '/images/emojis/smajlik 1.svg',
  '/images/emojis/hvezdicka2 1.svg',
  '/images/emojis/oblacek 1.svg',
]

const PINK_FILTER = 'brightness(0) saturate(100%) invert(87%) sepia(21%) saturate(427%) hue-rotate(290deg) brightness(103%) contrast(101%)'

interface FloatingEmoji {
  id: number
  src: string
  x: number
  y: number
  driftY: number
  floatDuration: number
  exiting: boolean
}

let eid = 0

function isTooClose(x: number, y: number, existing: FloatingEmoji[]): boolean {
  // Keep center clear (~80px radius)
  if (Math.sqrt(x * x + y * y) < 80) return true
  // Min 40px from other emojis
  for (const e of existing) {
    const dx = e.x - x
    const dy = e.y - y
    if (Math.sqrt(dx * dx + dy * dy) < 40) return true
  }
  return false
}

function randomPosition(existing: FloatingEmoji[]): { x: number; y: number } | null {
  for (let attempt = 0; attempt < 30; attempt++) {
    const x = Math.round(Math.random() * 360 - 180)
    const y = Math.round(Math.random() * 240 - 120)
    if (!isTooClose(x, y, existing)) return { x, y }
  }
  return null
}

export default function EmojiButton() {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([])
  const [hovering, setHovering] = useState(false)
  const spawnRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const emojisRef = useRef<FloatingEmoji[]>([])

  // Keep ref in sync
  useEffect(() => { emojisRef.current = emojis }, [emojis])

  const spawnOne = useCallback(() => {
    const pos = randomPosition(emojisRef.current)
    if (!pos) return
    const emoji: FloatingEmoji = {
      id: eid++,
      src: EMOJI_SRCS[Math.floor(Math.random() * EMOJI_SRCS.length)],
      x: pos.x,
      y: pos.y,
      driftY: +(Math.random() * 16 - 8).toFixed(1),
      floatDuration: +(3 + Math.random() * 2).toFixed(2),
      exiting: false,
    }
    setEmojis(prev => prev.length < 8 ? [...prev, emoji] : prev)
  }, [])

  // Spawn loop while hovering
  useEffect(() => {
    if (!hovering) return
    const schedule = () => {
      const delay = 200 + Math.random() * 200
      spawnRef.current = setTimeout(() => {
        spawnOne()
        schedule()
      }, delay)
    }
    schedule()
    return () => { if (spawnRef.current) clearTimeout(spawnRef.current) }
  }, [hovering, spawnOne])

  // On mouse leave: mark all as exiting, then clear
  const handleMouseLeave = useCallback(() => {
    setHovering(false)
    if (spawnRef.current) clearTimeout(spawnRef.current)
    setEmojis(prev => prev.map(e => ({ ...e, exiting: true })))
    setTimeout(() => setEmojis([]), 600)
  }, [])

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating emojis */}
      {emojis.map(emoji => (
        <img
          key={emoji.id}
          src={emoji.src}
          alt=""
          style={{
            position: 'absolute',
            width: 44,
            height: 44,
            left: `calc(50% + ${emoji.x}px - 22px)`,
            top: `calc(50% + ${emoji.y}px - 22px)`,
            pointerEvents: 'none',
            filter: PINK_FILTER,
            opacity: emoji.exiting ? 0 : 0.75,
            transform: emoji.exiting ? 'scale(0.85)' : 'scale(1)',
            transition: emoji.exiting
              ? 'opacity 0.5s ease, transform 0.5s ease'
              : 'opacity 0.4s ease, transform 0.4s ease',
            animation: emoji.exiting
              ? 'none'
              : `emojiFloat ${emoji.floatDuration}s ease-in-out infinite alternate`,
            ['--emoji-dy' as string]: `${emoji.driftY}px`,
            zIndex: 10,
          } as React.CSSProperties}
        />
      ))}

      {/* Button */}
      <a
        href="https://www.youtube.com/playlist?list=PLTZSGpTgUl09-c-XRc9kyo9JlAV70ZMnr"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:opacity-85"
        style={{
          background: '#FFD5FB',
          color: '#690202',
          fontFamily: 'var(--font-poppins)',
          fontSize: '20px',
          fontWeight: 600,
          padding: '20px 40px',
          borderRadius: '16px',
          textDecoration: 'none',
          display: 'inline-block',
          position: 'relative',
          zIndex: 1,
        }}
      >
        VŠECHNY EPIZODY
      </a>
    </div>
  )
}
