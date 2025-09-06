"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Trading-Bot",
      category: "web development",
      image: "/assets/images/project-1.jpg",
      tech: "React.js, Tailwind CSS, MetaTrader 5",
    },
    {
      id: 2,
      title: "Wanderlust",
      category: "web development",
      image: "/assets/images/project-2.png",
      tech: "MongoDB, Express.js, Node.js, EJS",
    },
    {
      id: 3,
      title: "SEO Roofer Web App",
      category: "web design",
      image: "/assets/images/project-3.jpg",
      tech: "HTML, CSS, JavaScript",
    },
    {
      id: 4,
      title: "Assist4you Platform",
      category: "web development",
      image: "/assets/images/project-4.png",
      tech: "HTML, CSS, JavaScript, Node.js, SQLite3",
    },
  ];

  const filterOptions = ["All", "Web design", "Web development"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter.toLowerCase());
  };

  const handleSelectClick = (filter: string) => {
    setActiveFilter(filter.toLowerCase());
    setSelectOpen(false);
  };

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const getGridColumns = () => {
    switch (screenSize) {
      case "mobile":
        return "1fr";
      case "tablet":
        return "repeat(2, 1fr)";
      case "desktop":
      default:
        return "repeat(3, 1fr)";
    }
  };

  const getImageHeight = () => {
    switch (screenSize) {
      case "mobile":
        return "180px";
      case "tablet":
        return "220px";
      case "desktop":
      default:
        return "200px";
    }
  };

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
                className={
                  activeFilter === filter.toLowerCase() ? "active" : ""
                }
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
            className={`filter-select ${selectOpen ? "active" : ""}`}
            onClick={() => setSelectOpen(!selectOpen)}
            data-select
          >
            <div className="select-value">
              {activeFilter === "all" ? "Select category" : activeFilter}
            </div>
            <div className="select-icon">
              <IonIcon name="chevron-down" />
            </div>
          </button>

          <ul className="select-list">
            {filterOptions.map((filter) => (
              <li key={filter} className="select-item">
                <button onClick={() => handleSelectClick(filter)}>
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul
          className="project-list"
          style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(),
            gap: screenSize === "mobile" ? "20px" : "30px",
            marginBottom: "10px",
            padding: "0",
            listStyle: "none",
          }}
        >
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active"
              style={{ display: "block" }}
            >
              <a
                href="#"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <figure
                  className="project-img"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: getImageHeight(),
                    borderRadius: "16px",
                    overflow: "hidden",
                    marginBottom: "15px",
                    backgroundColor: "var(--eerie-black-1)",
                  }}
                >
                  <div
                    className="project-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                      zIndex: 1,
                    }}
                  />

                  <div
                    className="project-icon"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "var(--jet)",
                      color: "var(--orange-yellow-crayola)",
                      padding: "18px",
                      borderRadius: "12px",
                      opacity: 0,
                      transition: "opacity 0.25s ease",
                      zIndex: 2,
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </figure>

                <div style={{ padding: "0 10px" }}>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.tech}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .project-img:hover .project-overlay {
          opacity: 0.5 !important;
        }

        .project-img:hover .project-icon {
          opacity: 1 !important;
        }

        .project-img:hover img {
          transform: scale(1.1) !important;
        }
      `}</style>
    </article>
  );
}
