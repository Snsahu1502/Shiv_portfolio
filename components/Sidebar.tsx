"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setScreenSize('mobile');
      } else if (width <= 768) {
        setScreenSize('tablet');
      } else if (width <= 1024) {
        setScreenSize('small-desktop');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get responsive image size
  const getImageSize = () => {
    switch (screenSize) {
      case 'mobile': return 70;
      case 'tablet': return 90;
      case 'small-desktop': return 110;
      case 'desktop': 
      default: return 120;
    }
  };

  // Get responsive font sizes
  const getNameFontSize = () => {
    switch (screenSize) {
      case 'mobile': return '1rem';
      case 'tablet': return '1.1rem';
      case 'small-desktop': return '1.2rem';
      case 'desktop':
      default: return '1.3rem';
    }
  };

  const getTitleFontSize = () => {
    switch (screenSize) {
      case 'mobile': return '0.7rem';
      case 'tablet': return '0.75rem';
      case 'small-desktop': return '0.8rem';
      case 'desktop':
      default: return '0.85rem';
    }
  };

  // Get responsive icon size
  const getIconSize = () => {
    switch (screenSize) {
      case 'mobile': return 'small';
      case 'tablet': return 'small';
      case 'small-desktop': return 'small';
      case 'desktop':
      default: return 'large';
    }
  };

  const imageSize = getImageSize();

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure 
          className="avatar-box"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            padding: screenSize === 'mobile' ? '4px' : '8px',
            backgroundColor: 'var(--bg-gradient-onyx)',
            borderRadius: '50%',
            width: 'fit-content',
            height: 'fit-content'
          }}
        >
          <Image
            src="/assets/images/my-avatar.png"
            alt="Shivnarayan Sahu"
            width={imageSize}
            height={imageSize}
            priority
            style={{
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              borderRadius: '50%',
              objectFit: 'cover',
              transition: 'width 0.3s ease, height 0.3s ease'
            }}
          />
        </figure>

        <div className="info-content">
          <h1 
            className="name" 
            title="Shivnarayan Sahu"
            style={{ 
              fontSize: getNameFontSize(),
              textAlign: 'center',
              transition: 'font-size 0.3s ease'
            }}
          >
            Shivnarayan Sahu
          </h1>
          <p 
            className="title"
            style={{ 
              fontSize: getTitleFontSize(),
              textAlign: 'center',
              transition: 'font-size 0.3s ease'
            }}
          >
            Software Developer
          </p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
          data-sidebar-btn
          style={{
            fontSize: getTitleFontSize(),
            padding: screenSize === 'mobile' ? '6px 10px' : '10px 15px',
            transition: 'all 0.3s ease'
          }}
        >
          <span>Show Contacts</span>
          <IonIcon 
            name="chevron-down" 
            size={getIconSize()}
            style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="mail-outline" size={getIconSize()} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a 
                href="mailto:sahushiva1502@gmail.com" 
                className="contact-link"
                style={{
                  fontSize: screenSize === 'mobile' ? '0.65rem' : '0.75rem',
                  wordBreak: 'break-all',
                  lineHeight: '1.3'
                }}
              >
                sahushiva1502@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="phone-portrait-outline" size={getIconSize()} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a 
                href="tel:+918085264961" 
                className="contact-link"
                style={{ 
                  fontSize: screenSize === 'mobile' ? '0.75rem' : '0.85rem' 
                }}
              >
                +91 8085264961
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="location-outline" size={getIconSize()} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address 
                style={{ 
                  fontSize: screenSize === 'mobile' ? '0.65rem' : '0.75rem',
                  lineHeight: '1.3'
                }}
              >
                Indore, Madhya Pradesh, India
              </address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul 
          className="social-list"
          style={{
            justifyContent: 'center',
            gap: screenSize === 'mobile' ? '15px' : '20px'
          }}
        >
          <li className="social-item">
            <a
              href="https://linkedin.com/in/shivnarayan-sahu-46845219a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                padding: screenSize === 'mobile' ? '6px' : '8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <IonIcon name="logo-linkedin" size={getIconSize()} />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Snsahu1502"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{
                padding: screenSize === 'mobile' ? '6px' : '8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <IonIcon name="logo-github" size={getIconSize()} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
