import React from "react";
import { GitHub, Instagram, Linkedin } from "react-feather";

// import '../styles/css/footerStyling.css';
import '../styles/scss/footerStyling.css';

function Footer() {
  return (
    <div>
      <footer>
        <div class="socials">
          <a href="https://www.instagram.com/rayhans_najib/"
            ><Instagram /></a>
          <a href="https://www.linkedin.com/in/rayhansnajib/"
            ><Linkedin /></a>
          <a href="https://github.com/rayhans358"
            ><GitHub /></a>
        </div>

        <div class="links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
        </div>

        <div class="credit">
          <p>Created by <a href="/">InsightCoffee™</a> | &copy; 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;