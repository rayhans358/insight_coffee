import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import "./registerStyling.css";

import created from "../../../assets/images/createdAccount.png";
import { registerUser } from '../../../app/api/auth';
import { useNavigate } from 'react-router-dom';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,255}$/;
const EMAIL_REGEX = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const PHONE_NUMBER_REGEX = /^[0-9]{9,15}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,30}$/;

function Register() {
  const navigate = useNavigate();
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const errRef = useRef(null);

  const [fullName, setFullName] = useState('');
  const [validFullName, setValidFullName] = useState(false);
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFullName(USER_REGEX.test(fullName));
  }, [fullName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhoneNumber(PHONE_NUMBER_REGEX.test(phoneNumber));
  }, [phoneNumber]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  async function handleSubmit(e) {
    e.preventDefault();

    const v1 = USER_REGEX.test(fullName);
    const v2 = PWD_REGEX.test(password);
    const v3 = PHONE_NUMBER_REGEX.test(phoneNumber);
    const v4 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    };

    try {
      const response = await registerUser({ fullName, email, phoneNumber, password });
      console.log(response?.data, "68");
      // console.log(JSON.stringify(response));
      Swal.fire({
        imageUrl: created,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Created Account image",
        title: "Congratulations!",
        text: "Your account has been successfully created. Please go to the Log In page.",
        confirmButtonText: "Log In"
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate('/account/login');
          };
        });
      setFullName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setMatchPassword('');

    } catch (err) {
      if(!err?.response) {
        setErrMsg('No Server Response');
      } else if(err.response?.status === 409 ) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      };
      if (errRef.current) errRef.current.focus();
    };
  };

  return (
    <section className="register" id="register">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Create Account</h1>
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
        <label htmlFor="fullName">
          Full Name :
          <FontAwesomeIcon icon={faCheck} className={validFullName ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validFullName || !fullName ? "hide" : "invalid"} />
        </label>
        <input 
          type="text"
          placeholder="Full Name" 
          id="fullName"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
          aria-invalid={validFullName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setFullNameFocus(true)}
          onBlur={() => setFullNameFocus(false)}
        />
        <p id="uidnote" className={fullNameFocus && fullName && !validFullName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          3 to 255 characters. <br />
          Must begin with a letter.<br />
          Letters, numbers, underscores and hyphens allowed.
        </p>

        <label htmlFor="email">
          Email :
          <FontAwesomeIcon icon={faCheck} className={validEmail && email ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
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
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailnote"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Please fill in your email address correctly.
        </p>

        <label htmlFor="phone">
          Phone Number :
          <FontAwesomeIcon icon={faCheck} className={validPhoneNumber ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validPhoneNumber || !phoneNumber ? "hide" : "invalid"} />
        </label>
        <input 
          type="text"
          placeholder="Phone Number" 
          id="phone"
          ref={phoneRef}
          autoComplete="off"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          required
          aria-invalid={validPhoneNumber ? "false" : "true"}
          aria-describedby="phonenote"
          onFocus={() => setPhoneNumberFocus(true)}
          onBlur={() => setPhoneNumberFocus(false)}
        />
        <p id="phonenote" className={phoneNumberFocus && phoneNumber && !validPhoneNumber ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Must be 9 to 15 digits.
        </p>

        <label htmlFor="password">
          Password :
          <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
        </label>
        <input 
          type="password" 
          placeholder="Password"
          id="password" 
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          aria-invalid={validPassword ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          3 to 30 characters. <br/>
          Must include at least one letter character (lowercase or uppercase) as well as one number character.
        </p>

        <label htmlFor="confirm_pwd">
          Confirm Password :
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
        </label>
        <input 
          type="password"
          placeholder="Confirm Password"
          id="confirm_pwd"
          onChange={(e) => setMatchPassword(e.target.value)}
          value={matchPassword}
          required
          aria-invalid={validMatch ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)} 
        />
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>

        <div className="text-register">
          <h4>Already have an account? </h4>
          <h4 className="is-register" onClick={() => navigate('/account/login')}>Log In</h4>
        </div>
        <button disabled={!validFullName || !validEmail || !validPassword || !validMatch}>Sign Up</button>
      </form>
    </section>
  );
};

export default Register;