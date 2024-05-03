import React from 'react';

import './aboutStyling.css';
// import './aboutStyling.scss';

import coffee1 from '../../assets/images/coffee1.jpg';
import coffee2 from '../../assets/images/coffee2.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function About () {
  return (
    <div>
      <Navbar/>
      <section id="about" className="about">
        <h2><span>About</span> Us</h2>

        <div className="row1">
          <div className="about-img1">
            <img src={coffee1} alt='About Us' />
          </div>
          <div className="content1">
            <h3>Why choose coffee at our place?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse ipsum similique dignissimos assumenda nemo?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sit necessitatibus culpa. Rerum explicabo corporis alias enim delectus, quia ipsam.
            </p>
          </div>
        </div>

        <div className="row2">
          <div className="about-img2">
            <img src={coffee2} alt='About Us' />
          </div>
          <div className="content2">
            <h3>About company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, beatae?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, unde. Id veritatis maxime ducimus, dolor placeat quas enim accusantium repellendus!
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;