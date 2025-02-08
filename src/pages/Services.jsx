import React from "react";
import "../website.css";

const Services = () => {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <p>We provide a wide range of IT solutions tailored to meet your business needs. From web and app development to cloud and digital marketing, we help you stay ahead in the digital world.</p>

      <div className="services-container">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>We build modern, fast, and responsive websites with cutting-edge technologies.</p>
        </div>

        <div className="service-item">
          <h3>Mobile App Development</h3>
          <p>We create high-performance mobile apps for iOS and Android.</p>
        </div>

        <div className="service-item">
          <h3>Cloud Services</h3>
          <p>Scalable, secure, and cost-effective cloud solutions for businesses.</p>
        </div>

        <div className="service-item">
          <h3>SEO & Digital Marketing</h3>
          <p>Maximize your online presence with our SEO & digital marketing strategies.</p>
        </div>

        <div className="service-item">
          <h3>AI & Automation</h3>
          <p>Enhance business efficiency with AI-driven solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
