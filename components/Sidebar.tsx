"use client";

import { useState } from "react";
import Image from "next/image";
import IonIcon from "@reacticons/ionicons";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/assets/images/shiiv.png"
            alt="Shivnarayan Sahu"
            width={150}
            height={150}
            priority
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Shivnarayan Sahu">
            Shivnarayan Sahu
          </h1>
          <p className="title">Software Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <IonIcon name="chevron-down" size="large" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon name="mail-outline" size="large" />
            </div>
            <div className="contact-info">
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
            <div className="contact-info">
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
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Indore, Madhya Pradesh, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
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
