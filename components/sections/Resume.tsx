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
              <strong>CGPA:</strong> 7.68 / 10.00 | Indore, Madhya Pradesh
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Scholars Academy</h4>
            <span>2020</span>
            <p className="timeline-text">Senior Secondary Education</p>
            <p className="timeline-text">
              <strong>Percentage:</strong> 62% | Shujalpur, Madhya Pradesh
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Scholars Academy</h4>
            <span>2018</span>
            <p className="timeline-text">Secondary Education</p>
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
            <h4 className="h4 timeline-item-title">
              Software Developer Intern
            </h4>
            <span>Jun 2025 – Sept 2025</span>
            <p className="timeline-text">
              <strong>WebSeeder Technologies Pvt. Ltd.</strong> | Indore, Madhya
              Pradesh (Remote)
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Collaborated with a distributed team to build and maintain
                  front-end components using React.js and Tailwind CSS.
                </li>
                <li>
                  Integrated RESTful APIs and optimized data flow with Node.js
                  and MongoDB for real-time user dashboards.
                </li>
                <li>
                  Working on Real World Projects, mainly on Frontend side.
                </li>
              </ul>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Full Stack Developer</h4>
            <span>Aug 2024 – Oct 2024</span>
            <p className="timeline-text">
              <strong>
                Assist4you – Remote Staffing and Recruitment Platform
              </strong>{" "}
              | Hybrid
            </p>
            <div className="timeline-text">
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                <li>
                  Developed and deployed a web-based platform for remote
                  staffing and recruitment services.
                </li>
                <li>
                  Implemented SQLite for database management, ensuring efficient
                  data handling and storage.
                </li>
                <li>
                  Built responsive UI components with HTML, CSS, and JavaScript.
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>

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
              C++, HTML, CSS, JavaScript, Python, SQL
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
              React.js, Next.js, Tailwind CSS, REST APIs
            </p>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend & Database</h5>
              <data value="75">75%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p
              style={{
                marginTop: "8px",
                fontSize: "14px",
                color: "var(--light-gray)",
              }}
            >
              Node.js, Express.js, MongoDB, SQLite3
            </p>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Core Concepts</h5>
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
              Object Oriented Programming, Database Management System
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
              <strong>Skills Learned:</strong> MongoDB, Express.js, React.js,
              Node.js, Full-stack Development
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
              <strong>Skills Learned:</strong> SQL, Database Design,
              Normalization, Query Optimization
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
}
