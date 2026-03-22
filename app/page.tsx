import HeroSection from '@/components/HeroSection'
import PodcastSection from '@/components/PodcastSection'
import MerchSection from '@/components/MerchSection'
import WaitlistSection from '@/components/WaitlistSection'
import InstagramSection from '@/components/InstagramSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ background: 'linear-gradient(to bottom, #690202 0%, #690202 50%, #3d0000 75%, #290000 100%)', minHeight: '100vh' }}>
      <HeroSection />
      <PodcastSection />
      <MerchSection />
      <WaitlistSection />
      <InstagramSection />
      <Footer />
    </main>
  )
}
