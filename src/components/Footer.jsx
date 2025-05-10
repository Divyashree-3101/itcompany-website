import React from 'react';
import "../website.css";
const Footer = () => {
  return (
    <footer className='footer' >
      <p>&copy; {new Date().getFullYear()} DivTech. All rights reserved.</p>
    </footer>
  );
};



export default Footer;
