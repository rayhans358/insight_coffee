import React from 'react';
import { faFacebookF, faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./registerStyling.css";

function Register({ onToggleLogin }) {
  return (
    <div className="register">
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          <i className="icon">
            <FontAwesomeIcon icon={faGoogle}/>
          </i>
          <i className="icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </i>
          <i className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </i>
          <i className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
        </div>
        <span>or use your email and password</span>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <h4 style={{display: 'flex', gap: '10px'}}>Already have an account? <h4 className="is-login" onClick={onToggleLogin}>Log In</h4></h4>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;