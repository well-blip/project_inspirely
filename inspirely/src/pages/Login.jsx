import React from "react";
import '../components/Authenticate/signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import SignUpImage from '../components/Authenticate/SignUpImage.jsx';
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, getAuth } from "firebase/auth";
import { app, auth, googleAuthProvider } from '../firebase.js';
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';
import ForgotPassword from "./ForgotPassword.jsx"

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  //authenticates the user credentials
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      window.location.replace("http://localhost:3002/");

    } catch (error) {
      console.error('Error signing up:', error.message);
    }

    console.log("Created user")
  }

  //authenticates the user with google credentials
  const handleLogInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      localStorage.setItem('user', auth.currentUser.displayName);
      console.log(auth.currentUser.displayName);
      localStorage.setItem('token', result.user.accessToken);
      // localStorage.setItem('user', JSON.stringify(result.user));
      window.location.replace("http://localhost:3002/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="signup-container">
      <SignUpImage />
      <div className="signup-content">
        <div className="head">
          <h1 className="heading1">Log in</h1>
          <p className="paragraph">Please fill your information below</p>
        </div>
        <div className="email">
          <MdEmail style={{ fontSize: '40px', margin: '5px 20px', color: "grey" }} />
          <input type="email" placeholder="Enter your e-mail" onChange={(event) => { setEmail(event.target.value); }} />
        </div>
        <div className="password">
          <MdOutlinePassword style={{ fontSize: '40px', margin: '5px 20px', color: "grey" }} />
          <input type="password" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value); }} />
        </div>
        <GoogleButton style={{ backgroundColor: '#f5f5f5', color: '#333', border: 'none', padding: '8px 20px', borderRadius: '4px' }}
          onClick={handleLogInWithGoogle}
        />
        <div className="forgot-password">
          <a href="./reset" >Forgot Password?</a>
        </div>
        <div className="forgot-password">
          <a href="./signup" style={{ fontWeight: "bold", color: '#23022E' }} >Don't have an account?</a>
        </div>
        <div className="actions">

          <button className="next-login" onClick={handleLogin}>   Next    <span style={{ marginLeft: '20px' }}> {'>'}</span></button>

        </div>
      </div>
    </div>
  );
};

export default Login;
