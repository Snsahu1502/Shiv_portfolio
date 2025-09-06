'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Resume from '@/components/sections/Resume'
import Portfolio from '@/components/sections/Portfolio'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'portfolio':
        return <Portfolio />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        {renderSection()}
      </div>
    </main>
  )
}
