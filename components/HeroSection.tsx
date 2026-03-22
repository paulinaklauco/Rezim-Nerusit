'use client'

import Image from 'next/image'
import { Globe, Youtube, Instagram } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="hero-section w-full">
      {/* Nav */}
      <nav className="w-full">
        <div className="rn-nav-inner rn-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Left: RN logo */}
          <a href="/" className="header-item">
            <Image src="/images/Left top RN logo.svg" alt="RN logo" height={32} width={80} style={{ height: '32px', width: 'auto' }} />
          </a>

          {/* Center: CzechCrunch logo */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <a href="https://cc.cz/" target="_blank" rel="noopener noreferrer" className="header-item">
              <Image src="/images/CC logo_horizontal 1.svg" alt="CzechCrunch" height={26} width={180} style={{ height: '26px', width: 'auto' }} />
            </a>
          </div>

          {/* Right: icons */}
          <div className="header-icons">
            {[
              { href: 'https://cc.cz/podcasty/rezimnerusit/', Icon: Globe, alt: 'Web', size: 26 },
              { href: 'https://www.youtube.com/playlist?list=PLTZSGpTgUl09-c-XRc9kyo9JlAV70ZMnr', Icon: Youtube, alt: 'YouTube', size: 30 },
              { href: 'https://www.instagram.com/rezim.nerusit/', Icon: Instagram, alt: 'Instagram', size: 26 },
            ].map(({ href, Icon, alt, size }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="header-item"
              >
                <Icon size={size} strokeWidth={1.5} color="#FFD5FB" aria-label={alt} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero + Ticker wrapper */}
      <div style={{ position: 'relative' }}>
        <div className="hero">
          <img src="/images/RN LOGO.svg" className="hero-logo" alt="" />
          <div className="hero-image">
            <img src="/images/HEADER IMAGE/HERO PHOTO.svg" alt="Evelina" />
          </div>
        </div>

        {/* Ticker: absolute on mobile (glued to hero bottom), static on desktop */}
        {(() => {
          const emojis = [
            '/images/emojis/hvezdicka1 1.svg',
            '/images/emojis/hvezdicka2 1.svg',
            '/images/emojis/kyticka 1.svg',
            '/images/emojis/oblacek 1.svg',
            '/images/emojis/smajlik 1.svg',
          ]
          return (
            <div className="emoji-ticker absolute bottom-0 left-0 w-full md:static md:w-auto">
              <div className="emoji-track">
                {[...Array(6)].map((_, i) =>
                  emojis.map((src, index) => (
                    <img key={`${i}-${index}`} src={src} alt="" />
                  ))
                )}
              </div>
            </div>
          )
        })()}
      </div>
    </section>
  )
}
