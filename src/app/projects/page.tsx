import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <section className="hero">
        <div className="hero-content">
          <h1>Projects Portfolio</h1>
          <p className="hero-subtitle">
            Comprehensive portfolio of transformative AI, healthcare, infrastructure, and strategic development projects.
          </p>
        </div>
      </section>
      {/* Add projects content here */}
    </>
  )
}

