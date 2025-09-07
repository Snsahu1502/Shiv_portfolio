"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure 
          className="avatar-box"
          style={isMobile ? {
            // Mobile styles (≤450px) - Updated compact version
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            padding: '6px',
            backgroundColor: 'var(--bg-gradient-onyx)',
            borderRadius: '50%',
            width: 'fit-content',
            height: 'fit-content'
          } : {
            // Desktop styles (>450px) - Original version  
            padding: '10px',
            backgroundColor: 'var(--bg-gradient-onyx)',
            borderRadius: '20px',
            width: 'fit-content',
            height: 'fit-content',
            margin: '0'
          }}
        >
          <Image
            src="/assets/images/shiiv.png"
            alt="Shivnarayan Sahu"
            width={isMobile ? 70 : 150}
            height={isMobile ? 70 : 150}
            priority
            style={isMobile ? {
              // Mobile styles
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              objectFit: 'cover',
              transition: 'width 0.3s ease, height 0.3s ease'
            } : {
              // Desktop styles
              width: '150px',
              height: '150px',
              borderRadius: '20px',
              objectFit: 'cover',
              transition: 'width 0.3s ease, height 0.3s ease'
            }}
          />
        </figure>

        <div 
          className="info-content"
          style={isMobile ? {
            // Mobile styles - centered
            textAlign: 'center'
          } : {
            // Desktop styles - left aligned
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            textAlign: 'left'
          }}
        >
          <h1 
            className="name" 
            title="Shivnarayan Sahu"
            style={isMobile ? {
              // Mobile styles
              fontSize: '1.1rem',
              marginBottom: '8px',
              whiteSpace: 'nowrap',
              transition: 'font-size 0.3s ease'
            } : {
              // Desktop styles
              fontSize: '1.5rem',
              marginBottom: '10px',
              whiteSpace: 'nowrap'
            }}
          >
            Shivnarayan Sahu
          </h1>
          <p 
            className="title"
            style={isMobile ? {
              // Mobile styles
              fontSize: '0.75rem',
              margin: '0 auto',
              marginTop: '-5px',
              transition: 'font-size 0.3s ease'
            } : {
              // Desktop styles
              fontSize: '1rem',
              margin: '0'
            }}
          >
            Software Developer
          </p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
          data-sidebar-btn
          style={isMobile ? {
            // Mobile styles
            position: 'absolute',
            top: '-15px',
            right: '-15px',
            padding: '8px',
            fontSize: '6px'
          } : {
            // Desktop styles
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            padding: '12px 15px',
            fontSize: '14px'
          }}
        >
          <span>Show Contacts</span>
          <IonIcon 
            name="chevron-down" 
            size="large"
            style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul 
          className="contacts-list"
          style={{
            gap: isMobile ? '12px' : '20px'
          }}
        >
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="mail-outline" size="large" />
            </div>
            <div 
              className="contact-info"
              style={{
                fontSize: isMobile ? '11px' : '14px'
              }}
            >
              <p className="contact-title">Email</p>
              <a href="mailto:sahushiva1502@gmail.com" className="contact-link">
                sahushiva1502@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="phone-portrait-outline" size="large" />
            </div>
            <div 
              className="contact-info"
              style={{
                fontSize: isMobile ? '11px' : '14px'
              }}
            >
              <p className="contact-title">Phone</p>
              <a href="tel:+918085264961" className="contact-link">
                +91 8085264961
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="location-outline" size="large" />
            </div>
            <div 
              className="contact-info"
              style={{
                fontSize: isMobile ? '11px' : '14px'
              }}
            >
              <p className="contact-title">Location</p>
              <address>Indore, Madhya Pradesh, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul 
          className="social-list"
          style={{
            gap: isMobile ? '15px' : '20px',
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}
        >
          <li className="social-item">
            <a
              href="https://linkedin.com/in/shivnarayan-sahu-46845219a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IonIcon name="logo-linkedin" size="large" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Snsahu1502"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <IonIcon name="logo-github" size="large" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
