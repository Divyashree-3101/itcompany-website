import React from "react";
import "../website.css";

const About = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <h2>About Us</h2>
      <p>
        DivTech is a leading IT solutions provider, committed to delivering cutting-edge 
        technology services that drive business success.
      </p>

      <div className="achievements">
        <h2>Our Achievements</h2>
        <div className="achievement-stats">
          <div className="stat">
            <h3>100+</h3>
            <p>Successful Projects</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Years in Business</p>
          </div>
        </div>
      </div>

      {/* Our Team Section (Optional) */}
      <div className="our-team-section">
        <h2>Meet Our Team</h2>
        <p>We are a group of passionate innovators, developers, and designers dedicated to delivering excellence.</p>
      </div>
    </div>
  );
};

export default About;
