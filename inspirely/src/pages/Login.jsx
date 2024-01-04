import React from "react";
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";


const Login = () => {
  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="./signup.png" alt="Signup Image" />
      </div>
      <div className="signup-content">
        <div className="head">
          <h1>Log in</h1>
          <p>Please fill your information below</p>
        </div>
        <div className="email">
          <MdEmail style={{ fontSize: '40px', margin: '5px 20px' }} />
          <input type="email" placeholder="Enter your e-mail" />
        </div>
        <div className="password">
          <MdOutlinePassword style={{ fontSize: '40px', margin: '5px 20px' }} />
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="forgot-password">
          <a href="https://www.google.com" >Forgot Password or Username</a>
        </div>
        <div className="actions">
          <a href="https://www.google.com">
            <button className="next">Next</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
