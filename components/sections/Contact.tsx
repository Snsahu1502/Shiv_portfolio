"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import IonIcon from "@reacticons/ionicons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("uilMgGYmd6CaGt9Pp");
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Fix validation logic - use updated value directly
    const updatedFormData = { ...formData, [name]: value };
    setIsValid(
      updatedFormData.fullname.trim() !== "" &&
        updatedFormData.email.trim() !== "" &&
        updatedFormData.message.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedFormData.email)
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Enhanced logging for debugging
      console.log("Sending email with data:", formData);

      const templateParams = {
        from_name: formData.fullname,
        from_email: formData.email,
        message: formData.message,
        to_name: "Shivnarayan Sahu",
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        "service_o41ls27", // Service ID
        "template_5e5nn5g", // Template ID (now correct format)
        templateParams,
        "uilMgGYmd6CaGt9Pp" // Public Key
      );

      console.log("EmailJS Success:", result);
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form after successful submission
      setFormData({ fullname: "", email: "", message: "" });
      setIsValid(false);
    } catch (error: any) {
      // Enhanced error handling with proper typing
      console.error("Full error details:", {
        error: error,
        message: error?.message,
        status: error?.status,
        text: error?.text,
        name: error?.name,
      });

      // User-friendly error message with more details for debugging
      const errorMessage =
        error?.text || error?.message || "Unknown error occurred";
      alert(
        `Sorry, there was an error sending your message: ${errorMessage}\n\nPlease try again or check the console for more details.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            title="Indore, Madhya Pradesh Location Map"
            style={{ border: 0 }}
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form noValidate>
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
              autoComplete="name"
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
              autoComplete="email"
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
            rows={5}
          />

          <button
            className="form-btn"
            type="submit"
            disabled={!isValid || isSubmitting}
            data-form-btn
          >
            <IonIcon
              name={isSubmitting ? "hourglass-outline" : "paper-plane"}
            />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
