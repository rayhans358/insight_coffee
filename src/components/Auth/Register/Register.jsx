import React, { useEffect, useRef, useState } from 'react';
import { faFacebookF, faGithub, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./registerStyling.css";
import { registerUser } from '../../../app/api/auth';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,255}$/;
const EMAIL_REGEX = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{3,30}$/;

function Register({ onToggleLogin }) {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

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
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    useRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchFocus);
  }, [pwd, matchPwd]);

  async function handleSubmit(e) {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    };

    try {
      const response = await registerUser({ user, email, pwd });
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
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
      errRef.current.focus();
    };
  };

  return (
    <>
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
    </>
  );
};

export default Register;