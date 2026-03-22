'use client'

import { useState } from 'react'

interface EpisodeCardProps {
  guestName: string
  description: string
  embedUrl: string
}

export default function EpisodeCard({ guestName, description, embedUrl }: EpisodeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = new URL(embedUrl).searchParams.get('v')
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div
      className="episode-card rn-container transition-all duration-300 hover:scale-[1.01] hover:border-white"
      style={{
        width: '1230px',
        height: '390px',
        border: '1px solid #FFD5FB',
        borderRadius: '20px',
        display: 'flex',
        gap: '32px',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Video */}
      <div
        className="episode-card-video"
        style={{
          width: '500px',
          height: '100%',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          flexShrink: 0,
        }}
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              }}
              alt="video thumbnail"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Play button */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                background: 'rgba(0,0,0,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '20px solid white',
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  marginLeft: '5px',
                }}
              />
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
        <div
          className="episode-card-heading"
          style={{
            fontFamily: 'var(--font-jacquard)',
            fontSize: '80px',
            lineHeight: 1,
            color: '#FFFFFF',
          }}
        >
          {guestName}
        </div>
        <p
          className="episode-card-desc"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '25px',
            color: '#FFFFFF',
            lineHeight: '39px',
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
