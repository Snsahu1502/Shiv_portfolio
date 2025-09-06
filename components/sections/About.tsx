'use client'

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Passionate Software Developer with hands-on experience in front-end. I enjoy building interactive and user-friendly
          applications while continuously learning and improving my skills. Excited about the opportunity to contribute to real-world
          projects and grow as a developer.
        </p>
      </section>

      {/* Optional service section - can keep or customize */}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">
                Building interactive and user-friendly web applications using React.js, Next.js, and Tailwind CSS.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Design</h4>
              <p className="service-item-text">
                Focused on clean, intuitive designs that improve user experience and engagement.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Continuous Learning</h4>
              <p className="service-item-text">
                Always updating skills with new technologies and best practices in software development.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}
