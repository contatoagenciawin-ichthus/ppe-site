import { TopBar } from '@/components/ppe/top-bar'
import { VideoHero } from '@/components/ppe/video-hero'
import { HeroProof } from '@/components/ppe/hero-proof'
import { Marquee } from '@/components/ppe/marquee'
import { Pain } from '@/components/ppe/pain'
import { StoryScroll } from '@/components/ppe/story-scroll'
import { Results } from '@/components/ppe/results'
import { Cost } from '@/components/ppe/cost'
import { Method } from '@/components/ppe/method'
import { Deliverables } from '@/components/ppe/deliverables'
import { Who } from '@/components/ppe/who'
import { SocialProof } from '@/components/ppe/social-proof'
import { Offer } from '@/components/ppe/offer'
import { Guarantee } from '@/components/ppe/guarantee'
import { Faq } from '@/components/ppe/faq'
import { FinalCta } from '@/components/ppe/final-cta'
import { SiteFooter } from '@/components/ppe/site-footer'

export default function Page() {
  return (
    <main className="bg-background">
      <TopBar />

      <VideoHero />
      <HeroProof />

      <Marquee />
      <Pain />
      <StoryScroll />
      <Results />
      <Cost />
      <Method />
      <Deliverables />
      <Who />
      <SocialProof />
      <Offer />
      <Guarantee />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}