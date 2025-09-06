'use client'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.id} className="navbar-item">
            <button 
              className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              data-nav-link
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
