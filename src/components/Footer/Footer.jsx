import React from "react";
import { GitHub, Instagram, Linkedin } from "react-feather";

import './footerStyling.css';
import { Link } from "react-router-dom";
// import './footerStyling.scss';

function Footer() {
  return (
    <div>
      <footer>
        <div className="socials">
          <a href="https://www.instagram.com/rayhans_najib/"
            ><Instagram /></a>
          <a href="https://www.linkedin.com/in/rayhansnajib/"
            ><Linkedin /></a>
          <a href="https://github.com/rayhans358"
            ><GitHub /></a>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/products">Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="credit">
          <p>Created by <Link href="/">InsightCoffee™</Link> | &copy; 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;