'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import IonIcon from '@reacticons/ionicons'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })
  const [isValid, setIsValid] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Check form validity
    const form = e.target.form
    if (form) {
      setIsValid(form.checkValidity())
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.30706614067!2d75.69919287109375!3d22.723898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            width="400" 
            height="300" 
            loading="lazy"
            title="Indore Location Map"
            style={{ border: 0 }}
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
              data-form-input
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleInputChange}
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
            data-form-input
          />

          <button
            className="form-btn"
            type="submit"
            disabled={!isValid}
            data-form-btn
          >
            <IonIcon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}
