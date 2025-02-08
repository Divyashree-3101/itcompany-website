// import React from "react";
// import "../website.css";

// const Portfolio = () => {
//   return (
//     <div className="portfolio-page">
//       <h2>Our Projects</h2>
//       <div className="portfolio-container">
//         <div className="portfolio-item">
//           <h3>Project 1</h3>
//           <p>Modern business website with interactive UI.</p>
//         </div>
//         <div className="portfolio-item">
//           <h3>Project 2</h3>
//           <p>E-commerce platform with payment integration.</p>
//         </div>
//         <div className="portfolio-item">
//           <h3>Project 3</h3>
//           <p>Cloud-based data storage system.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import "../website.css";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h2>Our Projects</h2>
      <p>We have successfully delivered a variety of innovative projects across multiple industries. Here’s a glimpse of some of our key projects:</p>

      <div className="portfolio-container">
        <div className="portfolio-item">
          <h3>Business Website</h3>
          <p>A modern business website with interactive UI and real-time updates.</p>
        </div>

        <div className="portfolio-item">
          <h3>E-commerce Platform</h3>
          <p>Fully functional online store with seamless payment gateway integration.</p>
        </div>

        <div className="portfolio-item">
          <h3>Cloud Data Storage System</h3>
          <p>Secure and scalable cloud storage solution for enterprises.</p>
        </div>

        <div className="portfolio-item">
          <h3>Mobile App for Healthcare</h3>
          <p>A telemedicine app for seamless doctor-patient interactions.</p>
        </div>

        <div className="portfolio-item">
          <h3>AI Chatbot for Customer Support</h3>
          <p>An intelligent chatbot that provides automated support for businesses.</p>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
