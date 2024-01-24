import React from "react";
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import SignUpImage from '../components/signUpImage';
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app, auth, googleAuthProvider } from '../firebase.js';
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';

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
      navigate("/");

    } catch (error) {
      console.error('Error signing up:', error.message);
    }

    console.log("Created user")
  }

  //authenticates the user with google credentials
  const handleLogInWithGoogle = async() =>{
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem('token', result.user.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigate("/");
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
        <GoogleButton  style={{backgroundColor:'#f5f5f5',color:'#333', border:'none',padding:'8px 20px', borderRadius:'4px'}}
          onClick={handleLogInWithGoogle }
        />
        <div className="forgot-password">
          <a href="https://www.google.com" >Forgot Password or Username</a>
        </div>
        <div className="forgot-password">
          <a href="./signup" >Dont have an account?</a>
        </div>
        <div className="actions">

          <button className="next-login" onClick={handleLogin}>   Next    <span style={{ marginLeft: '20px' }}> {'>'}</span></button>

        </div>
      </div>
    </div>
  );
};

export default Login;
