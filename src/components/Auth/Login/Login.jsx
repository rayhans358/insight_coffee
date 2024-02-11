import React from 'react';
import { faFacebookF, faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./loginStyling.css";

function Login({ onToggleLogin }) {
  return (
    <div className="login">
      <form>
        <h1>Log In</h1>
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
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <span>Forgot Your Password?</span>
        <h4 style={{display: 'flex', gap: '10px'}}>Don't have an account? <h4 className="is-login" onClick={onToggleLogin}>Sign Up</h4></h4>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;