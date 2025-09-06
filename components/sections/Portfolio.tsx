'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import IonIcon from '@reacticons/ionicons'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectOpen, setSelectOpen] = useState(false)
  const [screenSize, setScreenSize] = useState('desktop')

  // Handle responsive grid columns
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Trading-Bot',
      category: 'web development',
      image: '/assets/images/project-1.jpg',
      description: 'Trading bot web application frontend using React.js and Tailwind CSS with MetaTrader 5 integration.',
      tech: 'React.js, Tailwind CSS, MetaTrader 5'
    },
    {
      id: 2,
      title: 'Wanderlust',
      category: 'web development',
      image: '/assets/images/project-2.png',
      description: 'Full-stack Airbnb clone with authentication, CRUD operations, and responsive UI.',
      tech: 'MongoDB, Express.js, Node.js, EJS'
    },
    {
      id: 3,
      title: 'SEO Roofer Web App',
      category: 'web design',
      image: '/assets/images/project-3.jpg',
      description: 'Static website for roofing service business with SEO-optimized content.',
      tech: 'HTML, CSS, JavaScript'
    },
    {
      id: 4,
      title: 'Assist4you Platform',
      category: 'web development',
      image: '/assets/images/project-4.png',
      description: 'Remote staffing and recruitment platform with database management.',
      tech: 'HTML, CSS, JavaScript, Node.js, SQLite3'
    },
    {
      id: 5,
      title: 'E-commerce Dashboard',
      category: 'web development',
      image: '/assets/images/project-5.png',
      description: 'Admin dashboard for e-commerce management.',
      tech: 'React.js, Chart.js, API Integration'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web design',
      image: '/assets/images/project-6.png',
      description: 'Personal portfolio website with modern design.',
      tech: 'Next.js, Tailwind CSS, TypeScript'
    }
  ]

  const filterOptions = ['All', 'Web design', 'Web development']

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter.toLowerCase())
  }

  const handleSelectClick = (filter: string) => {
    setActiveFilter(filter.toLowerCase())
    setSelectOpen(false)
  }

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  // Define responsive grid columns
  const getGridColumns = () => {
    switch (screenSize) {
      case 'mobile':
        return '1fr'
      case 'tablet':
        return 'repeat(2, 1fr)'
      case 'desktop':
      default:
        return 'repeat(3, 1fr)'
    }
  }

  // Define responsive image height
  const getImageHeight = () => {
    switch (screenSize) {
      case 'mobile':
        return '180px'
      case 'tablet':
        return '220px'
      case 'desktop':
      default:
        return '200px'
    }
  }

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filterOptions.map((filter) => (
            <li key={filter} className="filter-item">
              <button 
                className={activeFilter === filter.toLowerCase() ? 'active' : ''}
                onClick={() => handleFilterClick(filter)}
                data-filter-btn
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button 
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen(!selectOpen)}
            data-select
          >
            <div className="select-value" data-selecct-value>
              {activeFilter === 'all' ? 'Select category' : activeFilter}
            </div>
            <div className="select-icon">
              <IonIcon name="chevron-down" />
            </div>
          </button>

          <ul className="select-list">
            {filterOptions.map((filter) => (
              <li key={filter} className="select-item">
                <button 
                  onClick={() => handleSelectClick(filter)}
                  data-select-item
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul
          className="project-list"
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: screenSize === 'mobile' ? '20px' : '30px',
            marginBottom: '10px',
            padding: '0',
            listStyle: 'none'
          }}
        >
          {filteredProjects.map((project) => (
            <li 
              key={project.id}
              className="project-item active"
              data-filter-item 
              data-category={project.category}
              style={{ 
                display: 'block',
                animation: 'scaleUp 0.25s ease forwards'
              }}
            >
              <a 
                href="#" 
                aria-label={`View ${project.title} project`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <figure 
                  className="project-img"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: getImageHeight(),
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '15px',
                    backgroundColor: 'var(--eerie-black-1)',
                    transition: 'transform 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
                    const icon = e.currentTarget.querySelector('.project-icon') as HTMLElement | null
                    const overlay = e.currentTarget.querySelector('.project-overlay') as HTMLElement | null
                    
                    if (img) {
                      img.style.transform = 'scale(1.1)'
                    }
                    if (icon) {
                      icon.style.opacity = '1'
                    }
                    if (overlay) {
                      overlay.style.opacity = '0.5'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
                    const icon = e.currentTarget.querySelector('.project-icon') as HTMLElement | null
                    const overlay = e.currentTarget.querySelector('.project-overlay') as HTMLElement | null
                    
                    if (img) {
                      img.style.transform = 'scale(1)'
                    }
                    if (icon) {
                      icon.style.opacity = '0'
                    }
                    if (overlay) {
                      overlay.style.opacity = '0'
                    }
                  }}
                >
                  {/* Overlay */}
                  <div 
                    className="project-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      zIndex: 1
                    }}
                  />
                  
                  {/* Eye Icon */}
                  <div
                    className="project-icon"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'var(--jet)',
                      color: 'var(--orange-yellow-crayola)',
                      padding: '18px',
                      borderRadius: '12px',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      zIndex: 2,
                      fontSize: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IonIcon name="eye-outline" />
                  </div>

                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </figure>
                
                <div style={{ padding: '0 10px' }}>
                  <h3 
                    className="project-title"
                    style={{
                      color: 'var(--white-2)',
                      fontSize: 'var(--fs-5)',
                      fontWeight: 'var(--fw-400)',
                      textTransform: 'capitalize',
                      lineHeight: '1.3',
                      marginBottom: '5px'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="project-category"
                    style={{
                      color: 'var(--light-gray-70)',
                      fontSize: 'var(--fs-6)',
                      fontWeight: 'var(--fw-300)',
                      textTransform: 'capitalize'
                    }}
                  >
                    {project.tech}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
