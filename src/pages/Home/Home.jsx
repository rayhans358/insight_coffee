import React from 'react';
import { Link } from 'react-router-dom';
import { AtSign, Phone, User } from 'react-feather';

import './homeStyling.css';

import coffee2 from '../../assets/background/coffee2.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function Home() {
  return (
    <div>
      <Navbar/>
      {/* Hero Section start */}
      <section className="hero" id="home">
        <main className="content">
          <h1>Welcome to <span>InsightCoffee™</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolorem.
          </p>
          <Link to="/products" className="cta">
            Beli Sekarang
          </Link>
        </main>
      </section>
      {/* Hero Section end */}

      {/* About Section start */}
      <section id="about" className="about">
        <h2><span>About</span> Us</h2>

        <div className="row">
          <div className="about-img">
            <img src={coffee2} alt='About Us' />
          </div>
          <div className="content">
            <h3>Why choose coffee at our place?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse ipsum similique dignissimos assumenda nemo?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sit necessitatibus culpa. Rerum explicabo corporis alias enim delectus, quia ipsam.
            </p>
          </div>
        </div>
      </section>
      {/* About Section end */}

      {/* Contact Section start */}
      <section id="contact" className="contact">
        <h2><span>Contact</span> Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, praesentium.
        </p>

        <div className="row">
          <iframe title='Google Maps'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127674.16212503688!2d109.26150939040959!3d-0.035223154242285955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58f604b0799b%3A0x511ef9501fc9ffe3!2sPontianak%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat!5e0!3m2!1sid!2sid!4v1679159534634!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>

          <form action="">
            <div className="input-group">
              <User/>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <AtSign/>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-group">
              <Phone/>
              <input type="text" placeholder="Phone" />
            </div>
            <button type="submit" className="button">kirim pesan</button>
          </form>
        </div>
      </section>
      {/* Contact Section end */}
      <Footer/>
    </div>
  );
};

export default Home;