import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function FrameworksPage() {
  return (
    <>
      <Navigation />
      <section className="hero">
        <div className="hero-content">
          <h1>Innovation Frameworks</h1>
          <p className="hero-subtitle">
            Five groundbreaking initiatives demonstrating unprecedented complexity, novel methodologies, and measurable impact across regulated industries.
          </p>
        </div>
      </section>
      {/* Add frameworks content here */}
    </>
  )
}

