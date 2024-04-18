import React, { useContext, useEffect, useRef, useState } from 'react';
import { faFacebookF, faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import "./loginStyling.css";

import logInUser from "../../../assets/images/logIn.png";
import { loginUser } from '../../../app/api/auth';
import AuthContext from '../../../app/context/AuthProvider';

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef(null);
  const errRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus()
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email,password]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });
      const fullName = response?.data?.user?.fullName;
      const accessToken = response?.data?.token;
      console.log(accessToken, "accessToken");

      localStorage.setItem("auth", JSON.stringify({
        user: response.data.user,
        token: accessToken
      }));

      Swal.fire({
        imageUrl: logInUser,
        imageWidth: 225,
        imageHeight: 225,
        imageAlt: logInUser,
        title: `Welcome Back, ${fullName}!`,
        showConfirmButton: false,
        timer: 1500
      });

      setAuth({ 
        email,
        password,
        accessToken
      });

      setEmail('');
      setPassword('');
      navigate("/account/dashboard");

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      };
      if (err.current) errRef.current.focus();
    };
  };

  return (
    <section className="login" id="login">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="email">
          Email : 
        </label>
        <input 
          type="email" 
          placeholder="Email"
          id="email"
          ref={emailRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required 
        />

        <label htmlFor="password">
          Password : 
        </label>
        <input 
          type="password" 
          placeholder="Password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required 
        />

        <span>Forgot Your Password?</span>
        <div className="text-login">
          <h4>Don't have an account?</h4>
          <h4 className="is-login" onClick={() => {navigate('/account/register')}}>Sign Up</h4>
        </div>
        <button>Log In</button>
      </form>
    </section>
  );
};

export default Login;