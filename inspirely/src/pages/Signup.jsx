import React from 'react';
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";



const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="./signup.png" alt="Signup Image" />
      </div>
      <div className="signup-content">
        <div className="head">
          <h1>Sign Up</h1>
          <p>Please fill in your information below</p>
        </div>
        <div className="name-boxes">
          <div className="name-box">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="name-box">
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="mobile-number">
          <AiFillMobile style={{fontSize:'40px', margin:'5px 20px'}}/>

          <input type="text" placeholder="Enter your Mobile number" />
        </div>
        <div className="email">
          <MdEmail style={{fontSize:'40px', margin:'5px 20px'}}/>
          <input type="email" placeholder="Enter your e-mail" />
        </div>
        <div className="password">
          <MdOutlinePassword style={{fontSize:'40px', margin:'5px 20px'}}/>
          <input type="password" placeholder="Enter password" />
        </div>
        <div className='exist-account-next'>
        <div className="exist-account">
          <p>Already have an account? </p>
          <a href="./Login"><p>Login to your account</p></a>
        </div>
        <a href="https://www.google.com">
          <button className="next">Next</button>
        </a>
        </div>
      </div>

    </div>
  );
};

export default SignUp;