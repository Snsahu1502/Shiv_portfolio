"use client";

import IonIcon from "@reacticons/ionicons";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="book-outline" />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Medi-Caps University</h4>
            <span>Oct 2020 – June 2024</span>
            <p className="timeline-text">
              Bachelor of Technology in Information Technology
            </p>
            <p className="timeline-text">
              <strong>CGPA:</strong> 7.68/10.00 | Indore, Madhya Pradesh
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Scholars Academy</h4>
            <span>2020</span>
            <p className="timeline-text">
              Senior Secondary Education (12th)
            </p>
            <p className="timeline-text">
              <strong>Percentage:</strong> 62% | Shujalpur, Madhya Pradesh
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Scholars Academy</h4>
            <span>2018</span>
            <p className="timeline-text">Secondary Education (10th)</p>
            <p className="timeline-text">
              <strong>Percentage:</strong> 72.8% | Shujalpur, Madhya Pradesh
            </p>
          </li>
        </ol>
      </section>

      {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="briefcase-outline" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">MERN Stack Intern</h4>
            <span>Jun 2025 – Sept 2025</span>
            <p className="timeline-text">
              <strong>WebSeeder Technologies Pvt. Ltd.</strong> | Indore, Madhya Pradesh • Remote
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Collaborated with a distributed team to build and maintain front-end components using React.js and Next.js.
                </li>
                <li>
                  Integrated RESTful APIs and optimized data flow with Node.js and MongoDB for real-time user dashboards.
                </li>
                <li>
                  Worked on real-world projects, mainly focusing on the frontend development side.
                </li>
              </ul>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Developer Intern</h4>
            <span>Aug 2024 – Oct 2024</span>
            <p className="timeline-text">
              <strong>Assist4you</strong> | Hybrid
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Developed and deployed a web-based platform for remote staffing and recruitment services using HTML, CSS, JavaScript, and Node.js.
                </li>
                <li>
                  Implemented SQLite for database management, ensuring efficient data handling and storage.
                </li>
                <li>
                  Collaborated on building scalable solutions for recruitment workflow automation.
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

      {/* Projects Section */}
      {/* <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon name="code-slash-outline" />
          </div>
          <h3 className="h3">Projects</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Trading-Bot – Web Application</h4>
            <span>April 2025</span>
            <p className="timeline-text">
              <strong>Tech Stack:</strong> React.js, Tailwind CSS, MetaTrader 5 (MT5)
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Developed a trading bot web application frontend using React.js and Tailwind CSS.
                </li>
                <li>
                  Integrated with MetaTrader 5 (MT5) backend to enable real-time market data and automated trade execution.
                </li>
                <li>
                  Implemented clean UI/UX for monitoring trades, viewing live charts, and configuring trading parameters.
                </li>
              </ul>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Wanderlust – Airbnb Clone</h4>
            <span>April 2025</span>
            <p className="timeline-text">
              <strong>Tech Stack:</strong> MongoDB, Express.js, Node.js, EJS
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Built a full-stack travel listing web application with user authentication, CRUD operations, and responsive UI.
                </li>
                <li>
                  Implemented image upload with Cloudinary and integrated Mapbox for dynamic map-based location features.
                </li>
                <li>
                  Applied MVC architecture and RESTful APIs for clean, modular backend development using Passport.js and Joi validation.
                </li>
              </ul>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SEO Roofer Web App</h4>
            <span>Jan 2025</span>
            <p className="timeline-text">
              <strong>Tech Stack:</strong> HTML, CSS, JavaScript
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Designed and developed a static website for a roofing service business with SEO-optimized content and responsive layout.
                </li>
                <li>
                  Focused on clean UI/UX and performance optimization to ensure fast load times and enhanced search engine discoverability.
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section> */}

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">Technical Skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Programming Languages</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "var(--light-gray)",
              }}
            >
              JavaScript, C++, HTML, CSS, SQL
            </p>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Frontend Technologies</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "var(--light-gray)",
              }}
            >
              React.js, Next.js, Tailwind CSS, Redux Toolkit
            </p>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend & Database</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "var(--light-gray)",
              }}
            >
              Node.js, MongoDB, SQLite, RESTful APIs
            </p>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Developer Tools & Concepts</h5>
              <data value="85">85%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "var(--light-gray)",
              }}
            >
              Websockets, Object-Oriented Programming, Database Management Systems, MVC Architecture
            </p>
          </li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="skill">
        <h3 className="h3 skills-title">Certifications</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">MERN Stack Development Training</h5>
            </div>
            <p className="timeline-text">
              <strong>Institution:</strong> Apna College
              <br />
              <strong>Duration:</strong> Aug 2024 – Jan 2025
              <br />
              <strong>Skills Learned:</strong> MongoDB, Express.js, React.js, Node.js, Full-Stack Development, RESTful APIs
            </p>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Database Management System Training</h5>
            </div>
            <p className="timeline-text">
              <strong>Institution:</strong> NPTEL
              <br />
              <strong>Duration:</strong> Jan 2022 – Mar 2022
              <br />
              <strong>Skills Learned:</strong> Database Design, SQL Queries, Data Modeling, Database Optimization
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
}
