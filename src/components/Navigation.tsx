'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('mainNav')
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="main-nav" id="mainNav">
      <div className="nav-container">
        <div className="logo">
          <Link href="/" aria-label="Jason Jarmacz home">
            <Image
              src="/images/1000002043.jpg"
              alt="Jason Jarmacz logo"
              className="site-logo"
              width={42}
              height={42}
              priority
            />
            <span className="logo-text">JARMACZ</span>
          </Link>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          <li><Link href="/#innovations">Portfolio</Link></li>
          <li><Link href="/frameworks">Frameworks</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
        <div className={`nav-toggle ${menuOpen ? 'active' : ''}`} id="navToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

