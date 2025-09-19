'use client'

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      
      <section className="about-text">
        <p>
          Passionate Software Developer with hands-on experience in front-end and backend development. I enjoy building interactive and user-friendly applications while continuously learning and improving my skills. With expertise in modern web technologies like React.js, Next.js, and the MERN stack, I'm excited about the opportunity to contribute to real-world projects and grow as a developer.
        </p>
        <p>
          Currently skilled in JavaScript, TypeScript, C++, and SQL, with extensive experience in technologies including React.js, Next.js, Tailwind CSS, REST APIs, Redux Toolkit, and Websockets. I have completed my Bachelor of Technology in Information Technology from Medi-Caps University, Indore with a CGPA of 7.68/10.00.
        </p>
      </section>

      {/* Updated services section with 3 items */}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-content-box">
              <h4 className="h4 service-item-title">MERN Stack Development</h4>
              <p className="service-item-text">
                Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js with real-time features and optimized data flow.
              </p>
            </div>
          </li>
          
          <li className="service-item">
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Integration</h4>
              <p className="service-item-text">
                Developing RESTful APIs, integrating databases like MongoDB and SQLite, and implementing real-time user dashboards with WebSockets.
              </p>
            </div>
          </li>
          
          <li className="service-item">
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Project Development</h4>
              <p className="service-item-text">
                Specialized in building diverse applications from trading bots and travel platforms to SEO-optimized business websites with clean UI/UX.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}
