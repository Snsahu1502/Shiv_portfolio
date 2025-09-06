"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Blog() {
  const [screenSize, setScreenSize] = useState("desktop");

  // Handle responsive grid columns
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

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      category: "React",
      date: "2024-12-01",
      image: "/assets/images/blog-1.jpg",
      excerpt:
        "Deep dive into React Hooks and how they revolutionized functional components in modern React development.",
    },
    {
      id: 2,
      title: "Next.js 14 App Router Guide",
      category: "Next.js",
      date: "2024-11-15",
      image: "/assets/images/blog-2.jpg",
      excerpt:
        "Complete guide to building applications with Next.js 14 App Router and server components.",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      category: "CSS",
      date: "2024-11-01",
      image: "/assets/images/blog-3.jpg",
      excerpt:
        "Exploring modern CSS features like Grid, Flexbox, and Custom Properties for better web design.",
    },
    {
      id: 4,
      title: "Building Scalable APIs",
      category: "Node.js",
      date: "2024-10-20",
      image: "/assets/images/blog-4.jpg",
      excerpt:
        "How to design and implement scalable RESTful APIs with Node.js, Express, and MongoDB.",
    },
    {
      id: 5,
      title: "TypeScript Best Practices",
      category: "TypeScript",
      date: "2024-10-05",
      image: "/assets/images/blog-5.jpg",
      excerpt:
        "Essential TypeScript patterns and best practices for writing maintainable code.",
    },
    {
      id: 6,
      title: "Database Design Principles",
      category: "Database",
      date: "2024-09-25",
      image: "/assets/images/blog-6.jpg",
      excerpt:
        "Fundamental principles of database design, normalization, and optimization techniques.",
    },
  ];

  // Define responsive grid columns
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

  // Define responsive image height
  const getImageHeight = () => {
    switch (screenSize) {
      case "mobile":
        return "200px";
      case "tablet":
        return "220px";
      case "desktop":
      default:
        return "200px";
    }
  };

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul
          className="blog-posts-list"
          style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(),
            gap: screenSize === "mobile" ? "20px" : "30px",
            marginBottom: "10px",
            padding: "0",
            listStyle: "none",
          }}
        >
          {blogPosts.map((post) => (
            <li
              key={post.id}
              className="blog-post-item"
              style={{
                display: "block",
                animation: "scaleUp 0.25s ease forwards",
              }}
            >
              <a
                href="#"
                aria-label={`Read blog post: ${post.title}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  position: "relative",
                  background: "var(--border-gradient-onyx)",
                  height: "100%",
                  boxShadow: "var(--shadow-4)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = "translateY(-5px)";
                  target.style.boxShadow = "0 20px 40px hsla(0, 0%, 0%, 0.3)";

                  const img = target.querySelector("img");
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "var(--shadow-4)";

                  const img = target.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* Background overlay for gradient border effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: "1px",
                    borderRadius: "inherit",
                    background: "var(--eerie-black-1)",
                    zIndex: -1,
                  }}
                />

                <figure
                  className="blog-banner-box"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: getImageHeight(),
                    borderRadius: "12px 12px 0 0",
                    overflow: "hidden",
                    backgroundColor: "var(--eerie-black-1)",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes={`(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </figure>

                <div
                  className="blog-content"
                  style={{
                    padding: screenSize === "mobile" ? "15px" : "20px",
                  }}
                >
                  <div
                    className="blog-meta"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "7px",
                      marginBottom: "10px",
                    }}
                  >
                    <p
                      className="blog-category"
                      style={{
                        color: "var(--light-gray-70)",
                        fontSize: screenSize === "mobile" ? "12px" : "14px",
                        fontWeight: "var(--fw-300)",
                        textTransform: "capitalize",
                      }}
                    >
                      {post.category}
                    </p>
                    <span
                      className="dot"
                      style={{
                        background: "var(--light-gray-70)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "4px",
                      }}
                    />
                    <time
                      dateTime={post.date}
                      style={{
                        color: "var(--light-gray-70)",
                        fontSize: screenSize === "mobile" ? "12px" : "14px",
                        fontWeight: "var(--fw-300)",
                      }}
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <h3
                    className="h3 blog-item-title"
                    style={{
                      marginBottom: "10px",
                      lineHeight: "1.3",
                      color: "var(--white-2)",
                      fontSize: screenSize === "mobile" ? "16px" : "18px",
                      fontWeight: "var(--fw-500)",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="blog-text"
                    style={{
                      color: "var(--light-gray)",
                      fontSize: screenSize === "mobile" ? "13px" : "14px",
                      fontWeight: "var(--fw-300)",
                      lineHeight: "1.6",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
