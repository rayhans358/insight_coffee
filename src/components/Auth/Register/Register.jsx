import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import "./registerStyling.css";
import created from "../../../assets/images/createdAccount.png";
import { registerUser } from '../../../app/api/auth';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,255}$/;
const EMAIL_REGEX = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,30}$/;

function Register({ onToggleLogin }) {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  async function handleSubmit(e) {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    };

    try {
      const response = await registerUser({ user, email, pwd });
      console.log(response?.data, "68");
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
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
            onToggleLogin();
          };
        });
      setUser('');
      setEmail('');
      setPwd('');
      setMatchPwd('');

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
        <label htmlFor="username">
          Username :
          <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
        </label>
        <input 
          type="text"
          placeholder="Username" 
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
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

        <label htmlFor="password">
          Password :
          <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
        </label>
        <input 
          type="password" 
          placeholder="Password"
          id="password" 
          autoComplete="off"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />
          3 to 30 characters. <br/>
          Must include at least one letter character (lowercase or uppercase) as well as one number character.
        </p>

        <label htmlFor="confirm_pwd">
          Confirm Password :
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
        </label>
        <input 
          type="password"
          placeholder="Confirm Password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          value={matchPwd}
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

        <h4 style={{display: 'flex', gap: '10px'}}>Already have an account? <h4 className="is-login" onClick={onToggleLogin}>Log In</h4></h4>
        <button disabled={!validName || !validEmail || !validPwd || !validMatch}>Sign Up</button>
      </form>
    </section>
  );
};

export default Register;