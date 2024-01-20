import React from "react";
import { AiFillMobile } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import '../signup-login.css';

const SignUpContent = ({ onNextClick}) => {
    return (
        <div className="signup-content">
            <div className="head">
                <h1 className="heading1">Sign Up</h1>
                <p className="paragraph">Please fill in your information below</p>
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
                <AiFillMobile style={{ fontSize: '40px', margin: '5px 20px',color:"grey" }} />

                <input type="text" placeholder="Enter your Mobile number" />
            </div>
            <div className="email">
                <MdEmail style={{ fontSize: '40px', margin: '5px 20px' ,color:"grey"}} />
                <input type="email" placeholder="Enter your e-mail" />
            </div>
            <div className="password">
                <MdOutlinePassword style={{ fontSize: '40px', margin: '5px 20px',color:"grey" }} />
                <input type="password" placeholder="Enter password" />
            </div>
            <div className='exist-account-next'>
                <div className="exist-account">
                    <p>Already have an account? </p>
                    <a href="./Login"><p style={{ fontWeight:"bold",color:"blue"}}>Login to your account</p></a>
                </div>

                <button className="next" onClick={onNextClick}>   Next    <span style={{ marginLeft: '20px' }}> {'>'}</span></button>

            </div>
        </div>

    );
};

export default SignUpContent;