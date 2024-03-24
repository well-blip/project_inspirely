import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import '../ForgotPassword.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import Login from './Login.jsx';
import { auth } from '../firebase.js'
import { useNavigate } from 'react-router-dom';




const ForgotPassword = () => {

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e);
    const emalVal = document.getElementById('forgot-email').value;
    sendPasswordResetEmail(auth, emalVal).then(data => {
      alert("Check your gmail")
      history("/")
    }).catch(err => {
      alert(err.code)
    })
  }

  return (
    <div className="page-container" >
      <div className="forgot-password-container">
        <div className="left-section">
          <img src={Logo} alt="Forgot Password" />
        </div>
        <div className="right-section">
          <h2 style={{ fontWeight: "bold", color: '#23022E', alignItems: 'left' }}>Forgot your password?</h2>
          <div className="input-section">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input id='forgot-email' type="email" placeholder="Enter your email" />
              <button >Send Password Reset Link</button>
            </form>
          </div>
          <p>Check your spam folder to find the password reset link.</p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;