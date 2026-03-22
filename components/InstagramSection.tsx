export default function InstagramSection() {
  return (
    <section style={{ padding: '52px 0' }}>
      <div
        style={{
          maxWidth: '1230px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2
          className="ig-heading"
          style={{
            fontFamily: 'var(--font-jacquard)',
            fontSize: '100px',
            lineHeight: 1,
            color: '#FFD5FB',
            margin: '0 0 32px 0',
            textAlign: 'center',
          }}
        >
          Instagram
        </h2>

        <div className="ig-cards-row" style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          {[
            { href: 'https://www.instagram.com/p/DWI1freDdhZ/', src: '/images/IG/1.png' },
            { href: 'https://www.instagram.com/p/DV8E_b2jeZg/', src: '/images/IG/2.png' },
            { href: 'https://www.instagram.com/p/DV2w7X7DTqx/', src: '/images/IG/3.png' },
            { href: 'https://www.instagram.com/p/DVX8V4GDZHA/', src: '/images/IG/4.png' },
            { href: 'https://www.instagram.com/p/DWI1freDdhZ/', src: '/images/IG/5.png' },
          ].map(({ href, src }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-card group overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              style={{
                display: 'block',
                width: 234,
                height: 292,
                borderRadius: 20,
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <img
                src={src}
                alt=""
                className="transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
