import { Globe, Instagram, Youtube, Twitter, Linkedin, Facebook } from 'lucide-react'
import Image from 'next/image'

const row1 = [
  { href: 'https://cc.cz/', Icon: Globe, label: 'Web' },
  { href: 'https://www.instagram.com/czechcrunch/', Icon: Instagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@CzechCrunch', Icon: Youtube, label: 'YouTube' },
]
const row2 = [
  { href: 'https://x.com/CzechCrunch', Icon: Twitter, label: 'X' },
  { href: 'https://www.linkedin.com/company/czechcrunch/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/CzechCrunch/', Icon: Facebook, label: 'Facebook' },
]

const legalLinks = [
  { href: 'https://cc.cz/podminky-uzivani/', label: 'Podmínky užívání' },
  { href: 'https://cc.cz/zasady-zpracovani-osobnich-udaju/', label: 'Zásady zpracování osobních údajů' },
  { href: 'https://cc.cz/obchodni-podminky/', label: 'Obchodní podmínky' },
  { href: 'https://cc.cz/navstevni-rad-eventu/', label: 'Návštěvní řád eventů' },
  { href: '#cookies', label: 'Nastavení cookies' },
]

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: '52px',
        paddingBottom: '40px',
      }}
    >
      <div className="rn-container" style={{ maxWidth: '1230px', margin: '0 auto' }}>

        {/* Top separator line */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginBottom: '60px' }} />

        {/* Brand + social icons row */}
        <div
          className="footer-inner"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '48px',
          }}
        >
          {/* Left: logo + description */}
          <div className="footer-brand" style={{ maxWidth: '520px' }}>
            <a href="https://cc.cz/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <Image
                src="/images/CC logo_horizontal 1.svg"
                alt="CzechCrunch"
                height={28}
                width={200}
                style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '17px',
                lineHeight: 1.6,
                color: '#ffffff',
                margin: 0,
              }}
            >
              Hlavní zdroj inspirace. Věnujeme se tématům, která hýbou Českem a světem, od byznysu a startupů přes technologie, politiku a vzdělávání až po bydlení, sport, kulturu, ekologii nebo dopravu.
            </p>
          </div>

          {/* Right: social icons 3×2 grid */}
          <div
            className="footer-icons-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, auto)',
              gap: '24px 40px',
              marginLeft: '215px',
              flexShrink: 0,
              alignSelf: 'flex-start',
              transform: 'translateY(4px)',
            }}
          >
            {[...row1, ...row2].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all duration-200 hover:scale-110 hover:opacity-80"
                style={{
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Icon size={34} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', margin: '60px 0' }} />

        {/* Legal text */}
        <div
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7,
          }}
        >
          <p style={{ margin: '0 0 16px 0' }}>
            © 2014–2026 CzechCrunch.cz. Server provozuje společnost CzechCrunch s.r.o. se sídlem Thámova 289/13, Praha 8 – Karlín, 186 00. IČ 01465562.{' '}
            <strong>Kontakt:</strong>{' '}
            <a
              href="mailto:info@cc.cz"
              style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
              className="hover:underline transition-all duration-200"
            >
              info@cc.cz
            </a>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 0' }}>
            {legalLinks.map(({ href, label }, i) => (
              <span key={label}>
                <a
                  href={href}
                  style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                  className="hover:underline transition-all duration-200"
                >
                  {label}
                </a>
                {i < legalLinks.length - 1 && (
                  <span style={{ margin: '0 10px', opacity: 0.4 }}>|</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
