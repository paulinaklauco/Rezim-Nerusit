export default function PodcastIntro() {
  return (
    <div
      className="podcast-intro-wrapper rn-container"
      style={{
        position: 'relative',
        width: '1230px',
        margin: '0 auto',
        overflow: 'visible',
      }}
    >
      {/* Card */}
      <div
        className="podcast-intro-card"
        style={{
          position: 'relative',
          background: '#FFD5FB',
          borderRadius: '20px',
          height: '450px',
          padding: '60px',
          boxSizing: 'border-box',
          zIndex: 1,
        }}
      >
        <div className="podcast-intro-text" style={{ marginLeft: '420px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-jacquard)',
              fontSize: '100px',
              lineHeight: 1,
              color: '#690202',
              margin: 0,
            }}
          >
            Podcast
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '25px',
              lineHeight: 1.4,
              color: '#690202',
              marginTop: '16px',
              marginBottom: 0,
            }}
          >
            Evelína Beníšková z CzechCrunche se svými hosty probírá témata, která řeší hlavně mladí Češi a Češky, ale ovlivňují celou společnost. Popkultura, trendy, škola, byznys, postironie, móda, řemeslo nebo závislosti.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '25px',
              fontWeight: 700,
              color: '#690202',
              marginTop: '24px',
              marginBottom: 0,
            }}
          >
            Nový díl každé druhé úterý!
          </p>
        </div>
      </div>

      {/* Image — outside the card, overflows wrapper */}
      <img
        src="/images/pouring-coffee.svg"
        alt="Evelina pouring coffee"
        className="podcast-intro-image absolute pointer-events-none select-none"
        style={{
          left: '-60px',
          bottom: '0',
          top: 'auto',
          width: '463px',
          height: 'auto',
          zIndex: 2,
        }}
      />
    </div>
  )
}
