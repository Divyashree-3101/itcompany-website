import React from "react";
import "../website.css";

const Home = () => {
  return (
      <div className="home-page">
        <h1>Welcome to DivTech! </h1>
        <p>We provide top-notch IT solutions for your businesses.</p>

        {}
      <div className="mission-vision-section">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At DivTech, our mission is to empower businesses with innovative and scalable 
            digital solutions, enhancing their efficiency and market reach.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We aim to become a global leader in technology solutions, revolutionizing industries 
            through innovation, integrity, and excellence.
          </p>
        </div>
      </div>
      </div>
    
  ); 
};

export default Home;