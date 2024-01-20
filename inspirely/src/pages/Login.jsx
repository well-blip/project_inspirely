import React from "react";
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import SignUpImage from '../components/signUpImage';

const Login = () => {
  return (
    <div className="signup-container">
      <SignUpImage/>
      <div className="signup-content">
        <div className="head">
          <h1 className="heading1">Log in</h1>
          <p className="paragraph">Please fill your information below</p>
        </div>
        <div className="email">
          <MdEmail style={{ fontSize: '40px', margin: '5px 20px',color:"grey"}} />
          <input type="email" placeholder="Enter your e-mail" />
        </div>
        <div className="password">
          <MdOutlinePassword style={{ fontSize: '40px', margin: '5px 20px',color:"grey" }} />
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="forgot-password">
          <a href="https://www.google.com" >Forgot Password or Username</a>
        </div>
        <div className="actions">
          <a href='./'>
            <button className="next-login">   Next    <span style={{marginLeft:'20px'}}> {'>'}</span></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
