import React from "react";
import "../website.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Email: info@divtech.com</p>
      <p>Phone: +123 456 7890</p>
      <div className="social-media">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <form className="contact-form">
        <textarea placeholder="Enter your message here..."></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;