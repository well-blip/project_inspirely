import React from 'react';
import '../signup-login.css';
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";



const Signup2 = () => {
    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src="./signup.png" alt="Signup Image" />
            </div>
            <div className="signup-content">
                <div className="head">
                    <h1>Sign Up</h1>
                    <p>How do you plan on using the platform?</p>
                </div>
                <div className='choices'>
                    <button className='choice-button'>Student</button>
                    <button className='choice-button'>Educator</button>
                </div>
            </div>
        </div>
    );
};
export default Signup2;