import PodcastIntro from './PodcastIntro'
import EpisodeCard from './EpisodeCard'
import EmojiButton from './EmojiButton'

const episodes = [
  {
    guestName: 'Pam Rabbit',
    description: 'Jak přestat se omlouvat za to, kdo jsi. Rozhovor o sebevědomí, hranicích a životě na vlastních podmínkách.',
    embedUrl: 'https://www.youtube.com/watch?v=fpXe88_TXs8',
  },
  {
    guestName: 'Anna Dvořáková',
    description: 'Podnikání bez filtru. Co nikdo neříká o budování značky od nuly a proč autenticita vyhrává.',
    embedUrl: 'https://www.youtube.com/watch?v=sUwBbSbtCB0',
  },
  {
    guestName: 'Karolína Šenková',
    description: 'Kreativita jako způsob přežití. Jak si udržet energii, když svět kolem tě nefunguje.',
    embedUrl: 'https://www.youtube.com/watch?v=pQmtC-1CU-E',
  },
]

export default function PodcastSection() {
  return (
    <section style={{ padding: '52px 0' }}>
      <div
        className="rn-container"
        style={{
          maxWidth: '1230px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        <PodcastIntro />

        {episodes.map((ep) => (
          <EpisodeCard key={ep.guestName} {...ep} />
        ))}

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <EmojiButton />
        </div>
      </div>
    </section>
  )
}
