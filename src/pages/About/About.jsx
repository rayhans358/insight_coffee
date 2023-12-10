import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import coffee2 from '../../assets/background/coffee2.jpg';

function About () {
  return (
    <div>
      <Navbar/>
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
      <Footer/>
    </div>
  )
}

export default About;