export default function MerchSection() {
  return (
    <section id="merch" style={{ padding: '52px 0 28px 0' }}>
      <div
        className="rn-container"
        style={{
          maxWidth: '1230px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        {/* Title */}
        <h2
          className="merch-heading"
          style={{
            fontFamily: 'var(--font-jacquard)',
            fontSize: '150px',
            lineHeight: 1,
            color: '#FFD5FB',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Merch
        </h2>

        {/* 2-column layout */}
        <div
          className="merch-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 470px',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left: text */}
          <div className="merch-text-block" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3
              className="merch-subheading"
              style={{
                fontFamily: 'var(--font-jacquard)',
                fontSize: '100px',
                lineHeight: 1,
                color: '#FFD5FB',
                margin: 0,
              }}
            >
              Stanley cup
            </h3>

            <div
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '25px',
                lineHeight: '39px',
                color: '#FFD5FB',
              }}
            >
              <p style={{ margin: '0 0 24px 0' }}>
                Hrneček pro chvíle, kdy nechcete být rušeni.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>— Gravírovaný Stanley cup s nápisem „Režim nerušit"</li>
                <li>— Izolovaný travel mug na teplé i studené nápoje</li>
                <li>— Limitovaná série v růžové barvě</li>
                <li>— Omezený počet: 50 kusů</li>
              </ul>
              <p style={{ margin: '24px 0 0 0', fontWeight: 600 }}>
                Cena cca 1 200 Kč
              </p>
            </div>
          </div>

          {/* Right: product card */}
          <div
            className="merch-product-card group"
            style={{
              width: '470px',
              height: '470px',
              background: '#FFD5FB',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Cup image */}
            <img
              src="/images/Cup photo.svg"
              alt="Stanley cup"
              className="transition-transform duration-300 ease-out group-hover:scale-[1.12] group-hover:rotate-[4deg] group-hover:-translate-y-[8px]"
              style={{ width: '382px', height: '277px', objectFit: 'contain' }}
            />

            {/* Flower icon — top right */}
            <img
              src="/images/Stanley cup/kyticka 1.svg"
              alt=""
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
