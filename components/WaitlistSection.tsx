'use client'

import { useState } from 'react'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const [focused, setFocused] = useState(false)

  const valid = isValidEmail(email)
  const active = focused || email.length > 0

  return (
    <section id="waitlist" style={{ padding: '28px 0 52px 0' }}>
      <div
        className="rn-container"
        style={{
          maxWidth: '1230px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* CTA label */}
        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#BFD3FF',
            opacity: 0.7,
            margin: '0 0 14px 4px',
          }}
        >
          Nenech si to ujít
        </p>

        <div
          className="waitlist-card transition-all duration-300 hover:scale-[1.01]"
          style={{
            width: '1230px',
            background: '#BFD3FF',
            borderRadius: '20px',
            padding: '60px 60px 60px 60px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Title row: star + text block */}
          <div className="waitlist-title-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '55px' }}>
            <img
              src="/images/emojis/hvezdicka1 1.svg"
              alt=""
              className="waitlist-star"
              style={{ width: '153px', height: '153px', flexShrink: 0, transform: 'translateY(-10px)' }}
            />
            <div>
              <h2
                className="waitlist-heading"
                style={{
                  fontFamily: 'var(--font-jacquard)',
                  fontSize: '80px',
                  lineHeight: 1,
                  color: '#690202',
                  margin: 0,
                }}
              >
                Waitlist: first drop
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '25px',
                  lineHeight: '39px',
                  color: '#690202',
                  margin: '20px 0 0 0',
                }}
              >
                Ozveme se ti, až půjde hrneček do prodeje.
              </p>

              {/* Input + button */}
              <div className="waitlist-input-row" style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '36px', width: '520px' }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  disabled={joined}
                  style={{
                    flex: 1,
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '16px 20px',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '18px',
                    color: '#690202',
                    outline: 'none',
                    minWidth: 0,
                  }}
                />
                <button
                  disabled={!valid || joined}
                  onClick={() => { if (valid) setJoined(true) }}
                  style={{
                    background: joined || active ? '#690202' : '#7A94CE',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '16px 28px',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '18px',
                    fontWeight: 600,
                    cursor: valid && !joined ? 'pointer' : 'default',
                    transition: 'background 0.2s ease, box-shadow 0.2s ease',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    boxShadow: active && !joined ? '0 2px 12px rgba(105,2,2,0.35)' : 'none',
                  }}
                >
                  {joined ? 'Joined!' : 'Dejte mi vědět'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
