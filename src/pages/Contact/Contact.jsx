import React from "react";
import { AtSign, Phone, User } from "react-feather";

import "./contactStyling.css";

import cart1 from "../../assets/images/cart1.jpg";
import cart2 from "../../assets/images/cart2.jpg";
import cart3 from "../../assets/images/cart3.jpg";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar/>
      {/* Contact Form */}
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
            <h2><span>Kritik</span> dan <span>Saran</span></h2>
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

      {/* Testimoni */}
      <section id="testimoni" className="testimoni">
        <div className="head-testi">
          <h2><span>Testi</span>moni</h2>
          <p>Testimoni dari pelanggan kami</p>
        </div>
        <div className="row">
          <div className="body-testi">
            <div className="testi-name">
              <h3 className="name">Khalid Khasmiri</h3>
            </div>
            <div className="testi-image center">
              <img src={cart1} alt="cart1" />
            </div>
            <div className="testi-desc">
              <div className="testi-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae nostrum ducimus neque delectus debitis. Optio nesciunt modi deserunt officiis!</p>
              </div>
            </div>
          </div>
          <div className="body-testi">
            <div className="testi-name">
              <h3 className="name">Khidir Karawita</h3>
            </div>
            <div className="testi-image center">
              <img src={cart2} alt="cart2" />
            </div>
            <div className="testi-desc">
              <div className="testi-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae nostrum ducimus neque delectus debitis. Optio nesciunt modi deserunt officiis!</p>
              </div>
            </div>
          </div>
          <div className="body-testi">
            <div className="testi-name">
              <h3 className="name">Ismail Ahmad Kanabawi</h3>
            </div>
            <div className="testi-image center">
              <img src={cart3} alt="cart3" />
            </div>
            <div className="testi-desc">
              <div className="testi-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae nostrum ducimus neque delectus debitis. Optio nesciunt modi deserunt officiis!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
};

export default Contact;