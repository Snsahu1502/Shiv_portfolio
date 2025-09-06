'use client'

import Image from 'next/image'
import IonIcon from '@reacticons/ionicons'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  testimonial: {
    avatar: string
    name: string
    text: string
  } | null
}

export default function Modal({ isOpen, onClose, testimonial }: ModalProps) {
  if (!isOpen || !testimonial) return null

  return (
    <div className={`modal-container ${isOpen ? 'active' : ''}`} data-modal-container>
      <div 
        className={`overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
        data-overlay
      ></div>

      <section className="testimonials-modal">
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          data-modal-close-btn
        >
          <IonIcon name="close-outline" />
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <Image 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              width={80} 
              height={80}
              data-modal-img
            />
          </figure>
          <Image 
            src="/assets/images/icon-quote.svg" 
            alt="quote icon" 
            width={35} 
            height={35}
          />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {testimonial.name}
          </h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div data-modal-text>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
